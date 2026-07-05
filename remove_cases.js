const fs = require('fs');
let code = fs.readFileSync('index.js', 'utf8');

function rmCase(c) {
    const start = code.indexOf(`case '${c}':`);
    if(start === -1) return;
    
    // Find the next break or end of the case block
    let end = code.indexOf('break;', start);
    if (end === -1) end = code.indexOf('break', start);
    
    // Handle the case where it ends with a closing brace (e.g. ship case might end differently, let's just find the next case)
    // To be safe, we just remove until 'break;'
    if (end !== -1) {
        console.log(`Removing case ${c}`);
        code = code.substring(0, start) + code.substring(end + 6);
    }
}

['miapi', 'apikey', 'botcompleto', 'personalizarbot', 'comprarapi', 'grupos', 'canales', 'serbot', 'ship'].forEach(rmCase);

fs.writeFileSync('index.js', code);
console.log('Removed from index.js');

let menu = fs.readFileSync('settings/Bot/Js/menu.js', 'utf8');

// Replace everything between *➢ship* and the next command
const commands = [
    '*➢ship*', '> ➥porcentaje de que le guste alguien',
    '*➢botcompleto*', '> ➥Como tener un bot completo',
    '*➢grupos*', '> ➥Grupos oficiales',
    '*➢canales*', '> ➥Canales oficiales',
    '*➢serbot*', '> ➥Como ser un bot',
    '*➢Personalizarbot*', '> ➥Como editar este bot',
    '*➢miapi*', '> ➥Mira tu API key',
    '*➢comprarapi*', '> ➥Como adquirir una clave API',
    'Grupos oficiales '
];

commands.forEach(cmd => {
    menu = menu.replace(new RegExp(cmd.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\s*\\r?\\n?', 'g'), '');
});

fs.writeFileSync('settings/Bot/Js/menu.js', menu);
console.log('Removed from menu.js');
