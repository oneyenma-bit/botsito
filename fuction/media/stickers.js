const fs = require('fs');
const path = require('path');
const os = require('os');
const Crypto = require('crypto');
const ff = require('fluent-ffmpeg');
const webp = require('node-webpmux');

// Configurar ffmpeg estático
try {
  const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
  ff.setFfmpegPath(ffmpegInstaller.path);
} catch (e) {
  console.warn('Advertencia ffmpeg installer:', e.message);
}

/**
 * Añade metadatos Exif (packname y autor) a un buffer WebP
 */
async function addExif(webpBuffer, packname = 'Thecowbots', author = 'CowBot') {
  const tmpIn = path.join(os.tmpdir(), `exif_in_${Date.now()}_${Math.random().toString(36).substring(7)}.webp`);
  const tmpOut = path.join(os.tmpdir(), `exif_out_${Date.now()}_${Math.random().toString(36).substring(7)}.webp`);

  fs.writeFileSync(tmpIn, webpBuffer);

  try {
    const img = new webp.Image();
    await img.load(tmpIn);

    const json = {
      'sticker-pack-id': 'Thecowbots-Pack',
      'sticker-pack-name': packname || 'Thecowbots',
      'sticker-pack-publisher': author || 'CowBot',
      'emojis': ['🤖']
    };

    const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
    const jsonBuff = Buffer.from(JSON.stringify(json), 'utf-8');
    const exif = Buffer.concat([exifAttr, jsonBuff]);
    exif.writeUIntLE(jsonBuff.length, 14, 4);

    img.exif = exif;
    await img.save(tmpOut);

    return fs.readFileSync(tmpOut);
  } catch (e) {
    console.error('Error añadiendo Exif:', e.message);
    return webpBuffer; // Si falla exif, retorna el webp original
  } finally {
    try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch (e) {}
    try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch (e) {}
  }
}

/**
 * Convierte un buffer de imagen (JPG/PNG/etc) a un Sticker WebP de 512x512
 */
async function imageToSticker(imageBuffer, packname, author) {
  const tmpIn = path.join(os.tmpdir(), `img_${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`);
  const tmpOut = path.join(os.tmpdir(), `stk_${Date.now()}_${Math.random().toString(36).substring(7)}.webp`);

  fs.writeFileSync(tmpIn, imageBuffer);

  try {
    await new Promise((resolve, reject) => {
      ff(tmpIn)
        .outputOptions([
          '-vcodec libwebp',
          "-vf scale='min(512,iw)':min'(512,ih)':force_original_aspect_ratio=decrease,fps=15,pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse"
        ])
        .toFormat('webp')
        .on('end', resolve)
        .on('error', reject)
        .save(tmpOut);
    });

    const webpBuf = fs.readFileSync(tmpOut);
    return await addExif(webpBuf, packname, author);
  } finally {
    try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch (e) {}
    try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch (e) {}
  }
}

/**
 * Convierte un buffer de video o gif a un Sticker animado WebP
 */
async function videoToSticker(videoBuffer, packname, author) {
  const tmpIn = path.join(os.tmpdir(), `vid_${Date.now()}_${Math.random().toString(36).substring(7)}.mp4`);
  const tmpOut = path.join(os.tmpdir(), `stk_${Date.now()}_${Math.random().toString(36).substring(7)}.webp`);

  fs.writeFileSync(tmpIn, videoBuffer);

  try {
    await new Promise((resolve, reject) => {
      ff(tmpIn)
        .outputOptions([
          '-vcodec libwebp',
          "-vf scale='min(512,iw)':min'(512,ih)':force_original_aspect_ratio=decrease,fps=12,pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse",
          '-loop 0',
          '-ss 00:00:00',
          '-t 00:00:07',
          '-preset default',
          '-an',
          '-vsync 0'
        ])
        .toFormat('webp')
        .on('end', resolve)
        .on('error', reject)
        .save(tmpOut);
    });

    const webpBuf = fs.readFileSync(tmpOut);
    return await addExif(webpBuf, packname, author);
  } finally {
    try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch (e) {}
    try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch (e) {}
  }
}

/**
 * Convierte un Sticker WebP a Imagen PNG (para #toimg)
 */
async function stickerToImage(webpBuffer) {
  const tmpIn = path.join(os.tmpdir(), `toimg_in_${Date.now()}_${Math.random().toString(36).substring(7)}.webp`);
  const tmpOut = path.join(os.tmpdir(), `toimg_out_${Date.now()}_${Math.random().toString(36).substring(7)}.png`);

  fs.writeFileSync(tmpIn, webpBuffer);

  try {
    await new Promise((resolve, reject) => {
      ff(tmpIn)
        .outputOptions('-vframes 1')
        .on('end', resolve)
        .on('error', reject)
        .save(tmpOut);
    });

    return fs.readFileSync(tmpOut);
  } finally {
    try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch (e) {}
    try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch (e) {}
  }
}

/**
 * Convierte un Sticker animado WebP a Video MP4 (para #tovideo)
 */
async function stickerToVideo(webpBuffer) {
  const tmpIn = path.join(os.tmpdir(), `tovid_in_${Date.now()}_${Math.random().toString(36).substring(7)}.webp`);
  const tmpOut = path.join(os.tmpdir(), `tovid_out_${Date.now()}_${Math.random().toString(36).substring(7)}.mp4`);

  fs.writeFileSync(tmpIn, webpBuffer);

  try {
    await new Promise((resolve, reject) => {
      ff(tmpIn)
        .outputOptions([
          '-movflags faststart',
          '-pix_fmt yuv420p',
          '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2'
        ])
        .toFormat('mp4')
        .on('end', resolve)
        .on('error', reject)
        .save(tmpOut);
    });

    return fs.readFileSync(tmpOut);
  } finally {
    try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch (e) {}
    try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch (e) {}
  }
}

module.exports = {
  imageToSticker,
  videoToSticker,
  stickerToImage,
  stickerToVideo,
  addExif
};

