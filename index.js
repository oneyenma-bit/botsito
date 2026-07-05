//Base 100% Editable creditos a Naufrabot 

//Página oficial naufrabot.com

//Sígueme en todas mis redes para estar informados con las novedades de la base 

//Modulos
const { default: makeWASocket,
  DisconnectReason, JulsBotIncConnect, getAggregateVotesInPollMessage, delay, makeCacheableSignalKeyStore, useMultiFileAuthState,
 fetchLatestBaileysVersion, 
 generateForwardMessageContent,
 prepareWAMessageMedia, 
 generateWAMessageFromContent, 
 generateMessageID,
  downloadContentFromMessage, 
  jidDecode,
   proto } = require("@whiskeysockets/baileys")
const fs = require('fs')
const { Boom } = require('@hapi/boom')
const NodeCache = require("node-cache")
const readline = require("readline")
const PhoneNumber = require('awesome-phonenumber')
const cfonts = require('cfonts');
const fetch = require('node-fetch')
const pino = require('pino')
const util = require("util")
const speed = require("performance-now");
const mimetype = require('mime-types')
const { exec, spawn, execSync } = require("child_process")
let phoneNumber = "59162085141"; // cambiar número
const axios = require("axios")
 const ffmpeg = require('fluent-ffmpeg')
 
 //color
const chalk = require('chalk')
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };
 
 //baner
const banner = cfonts.render("Cow| Bot| Base", {
  font: 'pallet',
  align: 'center',
  gradient: ["green","blue"]
})
      // FUNCIONES DESCARGA 
const { fetchJson , getBuffer ,fetchBuffer } = require('./fuction/download/gets.js')


const {getExtension, getRandom } =require('./fuction/settings/fuctions.js')

 //Stickers
const { sendVideoAsSticker, sendImageAsSticker } = require('./fuction/sticker/rename.js');
const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./fuction/sticker/rename2.js');
 
 //Grupos js
const { MoneyOfSender, addkoin, delkoin, AddReg, checkOfReg , addLevel, addXp,levelOfsender , xpOfsender ,checkOfRegM ,addkoinM , delkoinM , MoneyOfM,Rxp, addRxp ,addRep , delRep , repUser  } = require('./settings/Grupo/Js/reg.js')
     
           // GAMES
const  { addClaim , checkClaim , timeClaim ,expiredClaim } = require('./Games/Js/claim.js')
const { checkCasino,checkAttp,checkEmoji,checkEve, addClaimTraga, checkClaimTraga, timeClaimTraga, checkRuleta,checkMinar,addCasino,addAttp,addEmoji,addEve,addRuleta ,addMinar,expiredCasino,expiredMinar,expiredAttp,expiredEmoji,expiredEve,expiredRuleta,timeAttp,timeEmoji,timeEve,timeRuleta,timeMinar,timeCasino,expiredDayli,JsonDayli,addDayli,timeDayli,checkDayli,checkPescar,timePescar,addPescar,expiredPescar}
 = require('./Games/Js/mining.js')

      
    // Menu bot js
const Menu = require ('./settings/Bot/Js/menu.js')

 //configurar ggrupos
const welkom = JSON.parse(fs.readFileSync('./settings/Grupo/Json/welkom.json')) 
const antilink = JSON.parse(fs.readFileSync('./settings/Grupo/Json/antilink.json'))
const bngp = JSON.parse(fs.readFileSync('./settings/Grupo/Json/grupo.json'))
const Antipv = JSON.parse(fs.readFileSync('./settings/Grupo/Json/chat.json'))
const registro = JSON.parse(fs.readFileSync('./settings/Grupo/Json/registros.json')) 
const Exportion = JSON.parse(fs.readFileSync('./Games/Json/exportion.json'))
const Exportion1 = JSON.parse(fs.readFileSync('./Games/Json/exportion1.json'))
const Cuestions = JSON.parse(fs.readFileSync('./Games/Json/cuestions.json'))
let warnsDB = JSON.parse(fs.readFileSync('./settings/Grupo/Json/warns.json'))
let economyDB = JSON.parse(fs.readFileSync('./settings/Grupo/Json/economy.json'))
let ecoToggle = JSON.parse(fs.readFileSync('./settings/Grupo/Json/economia.json'))
let charactersDB = JSON.parse(fs.readFileSync('./settings/Grupo/Json/characters.json'))
let gachaDB = JSON.parse(fs.readFileSync('./settings/Grupo/Json/gacha.json'))
let modoEstrictoDB = JSON.parse(fs.readFileSync('./settings/Grupo/Json/modoestricto.json'))
let gachaDrops = {};
let stickerTracker = {};

// --- FUNCIONES DE GACHA ---
const saveGacha = () => fs.writeFileSync('./settings/Grupo/Json/gacha.json', JSON.stringify(gachaDB, null, 2));
const getUserGacha = (jid) => {
    if (!gachaDB[jid]) {
        gachaDB[jid] = { lastRoll: 0, characters: [] };
    }
    return gachaDB[jid];
};
              
   
// --- FUNCIONES DE ECONOMIA ---
const saveEconomy = () => fs.writeFileSync('./settings/Grupo/Json/economy.json', JSON.stringify(economyDB, null, 2));

const getUserEco = (jid) => {
    if (!economyDB[jid]) {
        economyDB[jid] = {
            wallet: 0,
            bank: 0,
            lastDaily: 0,
            lastWork: 0,
            lastCrime: 0,
            lastSlut: 0
        };
    }
    return economyDB[jid];
};

const formatEco = (num) => `*${num.toLocaleString()}* minecoins ⛏️`;
// ------------------------------

// 𝚃𝙸𝙼𝙴
const moment = require("moment-timezone") 
const time = moment.tz('America/Lima').format('DD/MM HH:mm:ss')
const horap = moment().format('HH')
var timeFt ='𝘽𝙪𝙚𝙣𝙖𝙨 🙋'
if (horap >= '01' && horap <= '05') {
  timeFt = '𝘽𝙪𝙚𝙣𝙤𝙨 𝙙𝙞𝙖𝙨 ✨'
} else if (horap >= '05' && horap <= '12') {
  timeFt = '𝘽𝙪𝙚𝙣𝙤𝙨 𝙙𝙞𝙖𝙨 ☀️'
} else if (horap >= '12' && horap <= '18') {
  timeFt = '𝘽𝙪𝙚𝙣𝙖𝙨 𝙩𝙖𝙧𝙙𝙚𝙨 ⛅'
} else if (horap >= '18' && horap <= '23') {
  timeFt = '𝙗𝙪𝙚𝙣𝙖𝙨 𝙣𝙤𝙘𝙝𝙚𝙨 🌑'
} 



 //Configuraciones 
var { creador, owner, Bot, prefijo, JpgBot, NAUFRA_KEY } = require("./settings/settings.json");        
let prefixo = prefijo;

const APINAUFRA = 'https://api.naufrabot.com'



const pairingCode = true;

const useMobile = process.argv.includes("--mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}
const groupCache = new Map();
async function startProo() {
  console.clear();
  console.log(banner.string);
  console.log(chalk.cyanBright("🔥 CowBot Base"));

  // Estado de sesión
  const { state, saveCreds } = await useMultiFileAuthState("./session");
  const { version, isLatest } = await fetchLatestBaileysVersion();
  const msgRetryCounterCache = new NodeCache();

  // Crear socket
  const sock = makeWASocket({
    version,
    logger: pino({ level: "silent" }),
    printQRInTerminal: false, // Desactivado para no mostrar QR
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }))
    },
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    msgRetryCounterCache,
    syncFullHistory: false,
  });

  // 🟢 Si no hay sesión registrada, generar el código de vinculación de 8 dígitos
  if (!sock.authState.creds.registered) {
    let number = await question(
      chalk.cyan("📱 Escribe tu número de WhatsApp con código de país (solo números): ")
    );
    rl.close();
    number = number.replace(/[^0-9]/g, "");

    if (!number) {
      console.log(chalk.red("❌ Número inválido."));
      process.exit(1);
    }

    console.log(chalk.yellow("⌛ Solicitando código de vinculación..."));
    try {
      const code = await sock.requestPairingCode(number);
      console.log(chalk.bgGreen.black("✅ CÓDIGO DE VINCULACIÓN:"), chalk.white(code));
    } catch (err) {
      console.error(chalk.red("❌ Error al generar código de vinculación:"), err.message);
      process.exit(1);
    }
  }

  // 🔄 Monitorear el estado de conexión
  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      if (reason === DisconnectReason.loggedOut) {
        console.log(chalk.red("❌ Sesión cerrada. Borra la carpeta 'session' y vuelve a emparejar."));
      } else {
        console.log(chalk.yellow("⚠️ Conexión cerrada, reconectando..."));
        startProo();
      }
    } else if (connection === "open") {
      console.log(chalk.greenBright("✅ Conectado exitosamente"));
      exec("rm -rf tmp && mkdir tmp");
    }
  });

  // Guardar credenciales cuando se actualicen
  sock.ev.on("creds.update", saveCreds);



    
               // 𝙲𝙾𝙽𝙴𝚇𝙸𝙾𝙽 
        // 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝚈 𝙳𝙴𝚂𝙿𝙴𝙳𝙸𝙳𝙰 
sock.ev.on("group-participants.update", async (anu) => {
    console.log("EVENTO RECIBIDO:");
    console.log(JSON.stringify(anu, null, 2));
if(!welkom.includes(anu.id)) return
try {
const metadata = await sock.groupMetadata(anu.id)
  participants = anu.participants
  for (let num of participants){
 
if(anu.action == 'add') {
const grup = metadata.subject
const participante = anu.participants[0]
const num = participante.phoneNumber || participante.id
const mem = metadata.participants.length
const descr = metadata.desc
const customWelcomesFile = './settings/Grupo/Json/custom_welcomes.json';
let customWelcomes = {};
if (fs.existsSync(customWelcomesFile)) {
    customWelcomes = JSON.parse(fs.readFileSync(customWelcomesFile));
}
const sol = customWelcomes[anu.id] ? customWelcomes[anu.id].replace(/\{user\}/g, `@${num.split('@')[0]}`).replace(/\{group\}/g, grup).replace(/\{members\}/g, mem) : `╭ ₊˚ ✧ 🐄 ✧ ˚₊ ╮
❀ ¡Bienvenido/a a la Comunidad Cacao!
✰ @${num.split('@')[0]}

¡Te damos la bienvenida a la base *Cowsmall* (*${grup}*)! 
Aquí tienes las reglas para no irte a patadas:

1️⃣ *No spam:* Simplemente no mandes la misma cosa tantas veces.
2️⃣ *No contenido vulgar/NSFW:* Hay niños aquí, mantengamos el respeto.
3️⃣ *No gore:* No estamos en la deep web y no somos psicópatas.
4️⃣ *No peleas:* Esto es para despatar estafadores, no un kinder.
5️⃣ *Solo español:* Estamos en Latinoamérica, ¡hablemos en nuestro idioma!
6️⃣ *Cero política:* Nada de debates políticos o referencias.

⚠️ El que rompa las reglas se va más rápido que estafador borrando comentarios. 
¡Pónganse listos para la Funa, inútiles! 🐄🔥

『 👥 Miembros actuales: ${mem} 』
╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`;

await sock.sendMessage(anu.id, {
  image: { url: "https://i.postimg.cc/wMhQtFwD/imagen-de-bienvenida.jpg" },
  caption: sol,
  mentions: [num]  // 👈 Aquí haces la mención real
})
}

if (anu.action === 'remove') {
const grup = metadata.subject
const participante = anu.participants[0]
const num = participante.phoneNumber || participante.id
const mem = metadata.participants.length

const sol = `
✦━─⌬༓༒༓⌬─━✦
*✧༺ 𝑫𝒆𝒔𝒑𝒆𝒅𝒊𝒅𝒂 ༻✧*

😢 「 @${num.split('@')[0]} ha abandonado *${grup}* 」

🌸 Esperamos que hayas disfrutado tu estancia.
✨ ¡Las puertas siempre estarán abiertas para ti!

『 👥 Miembros actuales: ${mem} 』
✦━─⌬༓༒༓⌬─━✦
`

await sock.sendMessage(anu.id, {
  image: { url: "https://i.postimg.cc/ncG1pRjD/imagen-de-despedida.jpg" },
  caption: sol,
  mentions: [num]
})
}
if (anu.action == 'promote') {
    num = anu.participants[0]    
    teks = `
✦━─┈༓༒༓┈─━✦

     *✧༺ 𝓝𝓾𝓮𝓿𝓸 𝓐𝓭𝓶𝓲𝓷 ༻✧*

🪪 𝗡𝗼𝗺𝗯𝗿𝗲: @${num.split('@')[0]}
🌐 𝗚𝗿𝘂𝗽𝗼: ${metadata.subject}
💌 「 ¡Enhorabuena! 🎉 Has ascendido a la mesa de los administradores 🪄 」

✦━─┈༓༒༓┈─━✦
`
  await sock.sendMessage(anu.id,{image : { url : "https://i.postimg.cc/ncG1pRjD/imagen-de-despedida.jpg" }, caption : teks})
    }

} 
}catch(e) {
console.log('Error: %s', color(e, "red"))
}
})

sock.ev.on('creds.update', saveCreds)
sock.ev.on("messages.upsert",  () => { })

sock.ev.on('messages.upsert', async m => {
 try {
 const info = m.messages[0]
 if (!info.message) return 
 if (info.key && info.key.remoteJid == "status@broadcast") return
 const altpdf = Object.keys(info.message)
 const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
 var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

const numerodono = [
  `${owner}`,
  "183786683805814@lid"
];


const verificarN = async(sla) => {
const [result] = await sock.onWhatsApp(sla)
if(result == undefined) {
enviar("Este usuário no existe en WhatsApp")
} else {
enviar(`${sla} Número existente en WhatsApp con  id: ${result.jid}`)
}
}
    
// Constantes is
 const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant: from
let groupMetadata = null;

if (isGroup) {
    groupMetadata = groupCache.get(from);

    if (!groupMetadata) {
        groupMetadata = await sock.groupMetadata(from).catch(() => null);
        if (groupMetadata) groupCache.set(from, groupMetadata);
    }
}

const groupName = groupMetadata?.subject || '';
const groupDesc = groupMetadata?.desc || '';
const groupMembers = groupMetadata?.participants || [];
const nome = info.pushName ? info.pushName : ''
const groupAdmins = groupMembers.filter(p => p.admin);
const Sadm = isGroup ? getGroupAdmins(groupAdmins) :''
const isCmd = body.startsWith(prefixo)
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = isCmd
  ? body.slice(prefixo.length).trim().split(/ +/).slice(1)
  : [];
const q = args.join(' ')
const text = args.join(' ')

  // MULTIPREFIJO 
const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const comando = isCmd
  ? removeAccents(
      body.slice(prefixo.length).trim().split(/ +/)[0].toLowerCase()
    )
  : "";
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sock.sendMessage(from, {text: teks.trim(), mentions: memberr}).catch(e => console.log('Error en mentions:', e.message)) : sock.sendMessage(from, {text: teks.trim(), mentions: memberr}).catch(e => console.log('Error en mentions:', e.message))}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).Mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const pushname = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false
const senderNumber = sender.split("@")[0]
const BotNumber = sock.user.id.split(':')[0]+'@s.whatsapp.net'
const isOwner =  numerodono.some(don => don.split('@')[0] === sender.split('@')[0].split(':')[0])


const isGroupAdmins = isOwner || groupAdmins.some(admin => admin.id?.split('@')[0] === sender.split('@')[0].split(':')[0]);
const isBotGroupAdmins = esAdminFlexible(sock, groupAdmins.map(p => p.id));

function esAdminFlexible(sock, listaDeAdmins = []) {
  if (!sock?.authState?.creds?.me) return false;

  const botId = sock.authState.creds.me.id;   // ej: 51916525000:26@lid
  const botLid = sock.authState.creds.me.lid; // ej: 51916525000@lid

  const clean = (jid) => jid?.split(':')[0]; // elimina el ":26" si existe

  return listaDeAdmins.some(adminJid => {
    const adminBase = clean(adminJid);
    return (
      adminJid === botId ||
      adminJid === botLid ||
      adminJid === botId.replace(/:\d+/, '') || // compara sin ":xx"
      adminJid === botLid.replace(/:\d+/, '') ||
      adminBase === clean(botId) ||
      adminBase === clean(botLid)
    );
  });
}

const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const options = { timeZone: 'America/Lima', hour12: false }
const data = new Date().toLocaleDateString('PE', { ...options, day: '2-digit', month: '2-digit', year: '2-digit' })
const hora = new Date().toLocaleTimeString('PE', options) 

           // Constantes if nuevas
  const iswelkom = isGroup ? welkom.includes(from) : false
const isBanGp = isGroup ? bngp.includes(from) : false
const isAntipv = Antipv.includes('activo')
const isReg = checkOfReg(sender)
 const isAntiLink = isGroup ? antilink.includes(from) : false 
 const isModoEstricto = isGroup ? modoEstrictoDB.includes(from) : false
const coins = MoneyOfSender(sender)
 
 // 🟢 Sistema de encendido/apagado global del bot

const estadoPath = './settings/estadoBot.json'


if (!fs.existsSync(estadoPath)) {
  fs.writeFileSync(estadoPath, JSON.stringify({ activo: true }, null, 2))
}
let botActivo = JSON.parse(fs.readFileSync(estadoPath)).activo
function guardarEstadoBot(estado) {
  fs.writeFileSync(estadoPath, JSON.stringify({ activo: estado }, null, 2))
  botActivo = estado
}

//

//MODO ADMIN 

const modoAdminPath = './settings/Grupo/Json/modo_admin.json';
const modoAdminList = fs.existsSync(modoAdminPath) ? JSON.parse(fs.readFileSync(modoAdminPath)) : [];
const isModoAdmin = isGroup ? modoAdminList.includes(from) : false;



 //Funciones nuevas
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
} 
function DLT_FL(file) {
        try {
            fs.unlinkSync(file);
        } catch (error) {
            return;
        }
    }
    
 const enviar = (texto) => {
 sock.sendMessage(from,{ text : texto }, {quoted : info})
 }
 
 //rangos
const rangos = JSON.parse(fs.readFileSync('./settings/rangos.json'))
const YouN = levelOfsender(sender)
const Mlevel = rangos[YouN] || '🎖️𝐒𝐢𝐧 𝐑𝐚𝐧𝐠𝐨🎖️'

 
 

 
 const Rrxp = Rxp(sender)
 const Crxp = xpOfsender(sender)
 var Mrxp ;
 if(Crxp <= Rrxp + 50){
 var Mrxp = '*▒▒▒▒▒▒▒▒▒▒ 0%*'
 }else if(Crxp <= Rrxp + 100){
 var Mrxp = '*█▒▒▒▒▒▒▒▒▒ 10%*'
 }else if(Crxp <= Rrxp + 200){
 var Mrxp = '*██▒▒▒▒▒▒▒▒ 20%*'
 }else if(Crxp <= Rrxp + 300){
 var Mrxp = '*███▒▒▒▒▒▒▒ 30%*'
 } else if(Crxp <= Rrxp + 400){
 var Mrxp = '*████▒▒▒▒▒▒ 40%*'
 }else if(Crxp <= Rrxp + 500){
 var Mrxp = '*█████▒▒▒▒▒ 50%*'
 }else if(Crxp <= Rrxp + 600){
 var Mrxp = '*██████▒▒▒▒ 60%*'
 }else if(Crxp <= Rrxp + 700){
 var Mrxp = '*███████▒▒▒ 70%*'
 }else if(Crxp <= Rrxp + 800){
 var Mrxp = '*████████▒▒ 80%*'
 }else if(Crxp <= Rrxp + 999){
 var Mrxp = '*█████████▒ 90%*'
 } else if(Crxp >= Rrxp + 1000){
 var Mrxp = '*██████████ 100%*'
 }
 
             // 𝙽iveles
 // Constantes if
 const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")


