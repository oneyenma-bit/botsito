const axios = require('axios');
const cheerio = require('cheerio');
const yts = require('yt-search');
const btch = require('btch-downloader');

/**
 * Descarga música (MP3) o video (MP4) de YouTube buscando por título o usando link directo
 */
async function downloadYoutube(query, isVideo = false) {
  let ytUrl = query;
  let videoInfo = null;

  // Si no es un link directo de YouTube, buscar en yt-search
  if (!query.includes('youtube.com') && !query.includes('youtu.be')) {
    const search = await yts(query);
    if (!search.videos || search.videos.length === 0) {
      throw new Error('No se encontraron resultados en YouTube para tu búsqueda.');
    }
    videoInfo = search.videos[0];
    ytUrl = videoInfo.url;
  }

  // Descargar con btch-downloader
  const dl = await btch.youtube(ytUrl);
  if (!dl) {
    throw new Error('No se pudo obtener el enlace de descarga de YouTube.');
  }

  return {
    title: dl.title || videoInfo?.title || 'YouTube Audio',
    channel: videoInfo?.author?.name || 'YouTube',
    duration: videoInfo?.timestamp || 'N/A',
    views: videoInfo?.views || 'N/A',
    thumb: videoInfo?.thumbnail || null,
    url: ytUrl,
    mp3: dl.mp3 || null,
    mp4: dl.mp4 || null,
    downloadUrl: isVideo ? (dl.mp4 || dl.mp3) : (dl.mp3 || dl.mp4)
  };
}

/**
 * Descarga video de TikTok sin marca de agua
 */
