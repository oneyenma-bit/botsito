const axios = require('axios');
const ff = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');
const os = require('os');
const Crypto = require('crypto');

// Configurar ffmpeg estático
try {
  const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
  ff.setFfmpegPath(ffmpegInstaller.path);
} catch (e) {
  console.warn('Advertencia ffmpeg installer:', e.message);
}

// Caché en memoria para MP4s de reacciones (URL del GIF -> Buffer MP4)
const reactionCache = new Map();

/**
 * Convierte un buffer o URL de GIF a un buffer MP4 optimizado para WhatsApp con gifPlayback: true
 */
async function gifToMp4(gifInput) {
  let gifBuffer;
  if (typeof gifInput === 'string' && gifInput.startsWith('http')) {
    if (reactionCache.has(gifInput)) {
      return reactionCache.get(gifInput);
    }
    const res = await axios.get(gifInput, {
      responseType: 'arraybuffer',
      headers: { 'User-Agent': 'Thecowbots/1.0' },
      timeout: 10000
    });
    gifBuffer = Buffer.from(res.data);
  } else {
    gifBuffer = gifInput;
  }

  const hash = Crypto.createHash('md5').update(gifBuffer.slice(0, 1000)).digest('hex');
  if (reactionCache.has(hash)) {
    return reactionCache.get(hash);
  }

  const tmpIn = path.join(os.tmpdir(), `gif_${Date.now()}_${Math.random().toString(36).substring(7)}.gif`);
  const tmpOut = path.join(os.tmpdir(), `mp4_${Date.now()}_${Math.random().toString(36).substring(7)}.mp4`);

  fs.writeFileSync(tmpIn, gifBuffer);

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

    const mp4Buffer = fs.readFileSync(tmpOut);
    if (typeof gifInput === 'string' && gifInput.startsWith('http')) {
      reactionCache.set(gifInput, mp4Buffer);
    }
    reactionCache.set(hash, mp4Buffer);
    return mp4Buffer;
  } finally {
    try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch (e) {}
    try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch (e) {}
  }
}

/**
 * Obtiene el GIF de nekos.best para un endpoint y lo convierte a MP4 listo para WhatsApp
 */
async function getReactionMp4(endpoint) {
  const url = `https://nekos.best/api/v2/${endpoint}`;
  const res = await axios.get(url, {
    headers: { 'User-Agent': 'Thecowbots/1.0' },
    timeout: 8000
  });

  if (!res.data || !res.data.results || res.data.results.length === 0) {
    throw new Error('No se encontró GIF para esta reacción.');
  }

  const gifUrl = res.data.results[0].url;
  const mp4Buffer = await gifToMp4(gifUrl);
  return { mp4Buffer, gifUrl };
}

module.exports = {
  gifToMp4,
  getReactionMp4
};