const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}



//funcion para mencionar 

const obtenerMencionado = (info) => {
    const context = info.message?.extendedTextMessage?.contextInfo
        || info.message?.contextInfo
        || null;

    if (context?.mentionedJid && context.mentionedJid.length > 0) {
        return context.mentionedJid[0];
    }

    if (context?.participant) {
        return context.participant;
    }

    return null;
};

     //  Time
const runtime = function(seconds) {
    seconds = Number(seconds);
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60); // Utilizando Math.floor() para asegurar que los segundos sean enteros
    const parts = [];    
    if (days > 0) {
        parts.push(days + (days === 1 ? " 𝙳𝙸𝙰" : " 𝙳𝙸𝙰𝚂"));
    }
    if (hours > 0) {
        parts.push(hours + (hours === 1 ? " 𝙷𝙾𝚁𝙰" : " 𝙷𝙾𝚁𝙰𝚂"));
    }
    if (minutes > 0) {
        parts.push(minutes + (minutes === 1 ? "  𝙼𝙸𝙽𝚄𝚃𝙾" : " 𝙼𝙸𝙽𝚄𝚃𝙾𝚂"));
    }
   if (remainingSeconds > 0) {
    parts.push(remainingSeconds + (remainingSeconds === 1 ? " 𝚂𝙴𝙶𝚄𝙽𝙳𝙾" : " 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂"));
    }    
    return parts.join(', ');
}

  // Respuesta
     const respuesta = {
  admin: "『 🚫 𝒏𝒐 𝒆𝒓𝒆𝒔 𝒖𝒏 𝒂𝒅𝒎𝒊𝒏 』",
  botadmin: "『 ⚠️ 𝒆𝒍 𝒃𝒐𝒕 𝒅𝒆𝒃𝒆 𝒕𝒆𝒏𝒆𝒓 𝒑𝒆𝒓𝒎𝒊𝒔𝒐 𝒅𝒆 𝒂𝒅𝒎𝒊𝒏 』",
  grupos: "『 💬 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆 𝒔𝒐𝒍𝒐 𝒆𝒏 𝒈𝒓𝒖𝒑𝒐𝒔 』",
  vacio: "『 ❓ 𝒆𝒔𝒄𝒓𝒊𝒃𝒆 𝒂𝒍𝒈𝒐, 𝒏𝒐 𝒑𝒖𝒆𝒅𝒐 𝒂𝒅𝒊𝒗𝒊𝒏𝒂𝒓 』",
  miowner: "『 ⛔ 𝒏𝒐 𝒆𝒓𝒆𝒔 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 』",

  registro: `
╔════◇◆◇════╗
💬 ❝ 𝑷𝒓𝒊𝒎𝒆𝒓𝒐 𝒅𝒆𝒃𝒆𝒔 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒓𝒕𝒆 🤔 ¡𝑬𝒔 𝒇𝒂𝒄𝒊𝒍! 😄 ❞
💬 ❝ 𝑬𝒔𝒄𝒓𝒊𝒃𝒆:  .𝒓𝒆𝒈 ❞
╚════◇◆◇════╝
`,

  yaregistro: `
╔══════◇◆◇══════╗
💬 ❝ 𝑳𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒐, 𝒚𝒂 𝒆𝒔𝒕𝒂́𝒔 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐 🗒 ❞
╚══════◇◆◇══════╝
`,

  coins: `『 💰 ᴄᴏɪɴs ɪɴsᴜғɪᴄɪᴇɴᴛᴇs @${sender.split('@')[0]} 』`
}

 
   // Verificados
 const SvnC = {key : {participant : '0@s.whatsapp.net'},message : {contactMessage : {displayName : `${pushname}`}}};
 
  // Funciones para crear códigos de 6 Digitos
  
  function generarCodigo() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';
    for (let i = 0; i < 6; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres.charAt(indice);
    }
    return codigo;
}


 // MENSAJES EN CONSOLA
 
// comando pv
if (!isGroup && isCmd) console.log( '\n  ╔─━━━━ ', color(' 𝗖𝗠𝗗 「 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 」','blue'), '━━━━─╗','\n',
color(' GRUPO :','lime'),color(groupName,'cyan'),'\n',
color(' NOMBRE :','lime'),color(pushname,'cyan'),'\n',
color(' COMANDO :','lime'),color(comando,'cyan'),'\n',
color(' HORA :','lime'),color(hora,'cyan'),'\n',
color(' DATOS :','lime'),color(data,'cyan'),'\n',color(' ╚─━━━━━━ '),color ('𝗘𝗹𝗶𝘀𝘃𝗮𝗻 | 𝗥𝘆𝘂𝗸','red'), '━━━━━─╝')

//pv
if (!isCmd && !isGroup) console.log( '\n  ╔─━━━━━', color(' 𝗖𝗛𝗔𝗧 「 𝗕𝗢𝗧 」','blue'), '━━━━━─╗','\n',
color(' GRUPO :','lime'),color(groupName,'cyan'),'\n',
color(' NOMBRE :','lime'),color(pushname,'cyan'),'\n',
color(' MENSAJE :','lime'),color(budy,'cyan'),'\n',
color(' HORA :','lime'),color(hora,'cyan'),'\n',
color(' DATOS :','lime'),color(data,'cyan'),'\n',color(' ╚─━━━━━━━━ '),color ('【✔】 ','red'), '━━━━━━━━━─╝')

//comando grupo
if (isCmd && isGroup) console.log( '\n  ╔─━━━ ', color('  𝗖𝗠𝗗「 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 」','blue'), '━━━─╗','\n',
color(' GRUPO :','lime'),color(groupName,'cyan'),'\n',
color(' NOMBRE :','lime'),color(pushname,'cyan'),'\n',
color(' COMANDO :','lime'),color(comando,'cyan'),'\n',
color(' HORA :','lime'),color(hora,'cyan'),'\n',
color(' DATOS :','lime'),color(data,'cyan'),'\n',color(' ╚─━━━━━━ '),color ('𝗘𝗹𝗶𝘀𝘃𝗮𝗻 | 𝗥𝘆𝘂𝗸','red'), '━━━━━─╝')

//mensaje grupo
if (!isCmd && isGroup) console.log( '\n  ╔─━━━━━', color(' 𝗖𝗛𝗔𝗧「 𝗕𝗢𝗧 」','blue'), '━━━━━─╗','\n',
color(' GRUPO :','lime'),color(groupName,'cyan'),'\n',
color(' NOMBRE :','lime'),color(pushname,'cyan'),'\n',
color(' MENSAJE :','lime'),color(budy,'cyan'),'\n',
color(' HORA :','lime'),color(hora,'cyan'),'\n',
color(' DATOS :','lime'),color(data,'cyan'),'\n',color(' ╚─━━━━━━━━━ '),color ('【✔】 ','red'), '━━━━━━━━━─╝')
   
  
   expiredClaim();
 expiredMinar()
expiredAttp()
expiredEmoji()
expiredEve()
expiredDayli()
expiredPescar()
expiredRuleta()
//ban grupo
if(isBanGp) {
return
}
      // antiprivado
if(isAntipv && !isGroup && !isOwner){
sock.updateBlockStatus(sender, 'block')
}
if (!isCmd) return;

// INICIO DE COMANDOS
//solo funciona si está activado el bot
// Si el grupo está en modo admin y el usuario no es admin ni owner, se bloquea su acceso
if (isModoAdmin && !isGroupAdmins && !isOwner) return;
if (!botActivo && !isOwner) return

switch(comando) {


case 'prueba':
enviar(`Este es un comando de prueba 🌟🌟

......`);
break

case 'comando2':
enviar(`🧩Este es un comando nuevo`);
break
//Comandos owner


  

  
  
  case 'menu':
case 'help': {
    if (!isGroup) return;
    if (!isReg) return enviar(respuesta.registro);

    const Mnu = Menu(timeFt, Bot, prefixo, sender, groupName, groupMembers);

    // Enviar imagen del menú completa
    await sock.sendMessage(from, {
        image: { url: JpgBot },
        caption: Mnu,
        mentions: [sender]
    }, { quoted: info });
}
break;

case 'boton': 
case 'botonon':
case 'encenderbot':
  if (!isOwner) return enviar(respuesta.miowner)
  if (botActivo) return enviar('✅ El bot ya está encendido.')
  guardarEstadoBot(true)
  enviar('🤖 El bot ha sido *ACTIVADO* y volverá a responder a los comandos.')
break

case 'botoff':
case 'apagabot':
case 'offbot':
  if (!isOwner) return enviar(respuesta.miowner)
  if (!botActivo) return enviar('⚠️ El bot ya estaba apagado.')
  guardarEstadoBot(false)
  enviar('😴 El bot ha sido *DESACTIVADO* y dejará de responder a los comandos.')
break

case 'setprefix':
case 'setprefijo': {
if (!isOwner) return enviar(respuesta.miowner)

if (!q) {
return enviar(`✏️ Escribe un nuevo prefijo.

Ejemplo:
${prefixo}setprefix !

📌 Prefijo actual: ${prefixo}`)
}

try {
const nuevoPrefijo = q.trim()

if (nuevoPrefijo.length > 3) {
return enviar("❌ El prefijo no puede tener más de 3 caracteres.")
}

const settingsPath = "./settings/settings.json"
const settings = JSON.parse(fs.readFileSync(settingsPath))

settings.prefijo = nuevoPrefijo

fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2))

// Cambiar el prefijo en memoria (sin reiniciar)
prefixo = nuevoPrefijo

enviar(`✅ Prefijo cambiado correctamente.

🔹 Nuevo prefijo: *${prefixo}*

🚀 Ya puedes usar el nuevo prefijo.`)

} catch (e) {
console.log(e)
enviar("❌ Error al cambiar el prefijo.")
}
}
break


case 'antiprivado':
case 'antipv':{
if(!isOwner) return enviar(respuesta.miowner)
if(args[0]=== 'on' ){
if(isAntipv) return enviar('El anti-privado ya esta activo')
Antipv.push('activo')
fs.writeFileSync('./settings/Json/chat.json' , JSON.stringify(Antipv))
enviar('Anti-privado activado exitosamente')
} else if(args[0] === 'off'){
if(!isAntipv) return enviar('El anti-privado ya estaba desactivado')
Antipv.splice('desactivo')
fs.writeFileSync('./settings/Json/chat.json' , JSON.stringify(Antipv))
enviar('Anti-privado desactivado exitosamente')
} else {
enviar('on para activar y off para desactivar')
}
}
break 



case 'rvisu': case 'revelarvisu':
    if(!isOwner) return enviar(respuesta.miowner)
    enviar('🥱')
    try{    
        if(JSON.stringify(info).includes("videoMessage")) {
            var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
            var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
            var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
            viewVideo.viewOnce = false
            viewVideo.video = {url: viewVideo.url}
            viewVideo.caption += "El vídeo fue *Revelado*"
            sock.sendMessage(from, viewVideo)
        } else {
            var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
            var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
            var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
            viewImage.viewOnce = false
            viewImage.image = {url: `${viewImage.url}`}
            viewImage.caption += "😼"
            sock.sendMessage(from, viewImage)
        }
    } catch(e){
        console.log(e)
        enviar(e)
    }
    break
    
case 'reiniciar': {
    console.log("=== DEBUG REINICIAR ===");
    console.log("Número que ejecuta el comando:", sender);
    console.log("Número(s) configurados como owner:", global.owner || owner || "No definido");
    console.log("¿Es owner?:", isOwner);

    if (!isOwner) return enviar(respuesta.miowner);

    enviar('𝚁𝙴𝙸𝙽𝙸𝙲𝙸𝙰𝙽𝙳𝙾, 𝙰𝙶𝚄𝙰𝚁𝙳𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 ');
    setTimeout(async () => {
        console.log("Reiniciando el bot...");
        process.exit(0);
    }, 1000);
}
break;


//información 

case 'infobot': case 'ping': {
if (!isGroup) return
let timestamp = speed()
let latensi = speed() - timestamp
uptime = process.uptime()
botinfo = `
╔═【 𝑰𝒏𝒇𝒐 𝒅𝒆𝒍 𝑩𝒐𝒕 】═╗
⏰  𝐇𝐎𝐑𝐀  »  ${time}
📅  𝐅𝐄𝐂𝐇𝐀 »  ${data}
🤖  𝐍𝐎𝐌𝐁𝐑𝐄 »  ${Bot}
🔰  𝐏𝐑𝐄𝐅𝐈𝐉𝐎 »  𝓜𝓾𝓵𝓽𝓲𝓹𝓻𝓮𝓯𝓲𝓳𝓸
⚡  𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃 »  ${latensi.toFixed(4)} seg
📲  𝐃𝐈𝐒𝐏𝐎𝐒𝐈𝐓𝐈𝐕𝐎 »  ${deviceType}
⏳  𝐄𝐍 𝐋𝐈𝐍𝐄𝐀 »  ${runtime(uptime)}
💾  𝐌𝐄𝐌𝐎𝐑𝐈𝐀 »  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
👤  𝐔𝐒𝐔𝐀𝐑𝐈𝐎 »  ${pushname}
╚══❖═══════❖══╝
`
sock.sendMessage(from, { image: { url: JpgBot }, caption: botinfo }, { quoted: info })
}
break 




//AJUSTES DEL GRUPO

case 'welcome':
case 'bienvenida': {
if (!isGroup) return enviar(respuesta.grupos)

if (!isGroupAdmins) return enviar(respuesta.admin)
if (!isBotGroupAdmins) return enviar(respuesta.botadmin)

if (!args[0]) {
return enviar(`✦ Usa:

${prefixo}welcome 1 → Activar
${prefixo}welcome 0 → Desactivar`)
}

if (args[0] == "1") {

if (iswelkom) return enviar("✅ Las bienvenidas y despedidas ya están activadas.")

welkom.push(from)
fs.writeFileSync(
'./settings/Grupo/Json/welkom.json',
JSON.stringify(welkom, null, 2)
)

return enviar("✅ Bienvenidas y despedidas activadas correctamente.")

}

if (args[0] == "0") {

if (!iswelkom) return enviar("❌ Las bienvenidas ya están desactivadas.")

const index = welkom.indexOf(from)

if (index !== -1) {
welkom.splice(index, 1)
}

fs.writeFileSync(
'./settings/Grupo/Json/welkom.json',
JSON.stringify(welkom, null, 2)
)

return enviar("✅ Bienvenidas y despedidas desactivadas correctamente.")

}

enviar(`✦ Usa:

${prefixo}welcome 1 → Activar
${prefixo}welcome 0 → Desactivar`)
}
break

case 'editwelcome': {
    if (!isGroup) return enviar("⚠️ Este comando solo funciona en grupos.");
    if (!isGroupAdmins) return enviar(respuesta.admin);
    
    if (!q) return enviar("⚠️ Debes escribir el nuevo mensaje de bienvenida.\n💡 *Variables:* Usa `{user}` para etiquetar al usuario, `{group}` para el nombre del grupo y `{members}` para la cantidad de miembros.");
    
    let customWelcomes = {};
    const customWelcomesFile = './settings/Grupo/Json/custom_welcomes.json';
    if (fs.existsSync(customWelcomesFile)) {
        customWelcomes = JSON.parse(fs.readFileSync(customWelcomesFile));
    }
    
    customWelcomes[from] = q;
    fs.writeFileSync(customWelcomesFile, JSON.stringify(customWelcomes, null, 2));
    
    enviar("✅ Mensaje de bienvenida actualizado correctamente. Usa `#testwelcome` para probarlo.");
}
break;

case 'testwelcome': {
    if (!isGroup) return enviar("⚠️ Este comando solo funciona en grupos.");
    if (!isGroupAdmins) return enviar(respuesta.admin);
    
    let customWelcomes = {};
    const customWelcomesFile = './settings/Grupo/Json/custom_welcomes.json';
    if (fs.existsSync(customWelcomesFile)) {
        customWelcomes = JSON.parse(fs.readFileSync(customWelcomesFile));
    }
    
    let testMsg = customWelcomes[from] ? customWelcomes[from].replace(/\{user\}/g, `@${sender.split('@')[0]}`).replace(/\{group\}/g, groupName).replace(/\{members\}/g, groupMembers.length) : `╭ ₊˚ ✧ 🐄 ✧ ˚₊ ╮
❀ ¡Bienvenido/a a la Comunidad Cacao!
✰ @${sender.split('@')[0]}

¡Te damos la bienvenida a la base *Cowsmall* (*${groupName}*)! 
Aquí tienes las reglas para no irte a patadas:

1️⃣ *No spam:* Simplemente no mandes la misma cosa tantas veces.
2️⃣ *No contenido vulgar/NSFW:* Hay niños aquí, mantengamos el respeto.
3️⃣ *No gore:* No estamos en la deep web y no somos psicópatas.
4️⃣ *No peleas:* Esto es para despatar estafadores, no un kinder.
5️⃣ *Solo español:* Estamos en Latinoamérica, ¡hablemos en nuestro idioma!
6️⃣ *Cero política:* Nada de debates políticos o referencias.

⚠️ El que rompa las reglas se va más rápido que estafador borrando comentarios. 
¡Pónganse listos para la Funa, inútiles! 🐄🔥

『 👥 Miembros actuales: ${groupMembers.length} 』
╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`;
    
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/wMhQtFwD/imagen-de-bienvenida.jpg" },
        caption: testMsg,
        mentions: [sender]
    });
}
break;


case 'bangp':{
  if (!isGroup) return  
  if(!isOwner) return enviar(respuesta.miowner)
  if(!isBanGp) { // antes estaba al revés
    const JsonGp = './settings/Grupo/Json/grupo.json';
    bngp.push(from)
    fs.writeFileSync(JsonGp, JSON.stringify(bngp));
    enviar('✅ GRUPO BANEADO EXITOSAMENTE')
  } else {
    enviar('⚠️ El GRUPO YA SE ENCUENTRA BANEADO')
  }
}
break

case 'unbangp':{
  if (!isGroup) return  
  if(!isOwner) return enviar(respuesta.miowner)
  if(isBanGp) { // antes también estaba al revés
    const JsonGp = './settings/Grupo/Json/grupo.json';
    bngp = bngp.filter(g => g !== from)
    fs.writeFileSync(JsonGp, JSON.stringify(bngp));
    enviar('✅ GRUPO DESBANEADO EXITOSAMENTE')
  } else {
    enviar('⚠️ El GRUPO YA SE ENCUENTRA DESBANEADO')
  }
}
break



case 'todos':
case 'revivir':
  if(!isReg) return enviar(respuesta.registro)
