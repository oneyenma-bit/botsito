const fs = require('fs');
const axios = require('axios');
const { imageToSticker, videoToSticker } = require('../media/stickers');

const sendImageAsSticker2 = async (sock, from, path, quoted, options = {}) => {
  let buff;
  if (Buffer.isBuffer(path)) {
    buff = path;
  } else if (typeof path === 'string' && /^https?:\/\//i.test(path)) {
    const res = await axios.get(path, { responseType: 'arraybuffer' });
    buff = Buffer.from(res.data);
  } else if (typeof path === 'string' && /^data:.*?\/.*?;base64,/i.test(path)) {
    buff = Buffer.from(path.split(',')[1], 'base64');
  } else if (typeof path === 'string' && fs.existsSync(path)) {
    buff = fs.readFileSync(path);
  } else {
    buff = Buffer.alloc(0);
  }

  const pack = options.packname || 'Thecowbots';
  const author = options.author || 'CowBot';
  const buffer = await imageToSticker(buff, pack, author);

  await sock.sendMessage(from, { sticker: buffer, ...options }, { quoted });
  return buffer;
};

const sendVideoAsSticker2 = async (sock, from, path, quoted, options = {}) => {
  let buff;
  if (Buffer.isBuffer(path)) {
    buff = path;
  } else if (typeof path === 'string' && /^https?:\/\//i.test(path)) {
    const res = await axios.get(path, { responseType: 'arraybuffer' });
    buff = Buffer.from(res.data);
  } else if (typeof path === 'string' && /^data:.*?\/.*?;base64,/i.test(path)) {
    buff = Buffer.from(path.split(',')[1], 'base64');
  } else if (typeof path === 'string' && fs.existsSync(path)) {
    buff = fs.readFileSync(path);
  } else {
    buff = Buffer.alloc(0);
  }

  const pack = options.packname || 'Thecowbots';
  const author = options.author || 'CowBot';
  const buffer = await videoToSticker(buff, pack, author);

  await sock.sendMessage(from, { sticker: buffer, ...options }, { quoted });
  return buffer;
};

module.exports = {
  sendVideoAsSticker2,
  sendImageAsSticker2
};
