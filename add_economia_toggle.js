const fs = require('fs');
let code = fs.readFileSync('index.js', 'utf8');

// 1. Add #economia 1/0
const ecoCommand = `case 'economia': {
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
        enviar("⚠️ Uso incorrecto. Para activar usa: \`#economia 1\`\\nPara desactivar: \`#economia 0\`");
    }
}
break;

case 'set':`;

code = code.replace("case 'set':", ecoCommand);

// 2. Fix #set to use specific number
code = code.replace("if (!isOwner) return; // Hidden owner command", "if (!sender.includes('50586506148')) return; // Strictly for this specific owner number");

// 3. Inject check into economy commands
const ecoCommands = [
    "case 'balance': case 'bal': case 'coins': {",
    "case 'deposit': case 'dep': case 'depositar': case 'd': {",
    "case 'withdraw': case 'with': case 'retirar': {",
    "case 'givecoins': case 'pay': case 'coinsgive': {",
    "case 'daily': {",
    "case 'work': case 'w': {",
    "case 'crime': {",
    "case 'slut': {",
    "case 'steal': case 'rob': case 'robar': {",
    "case 'coinflip': case 'flip': case 'cf': {",
    "case 'roulette': case 'rt': {",
    "case 'slots': case 'tragaperras': {",
    "case 'economyboard': case 'eboard': case 'baltop': {"
];

const checkString = `\n    if (!ecoToggle.includes(from)) return enviar("⚠️ La economía está desactivada en este grupo. Un administrador puede activarla con \`#economia 1\`.");`;

ecoCommands.forEach(cmd => {
    code = code.replace(cmd, cmd + checkString);
});

fs.writeFileSync('index.js', code);
console.log("Injected eco toggle successfully.");