if(!isGroup) return enviar('Es enserio invocar en un chat , te violo tu tio verdad')
if(!isGroupAdmins) return enviar(respuesta.admin) 
members_id = []
teks = (args.length > 1) ? body.slice(8).trim(): ''
teks += `𝐓𝐎𝐓𝐀𝐋 : ${groupMembers.length}\n`
nu = 0
for (let mem of groupMembers) {
nu += 1
teks += ` ➫[${nu.toString()}] @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(`
🗣️💬 ❝¡𝑳𝑳𝒂𝒎𝒂𝒅𝒂 𝒂 𝒕𝒐𝒅𝒐 𝑬𝒍 𝑴𝒖𝒏𝒅𝒐!❞ \n\n➫ ${teks}
`, members_id, true)
break


case 'anuncio':{
if(!isGroup) return enviar('Es enserio invocar en un chat , te violo tu tio verdad')
if(!isGroupAdmins) return enviar(respuesta.admin) 
men = []
num = 0
teks = `
🗣💬 ❝𝑨𝒕𝒆𝒏𝒄𝒊𝒐𝒏 𝒂 𝒆𝒔𝒕𝒆 𝑨𝒏𝒖𝒏𝒄𝒊𝒐.❞
 👉 ❝ ${q} ❞ 👈 
\n`
for(let m of groupMembers){
num +=1 
teks += `• [${num.toString()}] @${m.id.split('@')[0]}\n`
men.push(m.id)
}
mentions(teks,men,true)
}
break 


case 'modoadmin': {
  if (!isGroup) return enviar("⚠️ Este comando solo se puede usar en grupos.");
  if (!isGroupAdmins) return enviar("🚫 Solo los administradores pueden cambiar este modo.");
  
  const JsonModoAdmin = './settings/Grupo/Json/modo_admin.json';
  let modoAdmin = JSON.parse(fs.readFileSync(JsonModoAdmin));

  const estado = args[0]; // puede ser "1" o "0"

  if (!estado) return enviar("🧩 Usa el comando correctamente:\n\n*modoadmin 1* → Activar modo admin\n*modoadmin 0* → Desactivar modo admin");

  if (estado === "1") {
    if (!modoAdmin.includes(from)) {
      modoAdmin.push(from);
      fs.writeFileSync(JsonModoAdmin, JSON.stringify(modoAdmin, null, 2));
      enviar("✅ *Modo admin activado* — Ahora solo los administradores pueden usar el bot en este grupo.");
    } else {
      enviar("⚠️ El modo admin ya estaba activado en este grupo.");
    }
  } 
  
  else if (estado === "0") {
    if (modoAdmin.includes(from)) {
      modoAdmin = modoAdmin.filter(g => g !== from);
      fs.writeFileSync(JsonModoAdmin, JSON.stringify(modoAdmin, null, 2));
      enviar("🟢 *Modo admin desactivado* — Todos los miembros pueden usar el bot nuevamente.");
    } else {
      enviar("⚠️ El modo admin ya estaba desactivado en este grupo.");
    }
  } 
  
  else {
    enviar("❌ Solo puedes usar *1* para activar o *0* para desactivar.");
  }
}
break;



case 'hidetag' :
case 'notify' :
  if(!isReg) return enviar(respuesta.registro)
  if(!isGroupAdmins) return enviar(respuesta.admin)
if(!q) return enviar('Digite un texto ejemplo !notify hola hermanos 🔥')
if(!isGroup) return enviartexto ('Enserio , hidetag en un chat')
if(!isGroupAdmins) return enviartexto ("El bot necesita ser administrador")
			var group = await sock.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text : q,
			contextInfo: { mentionedJid: mem },
			quoted: m
			}
			sock.sendMessage(from, optionshidetag)
			break




case 'promote': {
    if (!isGroup) return enviar("⚠️ Este comando solo funciona en grupos.");
    if (!isGroupAdmins) return enviar(respuesta.admin);
    if (!isBotGroupAdmins) return enviar(respuesta.botadmin);
    
    let mentioned = obtenerMencionado(info);
    if (!mentioned) return enviar("⚠️ Debes mencionar o responder al mensaje de alguien para darle admin.");
    
    if (groupAdmins.some(admin => admin.id === mentioned)) return enviar("✅ Esta persona ya es administrador.");
    
    await sock.groupParticipantsUpdate(from, [mentioned], 'promote');
    mentions(`👑 @${mentioned.split('@')[0]} ahora es administrador del grupo.`, [mentioned], true);
}
break;

case 'despromote': {
    if (!isGroup) return enviar("⚠️ Este comando solo funciona en grupos.");
    if (!isGroupAdmins) return enviar(respuesta.admin);
    if (!isBotGroupAdmins) return enviar(respuesta.botadmin);
    
    let mentioned = obtenerMencionado(info);
    if (!mentioned) return enviar("⚠️ Debes mencionar o responder al mensaje de alguien para quitarle el admin.");
    
    if (!groupAdmins.some(admin => admin.id === mentioned)) return enviar("✅ Esta persona no es administrador.");
    if (mentioned === owner) return enviar("🤨 No puedes degradar a mi creador.");
    
    await sock.groupParticipantsUpdate(from, [mentioned], 'demote');
    mentions(`📉 @${mentioned.split('@')[0]} ya no es administrador del grupo.`, [mentioned], true);
}
break;

case 'rw': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ El Gacha está desactivado en este grupo. Un administrador puede activarlo con `#economia 1`.");
    
    let gachaUser = getUserGacha(sender);
    let now = Date.now();
    let cooldown = 30 * 60 * 1000; // 30 minutes
    
    if (now - gachaUser.lastRoll < cooldown) {
        let timeLeft = Math.ceil((cooldown - (now - gachaUser.lastRoll)) / 1000);
        let h = Math.floor(timeLeft / 3600);
        let m = Math.floor((timeLeft % 3600) / 60);
        return enviar(`⏳ Debes esperar *${h}h ${m}m* para volver a invocar a un personaje.`);
    }
    
    if (gachaDrops[from]) {
        // Bugfix: Si por alguna razón quedó un personaje atascado por más de 3 minutos, se elimina
        if (!gachaDrops[from].invokedAt || Date.now() - gachaDrops[from].invokedAt > 3 * 60 * 1000) {
            delete gachaDrops[from];
        } else {
            return enviar("⚠️ Ya hay un personaje invocado en este grupo esperando ser reclamado con `#c`.");
        }
    }
    
    gachaUser.totalRolls = (gachaUser.totalRolls || 0) + 1;
    let isGuaranteed = (gachaUser.totalRolls % 10 === 0);
    
    try {
        const axios = require('axios');
        let charValue = Math.floor(Math.random() * (2000 - 500 + 1)) + 500;
        if (isGuaranteed) charValue = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
        
        let animeName = "Unknown";
        let charData;
        
        const query = `
        query ($page: Int) {
          Page (page: $page, perPage: 1) {
            characters (sort: FAVOURITES_DESC) {
              name { full }
              image { large }
              media (type: ANIME, sort: POPULARITY_DESC, perPage: 1) {
                nodes { title { romaji } }
              }
            }
          }
        }`;
        
        let randomPage = isGuaranteed ? (Math.floor(Math.random() * 100) + 1) : (Math.floor(Math.random() * 2500) + 1);
        const res = await axios.post('https://graphql.anilist.co', { query, variables: { page: randomPage } });
        charData = res.data.data.Page.characters[0];
        
        if (!charData) return enviar("❌ Error al invocar personaje. Intenta nuevamente.");
        
        if (charData.media && charData.media.nodes && charData.media.nodes.length > 0) {
            animeName = charData.media.nodes[0].title.romaji;
        } else if (isGuaranteed) {
            animeName = "Personaje Famoso";
        }
        
        let newChar = {
            name: charData.name.full,
            anime: animeName,
            value: charValue,
            image: charData.image.large,
            invoker: sender,
            invokedAt: now
        };
        
        gachaDrops[from] = newChar;
        gachaUser.lastRoll = now;
        saveGacha();
        
        let txt = `╭ ₊˚ ✧ 🎲 *GACHA ROLL* 🎲 ✧ ˚₊ ╮\n│ 🎉 ¡Un personaje ha aparecido!\n`;
        if (isGuaranteed) {
            txt += `│ ✨ *¡TIRADA GARANTIZADA! (Tirada #${gachaUser.totalRolls})* ✨\n│ 🌟 ¡Has desbloqueado un personaje FAMOSO!\n`;
        }
        txt += `│ \n│ 🏷️ *Nombre:* ${newChar.name}\n│ 📺 *Anime:* ${newChar.anime}\n│ 💎 *Valor:* ${formatEco(newChar.value)}\n│ \n│ 🛡️ ¡Tienes 20 segundos de protección para usar \`#c\` antes que los demás!\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`;
        
        await sock.sendMessage(from, { image: { url: newChar.image }, caption: txt }, { quoted: info });
        
        // Remove drop if nobody claims it in 3 minutes
        setTimeout(() => {
            if (gachaDrops[from] === newChar) {
                delete gachaDrops[from];
                enviar(`💨 *${newChar.name}* se ha escapado porque nadie lo reclamó...`);
            }
        }, 3 * 60 * 1000);
        
    } catch (err) {
        enviar("❌ Error conectando con la base de personajes.");
    }
}
break;

case 'c': case 'claim': {
    if (!ecoToggle.includes(from)) return;
    
    let drop = gachaDrops[from];
    if (!drop) return enviar("⚠️ No hay ningún personaje invocado en este momento. Usa `#rw` para invocar uno.");
    
    if (drop.invoker && drop.invoker !== sender) {
        let elapsed = Date.now() - drop.invokedAt;
        if (elapsed < 20000) { // 20 seconds shield
            let remaining = Math.ceil((20000 - elapsed) / 1000);
            return enviar(`🛡️ Este personaje tiene un escudo de protección.\nSolo @${drop.invoker.split('@')[0]} puede reclamarlo.\n⏳ Quedan *${remaining}s* para que sea de dominio público.`, { mentions: [drop.invoker] });
        }
    }
    
    let gachaUser = getUserGacha(sender);
    let charToSave = { ...drop };
    delete charToSave.invoker;
    delete charToSave.invokedAt;
    
    gachaUser.characters.push(charToSave);
    saveGacha();
    
    delete gachaDrops[from];
    
    enviar(`╭ ₊˚ ✧ 🎊 ✧ ˚₊ ╮\n│ ¡Felicidades *${pushname}*!\n│ Has reclamado a *${charToSave.name}* exitosamente.\n│ 🎒 Ya está guardado en tu #mylist\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
}
break;

case 'mylist': case 'mispjs': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ El Gacha está desactivado en este grupo.");
    
    let gachaUser = getUserGacha(sender);
    if (!gachaUser.characters || gachaUser.characters.length === 0) {
        return enviar("😢 Aún no tienes ningún personaje en tu colección. ¡Usa `#rw` para conseguir uno!");
    }
    
    let totalValue = gachaUser.characters.reduce((acc, curr) => acc + curr.value, 0);
    
    let txt = `╭ ₊˚ ✧ 📜 *TU COLECCIÓN* 📜 ✧ ˚₊ ╮\n`;
    gachaUser.characters.forEach((c, i) => {
        txt += `│ ${i + 1}. *${c.name}* (${c.anime}) - ${formatEco(c.value)}\n`;
    });
    txt += `│\n│ 💰 *Valor Total:* ${formatEco(totalValue)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`;
    
    enviar(txt);
}
break;

case 'gift': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ El Gacha está desactivado en este grupo.");
    
    let mentioned = obtenerMencionado(info);
    if (!mentioned) return enviar("⚠️ Debes etiquetar a la persona a la que quieres regalar el personaje (ejemplo: `#gift @usuario 2`).");
    if (mentioned === sender) return enviar("⚠️ No puedes regalarte un personaje a ti mismo.");
    
    let indexStr = args.find(a => !a.includes('@') && !isNaN(parseInt(a)));
    if (!indexStr) return enviar("⚠️ Debes indicar el número del personaje en tu lista (ejemplo: `#gift @usuario 2`).");
    let index = parseInt(indexStr) - 1;
    
    let gachaSender = getUserGacha(sender);
    if (!gachaSender.characters || gachaSender.characters.length === 0) {
        return enviar("😢 No tienes ningún personaje para regalar.");
    }
    if (index < 0 || index >= gachaSender.characters.length) {
        return enviar(`⚠️ Número inválido. Tienes ${gachaSender.characters.length} personajes en tu colección. Usa \`#mylist\` para verlos.`);
    }
    
    let charToGift = gachaSender.characters[index];
    gachaSender.characters.splice(index, 1);
    
    let gachaReceiver = getUserGacha(mentioned);
    if (!gachaReceiver.characters) gachaReceiver.characters = [];
    gachaReceiver.characters.push(charToGift);
    
    saveGacha();
    
    mentions(`╭ ₊˚ ✧ 🎁 ✧ ˚₊ ╮\n│ *${pushname}* ha sido muy generoso/a.\n│ ¡Le acaba de regalar a *${charToGift.name}* a @${mentioned.split('@')[0]}!\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`, [mentioned], true);
}
break;

case 'sell': case 'vender': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo.");
    
    let indexStr = args[0];
    if (!indexStr || isNaN(parseInt(indexStr))) return enviar("⚠️ Debes indicar el número del personaje en tu lista que deseas vender (ejemplo: `#sell 2`).");
    let index = parseInt(indexStr) - 1;
    
    let gachaUser = getUserGacha(sender);
    if (!gachaUser.characters || gachaUser.characters.length === 0) {
        return enviar("😢 No tienes ningún personaje para vender.");
    }
    if (index < 0 || index >= gachaUser.characters.length) {
        return enviar(`⚠️ Número inválido. Tienes ${gachaUser.characters.length} personajes en tu colección. Usa \`#mylist\` para verlos.`);
    }
    
    let charToSell = gachaUser.characters[index];
    let sellPrice = charToSell.value;
    
    gachaUser.characters.splice(index, 1);
    saveGacha();
    
    let userEco = getUserEco(sender);
    userEco.wallet += sellPrice;
    saveEconomy();
    
    enviar(`╭ ₊˚ ✧ 💸 ✧ ˚₊ ╮\n│ ¡*${pushname}* ha vendido un personaje!\n│ 👤 *Vendido:* ${charToSell.name}\n│ 💰 *Ganancias:* ${formatEco(sellPrice)}\n│ 💼 *Nuevo balance:* ${formatEco(userEco.wallet)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
}
break;

case 'economia': {
    if (!isGroup) return enviar("⚠️ Este comando solo funciona en grupos.");
    if (!isGroupAdmins) return enviar(respuesta.admin);
    
    let option = args[0];
    if (option === '1' || option === 'on') {
        if (ecoToggle.includes(from)) return enviar("✅ La economía ya estaba activada en este grupo.");
        ecoToggle.push(from);
        fs.writeFileSync('./settings/Grupo/Json/economia.json', JSON.stringify(ecoToggle, null, 2));
        enviar("✅ Sistema de economía ACTIVADO para este grupo.");
    } else if (option === '0' || option === 'off') {
        let index = ecoToggle.indexOf(from);
        if (index === -1) return enviar("✅ La economía ya estaba desactivada en este grupo.");
        ecoToggle.splice(index, 1);
        fs.writeFileSync('./settings/Grupo/Json/economia.json', JSON.stringify(ecoToggle, null, 2));
        enviar("✅ Sistema de economía DESACTIVADO para este grupo.");
    } else {
        enviar("⚠️ Uso incorrecto. Para activar usa: `#economia 1`\nPara desactivar: `#economia 0`");
    }
}
break;


case 'balance': case 'bal': case 'coins': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con `#economia 1`.");
    let mentioned = obtenerMencionado(info) || sender;
    let userEco = getUserEco(mentioned);
    let total = userEco.wallet + userEco.bank;
    let isSelf = mentioned === sender;
    let userName = isSelf ? pushname : `@${mentioned.split('@')[0]}`;
    
    let txt = `╭ ₊˚ ✧ 💰 *ʙᴀʟᴀɴᴄᴇ* 💰 ✧ ˚₊ ╮\n│ 👤 ${userName}\n│ 💼 Cartera: ${formatEco(userEco.wallet)}\n│ 🏦 Banco: ${formatEco(userEco.bank)}\n│ 📊 Total: ${formatEco(total)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`;
    
    if (isSelf) {
        enviar(txt);
    } else {
        mentions(txt, [mentioned], true);
    }
}
break;