async function downloadTiktok(url) {
  // 1. Intentar con btch-downloader
  try {
    const data = await btch.ttdl(url);
    if (data && (data.video || data.play)) {
      return {
        title: data.title || 'TikTok Video',
        videoUrl: data.video || data.play,
        audioUrl: data.audio || null,
        author: data.author || 'TikTok User'
      };
    }
  } catch (e) {
    console.warn('btch ttdl falló, probando TikWM fallback:', e.message);
  }

  // 2. Fallback a TikWM API oficial
  const tikwmUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`;
  const res = await axios.get(tikwmUrl, { timeout: 10000 });
  if (res.data && res.data.code === 0 && res.data.data) {
    const d = res.data.data;
    return {
      title: d.title || 'TikTok Video',
      videoUrl: d.play || d.wmplay,
      audioUrl: d.music || null,
      author: d.author?.nickname || 'TikTok User'
    };
  }

  throw new Error('No se pudo descargar el video de TikTok.');
}

/**
 * Descarga video de Facebook (HD o SD)
 */
async function downloadFacebook(url) {
  const data = await btch.fbdown(url);
  if (data && (data.HD || data.Normal_video || data.sd || data.hd)) {
    return {
      videoUrl: data.HD || data.Normal_video || data.hd || data.sd,
      title: data.title || 'Facebook Video'
    };
  }
  throw new Error('No se pudo obtener el enlace del video de Facebook. Verifica que el video sea público.');
}

/**
 * Descarga reels, videos o imágenes de Instagram
 */
async function downloadInstagram(url) {
  const data = await btch.igdl(url);
  if (data) {
    let mediaUrl = null;
    let isVideo = true;

    if (Array.isArray(data)) {
      const item = data[0];
      mediaUrl = item?.url || item?.download_link;
    } else if (data.url) {
      mediaUrl = data.url;
    } else if (data.result && Array.isArray(data.result)) {
      mediaUrl = data.result[0]?.url;
    }

    if (mediaUrl) {
      if (mediaUrl.includes('.jpg') || mediaUrl.includes('.png') || mediaUrl.includes('.jpeg')) {
        isVideo = false;
      }
      return { mediaUrl, isVideo };
    }
  }
  throw new Error('No se pudo descargar el contenido de Instagram. Verifica que la cuenta o reel sea público.');
}

/**
 * Descarga videos de X / Twitter
 */
async function downloadTwitter(url) {
  const data = await btch.twitter(url);
  if (data) {
    const videoUrl = data.HD || data.SD || data.video || (Array.isArray(data) ? data[0]?.url : null);
    if (videoUrl) {
      return { videoUrl, title: data.desc || data.title || 'Twitter Video' };
    }
  }
  throw new Error('No se pudo descargar el video de Twitter / X.');
}

/**
 * Descarga archivos de Mediafire
 */
async function downloadMediafire(url) {
  // 1. Intentar con btch
  try {
    const data = await btch.mediafire(url);
    if (data && (data.link || data.url)) {
      return {
        url: data.link || data.url,
        filename: data.filename || data.title || 'archivo',
        size: data.filesize || data.size || 'N/A'
      };
    }
  } catch (e) {
    console.warn('btch mediafire falló, usando scraper cheerio:', e.message);
  }

  // 2. Fallback con cheerio scraper directo
  const res = await axios.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    },
    timeout: 10000
  });

  const $ = cheerio.load(res.data);
  const downloadUrl = $('#downloadButton').attr('href') || $('a#downloadButton').attr('href');
  if (!downloadUrl) throw new Error('No se encontró el botón de descarga en el link de MediaFire.');

  const filename = $('.dl-btn-label').attr('title') || $('div.filename').text().trim() || 'archivo';
  const size = $('#downloadButton').text().replace(/Download\s*\(|\)/gi, '').trim();

  return { url: downloadUrl, filename, size };
}

/**
 * Busca imágenes en Pinterest
 */
async function searchPinterest(query) {
  try {
    const res = await btch.pinterest(query);
    let results = [];
    if (Array.isArray(res)) results = res;
    else if (res?.result?.result?.result && Array.isArray(res.result.result.result)) {
      results = res.result.result.result;
    } else if (res?.result && Array.isArray(res.result)) {
      results = res.result;
    }

    if (results.length > 0) {
      // Elegir una imagen aleatoria entre las primeras encontradas
      const chosen = results[Math.floor(Math.random() * Math.min(results.length, 10))];
      const imgUrl = typeof chosen === 'string' ? chosen : (chosen.image_url || chosen.image || chosen.url || chosen.images_url);
      if (imgUrl) return imgUrl;
    }
  } catch (e) {
    console.warn('btch pinterest falló, usando fallback siputzx:', e.message);
  }

  // Fallback siputzx
  const fallback = await axios.get(`https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(query)}`, { timeout: 8000 });
  if (fallback.data && fallback.data.data && fallback.data.data.length > 0) {
    const list = fallback.data.data;
    const chosen = list[Math.floor(Math.random() * Math.min(list.length, 10))];
    return chosen.images_url || chosen.image || chosen;
  }

  throw new Error('No se encontraron imágenes en Pinterest.');
}

/**
 * Busca y descarga APKs de Aptoide
 */
async function searchAndDownloadApk(query) {
  const searchUrl = `https://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(query)}&limit=5`;
  const res = await axios.get(searchUrl, { timeout: 10000 });

  const list = res.data?.datalist?.list;
  if (!list || list.length === 0) {
    throw new Error(`No se encontró ninguna aplicación para: "${query}".`);
  }

  const app = list[0];
  const downloadUrl = app.file?.path;
  if (!downloadUrl) {
    throw new Error('La aplicación fue encontrada pero no tiene enlace de descarga disponible.');
  }

  const sizeMb = app.file?.filesize ? (app.file.filesize / (1024 * 1024)).toFixed(1) + ' MB' : 'N/A';

  return {
    name: app.name || query,
    package: app.package,
    version: app.file?.vername || '1.0',
    size: sizeMb,
    icon: app.icon,
    downloadUrl
  };
}

module.exports = {
  downloadYoutube,
  downloadTiktok,
  downloadFacebook,
  downloadInstagram,
  downloadTwitter,
  downloadMediafire,
  searchPinterest,
  searchAndDownloadApk
};
