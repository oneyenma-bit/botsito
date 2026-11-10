const fs = require('fs');
let code = fs.readFileSync('index.js', 'utf8');

// The block to remove
const blockStart = "// --- FUNCIONES DE ECONOMIA ---";
const blockEnd = "// ------------------------------\n";

let startIndex = code.indexOf(blockStart);
let endIndex = code.indexOf(blockEnd) + blockEnd.length;

if (startIndex !== -1 && endIndex !== -1) {
    // Remove it from its current position
    code = code.substring(0, startIndex) + code.substring(endIndex);
    
    // Insert it before the `switch` statement or right after imports.
    // Line 77 is `// 𝚃𝙸𝙼𝙴` which is at the top level
    let timeIndex = code.indexOf('// 𝚃𝙸𝙼𝙴');
    if (timeIndex !== -1) {
        const economyCode = `
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

const formatEco = (num) => \`*\${num.toLocaleString()}* minecoins ⛏️\`;
// ------------------------------

`;
        code = code.substring(0, timeIndex) + economyCode + code.substring(timeIndex);
        fs.writeFileSync('index.js', code);
        console.log("Successfully moved economy functions to global scope.");
    } else {
        console.log("Could not find // 𝚃𝙸𝙼𝙴 block");
    }
} else {
    console.log("Could not find economy block.");
}