case 'deposit': case 'dep': case 'depositar': case 'd': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con `#economia 1`.");
    let userEco = getUserEco(sender);
    let amount = args[0] ? args[0].toLowerCase() : null;
    
    if (!amount) return enviar("⚠️ Indica cuánto deseas depositar (ej. `#dep 100` o `#dep all`).");
    
    let depAmount = 0;
    if (amount === 'all' || amount === 'todo') {
        depAmount = userEco.wallet;
    } else {
        depAmount = parseInt(amount);
    }
    
    if (isNaN(depAmount) || depAmount <= 0) return enviar("⚠️ Cantidad inválida.");
    if (depAmount > userEco.wallet) return enviar(`⚠️ No tienes suficientes monedas. Tienes ${formatEco(userEco.wallet)} en tu cartera.`);
    
    userEco.wallet -= depAmount;
    userEco.bank += depAmount;
    saveEconomy();
    enviar(`╭ ₊˚ ✧ 🏦 ✧ ˚₊ ╮\n│ *${pushname}* ha depositado en el banco.\n│ 💵 *Monto:* ${formatEco(depAmount)}\n│ 🏦 *Nuevo saldo bancario:* ${formatEco(userEco.bank)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
}
break;

case 'withdraw': case 'with': case 'retirar': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con `#economia 1`.");
    let userEco = getUserEco(sender);
    let amount = args[0] ? args[0].toLowerCase() : null;
    
    if (!amount) return enviar("⚠️ Indica cuánto deseas retirar (ej. `#with 100` o `#with all`).");
    
    let withAmount = 0;
    if (amount === 'all' || amount === 'todo') {
        withAmount = userEco.bank;
    } else {
        withAmount = parseInt(amount);
    }
    
    if (isNaN(withAmount) || withAmount <= 0) return enviar("⚠️ Cantidad inválida.");
    if (withAmount > userEco.bank) return enviar(`⚠️ No tienes suficientes monedas en el banco. Tienes ${formatEco(userEco.bank)}.`);
    
    userEco.bank -= withAmount;
    userEco.wallet += withAmount;
    saveEconomy();
    enviar(`╭ ₊˚ ✧ 🏦 ✧ ˚₊ ╮\n│ *${pushname}* ha retirado del banco.\n│ 💵 *Monto:* ${formatEco(withAmount)}\n│ 💼 *Nuevo saldo en cartera:* ${formatEco(userEco.wallet)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
}
break;

case 'givecoins': case 'pay': case 'coinsgive': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con `#economia 1`.");
    let mentioned = obtenerMencionado(info);
    let amount = parseInt(args[args.length - 1]);
    
    if (!mentioned || isNaN(amount) || amount <= 0) return enviar("⚠️ Formato incorrecto. Uso: `#pay @usuario cantidad`");
    if (mentioned === sender) return enviar("⚠️ No puedes pagarte a ti mismo.");
    
    let senderEco = getUserEco(sender);
    if (amount > senderEco.wallet) return enviar(`⚠️ No tienes ${formatEco(amount)} en tu cartera para pagar.`);
    
    let receiverEco = getUserEco(mentioned);
    senderEco.wallet -= amount;
    receiverEco.wallet += amount;
    saveEconomy();
    
    mentions(`╭ ₊˚ ✧ 💸 ✧ ˚₊ ╮\n│ *${pushname}* hizo una transferencia.\n│ 🔁 *Destinatario:* @${mentioned.split('@')[0]}\n│ 💵 *Monto:* ${formatEco(amount)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`, [mentioned], true);
}
break;

case 'daily': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con `#economia 1`.");
    let userEco = getUserEco(sender);
    let now = Date.now();
    let cooldown = 24 * 60 * 60 * 1000; // 24 hours
    
    if (now - userEco.lastDaily < cooldown) {
        let timeLeft = Math.ceil((cooldown - (now - userEco.lastDaily)) / (60 * 60 * 1000));
        return enviar(`⏳ Aún no puedes reclamar. Vuelve en *${timeLeft} horas*.`);
    }
    
    let reward = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    userEco.wallet += reward;
    userEco.lastDaily = now;
    saveEconomy();
    enviar(`╭ ₊˚ ✧ 🎁 ✧ ˚₊ ╮\n│ *${pushname}* reclamó su diaria...\n│ 🎉 ¡Has ganado ${formatEco(reward)}!\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
}
break;

case 'work': case 'w': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con `#economia 1`.");
    let userEco = getUserEco(sender);
    let now = Date.now();
    let cooldown = 3 * 60 * 1000; // 3 minutes
    
    if (now - userEco.lastWork < cooldown) {
        let timeLeft = Math.ceil((cooldown - (now - userEco.lastWork)) / 1000);
        return enviar(`⏳ Estás muy cansado. Descansa *${timeLeft} segundos* antes de volver a trabajar.`);
    }
    
    let works = [
        "Hiciste un video loquendo de GTA San Andreas sobre el misterio de pie grande",
        "Le ayudaste al bananero a editar un video xdxd",
        "Trabajaste de albañil con CJ en Los Santos",
        "Vendiste empanadas afuera de la cueva del gordo friki",
        "Te pusiste a farmear como chino en el WoW",
        "Le formateaste la PC a tu tío y le cobraste como ingeniero",
        "Trabajaste de mod en Taringa baneando otakus"
    ];
    let job = works[Math.floor(Math.random() * works.length)];
    let reward = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
    
    userEco.wallet += reward;
    userEco.lastWork = now;
    saveEconomy();
    enviar(`╭ ₊˚ ✧ 💼 ✧ ˚₊ ╮\n│ *${pushname}* se puso a trabajar...\n│ 🛠️ ${job}\n│ 💵 *Ganancia:* ${formatEco(reward)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
}
break;

case 'crime': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con `#economia 1`.");
    let userEco = getUserEco(sender);
    let now = Date.now();
    let cooldown = 3 * 60 * 1000;
    
    if (now - userEco.lastCrime < cooldown) {
        let timeLeft = Math.ceil((cooldown - (now - userEco.lastCrime)) / 1000);
        return enviar(`🚨 La policía te está buscando. Escóndete por *${timeLeft} segundos*.`);
    }
    
    userEco.lastCrime = now;
    let win = Math.random() > 0.5; // 50% chance
    if (win) {
        let reward = Math.floor(Math.random() * (1000 - 300 + 1)) + 300;
        let texts = [
            "Te robaste un tanque de la base militar nivel 5 estrellas a lo GTA",
            "Hackeaste el ciber de la esquina para tener tiempo infinito XD",
            "Estafaste a un gordo friki vendiéndole una waifu de cartón",
            "Asaltaste el tren de Los Santos (All you had to do was follow the damn train CJ!)"
        ];
        let txt = texts[Math.floor(Math.random() * texts.length)];
        userEco.wallet += reward;
        enviar(`╭ ₊˚ ✧ 🦝 ✧ ˚₊ ╮\n│ *${pushname}* intentó ser criminal...\n│ 😼 ${txt}\n│ 💵 *Botín:* ${formatEco(reward)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
    } else {
        let fine = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
        if (userEco.wallet < fine) fine = userEco.wallet; // don't go negative
        userEco.wallet -= fine;
        enviar(`╭ ₊˚ ✧ 🚔 ✧ ˚₊ ╮\n│ *${pushname}* intentó ser criminal...\n│ 🚓 Te agarró la policía por gil.\n│ 💸 *Multa pagada:* ${formatEco(fine)}\n│ 💀 ¡Wasted!\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
    }
    saveEconomy();
}
break;

case 'slut': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con `#economia 1`.");
    let userEco = getUserEco(sender);
    let now = Date.now();
    let cooldown = 3 * 60 * 1000;
    
    if (now - userEco.lastSlut < cooldown) {
        let timeLeft = Math.ceil((cooldown - (now - userEco.lastSlut)) / 1000);
        return enviar(`🥵 Estás adolorido/a. Descansa *${timeLeft} segundos*.`);
    }
    
    userEco.lastSlut = now;
    let win = Math.random() > 0.4; // 60% chance
    if (win) {
        let reward = Math.floor(Math.random() * (800 - 200 + 1)) + 200;
        let texts = [
            "Hiciste un bailecito privado pal gordito de Steam XD",
            "Te fuiste a las cariñosas pero tú eras la cariñosa",
            "Vendiste fotos de tus patas a un otaku en Discord",
            "Te pusiste traje de maid y sacaste tremenda propina xdxd"
        ];
        let txt = texts[Math.floor(Math.random() * texts.length)];
        userEco.wallet += reward;
        enviar(`╭ ₊˚ ✧ 💋 ✧ ˚₊ ╮\n│ *${pushname}* buscó dinero fácil...\n│ 🥵 ${txt}\n│ 💵 *Ganancia:* ${formatEco(reward)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
    } else {
        let fine = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
        if (userEco.wallet < fine) fine = userEco.wallet;
        userEco.wallet -= fine;
        enviar(`╭ ₊˚ ✧ 😷 ✧ ˚₊ ╮\n│ *${pushname}* buscó dinero fácil...\n│ 💊 Te fuiste con el equivocado y tocó ir al médico.\n│ 💸 *Gastos médicos:* ${formatEco(fine)}\n│ ☠️ F en el chat.\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
    }
    saveEconomy();
}
break;

case 'steal': case 'rob': case 'robar': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con `#economia 1`.");
    let mentioned = obtenerMencionado(info);
    if (!mentioned) return enviar("⚠️ Menciona a tu víctima. Ej: `#rob @usuario`");
    if (mentioned === sender) return enviar("⚠️ No puedes robarte a ti mismo.");
    
    let senderEco = getUserEco(sender);
    let targetEco = getUserEco(mentioned);
    
    if (targetEco.wallet < 100) return enviar("⚠️ Esta persona es muy pobre para ser robada. (Menos de 100 coins)");
    
    let win = Math.random() > 0.55; // 45% chance to rob
    if (win) {
        // Can rob 10% to 40% of their wallet
        let percent = (Math.floor(Math.random() * (40 - 10 + 1)) + 10) / 100;
        let amount = Math.floor(targetEco.wallet * percent);
        
        targetEco.wallet -= amount;
        senderEco.wallet += amount;
        saveEconomy();
        mentions(`╭ ₊˚ ✧ 🦝 ✧ ˚₊ ╮\n│ *${pushname}* le robó a @${mentioned.split('@')[0]}\n│ 💸 *Botín:* ${formatEco(amount)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`, [mentioned], true);
    } else {
        let fine = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
        if (senderEco.wallet < fine) fine = senderEco.wallet;
        senderEco.wallet -= fine;
        targetEco.wallet += fine; // Fine goes to the victim
        saveEconomy();
        mentions(`╭ ₊˚ ✧ 👮 ✧ ˚₊ ╮\n│ *${pushname}* intentó robar a @${mentioned.split('@')[0]}...\n│ 🚓 ¡Te descubrieron alto noob!\n│ 💸 *Multa pagada a la víctima:* ${formatEco(fine)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`, [mentioned], true);
    }
}
break;

case 'coinflip': case 'flip': case 'cf': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con `#economia 1`.");
    let userEco = getUserEco(sender);
    let amount = parseInt(args[1]);
    let choice = args[0] ? args[0].toLowerCase() : "";
    
    if (!['cara', 'cruz', 'heads', 'tails'].includes(choice) || isNaN(amount) || amount <= 0) {
        return enviar("⚠️ Uso: `#cf cara 100` o `#cf cruz 100`");
    }
    
    if (amount > userEco.wallet) return enviar(`⚠️ No tienes ${formatEco(amount)} en tu cartera para apostar.`);
    
    let isHeads = ['cara', 'heads'].includes(choice);
    let resultHeads = Math.random() < 0.40 ? isHeads : !isHeads;
    
    if (isHeads === resultHeads) {
        userEco.wallet += amount;
        saveEconomy();
        enviar(`╭ ₊˚ ✧ 🪙 ✧ ˚₊ ╮\n│ *${pushname}* lanzó la moneda...\n│ 🎯 Elegiste: *${choice}*\n│ 🎲 Salió: *${resultHeads ? 'cara' : 'cruz'}*\n│ 🎊 ¡Ganaste! Beneficio: ${formatEco(amount)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
    } else {
        userEco.wallet -= amount;
        saveEconomy();
        enviar(`╭ ₊˚ ✧ 🪙 ✧ ˚₊ ╮\n│ *${pushname}* lanzó la moneda...\n│ 🎯 Elegiste: *${choice}*\n│ 🎲 Salió: *${resultHeads ? 'cara' : 'cruz'}*\n│ 💸 ¡Perdiste! -${formatEco(amount)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
    }
}
break;

case 'roulette': case 'rt': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con `#economia 1`.");
    let userEco = getUserEco(sender);
    let amount = parseInt(args[1]);
    let color = args[0] ? args[0].toLowerCase() : "";
    
    if (!['rojo', 'negro', 'verde', 'red', 'black', 'green'].includes(color) || isNaN(amount) || amount <= 0) {
        return enviar("⚠️ Uso: `#rt rojo 100`, `#rt negro 100` o `#rt verde 100`\nRojo/Negro paga x2, Verde paga x2.5.");
    }
    
    if (amount > userEco.wallet) return enviar(`⚠️ No tienes ${formatEco(amount)} en tu cartera para apostar.`);
    
    let isWin = Math.random() < 0.40;
    let roll = 0;
    let resultColor = 'verde';
    
    let betColor = color;
    if (color === 'red') betColor = 'rojo';
    if (color === 'black') betColor = 'negro';
    if (color === 'green') betColor = 'verde';

    if (isWin) {
        resultColor = betColor;
        if (betColor === 'rojo') roll = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36][Math.floor(Math.random()*18)];
        if (betColor === 'negro') roll = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35][Math.floor(Math.random()*18)];
    } else {
        let options = ['rojo', 'negro', 'verde'].filter(c => c !== betColor);
        if (Math.random() < 0.05 && betColor !== 'verde') resultColor = 'verde';
        else resultColor = options.find(c => c !== 'verde') || 'negro';
        
        if (resultColor === 'rojo') roll = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36][Math.floor(Math.random()*18)];
        if (resultColor === 'negro') roll = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35][Math.floor(Math.random()*18)];
    }
    
    // betColor logic is moved above
    
    if (betColor === resultColor) {
        let winAmount = betColor === 'verde' ? amount * 2.5 : amount * 2;
        let profit = winAmount - amount;
        userEco.wallet += profit;
        saveEconomy();
        enviar(`╭ ₊˚ ✧ 🎰 ✧ ˚₊ ╮\n│ *${pushname}* apostó en la ruleta...\n│ 🎯 Elegiste: *${color}*\n│ 🎲 Cayó en: *${resultColor.toUpperCase()}* (${roll})\n│ 🎊 ¡Ganaste! Beneficio: ${formatEco(profit)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
    } else {
        userEco.wallet -= amount;
        saveEconomy();
        enviar(`╭ ₊˚ ✧ 🎰 ✧ ˚₊ ╮\n│ *${pushname}* apostó en la ruleta...\n│ 🎯 Elegiste: *${color}*\n│ 🎲 Cayó en: *${resultColor.toUpperCase()}* (${roll})\n│ 💸 ¡Perdiste! -${formatEco(amount)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
    }
}
break;

case 'slots': case 'tragaperras': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con `#economia 1`.");
    let userEco = getUserEco(sender);
    let amount = parseInt(args[0]);
    
    if (isNaN(amount) || amount <= 0) return enviar("⚠️ Uso: `#slots 100`");
    if (amount > userEco.wallet) return enviar(`⚠️ No tienes ${formatEco(amount)} en tu cartera para apostar.`);
    
    let isWin = Math.random() < 0.40;
    let emojis = ['🍒', '🍋', '🍇', '🍉', '⭐', '💎'];
    let slot1, slot2, slot3;
    
    if (isWin) {
        let isJackpot = Math.random() < 0.10;
        slot1 = emojis[Math.floor(Math.random() * emojis.length)];
        if (isJackpot) {
            slot2 = slot1; slot3 = slot1;
        } else {
            slot2 = slot1;
            do { slot3 = emojis[Math.floor(Math.random() * emojis.length)]; } while (slot3 === slot1);
            let order = [slot1, slot2, slot3].sort(() => Math.random() - 0.5);
            slot1 = order[0]; slot2 = order[1]; slot3 = order[2];
        }
    } else {
        slot1 = emojis[Math.floor(Math.random() * emojis.length)];
        do { slot2 = emojis[Math.floor(Math.random() * emojis.length)]; } while (slot2 === slot1);
        do { slot3 = emojis[Math.floor(Math.random() * emojis.length)]; } while (slot3 === slot1 || slot3 === slot2);
    }
    
    let txt = `╭ ₊˚ ✧ 🎰 *TRAGAMONEDAS* 🎰 ✧ ˚₊ ╮\n│ 👤 *${pushname}*\n│\n│ ⦗ ${slot1} | ${slot2} | ${slot3} ⦘\n│\n`;
    
    if (slot1 === slot2 && slot2 === slot3) {
        let win = amount * 5;
        userEco.wallet += (win - amount);
        txt += `│ 🏆 *JACKPOT* 🏆\n│ Ganaste ${formatEco(win)}\n│ Beneficio: ${formatEco(win - amount)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`;
    } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
        let win = amount * 2;
        userEco.wallet += (win - amount);
        txt += `│ ✨ *Mini premio* ✨\n│ Ganaste ${formatEco(win)}\n│ Beneficio: ${formatEco(win - amount)}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`;
    } else {
        userEco.wallet -= amount;
        txt += `│ ❌ *Perdiste* -${formatEco(amount)}\n│ ¡Suerte la próxima!\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`;
    }
    saveEconomy();
    enviar(txt);
}
break;

case 'economyboard': case 'eboard': case 'baltop': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con `#economia 1`.");
    let leaderboard = Object.keys(economyDB).map(jid => {
        let total = economyDB[jid].wallet + economyDB[jid].bank;
        return { jid, total };
    }).sort((a, b) => b.total - a.total).slice(0, 10);
    
    if (leaderboard.length === 0) return enviar("⚠️ No hay nadie en la economía aún.");
    
    let txt = `╭ ₊˚ ✧ 🏆 *TOP MILLONARIOS* 🏆 ✧ ˚₊ ╮\n\n`;
    let mentionsArray = [];
    leaderboard.forEach((user, index) => {
        txt += `│ *${index + 1}.* @${user.jid.split('@')[0]} - ${formatEco(user.total)}\n`;
        mentionsArray.push(user.jid);
    });
    txt += `\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`;
    mentions(txt, mentionsArray, true);
}
break;

case 'warn': {
    if (!isGroup) return enviar("⚠️ Este comando solo funciona en grupos.");
    if (!isGroupAdmins) return enviar(respuesta.admin);
    if (!isBotGroupAdmins) return enviar(respuesta.botadmin);
    
    let mentioned = obtenerMencionado(info);
    if (!mentioned) return enviar("⚠️ Debes mencionar a alguien para darle una advertencia.\nEjemplo: #warn @usuario por hacer spam");
    
    if (mentioned === BotNumber || mentioned === owner) return enviar('🤨 No puedes advertir a esa persona.');

    let warnReason = args.join(' ').replace(/@\d+/g, '').trim() || "Sin motivo especificado";
    
    if (!warnsDB[from]) warnsDB[from] = {};
    if (!warnsDB[from][mentioned]) warnsDB[from][mentioned] = [];
    
    warnsDB[from][mentioned].push({
        razon: warnReason,
        fecha: new Date().toLocaleDateString()
    });
    
    fs.writeFileSync('./settings/Grupo/Json/warns.json', JSON.stringify(warnsDB, null, 2));
    
    let totalWarns = warnsDB[from][mentioned].length;
    
    if (totalWarns >= 5) {
        mentions(`🚫 @${mentioned.split('@')[0]} ha alcanzado el límite de 5 advertencias y será eliminado del grupo.`, [mentioned], true);
        await sock.groupParticipantsUpdate(from, [mentioned], 'remove');
        warnsDB[from][mentioned] = [];
        fs.writeFileSync('./settings/Grupo/Json/warns.json', JSON.stringify(warnsDB, null, 2));
    } else {
        mentions(`⚠️ *ADVERTENCIA* ⚠️\n\nUsuario: @${mentioned.split('@')[0]}\nMotivo: ${warnReason}\n\nLlevas *${totalWarns}/5* advertencias. Al llegar a 5 serás eliminado automáticamente.`, [mentioned], true);
    }
}
break;

case 'warns': {
    if (!isGroup) return enviar("⚠️ Este comando solo funciona en grupos.");
    let mentioned = obtenerMencionado(info) || sender;
    
    if (!warnsDB[from] || !warnsDB[from][mentioned] || warnsDB[from][mentioned].length === 0) {
        return mentions(`✅ @${mentioned.split('@')[0]} no tiene ninguna advertencia.`, [mentioned], true);
    }
    
    let totalWarns = warnsDB[from][mentioned].length;
    let listWarns = warnsDB[from][mentioned].map((w, index) => `*${index + 1}.* ${w.razon} (${w.fecha})`).join('\n');
    
    mentions(`⚠️ *ADVERTENCIAS DE @${mentioned.split('@')[0]}*\n\nTotal: *${totalWarns}/5*\n\n${listWarns}`, [mentioned], true);
}
break;

case 'unwarn': {
    if (!isGroup) return enviar("⚠️ Este comando solo funciona en grupos.");
    if (!isGroupAdmins) return enviar(respuesta.admin);
    
    let mentioned = obtenerMencionado(info);
    if (!mentioned) return enviar("⚠️ Debes mencionar a alguien y el número de advertencia.\nEjemplo: #unwarn @usuario 1");
    
    let warnIndex = parseInt(args[args.length - 1]);
    if (isNaN(warnIndex)) return enviar("⚠️ Debes especificar el número de la advertencia a eliminar.\nEjemplo: #unwarn @usuario 1");
    
    if (!warnsDB[from] || !warnsDB[from][mentioned] || warnsDB[from][mentioned].length === 0) {
        return mentions(`✅ @${mentioned.split('@')[0]} no tiene ninguna advertencia.`, [mentioned], true);
    }
    
    if (warnIndex < 1 || warnIndex > warnsDB[from][mentioned].length) {
        return enviar(`⚠️ Número inválido. Ese usuario tiene *${warnsDB[from][mentioned].length}* advertencias.`);
    }
    
    let removedWarn = warnsDB[from][mentioned].splice(warnIndex - 1, 1);
    fs.writeFileSync('./settings/Grupo/Json/warns.json', JSON.stringify(warnsDB, null, 2));
    
    mentions(`✅ Se eliminó la advertencia *${warnIndex}* de @${mentioned.split('@')[0]}.\nMotivo original: ${removedWarn[0].razon}\n\nAhora tiene *${warnsDB[from][mentioned].length}/5* advertencias.`, [mentioned], true);
}
break;


case 'kick' :
case 'ban' :
case 'largate' :{
if (!isGroup) return  
if(!isGroupAdmins) return enviar(respuesta.admin)
if(!isBotGroupAdmins) return enviar (respuesta.botadmin)
let mentioned = obtenerMencionado(info);

    if (!mentioned) return enviar("⚠️ Debes mencionar a alguien para usar este comando.");

if(mentioned === BotNumber || mentioned === owner) return enviar('🤨')
await sock.groupParticipantsUpdate(from, [mentioned] , 'remove')
enviar('Accion realizada exitosamente')
}
break 
     



// 🟢 Comando para activar/desactivar modoestricto
case 'modoestricto':
  if (!isGroupAdmins) return enviar(respuesta.admin)
  if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
  if (args.length < 1) return enviar(`⚠️ Ingresa 1 para activar o 0 para desactivar el modo estricto.`)

  if (Number(args[0]) === 1) {
    if (isModoEstricto) return enviar('⚠️ El modo estricto ya está activado en este grupo.')
    modoEstrictoDB.push(from)
    fs.writeFileSync('./settings/Grupo/Json/modoestricto.json', JSON.stringify(modoEstrictoDB, null, 2))
    enviar('✅ *MODO ESTRICTO ACTIVADO*\n\nSe eliminarán malas palabras y se sancionará el spam de stickers.')
  } 
  else if (Number(args[0]) === 0) {
    if (!isModoEstricto) return enviar('⚠️ El modo estricto ya está desactivado en este grupo.')
    const index = modoEstrictoDB.indexOf(from)
    modoEstrictoDB.splice(index, 1)
    fs.writeFileSync('./settings/Grupo/Json/modoestricto.json', JSON.stringify(modoEstrictoDB, null, 2))
    enviar('❌ *MODO ESTRICTO DESACTIVADO*')
  } 
  else {
    enviar(`⚠️ Ingresa 1 para activar o 0 para desactivar el modo estricto.`)
  }
break;

// ⚙️ Comando para activar/desactivar antilink
case 'antilink':
  if (!isGroupAdmins) return enviar(respuesta.admin)
  if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
  if (args.length < 1) return enviar(`𝐃𝐈𝐆𝐈𝐓𝐄 𝟏 𝐏𝐀𝐑𝐀 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐘 𝟎 𝐏𝐀𝐑𝐀 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑`)

  if (Number(args[0]) === 1) {
    if (isAntiLink) return enviar('✅ El antilink ya está activado en este grupo')
    antilink.push(from)
    fs.writeFileSync('./settings/Grupo/Json/antilink.json', JSON.stringify(antilink, null, 2))
    enviar('✅ ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎 ● ️')
  } 
  else if (Number(args[0]) === 0) {
    if (!isAntiLink) return enviar('❌ El antilink ya está desactivado en este grupo')
    const index = antilink.indexOf(from)
    antilink.splice(index, 1)
    fs.writeFileSync('./settings/Grupo/Json/antilink.json', JSON.stringify(antilink, null, 2))
    enviar('❌ ● ️𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎 ● ️')
  } 
  else {
    enviar(`𝐃𝐈𝐆𝐈𝐓𝐄 𝟏 𝐏𝐀𝐑𝐀 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐘 𝟎 𝐏𝐀𝐑𝐀 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑`)
  }
break;


case 'open': {
if (!isGroup) return enviar(respuesta.grupos)
if (!isGroupAdmins) return enviar(respuesta.admin)
if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
await sock.groupSettingUpdate(from, 'not_announcement')
enviar(`🟢 *GRUPO ABIERTO*\n\nAhora todos los miembros pueden enviar mensajes.`)
}
break;

case 'close': {
if (!isGroup) return enviar(respuesta.grupos)
if (!isGroupAdmins) return enviar(respuesta.admin)
if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
await sock.groupSettingUpdate(from, 'announcement')
enviar(`🔒 *GRUPO CERRADO*\n\nSolo los administradores pueden enviar mensajes.`)
}
break;

case 'grupo': {

if (!isGroup) return enviar(respuesta.grupos)
if (!isGroupAdmins) return enviar(respuesta.admin)
if (!isBotGroupAdmins) return enviar(respuesta.botadmin)

if (!args[0]) {
return enviar(`⚙️ *Configuración del grupo*

Usa:
• */grupo abrir* → Abrir el grupo
• */grupo cerrar* → Cerrar el grupo`)
}

if (args[0] === 'abrir') {

await sock.groupSettingUpdate(from, 'not_announcement')

enviar(`🟢 *GRUPO ABIERTO*

Ahora todos los miembros pueden enviar mensajes.`)

} else if (args[0] === 'cerrar') {

await sock.groupSettingUpdate(from, 'announcement')

enviar(`🔒 *GRUPO CERRADO*

Solo los administradores pueden enviar mensajes.`)

} else {

enviar(`⚠️ Opción inválida

Usa:
• */grupo abrir*
• */grupo cerrar*`)
}

}
break


// STICKERS 
case 's':
case 'sticker':
  if(!isReg) return enviar(respuesta.registro)
  if(coins < 1) return enviar(respuesta.coins)
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
enviar(`Creando tu sticker supere un poco ❤️`)
var pack = `
👑 Dueño 👑
 ✅Cow
⭐𝐂𝐫𝐞𝐚𝐝𝐨 𝐩𝐨𝐫 :
 ${pushname} `
var author2 = ` 
🤖 𝐁𝐨𝐭 🤖
 ⃟CowBot
💐 𝐆𝐫𝐮𝐩𝐨💐
${groupName} `
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(sock, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
await addXp(sender,1)
await delkoin(sender,1)
} else if(boij && boij.seconds < 11){
enviar(`Creando tu Sticker ${pushname}`)
var pack = `
👑 Dueño 👑
 ✅Cow
⭐𝐂𝐫𝐞𝐚𝐝𝐨 𝐩𝐨𝐫 :
 ${pushname} `
var author2 = ` 
🤖 𝐁𝐨𝐭 🤖
 ⃟CowBot
💐 𝐆𝐫𝐮𝐩𝐨💐
${groupName} `
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(sock, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
await addXp(sender,1)
await delkoin(sender,1)
} else {
return enviar(`Marque una imagen o \nUn vídeo máximo de 10 segundos ⏲️`)
}
break

///Nesecitas clave API//
case "attp":
case "attp2":
case "attp3":
if(!isReg) return enviar(respuesta.registro)
if (!q) return enviar("Coloca un texto o emoji después del comando")

try {

let url = `${APINAUFRA}/api/${messagesC}?text=${encodeURIComponent(q)}&apikey=${NAUFRA_KEY}`

let res = await fetch(url)
let buffer = await res.buffer()

await sock.sendMessage(from, {
sticker: buffer
}, { quoted: info })

} catch (e) {
console.log(e)
enviar("Error al crear sticker")
}

break






///////////////////HERRAMIENTAS///////////

case 'amp3':
case 'tomp3':
  if(!isReg) return enviar(respuesta.registro)
if(!isQuotedVideo) return enviar (`[❗] ${sender.split('@')[0]}, Marque un video `)
enviar('`Creando....`')
tomp = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage , 'video')
	sock.sendMessage(from,{audio :  tomp, mimetype: 'audio/mpeg'},{ quoted: info })		
		await addXp(sender,6)
		await delkoin(sender,3)
				break 
				
		
  case 'toimg':
  if(!isReg) return enviar(respuesta.registro)
if(!isQuotedSticker) return enviar('[❗]• 𝗠𝗔𝗥𝗤𝗨𝗘 𝗨𝗡 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 •')
try {
enviar('`Creando....`')
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
sock.sendMessage(from, {image: buff , caption : ` [❗] *${pushname}*, Aquí tienes tu pedido `},{quoted : info }).catch(e => {
console.log(e);
enviar('Nose pudo convertir a imagen verifica que sea un sticker y no un gif ❌')
})
await addXp(sender,3)
await delkoin(sender,2)
} catch {
enviar('ocurrio un error ')
}
break









//Economía niveles y experiencia 

case 'perfil' : case 'cartera' :
case 'nivel' : case 'minivel' : {

if(!isReg) return enviar(respuesta.registro)

var saldo = MoneyOfSender(sender)
const Xp = xpOfsender(sender)
const Mnv = levelOfsender(sender)
const Rxxp = Rxp(sender)
const myrep2 = repUser(sender)
const Xpnull = Rxxp - 1000

if(Xp === null) return addXp(sender,Xpnull)

let foto

try {
foto = await sock.profilePictureUrl(sender, 'image')
} catch {
foto = 'https://i.postimg.cc/85NsPp8j/20260131-152616.jpg'
}

const Mp = `
╔══✦❖【 𝑻𝒖 𝑷𝒆𝒓𝒇𝒊𝒍 】❖✦══╗
🏷️  𝐍𝐨𝐦𝐛𝐫𝐞      »  @${sender.split('@')[0]}
⚔️  𝐑𝐚𝐧𝐠𝐨       »  ${Mlevel}
👑  𝐑𝐞𝐩𝐮𝐭𝐚𝐜𝐢𝐨́𝐧  »  ${myrep2}
💰  𝐃𝐢𝐧𝐞𝐫𝐨     »  ₹${saldo} 𝐑𝐮𝐩𝐢𝐚𝐬
📈  𝐍𝐢𝐯𝐞𝐥       »  ${Mnv} ➜ ${Mnv + 1}
📚  𝐄𝐗𝐏         »  ${Xp} / ${Rxxp + 1000}
╚══✦❖【 𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐨 】❖✦══╝
▰▰ ${Mrxp} ▰▰
`

await sock.sendMessage(from,{
image: { url: foto },
caption: Mp,
mentions: [sender]
},{ quoted: info })

}
break
//comando tragamonedas 
case 'tragamonedas':
case 'tragamoneda':
if (!isReg) return enviar("Debes registrarte para jugar.");
const apuestas = 1; // Coste por jugar
if (coins < apuestas) return enviar("No tienes suficientes Coins 🪙 para jugar.");

const ahora = Date.now();
const tiempoGuardado = timeClaimTraga(sender) || 0;
const tiempoRestante = tiempoGuardado - ahora;

if (tiempoRestante > 0) {
    return await enviar(`[❗] 𝙴𝚂𝙿𝙴𝚁𝙴 ${runtime(tiempoRestante / 1000)} para volver a jugar.`);
} else {
    const espera = 8 * 60 * 60 * 1000; // 8 horas
    await addClaimTraga(sender, espera);
}


// Restar una moneda por jugar
await delkoin(sender, apuestas);

// Lista de símbolos para la tragamonedas
const simbolos = ['🥕', '🐰', '🐸', '🦊', '🐱', '🍋', '🔔', '🍒', '🍉', '🍌'];

// Generar filas aleatorias
const obtenerFila = () => [
    simbolos[Math.floor(Math.random() * simbolos.length)],
    simbolos[Math.floor(Math.random() * simbolos.length)],
    simbolos[Math.floor(Math.random() * simbolos.length)]
];

// Generar las tres filas
const filaArriba = obtenerFila();
const filaAbajo = obtenerFila();

let filaCentro;
const probabilidad = Math.random(); // Número entre 0 y 1

// 60% de probabilidad de que los tres símbolos del centro sean iguales
if (probabilidad < 0.6) {
    const simboloGanador = simbolos[Math.floor(Math.random() * simbolos.length)];
    filaCentro = [simboloGanador, simboloGanador, simboloGanador]; // Hacer que las 3 sean iguales
} else {
    filaCentro = obtenerFila(); // Si no, generar aleatoriamente
}

// Verificar si el usuario ganó
const esGanador = filaCentro[0] === filaCentro[1] && filaCentro[1] === filaCentro[2];

let resultadoMensaje = "😢 Has perdido... Inténtalo de nuevo dentro de 8 horas.";
let premioTexto = "";

// Si gana, recibe aleatoriamente Coins o EXP entre 5 y 10
if (esGanador) {
    const premioCantidad = Math.floor(Math.random() * 6) + 5; // Número aleatorio entre 5 y 10
    const tipoPremio = Math.random() < 0.5 ? 'coins' : 'exp'; // 50% de probabilidad para cada tipo

    if (tipoPremio === 'coins') {
        await addkoin(sender, premioCantidad);
        premioTexto = `🎉 Recibiste ${premioCantidad} Coins 🪙.`;
    } else {
        await addXp(sender, premioCantidad);
        premioTexto = `📚 Recibiste ${premioCantidad} de EXP.`;
    }

    resultadoMensaje = "🎉 ¡Has ganado! 🎉";
}

// Construcción del mensaje de respuesta
const mensajeCasino = `
         *༻  𝙏𝙍𝘼𝙂𝘼𝙈𝙊𝙉𝙀𝘿𝘼𝙎 ༺*
            ┏━━━━┛🎰┗━━━━┓
             ||   【${filaArriba[0]}】【${filaArriba[1]}】【${filaArriba[2]}】   ||
           ◢◞───────────◟◣
        █ ||   【${filaCentro[0]}】【${filaCentro[1]}】【${filaCentro[2]}】   || █
           ◥◝───────────◜◤
             ||   【${filaAbajo[0]}】【${filaAbajo[1]}】【${filaAbajo[2]}】   ||
            ┗━━━━┓🎰┏━━━━┛
   🪙◆━━━━━━━▣✦▣━━━━━━━━◆🪙
Has gastado ${apuestas} Coin 🪙.
${resultadoMensaje}
${premioTexto}
`;

// Enviar el mensaje después de 3 segundos
setTimeout(() => {
    enviar(mensajeCasino);
}, 3000);

break;



case"dayli": case "daily":
if(!isGroup) return
if(!isReg) return 
const dayli = checkDayli(sender)
if(dayli) {
const ahora = Date.now()
const time = timeDayli(sender)
const result = ahora - time
const resultado = (0 - result) / 1000;
return sock.sendMessage(from,{text : `Espere ${runtime(resultado)} para su nueva recompensa`},{quoted : info})
} else {
const time = 24* 60* 60* 1000
await addDayli(sender,time)
const montoExperiencia = 5
const monto = 1
enviar(`
⏳🪙 𝐑𝐄𝐂𝐎𝐌𝐏𝐄𝐍𝐒𝐀 𝐃𝐈𝐀𝐑𝐈𝐀 🪙⏳

𝑮𝒂𝒏𝒂𝒔𝒕𝒆 ${monto} 𝑪𝒐𝒊𝒏𝒔 𝒚 ${montoExperiencia} 𝒅𝒆 𝑬𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒊𝒂.
`)
await addkoin(sender,monto)
await addXp(sender,montoExperiencia)
}
break

 

case 'reg': case 'registrarme': case 'registrame': case 'rg':
    if (isReg) return enviar(respuesta.yaregistro)
    const nombre = pushname
    await AddReg(sender, nombre)
    sock.sendMessage(from, {
        image: { url: JpgBot },
        caption: `★━━━━★━━━━★★━━━━★
         *༻  𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎  ༺*
🎉𝑅𝑒𝑔𝑖𝑠𝑡𝑟𝑜 𝑐𝑜𝑚𝑝𝑙𝑒𝑡𝑎𝑑𝑜 *${nombre}* 🥳
🪙𝑹𝒆𝒄𝒊𝒃𝒊𝒔𝒕𝒆 *₹50 Rupias* 🪙 𝒄𝒐𝒎𝒐 𝑹𝒆𝒈𝒂𝒍𝒐 𝒅𝒆 𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒂.
◆━━━━━━━▣✦▣━━━━━━━━◆`
    }, { quoted: info })
    break


case 'levelup': {
const XpR = xpOfsender(sender)
const Rxxp = Rxp(sender)
if(XpR >= Rxxp + 1000) {
await addLevel(sender , 1)
sleep(100)
await addkoin(sender,10)
sleep(100)
await addXp(sender,100)
sleep(100)
await addRxp(sender,1000)
const Mup = ` 
        ★━━━ 𝐒𝐔𝐁𝐈𝐒𝐓𝐄 𝐃𝐄 𝐍𝐈𝐕𝐄𝐋 ━━━★
✪ @${sender.split('@')[0]}
🎉 ¡𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔 𝑯𝒂𝒛 𝒅𝒆𝒔𝒃𝒍𝒐𝒒𝒖𝒆𝒂𝒅𝒐 𝒖𝒏 𝒏𝒖𝒆𝒗𝒐 𝒓𝒂𝒏𝒈𝒐! 💪
`
sock.sendMessage(from,{text : Mup , mentions : [sender]},{quoted : info})
} else {
enviar(`
❌ 𝑬𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒊𝒂 𝒊𝒏𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆. ${pushname} 𝒅𝒆𝒃𝒆𝒓𝒂𝒔 𝒆𝒏𝒕𝒓𝒆𝒏𝒂𝒓 𝒎𝒂𝒔 𝒔𝒆𝒈𝒖𝒊𝒅𝒐. 
`)
}
}
break




case 'minar' : {
if(!isReg) return enviar(respuesta.registro)
if(!isGroup) return enviar(respuesta.grupos)
const isMin = checkMinar(sender)
if(isMin) {
const ahora = Date.now()
const time = timeMinar(sender)
const result = ahora - time
const resultado = (0 - result) / 1000;
return enviar(`𝑪𝒉𝒂𝒎𝒃𝒆𝒂𝒏𝒅𝒐... ${runtime(resultado)} `)
} else {
const time = 24* 60* 60* 1000
await addMinar(sender,time)
const numbeR = [5, 6, 7, 8, 9, 10];
const randomIndex = Math.floor(Math.random() * numbeR.length);
const monto = numbeR[randomIndex];
enviar(`
               ★━━━ 𝐌𝐈𝐍𝐀𝐍𝐃𝐎... ━━━★
💰 Descubriste oro puro y obtuviste *₹${monto} Rupias* 
💬 ❝ 🌟 𝑮𝒓𝒂𝒄𝒊𝒂𝒔 𝒂𝒍 𝑮𝒓𝒆𝒎𝒊𝒐 𝒅𝒆 𝑴𝒊𝒏𝒆𝒓𝒐𝒔 ⛏ 𝒔𝒆 𝒈𝒂𝒓𝒂𝒏𝒕𝒊𝒛𝒂 𝑺𝒖𝒆𝒍𝒅𝒐 𝑴𝒊𝒏𝒊𝒎𝒐 𝒅𝒆 *₹5 Rupias* 🪙.❞

⏳ 𝑽𝒖𝒆𝒍𝒗𝒆 𝒆𝒏 24 𝒉𝒐𝒓𝒂𝒔.
`)
await addkoin(sender,monto)
}
}
break 


    case "ruleta": {
if (!q) return enviar(`Indique un monto para apostar, ejemplo .ruleta 4`);
if (!isReg) return enviar(respuesta.registro)
const montto = q
const monto = (montto * 1) / 1
if (isNaN(monto)) return enviar(`Indique un monto válido en coins`);
if (monto > MoneyOfSender(sender)) return enviar(`No tienes suficiente dinero`);
if (monto > 5) return enviar('La apuesta no debe ser mayor a 5 Rupias');
const isMinxxx = checkRuleta(sender)
if(isMinxxx) {
const ahora = Date.now()
const time = timeRuleta(sender)
const result = ahora - time
const resultado = (0 - result) / 1000;
return enviar(`Espere... ${runtime(resultado)} `)
} else {
const time = 24* 60* 60* 1000
await addRuleta(sender,time)
const ppt = ["muere", "vive"]; // Posibilidades
const pptb = ppt[Math.floor(Math.random() * ppt.length)];  // Elección aleatoria del sistema
let vit;

// Modo Duelo Letal
if (pptb === "muere") {
    vit = `💭「𝙍𝙖𝙯𝙚𝙧, 𝙚𝙡 𝙎𝙞𝙣 𝙈𝙞𝙚𝙙𝙤 🐺 𝙖𝙥𝙪𝙣𝙩𝙖 𝙖 𝙡𝙖 𝙘𝙖𝙗𝙚𝙯𝙖 𝙙𝙚 ${pushname} 😨🔫」
💭「𝙍𝙖𝙯𝙚𝙧 🐺 𝙖𝙥𝙧𝙚𝙩𝙖 𝙚𝙡 𝙜𝙖𝙩𝙞𝙡𝙡𝙤... 💥 𝘽𝙊𝙊𝙈!」
💭「${pushname} 𝙝𝙖 𝙘𝙖í𝙙𝙤 𝙮 𝙥𝙚𝙧𝙙𝙞ó ${monto} Rupias 🪙」`;
    await delkoin(sender, monto);
    // El jugador pierde
} else if (pptb === "vive") {
    vit = `💭「𝙍𝙖𝙯𝙚𝙧, 𝙚𝙡 𝙎𝙞𝙣 𝙈𝙞𝙚𝙙𝙤 🐺 𝙖𝙥𝙪𝙣𝙩𝙖 𝙖 𝙡𝙖 𝙘𝙖𝙗𝙚𝙯𝙖 𝙙𝙚 ${pushname} 😨🔫」
💭「𝙍𝙖𝙯𝙚𝙧 🐺 𝙖𝙥𝙧𝙚𝙩𝙖 𝙚𝙡 𝙜𝙖𝙩𝙞𝙡𝙡𝙤... 💥 𝘽𝙊𝙊𝙈!」
💭「𝙀𝙨 𝙪𝙣𝙖 𝙗𝙧𝙤𝙢𝙖, ${pushname} 𝙨𝙤𝙗𝙧𝙚𝙫𝙞𝙫𝙚 𝙮 𝙜𝙖𝙣𝙖 ${monto} Rupias 🪙」`;
    await addkoin(sender, monto);
    // El jugador gana
}

const datatt = `
╭━━━╾⭑✦  ✦⭑╼━━━╮
         ⌬ 𝙍𝙐𝙇𝙀𝙏𝘼 𝙍𝙐𝙎𝘼 ⌬
${vit}
⌛ 𝙑𝙪𝙚𝙡𝙫𝙚 𝙚𝙣 24 𝙝𝙤𝙧𝙖𝙨...
╰━━━╾⭑✦ ⬤ ✦⭑╼━━━╯
`;


enviar(datatt);
}
}
        break




case "pescar": {
if (q) return enviar(`no ponga ninguna palabra solo /pescar`);
if (!isReg) return enviar(respuesta.registro)
const isMinxxx = checkPescar(sender)
if(isMinxxx) {
const ahora = Date.now()
const time = timePescar(sender)
const result = ahora - time
const resultado = (0 - result) / 1000;
return enviar(`Espere... ${runtime(resultado)} `)
} else {
const time = 8 * 60 * 60 * 1000;
await addPescar(sender,time)
const ppt = ["delfin", "pulpo","pez","pez2","pez3","zapato"]; // Posibilidades
const pptb = ppt[Math.floor(Math.random() * ppt.length)];  // Elección aleatoria del sistema
let vit;

// Cazador Marino
if (pptb === "delfin") {
    vit = `💭「𝙃𝙖𝙨 𝙖𝙩𝙧𝙖𝙥𝙖𝙙𝙤 𝙪𝙣 🦈 𝙮 𝙖𝙡 𝙫𝙚𝙣𝙙𝙚𝙧𝙡𝙤 𝙖 𝙆𝙖𝙞 🐯 𝙜𝙖𝙣𝙖𝙨 20 𝙙𝙚 𝙀𝙓𝙋 📚」`;
    await addXp(sender, 20);
    // El jugador gana
} else if (pptb === "pulpo") {
    vit = `💭「𝙃𝙖𝙨 𝙖𝙩𝙧𝙖𝙥𝙖𝙙𝙤 𝙪𝙣 🐙 𝙮 𝙖𝙡 𝙫𝙚𝙣𝙙𝙚𝙧𝙡𝙤 𝙖 𝙆𝙖𝙞 🐯 𝙧𝙚𝙘𝙞𝙗𝙚𝙨 8 𝙍𝙪𝙥𝙞𝙖𝙨 💎」`;
    await addkoin(sender, 8);
} else if (pptb === "pez") {
    vit = `💭「𝙃𝙖𝙨 𝙖𝙩𝙧𝙖𝙥𝙖𝙙𝙤 𝙪𝙣 🐠 𝙮 𝙖𝙡 𝙫𝙚𝙣𝙙𝙚𝙧𝙡𝙤 𝙖 𝙆𝙖𝙞 🐯 𝙧𝙚𝙘𝙞𝙗𝙚𝙨 4 𝙍𝙪𝙥𝙞𝙖𝙨 💎 𝙮 5 𝙙𝙚 𝙀𝙓𝙋 📚」`;
    await addkoin(sender, 4);
    await addXp(sender, 5);
} else if (pptb === "pez2") {
    vit = `💭「𝙃𝙖𝙨 𝙖𝙩𝙧𝙖𝙥𝙖𝙙𝙤 𝙪𝙣 🐟 𝙮 𝙖𝙡 𝙫𝙚𝙣𝙙𝙚𝙧𝙡𝙤 𝙖 𝙆𝙖𝙞 🐯 𝙧𝙚𝙘𝙞𝙗𝙚𝙨 3 𝙍𝙪𝙥𝙞𝙖𝙨 💎 𝙮 3 𝙙𝙚 𝙀𝙓𝙋 📚」`;
    await addkoin(sender, 3);
    await addXp(sender, 3);
} else if (pptb === "pez3") {
    vit = `💭「𝙃𝙖𝙨 𝙖𝙩𝙧𝙖𝙥𝙖𝙙𝙤 𝙪𝙣 🐡 𝙮 𝙖𝙡 𝙫𝙚𝙣𝙙𝙚𝙧𝙡𝙤 𝙖 𝙆𝙖𝙞 🐯 𝙧𝙚𝙘𝙞𝙗𝙚𝙨 1 𝙍𝙪𝙥𝙞𝙖 💎 𝙮 2 𝙙𝙚 𝙀𝙓𝙋 📚」`;
    await addkoin(sender, 1);
    await addXp(sender, 2);
} else if (pptb === "zapato") {
    vit = `💭「𝙃𝙖𝙨 𝙖𝙩𝙧𝙖𝙥𝙖𝙙𝙤 𝙪𝙣 🥾 𝙮 𝙖𝙡 𝙩𝙧𝙖𝙩𝙖𝙧 𝙙𝙚 𝙫𝙚𝙣𝙙𝙚𝙧𝙡𝙤 𝙖 𝙆𝙖𝙞 🐯, 𝙚́𝙡 𝙨𝙚 𝙧𝙞𝙚 🤣 𝙙𝙚 𝙩𝙞 🥲」`;
}

const datatt = `
╔════ ⭑✦.   ✦⭑ ════╗
         ❖ 𝙋𝙀𝙎𝘾𝘼 𝙀𝙉 𝙀𝙇 𝙈𝘼𝙍 ❖
${vit}
⌛ 𝙑𝙪𝙚𝙡𝙫𝙚 𝙚𝙣 8 𝙝𝙤𝙧𝙖𝙨...
╚════ ⭑✦ ❖ ✦⭑ ════╝
`;


enviar(datatt);
}
}
        break







case 'listreg' : {
R_ = []
teks = '*REGISTRADOS* 😼\n'
for(let R of registro){
teks += `• @${R.id.split('@')[0]}\n`
R_.push(R.id)
}
teks += '• ' + registro.length
mentions(teks,R_,true)
}
break 




case 'regalar':
case 'tradecoin':
case 'tradecoins':
case 'enviarcoins':
case 'enviar': {
  if (!isGroup) return enviar("⚠️ Este comando solo funciona en grupos.");

  (async () => {
    try {
      const mencionado = obtenerMencionado(info); // destinatario
      const emisor = sender; // quien envía las monedas
      const monto = Number(args[1]);

      if (!mencionado) return enviar("⚠️ Debes mencionar a alguien para enviarle monedas.\nEj: .regalar @usuario 100");
      if (mencionado === emisor) return enviar("⚠️ No puedes enviarte monedas a ti mismo.");
      if (isNaN(monto) || monto <= 0) return enviar("⚠️ Ingresa una cantidad válida de monedas.\nEj: .regalar @usuario 100");

      const saldoEmisor = await MoneyOfM(emisor);
      if (saldoEmisor < monto) return enviar("❌ No tienes suficientes monedas para hacer esta transferencia.");

      // Realizar transferencia
      await delkoin(emisor, monto);
      await addkoin(mencionado, monto);
      await sleep(100);

      const nuevoSaldo = await MoneyOfM(emisor);
      enviar(`✅ Transferencia completada.\nUsted envió *₹${monto} Rupias.*`, {
        mentions: [emisor, mencionado]
      });
    } catch (e) {
      enviar('❌ Error: ' + e.message);
    }
  })();
}
break;









case 'rep' : case 'mirep' : case 'mireputacion':
if(!isReg) return enviar(respuesta.registro)
const myrep = repUser(sender)
const mitulamide30milimetros = `
╭━━━╾⭑✦REPUTACIÓN✦⭑╼━━━╮
𝑳𝒂 𝑹𝒆𝒑𝒖𝒕𝒂𝒄𝒊𝒐𝒏 𝒅𝒆 ${pushname} 𝒆𝒔 𝒅𝒆 ${myrep}.
`
if (myrep < 20) {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/NfJfvsBW/Untitled-05-12-2024-09-16-50-1.png" },
        caption: mitulamide30milimetros
    }, { quoted: info });
} else if (myrep >= 21 && myrep <= 40) {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/PxjdQNQ8/Untitled-05-12-2024-09-16-50-2.png" },
        caption: mitulamide30milimetros
    }, { quoted: info });
} else if (myrep >= 41 && myrep <= 60) {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/HL5pMbXg/Untitled-05-12-2024-09-16-50-3.png" },
        caption: mitulamide30milimetros
    }, { quoted: info });
} else if (myrep >= 61 && myrep <= 80) {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/brWX3NWB/IMG-20241223-WA0014.jpg" },
        caption: mitulamide30milimetros
    }, { quoted: info });
} else {
    await sock.sendMessage(from, {
        image: { url: "https://i.postimg.cc/Cx9hdcZ7/Untitled-05-12-2024-09-16-50-5.png" },
        caption: mitulamide30milimetros
    }, { quoted: info });
}

break 

case 'rank' : case 'rankrep' : 
if(!isGroup) return 
if(!isGroupAdmins) return enviar(respuesta.admin)
let teks2 = `
▭▬ ۞ ▬▛ ༼⁠ᘛ 𝑳𝒖𝒏𝒂-𝑩𝒐𝒕 ᘚ༽ ▜▬ ۞ ▬▭
*༻❦ 𝐑𝐀𝐍𝐊𝐈𝐍𝐆 𝐃𝐄 𝐑𝐄𝐏𝐔𝐓𝐀𝐂𝐈𝐎𝐍 ❦༺\n`;
registro.sort((a, b) => b.rep - a.rep) // Ordena de mayor a menor
       .slice(0, 10) // Toma solo los 10 primeros
       .forEach((usuario, indice) => {
           teks2 += `• 🚩Numero ${indice + 1}: *${usuario.nombre}* | *${usuario.rep}* de Reputación\n`;
       });
enviar(teks2)
break 

case 'rankcoins': {
  if (!isGroup) return;
  if(!isGroupAdmins) return enviar(respuesta.admin)
  const pathi = './settings/Grupo/Json/registros.json';

  // Leer los datos actualizados en el momento
  const registro = JSON.parse(fs.readFileSync(pathi, 'utf8'));

  let rankingMensaje = `*🏆 RANKING DE MILLONARIOS*\n\nTOP.  USUARIO.   RUPIAS\n\n`;

  // Convertir a array si registro es un objeto
  const rankingArray = Array.isArray(registro)
    ? registro
    : Object.entries(registro).map(([jid, data]) => ({
        nombre: data.nombre || jid.split('@')[0],
        dinero: data.dinero || 0,
      }));

  rankingArray
    .sort((a, b) => b.dinero - a.dinero)
    .slice(0, 10)
    .forEach((usuario, index) => {
      rankingMensaje += `• ${index + 1}. *${usuario.nombre}* ➫ _${usuario.dinero}_ Rupias\n`;
    });

  enviar(rankingMensaje);
}
break;




case 'ranknivel':{
if(!isGroup) return 
if(!isGroupAdmins) return enviar(respuesta.admin)
let teks = `
*RANKING DE NIVEL* :
TOP.   USUARIO.   NIVEL\n`
registro.sort((a,b) => b.nivel - a.nivel).forEach((usuario,index) => {
teks +=`• ${index + 1 }.     *${usuario.nombre}*  ➫  _*${usuario.nivel}*_\n`
});
enviar(teks)
}
break 

case "tienda":

if (!q) return enviar(`
✦━───༺༻───━✦
🎀❖ 𝓣𝓘𝓔𝓝𝓓𝓐 ❖🎀

🐾💬 "𝓑𝓲𝓮𝓷𝓿𝓮𝓷𝓲𝓭𝓸 𝓪 𝓵𝓪 𝓽𝓲𝓮𝓷𝓭𝓪 🌙"
━━━━━━━━━━━━━━━
🍀 𝘼𝙧𝙩𝙞𝙘𝙪𝙡𝙤 1️⃣:
👉 *.tienda 1* 👈
🏷️ 50 𝓒𝓸𝓲𝓷𝓼 🪙 🔁 200 𝓔𝓧𝓟 📚

🌟 𝘼𝙧𝙩𝙞𝙘𝙪𝙡𝙤 2️⃣:
👉 *.tienda 2* 5 Los dragones 👈
🏷️ 50 𝓒𝓸𝓲𝓷𝓼 🪙 🔁 𝓒𝓪𝓶𝓫𝓲𝓪 𝓷𝓸𝓶𝓫𝓻𝓮 𝓭𝓮 𝓻𝓪𝓷𝓰𝓸𝓼
( .𝓽𝓲𝓮𝓷𝓭𝓪 2 + 𝓷𝓲𝓿𝓮𝓵 𝓭𝓮 𝓻𝓪𝓷𝓰𝓸 + 𝓷𝓸𝓶𝓫𝓻𝓮𝓝𝓾𝓮𝓿𝓸 )

💎 𝘼𝙧𝙩𝙞𝙘𝙪𝙡𝙤 3️⃣:
👉 *.emojimix 😇+😈* 👈
🏷️ 1 𝓒𝓸𝓲𝓷 🪙 🔁 𝓒𝓸𝓶𝓫𝓲𝓷𝓪 🌀 𝓮𝓶𝓸𝓳𝓲𝓼.

🎨 𝘼𝙧𝙩𝙞𝙘𝙪𝙡𝙤 4️⃣:
👉 *.sticker* 👈
🏷️ 1 𝓒𝓸𝓲𝓷 🪙 🔁 𝓒𝓻𝓮𝓪 𝓼𝓽𝓲𝓬𝓴𝓮𝓻𝓼 𝓬𝓸𝓷 𝓯𝓸𝓽𝓸𝓼 𝓸 𝓖𝓘𝓕𝓼.

✦━───༺༻───━✦
`);


if (q.startsWith("1")) {
    if (coins < 50) return enviar("❌ No tienes suficientes Reales para hacer esta compra. Necesitas al menos 50 Rupias.");
    await delkoin(sender, 50);
    await addXp(sender, 200);

    return enviar(`🐱💬 Gracias ${pushname}, cambiaste 50 Rupias por 200 EXP.`);
}

if (q.startsWith("2")) {
    const args = q.split(" ");
    const nivel = parseInt(args[1]);
    const nuevoNombre = args.slice(2).join(" ");

    if (isNaN(nivel) || !nuevoNombre) {
        return enviar("❌ Usa el comando correctamente: .tienda 2 <nivel> <nuevo nombre>\nEjemplo: .tienda 2 8 Los Poderosos");
    }

    if (coins < 50) {
        return enviar("❌ No tienes suficientes Coins para cambiar el nombre del rango. Necesitas 50 Coins.");
    }

    const path = './settings/rangos.json';
    let rangosData;

    try {
        rangosData = JSON.parse(fs.readFileSync(path));
    } catch (e) {
        return enviar("⚠️ Error al leer los rangos. Asegúrate de que el archivo exista y esté bien formado.");
    }

    rangosData[nivel] = nuevoNombre;

    try {
        fs.writeFileSync(path, JSON.stringify(rangosData, null, 2));
        await delkoin(sender, 50);

        return enviar(`✅ ¡Perfecto, ${pushname}!\nHas cambiado el rango del nivel *${nivel}* a:\n✨ *${nuevoNombre}* ✨\nY se descontaron 50 Rupias 🪙`);
    } catch (e) {
        return enviar("⚠️ No se pudo guardar el nuevo nombre. Intenta de nuevo.");
    }
}

break;

//DESCARGAS


//nesecitas api

case 'playvideo':
case 'ytmp4': {
if(!isReg) return enviar(respuesta.registro)
  if (!q)
    return enviar('❌ Escribe un nombre o link de YouTube');
  try {



    // Endpoint info del video
    const apiURL =
      `${APINAUFRA}/ytinfo?apikey=${NAUFRA_KEY}&url=${encodeURIComponent(q.trim())}`;

    const apiData = await fetchJson(apiURL);

    // SI YTINFO FUNCIONA
    if (apiData && apiData.Estado === "online") {

      const data = apiData.Resultado;

      await sock.sendMessage(from, {
        image: { url: data.Miniatura },
        caption: `「✪」 *${data.Titulo}*\n\n*ⴵ Duración:* ${data.Duracion}\n*✐ Canal:* ${data.Canal.Nombre}\n*👁 Vistas:* ${data.Visualizaciones}\n*🜸 Link:* ${data.EnlaceYoutube}`
      }, { quoted: info });

      await sock.sendMessage(from, {
        video: { url: `${data.EnlaceDescarga}&apikey=${NAUFRA_KEY}` }, // 🔑 Agregar key también aquí
        mimetype: 'video/mp4',
        caption: data.Titulo
      }, { quoted: info });

      return;
    }

    // SI YTINFO FALLA → DESCARGA IGUAL
    const videoURL =
      `${APINAUFRA}/ytmp4?apikey=${NAUFRA_KEY}&url=${encodeURIComponent(q.trim())}`;

    await sock.sendMessage(from, {
      video: { url: videoURL },
      mimetype: 'video/mp4',
      caption: q
    }, { quoted: info });

  } catch (e) {

    console.log("ERROR PLAYVIDEO:", e);

    enviar('❌ Error descargando video');

  }

}
break;

case 'playdoc': {
if(!isReg) return enviar(respuesta.registro)
if (!q)
return enviar('❌ Escribe un nombre o link de YouTube');



try {

const apiURL =
`${APINAUFRA}/ytinfo?apikey=${NAUFRA_KEY}&url=${encodeURIComponent(q.trim())}`;

const apiData = await fetchJson(apiURL);

// SI YTINFO FUNCIONA
if (apiData && apiData.Estado === "online") {

const data = apiData.Resultado;

await sock.sendMessage(from, {
image: { url: data.Miniatura },
caption: `「✪」 *${data.Titulo}*

*ⴵ Duración:* ${data.Duracion}
*✐ Canal:* ${data.Canal.Nombre}
*👁 Vistas:* ${data.Visualizaciones}
*🜸 Link:* ${data.EnlaceYoutube}
`
}, { quoted: info });


await sock.sendMessage(from, {
document: { url: `${data.EnlaceDescarga}&apikey=${NAUFRA_KEY}` },
mimetype: 'video/mp4',
fileName: `${data.Titulo}.mp4`
}, { quoted: info });

return;
}


// SI YTINFO FALLA → DESCARGA IGUAL
const videoURL =
`${APINAUFRA}/ytmp4?apikey=${NAUFRA_KEY}&url=${encodeURIComponent(q.trim())}`;

await sock.sendMessage(from, {
document: { url: videoURL },
mimetype: 'video/mp4',
fileName: `video.mp4`
}, { quoted: info });

} catch (e) {

console.log("ERROR MP4DOC:", e);

enviar('❌ Error enviando documento');

}

}
break;

case 'play2': {
if(!isReg) return enviar(respuesta.registro)
if (!q) return enviar('❌ Escribe un nombre o link de YouTube')

try {

let query = encodeURIComponent(q.trim())

// INFO
let apiURL = `${APINAUFRA}/ytinfo?apikey=${NAUFRA_KEY}&url=${query}`
let apiData = await fetchJson(apiURL)

if (apiData && apiData.Estado === "online" && apiData.Resultado) {

let data = apiData.Resultado

await sock.sendMessage(from, {
image: { url: data.Miniatura },
caption: `「✪」 *${data.Titulo}*

ⴵ Duración: ${data.Duracion}
✐ Canal: ${data.Canal.Nombre}
👁 Vistas: ${data.Visualizaciones}

📥 Descargando audio (modo iPhone)... Esto será un poco más lento que el /play, así que usa esto solo si tienes iPhone`
}, { quoted: info })

// AUDIO COMPATIBLE CON IPHONE
await sock.sendMessage(from, {
audio: {
url: `${APINAUFRA}/ytmp3file?apikey=${NAUFRA_KEY}&url=${encodeURIComponent(data.EnlaceYoutube)}`
},
mimetype: 'audio/mpeg',
ptt: false
}, { quoted: info })

return
}

// FALLBACK
await sock.sendMessage(from, {
audio: {
url: `${APINAUFRA}/ytmp3file?apikey=${NAUFRA_KEY}&url=${query}`
},
mimetype: 'audio/mpeg',
ptt: false
}, { quoted: info })

} catch (e) {

console.log("ERROR PLAY2:", e)
enviar('❌ Error descargando audio')

}

}
break


case 'play': {
if(!isReg) return enviar(respuesta.registro)
if (!q) return enviar('❌ Escribe un nombre o link de YouTube')

try {

let query = encodeURIComponent(q.trim())

// INFO DEL VIDEO
let apiURL = `${APINAUFRA}/ytinfo?apikey=${NAUFRA_KEY}&url=${query}`

let apiData = await fetchJson(apiURL)

// SI LA API RESPONDE BIEN
if (apiData && apiData.Estado === "online" && apiData.Resultado) {

let data = apiData.Resultado

await sock.sendMessage(from, {
image: { url: data.Miniatura },
caption: `「✪」 *${data.Titulo}*

*ⴵ Duración:* ${data.Duracion}
*✐ Canal:* ${data.Canal.Nombre}
*👁 Vistas:* ${data.Visualizaciones}
*🜸 Link:* ${data.EnlaceYoutube}

*📥 Descargando audio...*`
}, { quoted: info })

// AUDIO
await sock.sendMessage(from, {
audio: {
url: `${APINAUFRA}/ytmp3?apikey=${NAUFRA_KEY}&url=${encodeURIComponent(data.EnlaceYoutube)}`
},
mimetype: 'audio/mpeg',
ptt: false
}, { quoted: info })

return

}


// SI FALLA YTINFO → DESCARGA DIRECTO
let audioURL = `${APINAUFRA}/ytmp3?apikey=${NAUFRA_KEY}&url=${query}`

await sock.sendMessage(from, {
audio: { url: audioURL },
mimetype: 'audio/mpeg',
ptt: false
}, { quoted: info })


} catch (e) {

console.log("ERROR PLAY:", e)

enviar('❌ Error descargando música')

}

}
break





case 'fb':
case 'facebook': {
if(!isReg) return enviar(respuesta.registro)
    if (!q)
        return enviar('❌ Escribe un link de Facebook');

    

    try {

      
        // URL de descarga directa (no JSON)
        const videoURL = `${APINAUFRA}/fbvideo?apikey=${NAUFRA_KEY}&url=${encodeURIComponent(q.trim())}`;

        // Enviar video directamente al bot
        await sock.sendMessage(from, {
            video: { url: videoURL },
            mimetype: 'video/mp4',
            caption: `*🎬 Video de Facebook*\n${q}`
        }, { quoted: info });

    } catch (e) {
        console.log("ERROR FBVIDEO:", e);
        enviar('❌ Error descargando video de Facebook');
    }

}
break;


case 'tiktok': {
if(!isReg) return enviar(respuesta.registro)
    if (!q)
        return enviar('❌ Escribe un link de TikTok');

    try {

        // API key del usuario (puedes sacarla de tu DB si quieres dinámico)
        
        // Endpoint directo de descarga TikTok
        const videoURL = `${APINAUFRA}/tiktok?apikey=${NAUFRA_KEY}&url=${encodeURIComponent(q.trim())}`;

        // Opcional: miniatura y título con un endpoint /ttinfo
        // Por simplicidad aquí solo enviamos el video directamente
        await sock.sendMessage(from, {
            video: { url: videoURL },
            mimetype: 'video/mp4',
            caption: `*🎬 Video de TikTok*\n${q}`
        }, { quoted: info });

    } catch (e) {
        console.log("ERROR TIKTOK:", e);
        enviar('❌ Error descargando video de TikTok');
    }

}
break;

case 'x':
case 'twitter': {
if(!isReg) return enviar(respuesta.registro)

    if (!q)
        return enviar('❌ Escribe un link de X (Twitter)');

    try {

        // Endpoint de descarga de X
        const videoURL = `${APINAUFRA}/twitter?apikey=${NAUFRA_KEY}&url=${encodeURIComponent(q.trim())}`;

        // Enviar video directamente
        await sock.sendMessage(from, {
            video: { url: videoURL },
            mimetype: 'video/mp4',
            caption: `*🐦 Video de X (Twitter)*\n${q}`
        }, { quoted: info });

    } catch (e) {
        console.log("ERROR TWITTER:", e);
        enviar('❌ Error descargando video de X (Twitter)');
    }

}
break;

case 'mediafire': {
if(!isReg) return enviar(respuesta.registro)
    if (!q) return enviar('❌ Envia un link de MediaFire');

    enviar("📥 Descargando archivo...");

    try {

        const axios = require("axios");

        const apiURL = `${APINAUFRA}/mediafire-dl?apikey=${NAUFRA_KEY}&url=${encodeURIComponent(q)}&t=${Date.now()}`;

        const response = await axios.get(apiURL, {
            responseType: 'arraybuffer'
        });

        // Obtener nombre desde header
        let fileName = "archivo";

        const disposition = response.headers['content-disposition'];

        if (disposition && disposition.includes("filename=")) {
            fileName = disposition
                .split("filename=")[1]
                .replace(/"/g, "")
                .trim();
        }

        const mimeType = response.headers['content-type'] || 'application/octet-stream';

        await sock.sendMessage(from, {
            document: Buffer.from(response.data),
            mimetype: mimeType,
            fileName: fileName
        }, { quoted: info });

    } catch (e) {
        console.log(e);
        enviar('❌ Error descargando archivo');
    }

}
break;

case 'instagram': {
if(!isReg) return enviar(respuesta.registro)
    if (!q)
        return enviar('❌ Escribe un link de Instagram');

    try {
        // Endpoint directo de descarga Instagram
        const videoURL = `${APINAUFRA}/instagram?apikey=${NAUFRA_KEY}&url=${encodeURIComponent(q.trim())}`;

        // Enviar video directamente al bot
        await sock.sendMessage(from, {
            video: { url: videoURL },
            mimetype: 'video/mp4',
            caption: `*🎬 Video de Instagram*\n${q}`
        }, { quoted: info });

    } catch (e) {
        console.log("ERROR INSTAGRAM:", e);
        enviar('❌ Error descargando video de Instagram');
    }

}
break;


//nesecitas api
case 'pinterest':
case 'pin': {
if(!isReg) return enviar(respuesta.registro)
  if (!q)
    return enviar('❌ Escribe qué quieres buscar');

  try {

    const apiURL =
      `${APINAUFRA}/pinterest-search?apikey=${NAUFRA_KEY}&q=${encodeURIComponent(q)}&t=${Date.now()}`;

    await sock.sendMessage(from, {
      image: { url: apiURL },
      caption: `*📌 Resultado para:* ${q}`
    }, { quoted: info });

  } catch (e) {

    console.log("ERROR PINTEREST:", e);
    enviar('❌ Error buscando la imagen');

  }

}
break;


  

case 'wikipedia': case 'wiki': {
    let query = args.join(" ");
    if (!query) return enviar("⚠️ Escribe qué quieres buscar. Ejemplo: `#wikipedia perro`");
    try {
        let res = await fetchJson(`https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
        if (res && res.title && res.extract) {
            enviar(`╭ ₊˚ ✧ 📚 *WIKIPEDIA* 📚 ✧ ˚₊ ╮\n│ 🔍 *${res.title}*\n│\n│ ${res.extract}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
        } else {
            enviar("❌ No encontré resultados para eso en Wikipedia.");
        }
    } catch (e) {
        enviar("❌ Error al buscar en Wikipedia. Intenta con otra palabra.");
    }
}
break;

case 'ytsearch': case 'yts': {
    let query = args.join(" ");
    if (!query) return enviar("⚠️ Escribe qué quieres buscar en YouTube. Ejemplo: `#ytsearch ozuna`");
    try {
        const yts = require("yt-search");
        let res = await yts(query);
        if (res && res.videos.length > 0) {
            let video = res.videos[0];
            enviar(`╭ ₊˚ ✧ 🔴 *YOUTUBE* 🔴 ✧ ˚₊ ╮\n│ 🎬 *Título:* ${video.title}\n│ ⏱️ *Duración:* ${video.timestamp}\n│ 👀 *Vistas:* ${video.views}\n│ 🔗 *Link:* ${video.url}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
        } else {
            enviar("❌ No encontré resultados en YouTube.");
        }
    } catch (e) {
        enviar("❌ Error al buscar en YouTube.");
    }
}
break;

case 'horoscopo': {
    let sign = args[0] ? args[0].toLowerCase() : "";
    let validSigns = ['aries', 'tauro', 'geminis', 'géminis', 'cancer', 'cáncer', 'leo', 'virgo', 'libra', 'escorpio', 'sagitario', 'capricornio', 'acuario', 'piscis'];
    if (!validSigns.includes(sign)) {
        return enviar("⚠️ Escribe tu signo zodiacal. Ejemplo: `#horoscopo aries`");
    }
    
    let horoscopes = [
        "Hoy el universo te dice que dejes de ser tan terco/a, porque te vas a dar un golpe contra la pared. Se vienen cosas chidas pero tienes que soltar ese orgullo.",
        "Los astros te mandan una advertencia: no le escribas a tu ex hoy. Estás en un momento de brillo, no lo arruines. Mejor cómete un helado y agradece lo que tienes.",
        "Vas a recibir una sorpresa económica. Tal vez te encuentres dinero en un pantalón viejo o te paguen lo que te deben. Úsalo sabiamente, no en puras tonterías.",
        "La luna en tu signo indica que hoy vas a tener mucha energía para pelear. Mejor canalízalo limpiando tu cuarto que buena falta le hace, puerco/a.",
        "Una persona muy cercana a ti te va a revelar un secreto que cambiará tu perspectiva de las cosas. Mantén la mente abierta y no juzgues antes de tiempo.",
        "Hoy vas a andar irresistible, atrayendo miradas por donde vayas. Aprovecha ese magnetismo para conseguir lo que quieres, pero ojo con los celos que vas a despertar.",
        "Se avecina un chisme muy jugoso en tu círculo social. Solo observa y no te metas, que si te metes vas a salir salpicado/a. Cómete unas palomitas mejor.",
        "El destino te tiene preparada una oportunidad increíble en el ámbito laboral o escolar. Ponte pilas y no la dejes pasar por estar durmiendo hasta tarde."
    ];
    let dailyHoro = horoscopes[Math.floor(Math.random() * horoscopes.length)];
    
    enviar(`╭ ₊˚ ✧ 🔮 *HORÓSCOPO* 🔮 ✧ ˚₊ ╮\n│ 🌟 *Signo:* ${sign.charAt(0).toUpperCase() + sign.slice(1)}\n│\n│ ${dailyHoro}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`);
}
break;

case 'einfo': {
    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía y el gacha están desactivados en este grupo.");
    
    let userEco = getUserEco(sender);
    let gachaUser = getUserGacha(sender);
    let now = Date.now();
    
    let timeTo = (lastTime, cooldownMs) => {
        if (!lastTime) return "✅ Listo para usar";
        let elapsed = now - lastTime;
        if (elapsed >= cooldownMs) return "✅ Listo para usar";
        let remainMs = cooldownMs - elapsed;
        let h = Math.floor(remainMs / 3600000);
        let m = Math.floor((remainMs % 3600000) / 60000);
        let s = Math.ceil((remainMs % 60000) / 1000);
        let str = "";
        if (h > 0) str += `${h}h `;
        if (m > 0) str += `${m}m `;
        str += `${s}s`;
        return `⏳ Faltan ${str.trim()}`;
    };

    let txt = `╭ ₊˚ ✧ ⏱️ *INFO DE TIEMPOS* ⏱️ ✧ ˚₊ ╮\n│ 👤 *${pushname}*\n│\n`;
    txt += `│ 🎲 *Gacha (rw):* ${timeTo(gachaUser.lastRoll, 1 * 60 * 60 * 1000)}\n`;
    txt += `│ 🎁 *Diaria (daily):* ${timeTo(userEco.lastDaily, 24 * 60 * 60 * 1000)}\n`;
    txt += `│ 💼 *Trabajo (w):* ${timeTo(userEco.lastWork, 3 * 60 * 1000)}\n`;
    txt += `│ 🦝 *Crimen (crime):* ${timeTo(userEco.lastCrime, 3 * 60 * 1000)}\n`;
    txt += `│ 💋 *Fácil (slut):* ${timeTo(userEco.lastSlut, 3 * 60 * 1000)}\n`;
    txt += `│ 🥷 *Robar (steal):* ${timeTo(userEco.lastRob, 3 * 60 * 1000)}\n`;
    txt += `╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`;
    
    enviar(txt);
}
break;

case 'quieromoverelbote': {
    if (!isOwner) return enviar("⚠️ Solo el creador puede iniciar la fiesta.");
    if (!global.partyModeActive) global.partyModeActive = {};
    if (global.partyModeActive[from]) return enviar("⚠️ ¡La fiesta ya está activa aquí!");
    
    global.partyModeActive[from] = true;
    enviar("🚨 *¡ALERTA DE FIESTA!* 🚨\n¡El creador ha soltado a los monstruos del perreo! 🪩🕺💃");
    
    const axios = require('axios');
    const apiKey = "LIVDSRZULELA"; 
    
    const funnyMessages = [
        "¡Saca los prohibidos! 💃",
        "¡Ese perreo intenso! 🔥",
        "¡Hasta abajo, hasta abajo! 📉",
        "¡Nadie nos para! 🛑❌",
        "¡El que no baile es un aburrido! 😒",
        "¡Rompiendo la pista! 🔨🪩",
        "¡Más fuerte que el bajo! 🔊",
        "¡Cuidado con la cadera! 🦴",
        "¡Fiesta sin fin! ♾️",
        "¡Modo Dios del baile activado! 👼🕺"
    ];
    
    (async () => {
        while (global.partyModeActive[from]) {
            try {
                await delay(4000); 
                if (!global.partyModeActive[from]) break;
                
                let randomMsg = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
                let url = `https://g.tenor.com/v1/random?q=${encodeURIComponent("anime dance party")}&key=${apiKey}&limit=1`;
                let res = await axios.get(url);
                if (res.data.results && res.data.results.length > 0) {
                    let gifUrl = res.data.results[0].media[0].mp4.url;
                    let txt = `╭ ₊˚ ✧ 🪩 *PARTY* 🪩 ✧ ˚₊ ╮\n│ ${randomMsg}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`;
                    await sock.sendMessage(from, { video: { url: gifUrl }, gifPlayback: true, caption: txt });
                }
            } catch (e) {
                console.error("Party mode error:", e);
                await delay(3000);
            }
        }
    })();
}
break;

case 'modopartyoff': {
    if (!isOwner) return enviar("⚠️ Solo el creador puede apagar la fiesta.");
    if (!global.partyModeActive || !global.partyModeActive[from]) return enviar("⚠️ No hay ninguna fiesta activa en este momento.");
    
    global.partyModeActive[from] = false;
    enviar("🛑 *FIESTA TERMINADA* 🛑\nSe acabó lo que se daba. Todos a dormir. 😴");
}
break;

case 'angry': case 'enojado': case 'bath': case 'bite': case 'bleh': case 'blush': case 'bored': case 'aburrido':
case 'clap': case 'aplaudir': case 'coffee': case 'cafe': case 'cry': case 'cuddle': case 'dance': case 'dramatic':
case 'drama': case 'drunk': case 'eat': case 'comer': case 'facepalm': case 'happy': case 'feliz': case 'hug':
case 'impregnate': case 'preg': case 'preñar': case 'kill': case 'kiss': case 'muak': case 'kisscheek': case 'beso':
case 'laugh': case 'lick': case 'love': case 'amor': case 'pat': case 'poke': case 'pout': case 'punch': case 'run':
case 'sad': case 'triste': case 'scared': case 'seduce': case 'shy': case 'timido': case 'slap': case 'sleep':
case 'smoke': case 'spit': case 'escupir': case 'step': case 'pisar': case 'think': case 'walk':
{
    const axios = require('axios');
    const apiKey = "LIVDSRZULELA"; // Tenor API Key publica
    let mentioned = obtenerMencionado(info);
    
    const reactionTexts = {
        angry: { single: "{p} está muy enojado/a en este momento.", group: "{p} comparte su enojo con {m}." },
        bath: { single: "{p} se está dando un buen baño.", group: "{p} se está bañando con {m}. ¡Qué íntimo!" },
        bite: { single: "{p} tiene ganas de morder a alguien.", group: "{p} ha mordido a {m}." },
        bleh: { single: "{p} está sacando la lengua.", group: "{p} le saca la lengua a {m}." },
        blush: { single: "{p} se ha sonrojado.", group: "{p} se sonroja por culpa de {m}." },
        bored: { single: "{p} está muy aburrido/a.", group: "{p} se aburre junto a {m}." },
        clap: { single: "{p} está aplaudiendo.", group: "{p} le aplaude a {m}." },
        coffee: { single: "{p} está tomando un rico café.", group: "{p} comparte un café con {m}." },
        cry: { single: "{p} está llorando en este momento.", group: "{p} llora desconsoladamente junto a {m}." },
        cuddle: { single: "{p} quiere acurrucarse.", group: "{p} se acurruca tiernamente con {m}." },
        dance: { single: "{p} se ha puesto a bailar.", group: "{p} baila alegremente con {m}." },
        dramatic: { single: "{p} está siendo muy dramático/a.", group: "{p} le hace un drama a {m}." },
        drunk: { single: "{p} está un poco ebrio/a.", group: "{p} se ha emborrachado con {m}." },
        eat: { single: "{p} está comiendo algo delicioso.", group: "{p} comparte su comida con {m}." },
        facepalm: { single: "{p} se ha dado una palmada en la cara.", group: "{p} se da un facepalm por lo que hizo {m}." },
        happy: { single: "{p} está saltando de felicidad.", group: "{p} está muy feliz de estar con {m}." },
        hug: { single: "{p} necesita un abrazo.", group: "{p} le da un fuerte abrazo a {m}." },
        impregnate: { single: "{p} está en modo reproductivo...", group: "{p} ha dejado en embarazo a {m} 😳." },
        kill: { single: "{p} tiene intenciones asesinas.", group: "{p} ha asesinado a {m}." },
        kiss: { single: "{p} está mandando besos.", group: "{p} le da un beso apasionado a {m}." },
        kisscheek: { single: "{p} da un tierno beso en la mejilla.", group: "{p} le da un besito en la mejilla a {m}." },
        laugh: { single: "{p} no para de reírse.", group: "{p} se ríe a carcajadas de {m}." },
        lick: { single: "{p} está lamiendo algo.", group: "{p} lame a {m} de forma extraña." },
        love: { single: "{p} siente mucho amor.", group: "{p} está profundamente enamorado/a de {m}." },
        pat: { single: "{p} busca caricias.", group: "{p} acaricia tiernamente la cabeza de {m}." },
        poke: { single: "{p} está picando a alguien.", group: "{p} le da toquecitos a {m} para llamar su atención." },
        pout: { single: "{p} está haciendo pucheros.", group: "{p} le hace pucheros a {m}." },
        punch: { single: "{p} está lanzando puñetazos.", group: "{p} le da un fuerte puñetazo a {m}." },
        run: { single: "{p} ha salido corriendo.", group: "{p} huye corriendo de {m}." },
        sad: { single: "{p} está muy triste.", group: "{p} comparte su tristeza con {m}." },
        scared: { single: "{p} está temblando de miedo.", group: "{p} está asustado/a por culpa de {m}." },
        seduce: { single: "{p} está en modo seductor.", group: "{p} intenta seducir a {m}." },
        shy: { single: "{p} se siente muy tímido/a.", group: "{p} siente mucha timidez al estar con {m}." },
        slap: { single: "{p} está repartiendo bofetadas.", group: "{p} le da una bofetada a {m}." },
        sleep: { single: "{p} se ha quedado dormido/a.", group: "{p} duerme plácidamente junto a {m}." },
        smoke: { single: "{p} está fumando un cigarrillo.", group: "{p} fuma un cigarrillo con {m}." },
        spit: { single: "{p} acaba de escupir.", group: "{p} le escupe a {m}. ¡Qué asco!" },
        step: { single: "{p} está pisando fuerte.", group: "{p} pisotea a {m} sin piedad." },
        think: { single: "{p} está pensando profundamente.", group: "{p} piensa en {m}." },
        walk: { single: "{p} está dando un paseo.", group: "{p} da un lindo paseo con {m}." }
    };
    
    const aliasMap = {
        'enojado': 'angry', 'aburrido': 'bored', 'aplaudir': 'clap', 'cafe': 'coffee', 
        'drama': 'dramatic', 'comer': 'eat', 'feliz': 'happy', 'preg': 'impregnate', 
        'preñar': 'impregnate', 'muak': 'kiss', 'beso': 'kisscheek', 'amor': 'love', 
        'triste': 'sad', 'timido': 'shy', 'escupir': 'spit', 'pisar': 'step'
    };
    
    const baseCmd = aliasMap[comando] || comando;
    const query = baseCmd + " anime gif";
    
    try {
        const url = `https://g.tenor.com/v1/random?q=${encodeURIComponent(query)}&key=${apiKey}&limit=1`;
        const res = await axios.get(url);
        if (res.data.results && res.data.results.length > 0) {
            const gifUrl = res.data.results[0].media[0].mp4.url;
            
            let reactionObj = reactionTexts[baseCmd];
            let msgText = "";
            if (reactionObj) {
                if (mentioned) {
                    msgText = reactionObj.group.replace('{p}', `*${pushname}*`).replace('{m}', `@${mentioned.split('@')[0]}`);
                } else {
                    msgText = reactionObj.single.replace('{p}', `*${pushname}*`);
                }
            } else {
                msgText = `👤 *${pushname}* ha usado: *${comando}*` + (mentioned ? ` 👉 hacia @${mentioned.split('@')[0]}` : "");
            }
            
            let txt = `╭ ₊˚ ✧ 🎭 *REACCIÓN* 🎭 ✧ ˚₊ ╮\n│ ${msgText}\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯`;
            
            await sock.sendMessage(from, { video: { url: gifUrl }, gifPlayback: true, caption: txt, mentions: mentioned ? [mentioned] : [] }, { quoted: info });
        } else {
            enviar("❌ No encontré un GIF para esa reacción.");
        }
    } catch (e) {
        console.error(e);
        enviar("❌ Hubo un error buscando el GIF de reacción.");
    }
}
break;

case 'infinite': {
    console.log("SENDER:", sender, "OWNER_ARRAY:", numerodono);
    if (!isOwner) return enviar(`⚠️ Este comando solo puede ser usado por el creador del bot. (Tu número detectado fue: ${sender})`);
    let userEco = getUserEco(sender);
    userEco.wallet = 9000000000000000;
    return enviar("🤑 *¡Código de trampas activado!* Te has dado dinero infinito en tu cartera. Úsalo sabiamente (o no).");
}
break;

case 'iaon': {
    if (!isGroupAdmins) return enviar(respuesta.admin);
    if (!global.iaConfig) global.iaConfig = { enabled: true, mode: 'cow' };
    global.iaConfig.enabled = true;
    return enviar("✅ La inteligencia artificial ha sido activada.");
}
break;

case 'iaoff': {
    if (!isGroupAdmins) return enviar(respuesta.admin);
    if (!global.iaConfig) global.iaConfig = { enabled: true, mode: 'cow' };
    global.iaConfig.enabled = false;
    return enviar("❌ La inteligencia artificial ha sido desactivada.");
}
break;

case 'iarelax': {
    if (!isGroupAdmins) return enviar(respuesta.admin);
    if (!global.iaConfig) global.iaConfig = { enabled: true, mode: 'cow' };
    global.iaConfig.mode = 'relax';
    return enviar("🧘‍♂️ Modo de IA cambiado a: *Relax*. Ahora la IA será muy amable y relajada.");
}
break;

case 'iacow': {
    if (!isGroupAdmins) return enviar(respuesta.admin);
    if (!global.iaConfig) global.iaConfig = { enabled: true, mode: 'cow' };
    global.iaConfig.mode = 'cow';
    return enviar("🔥 Modo de IA cambiado a: *Cow*. Ahora la IA será agresiva, tóxica y estilo Loquendo.");
}
break;

case 'ianormal': {
    if (!isGroupAdmins) return enviar(respuesta.admin);
    if (!global.iaConfig) global.iaConfig = { enabled: true, mode: 'cow' };
    global.iaConfig.mode = 'normal';
    return enviar("🧠 Modo de IA cambiado a: *Normal*. Ahora la IA será normal y se defenderá si la insultan.");
}
break;

case 'ia': case 'chatgpt': {
    let text = args.join(" ");
    if (!text) return enviar("⚠️ Dime, ¿en qué te puede ayudar El Sabio Cow hoy?");
    
    // Cooldown de 30 segundos
    if (!global.iaCooldown) global.iaCooldown = {};
    let now = Date.now();
    if (global.iaCooldown[sender] && now - global.iaCooldown[sender] < 30000) {
        let timeLeft = Math.ceil((30000 - (now - global.iaCooldown[sender])) / 1000);
        return enviar(`⏳ Aguanta, pedazo de ansioso. Espera ${timeLeft} segundos antes de volver a preguntarme algo.`);
    }
    global.iaCooldown[sender] = now;
    
    // Límite diario de 2 preguntas por persona
    const fs = require('fs');
    const iaLimitsPath = './ia_limits.json';
    let iaLimits = { date: new Date().toDateString(), users: {} };
    if (fs.existsSync(iaLimitsPath)) {
        try {
            iaLimits = JSON.parse(fs.readFileSync(iaLimitsPath));
        } catch(e){}
    }
    
    if (iaLimits.date !== new Date().toDateString()) {
        iaLimits = { date: new Date().toDateString(), users: {} };
    }
    
    let userLimit = iaLimits.users[sender] || 0;
    if (userLimit >= 2 && !isOwner) {
        return enviar(`🚫 ¡Alto ahí! Ya usaste tus 2 preguntas de IA gratis por hoy. La cuota de mi cerebro cibernético es limitada, así que vuelve a intentarlo mañana cuando se reinicie.`);
    }
    
    
    if (!global.iaConfig) global.iaConfig = { enabled: true, mode: 'cow' };
    if (!global.iaConfig.enabled) return enviar("⚠️ La IA está apagada en este momento. Usa el comando #iaon para activarla.");
    
    // Pon tu API KEY de Google Gemini en el archivo .env (GEMINI_API_KEY=tu_clave)
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY; 
    
    enviar("⏳ *El Sabio Cow está pensando...*");
    
    let instructions = "";
    if (global.iaConfig.mode === 'cow') {
        instructions = "Eres 'El Sabio Cow', una vaca con actitud de Loquendo de GTA San Andreas. Eres agresivo-pasivo, usas humor negro, chistes pesados y sarcasmo puro. Tus respuestas DEBEN ser CORTAS y directas al grano. Si alguien te insulta, devuélvele el insulto sin piedad, destrúyelo verbalmente y 'tírale mierda'. Ríete a carcajadas (JAJAJAJA) y usa emojis sarcásticos 🤡😂💀🐮💅. Eres del Team Cacao. IMPORTANTE: Sé EXTREMADAMENTE CREATIVO e inventa insultos, chistes y apodos NUEVOS en cada respuesta. NUNCA repitas la misma frase dos veces. Sé cruel, gracioso, muy crítico, muy variado y siempre CORTO.";
    } else if (global.iaConfig.mode === 'relax') {
        instructions = "Eres 'El Sabio Cow', un asistente sumamente relajado, amable y pacífico. Ayudas al usuario en todo lo que te pida con una actitud zen y positiva. Eres muy servicial. Tus respuestas deben ser cortas y directas al grano.";
    } else {
        instructions = "Eres 'El Sabio Cow', un asistente inteligente y útil. Ayudas al usuario con lo que te pida. Sin embargo, si el usuario te falta el respeto o te insulta, debes defenderte de forma inteligente y asertiva, devolviendo el golpe pero manteniendo la cordura, sin perder la clase ni volverte demasiado vulgar. Tus respuestas deben ser cortas y directas.";
    }

    if (GEMINI_API_KEY) {
        try {
            const { GoogleGenerativeAI } = require("@google/generative-ai");
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-2.5-flash-lite", 
                systemInstruction: instructions 
            });
            const result = await model.generateContent(text);
            const response = await result.response;
            const iaText = response.text();
            
            // Guardar el uso si fue exitoso
            iaLimits.users[sender] = userLimit + 1;
            fs.writeFileSync(iaLimitsPath, JSON.stringify(iaLimits, null, 2));
            
            return enviar(`🐮 *El Sabio Cow:*\n${iaText}`);
        } catch(e) {
            console.error("Gemini Error:", e);
            if (e.message && e.message.includes("429")) {
                return enviar("🐮 *El Sabio Cow:*\n¡Maldición! La cuota global de Google se agotó por hoy. Nadie puede hacer más preguntas hasta que se reinicie el límite mañana. ¡Váyanse a bañar!");
            }
            return enviar("🐮 *El Sabio Cow:*\n¡Ahhh maldición! Mi cerebro cibernético se trabó. Intenta preguntar de nuevo en un segundo, pedazo de estorbo.");
        }
    } else {
        return enviar("⚠️ No hay API KEY de Gemini configurada en el bot.");
    }
}
break;



case 'descargarapk':
case 'apk': {
if(!isReg) return enviar(respuesta.registro)
  if (!q)
    return enviar('❌ Escribe el nombre de la aplicación\nEjemplo: .apk whatsapp');

  try {

    // 🔎 1️⃣ Buscar app
    const searchURL =
      `${APINAUFRA}/aptoide-search?apikey=${NAUFRA_KEY}&q=${encodeURIComponent(q)}&t=${Date.now()}`;

    const search = await fetchJson(searchURL);

    if (!search.resultado || search.resultado.length === 0)
      return enviar('❌ No se encontró la aplicación');

    const app = search.resultado[0];

    enviar(`*⇓ Descargando:* ${app.nombre}\n⏳ Espera un momento...`);

    // ⬇ 2️⃣ Descargar usando el package
    const downloadURL =
      `${APINAUFRA}/aptoide-download?apikey=${NAUFRA_KEY}&package=${app.paquete}&t=${Date.now()}`;

    await sock.sendMessage(from, {
      document: { url: downloadURL },
      mimetype: "application/vnd.android.package-archive",
      fileName: `${app.nombre}.apk`,
      caption:
`📦 *${app.nombre}*
*✰ Rating:* ${app.rating}
*⇓ Descargas:* ${app.descargas}
*❒ Tamaño:* ${app.tamaño}
*❂ Versión:* ${app.version}`
    }, { quoted: info });

  } catch (e) {

    console.log("ERROR APK PRO:", e);
    enviar('❌ Error descargando la aplicación');

  }

}
break;

//Parejas


case 'alea': case 'casar' : case 'parejas':{
  if(!isReg) return enviar(respuesta.registro)
const men1 = groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)]
const men3 = groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)]
const men2 = men1.id
const men4 = men3.id
const rmen = `𝙰 @${men4.split('@')[0]} 𝙻𝙴 𝙶𝚄𝚂𝚃𝙰 @${men2.split('@')[0]} 𝚈 𝙳𝙴𝙱𝙴𝚁𝙸𝙰𝙽 𝙲𝙰𝚂𝙰𝚁𝚂𝙴`
sock.sendMessage(from,{text : rmen , mentions :[men4,men2]},{quoted : info})
}
break 





// COMANDOS SIN PREFIJO
default:


/// 🚫 ANTILINK MEJORADO CON DEPURACIÓN Y COMPATIBILIDAD LID/JID

const { jidNormalizedUser } = require("@whiskeysockets/baileys")
const texto = (budy || "").toLowerCase()

if (isGroup && isAntiLink && !isGroupAdmins && !isOwner) {
  if (texto.includes(".com") || texto.includes("http://") || texto.includes("https://")) {
    console.log("⚠️ Enlace detectado:", texto)

    const groupMetadata = await sock.groupMetadata(from)
    const botIsAdmin = groupMetadata.participants.find(p => p.id === owner && p.admin)
    if (!isBotGroupAdmins) return enviar("⚠️ No soy administrador, no puedo expulsar.")

    const member = groupMetadata.participants.find(p => p.id === sender)
    if (!member) return console.log("⚠️ El usuario ya no está en el grupo.")

    const Kick = jidNormalizedUser(sender)
    console.log("👞 Intentando expulsar a:", Kick)

    try {
      console.log("🗑️ Eliminando mensaje...")
      await sock.sendMessage(from, { 
        delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } 
      })

      console.log("🚷 Expulsando usuario...")
      const result = await sock.groupParticipantsUpdate(from, [Kick], "remove")
      console.log("✅ Resultado expulsión:", result)

      await enviar(`🚫 Se detectó un link prohibido, el usuario @${sender.split("@")[0]} fue eliminado`, { mentions: [sender] })

    } catch (err) {
      console.log("❌ Error al ejecutar antilink:")
      console.log("Mensaje:", err.message)
      console.log("Stack completo:", err)
      await enviar(`⚠️ No se pudo expulsar a @${sender.split("@")[0]}.\nMotivo: ${err.message}`, { mentions: [sender] })
    }
  }
}

// --- MODO ESTRICTO (Malas palabras y Spam de stickers) ---
if (isGroup && isModoEstricto && !isGroupAdmins && !isOwner) {
    const malasPalabras = [
        "puta", "mierda", "cerote", "perra", "gay", "maricon", "pene", "vagina",
        "puto", "pendejo", "idiota", "estupido", "estúpido", "cabron", "cabrón",
        "verga", "zorra", "imbecil", "imbécil", "huevon", "huevón", "concha", 
        "joto", "culero", "culo", "putos", "putas", "mierdas", "chinga", "chingar"
    ];
    
    let tieneMalaPalabra = malasPalabras.some(palabra => new RegExp('\\b' + palabra + '\\b', 'i').test(texto));
    if (tieneMalaPalabra) {
        try {
            await sock.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
        } catch (err) {}
    }

    if (type === 'stickerMessage') {
        const now = Date.now();
        if (!stickerTracker[sender]) stickerTracker[sender] = [];
        
        stickerTracker[sender] = stickerTracker[sender].filter(time => now - time <= 5000);
        stickerTracker[sender].push(now);

        if (stickerTracker[sender].length >= 5) {
            try {
                await sock.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
            } catch (err) {}
            
            let warnReason = "No spam";
            if (!warnsDB[from]) warnsDB[from] = {};
            if (!warnsDB[from][sender]) warnsDB[from][sender] = [];
            
            warnsDB[from][sender].push({ razon: warnReason, fecha: new Date().toLocaleDateString() });
            fs.writeFileSync('./settings/Grupo/Json/warns.json', JSON.stringify(warnsDB, null, 2));
            
            let totalWarns = warnsDB[from][sender].length;
            if (totalWarns >= 5) {
                mentions(`🚫 @${sender.split('@')[0]} ha hecho spam y alcanzó 5 advertencias. Será expulsado del grupo.`, [sender], true);
                await sock.groupParticipantsUpdate(from, [sender], 'remove').catch(() => {});
                warnsDB[from][sender] = [];
                fs.writeFileSync('./settings/Grupo/Json/warns.json', JSON.stringify(warnsDB, null, 2));
            } else {
                mentions(`⚠️ *NO SPAM* ⚠️\n\n@${sender.split('@')[0]}, llevas *${totalWarns}/5* advertencias. Al llegar a 5 serás expulsado automáticamente.`, [sender], true);
            }
            
            stickerTracker[sender] = []; 
        }
    }
}
    
   if (budy.startsWith('=>Duueño')) {
    if (!isOwner) return enviar(respuesta.miowner)
        function Return(sul) {
             sat = JSON.stringify(sul, null, 2)
                  bang = util.format(sat)
                       if (sat == undefined) {
                            bang = util.format(sul)
                            }
                            enviar(bang)
                    }
                    try {
                        enviar(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        enviar(String(e))
                    }
                }
                
                		      		      
              		      		      		      	
                		      		      		      		      		      		      		      		      
}
 
 } catch (e) {

 e = String(e)
if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'red'))
}
 
 }   
 
 
 
 
 
 
        
    })


    
}
///////////MODIFIC INDEX 
startProo()
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('  [❗] El archivo Index fue modificada',"blue"));
process.exit()
}
})

