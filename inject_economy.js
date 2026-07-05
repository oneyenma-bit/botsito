const fs = require('fs');

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

const formatEco = (num) => \`*\${num.toLocaleString()}* 💰\`;
// ------------------------------

case 'promote': {
    if (!isGroup) return enviar("⚠️ Este comando solo funciona en grupos.");
    if (!isGroupAdmins) return enviar(respuesta.admin);
    if (!isBotGroupAdmins) return enviar(respuesta.botadmin);
    
    let mentioned = obtenerMencionado(info);
    if (!mentioned) return enviar("⚠️ Debes mencionar o responder al mensaje de alguien para darle admin.");
    
    if (groupAdmins.some(admin => admin.id === mentioned)) return enviar("✅ Esta persona ya es administrador.");
    
    await sock.groupParticipantsUpdate(from, [mentioned], 'promote');
    mentions(\`👑 @\${mentioned.split('@')[0]} ahora es administrador del grupo.\`, [mentioned], true);
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
    mentions(\`📉 @\${mentioned.split('@')[0]} ya no es administrador del grupo.\`, [mentioned], true);
}
break;

case 'balance': case 'bal': case 'coins': {
    let mentioned = obtenerMencionado(info) || sender;
    let userEco = getUserEco(mentioned);
    let total = userEco.wallet + userEco.bank;
    let txt = \`╭ ₊˚ ✧ 💰 *ʙᴀʟᴀɴᴄᴇ* 💰 ✧ ˚₊ ╮\\n│ 👤 @\${mentioned.split('@')[0]}\\n│ 💼 Cartera: \${formatEco(userEco.wallet)}\\n│ 🏦 Banco: \${formatEco(userEco.bank)}\\n│ 📊 Total: \${formatEco(total)}\\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯\`;
    mentions(txt, [mentioned], true);
}
break;

case 'deposit': case 'dep': case 'depositar': case 'd': {
    let userEco = getUserEco(sender);
    let amount = args[0] ? args[0].toLowerCase() : null;
    
    if (!amount) return enviar("⚠️ Indica cuánto deseas depositar (ej. \`#dep 100\` o \`#dep all\`).");
    
    let depAmount = 0;
    if (amount === 'all' || amount === 'todo') {
        depAmount = userEco.wallet;
    } else {
        depAmount = parseInt(amount);
    }
    
    if (isNaN(depAmount) || depAmount <= 0) return enviar("⚠️ Cantidad inválida.");
    if (depAmount > userEco.wallet) return enviar(\`⚠️ No tienes suficientes monedas. Tienes \${formatEco(userEco.wallet)} en tu cartera.\`);
    
    userEco.wallet -= depAmount;
    userEco.bank += depAmount;
    saveEconomy();
    enviar(\`✅ Has depositado \${formatEco(depAmount)} en tu banco.\\n🏦 Nuevo saldo bancario: \${formatEco(userEco.bank)}\`);
}
break;

case 'withdraw': case 'with': case 'retirar': {
    let userEco = getUserEco(sender);
    let amount = args[0] ? args[0].toLowerCase() : null;
    
    if (!amount) return enviar("⚠️ Indica cuánto deseas retirar (ej. \`#with 100\` o \`#with all\`).");
    
    let withAmount = 0;
    if (amount === 'all' || amount === 'todo') {
        withAmount = userEco.bank;
    } else {
        withAmount = parseInt(amount);
    }
    
    if (isNaN(withAmount) || withAmount <= 0) return enviar("⚠️ Cantidad inválida.");
    if (withAmount > userEco.bank) return enviar(\`⚠️ No tienes suficientes monedas en el banco. Tienes \${formatEco(userEco.bank)}.\`);
    
    userEco.bank -= withAmount;
    userEco.wallet += withAmount;
    saveEconomy();
    enviar(\`✅ Has retirado \${formatEco(withAmount)} del banco.\\n💼 Nuevo saldo en cartera: \${formatEco(userEco.wallet)}\`);
}
break;

case 'givecoins': case 'pay': case 'coinsgive': {
    let mentioned = obtenerMencionado(info);
    let amount = parseInt(args[args.length - 1]);
    
    if (!mentioned || isNaN(amount) || amount <= 0) return enviar("⚠️ Formato incorrecto. Uso: \`#pay @usuario cantidad\`");
    if (mentioned === sender) return enviar("⚠️ No puedes pagarte a ti mismo.");
    
    let senderEco = getUserEco(sender);
    if (amount > senderEco.wallet) return enviar(\`⚠️ No tienes \${formatEco(amount)} en tu cartera para pagar.\`);
    
    let receiverEco = getUserEco(mentioned);
    senderEco.wallet -= amount;
    receiverEco.wallet += amount;
    saveEconomy();
    
    mentions(\`💸 Le has transferido \${formatEco(amount)} a @\${mentioned.split('@')[0]} exitosamente!\`, [mentioned], true);
}
break;

case 'daily': {
    let userEco = getUserEco(sender);
    let now = Date.now();
    let cooldown = 24 * 60 * 60 * 1000; // 24 hours
    
    if (now - userEco.lastDaily < cooldown) {
        let timeLeft = Math.ceil((cooldown - (now - userEco.lastDaily)) / (60 * 60 * 1000));
        return enviar(\`⏳ Aún no puedes reclamar. Vuelve en *\${timeLeft} horas*.\`);
    }
    
    let reward = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    userEco.wallet += reward;
    userEco.lastDaily = now;
    saveEconomy();
    enviar(\`🎁 ¡Has reclamado tu recompensa diaria de \${formatEco(reward)}!\`);
}
break;

case 'work': case 'w': {
    let userEco = getUserEco(sender);
    let now = Date.now();
    let cooldown = 3 * 60 * 1000; // 3 minutes
    
    if (now - userEco.lastWork < cooldown) {
        let timeLeft = Math.ceil((cooldown - (now - userEco.lastWork)) / 1000);
        return enviar(\`⏳ Estás muy cansado. Descansa *\${timeLeft} segundos* antes de volver a trabajar.\`);
    }
    
    let works = [
        "Limpiaste la caja de arena de un Neko",
        "Programaste un bot de Discord",
        "Vendiste galletitas en la calle",
        "Ayudaste a una abuela a cruzar la calle",
        "Paseaste perros por el vecindario",
        "Trabajaste en un Maid Cafe"
    ];
    let job = works[Math.floor(Math.random() * works.length)];
    let reward = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
    
    userEco.wallet += reward;
    userEco.lastWork = now;
    saveEconomy();
    enviar(\`💼 \${job} y ganaste \${formatEco(reward)}.\`);
}
break;

case 'crime': {
    let userEco = getUserEco(sender);
    let now = Date.now();
    let cooldown = 3 * 60 * 1000;
    
    if (now - userEco.lastCrime < cooldown) {
        let timeLeft = Math.ceil((cooldown - (now - userEco.lastCrime)) / 1000);
        return enviar(\`🚨 La policía te está buscando. Escóndete por *\${timeLeft} segundos*.\`);
    }
    
    userEco.lastCrime = now;
    let win = Math.random() > 0.5; // 50% chance
    if (win) {
        let reward = Math.floor(Math.random() * (1000 - 300 + 1)) + 300;
        let texts = [
            "Hackeaste el banco central",
            "Robaste un camión de caudales",
            "Estafaste a un millonario online"
        ];
        let txt = texts[Math.floor(Math.random() * texts.length)];
        userEco.wallet += reward;
        enviar(\`😼 \${txt} y saliste ileso ganando \${formatEco(reward)}!\`);
    } else {
        let fine = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
        if (userEco.wallet < fine) fine = userEco.wallet; // don't go negative
        userEco.wallet -= fine;
        enviar(\`🚔 La policía te atrapó intentando cometer un crimen y pagaste una fianza de \${formatEco(fine)}.\`);
    }
    saveEconomy();
}
break;

case 'slut': {
    let userEco = getUserEco(sender);
    let now = Date.now();
    let cooldown = 3 * 60 * 1000;
    
    if (now - userEco.lastSlut < cooldown) {
        let timeLeft = Math.ceil((cooldown - (now - userEco.lastSlut)) / 1000);
        return enviar(\`🥵 Estás adolorido/a. Descansa *\${timeLeft} segundos*.\`);
    }
    
    userEco.lastSlut = now;
    let win = Math.random() > 0.4; // 60% chance
    if (win) {
        let reward = Math.floor(Math.random() * (800 - 200 + 1)) + 200;
        let texts = [
            "Te fuiste con un Sugar Daddy/Mommy",
            "Vendiste fotos de tus pies",
            "Bailaste en el tubo del club"
        ];
        let txt = texts[Math.floor(Math.random() * texts.length)];
        userEco.wallet += reward;
        enviar(\`💋 \${txt} y ganaste jugosos \${formatEco(reward)}!\`);
    } else {
        let fine = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
        if (userEco.wallet < fine) fine = userEco.wallet;
        userEco.wallet -= fine;
        enviar(\`😷 Atrapaste una ETS y tuviste que pagar \${formatEco(fine)} en medicamentos.\`);
    }
    saveEconomy();
}
break;

case 'steal': case 'rob': case 'robar': {
    let mentioned = obtenerMencionado(info);
    if (!mentioned) return enviar("⚠️ Menciona a tu víctima. Ej: \`#rob @usuario\`");
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
        mentions(\`🦝 Le has robado \${formatEco(amount)} exitosamente a @\${mentioned.split('@')[0]}!\`, [mentioned], true);
    } else {
        let fine = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
        if (senderEco.wallet < fine) fine = senderEco.wallet;
        senderEco.wallet -= fine;
        targetEco.wallet += fine; // Fine goes to the victim
        saveEconomy();
        mentions(\`👮 ¡Te descubrieron intentando robar a @\${mentioned.split('@')[0]}! Le pagaste una multa de \${formatEco(fine)} a su bolsillo.\`, [mentioned], true);
    }
}
break;

case 'coinflip': case 'flip': case 'cf': {
    let userEco = getUserEco(sender);
    let amount = parseInt(args[1]);
    let choice = args[0] ? args[0].toLowerCase() : "";
    
    if (!['cara', 'cruz', 'heads', 'tails'].includes(choice) || isNaN(amount) || amount <= 0) {
        return enviar("⚠️ Uso: \`#cf cara 100\` o \`#cf cruz 100\`");
    }
    
    if (amount > userEco.wallet) return enviar(\`⚠️ No tienes \${formatEco(amount)} en tu cartera para apostar.\`);
    
    let isHeads = ['cara', 'heads'].includes(choice);
    let resultHeads = Math.random() > 0.5;
    
    if (isHeads === resultHeads) {
        userEco.wallet += amount;
        saveEconomy();
        enviar(\`🪙 ¡Salió *\${resultHeads ? 'cara' : 'cruz'}*! Ganaste \${formatEco(amount * 2)} (Beneficio: \${formatEco(amount)}).\`);
    } else {
        userEco.wallet -= amount;
        saveEconomy();
        enviar(\`🪙 ¡Salió *\${resultHeads ? 'cara' : 'cruz'}*! Perdiste \${formatEco(amount)}.\`);
    }
}
break;

case 'roulette': case 'rt': {
    let userEco = getUserEco(sender);
    let amount = parseInt(args[1]);
    let color = args[0] ? args[0].toLowerCase() : "";
    
    if (!['rojo', 'negro', 'verde', 'red', 'black', 'green'].includes(color) || isNaN(amount) || amount <= 0) {
        return enviar("⚠️ Uso: \`#rt rojo 100\`, \`#rt negro 100\` o \`#rt verde 100\`\\nRojo/Negro paga x2, Verde paga x10.");
    }
    
    if (amount > userEco.wallet) return enviar(\`⚠️ No tienes \${formatEco(amount)} en tu cartera para apostar.\`);
    
    let roll = Math.floor(Math.random() * 37); // 0-36
    let resultColor = (roll === 0) ? 'verde' : (roll % 2 === 0 ? 'rojo' : 'negro');
    
    let betColor = color;
    if (color === 'red') betColor = 'rojo';
    if (color === 'black') betColor = 'negro';
    if (color === 'green') betColor = 'verde';
    
    if (betColor === resultColor) {
        let winAmount = betColor === 'verde' ? amount * 10 : amount * 2;
        let profit = winAmount - amount;
        userEco.wallet += profit;
        saveEconomy();
        enviar(\`🎰 La ruleta giró y cayó en *\${resultColor.toUpperCase()}* (\${roll}).\\n¡Ganaste \${formatEco(winAmount)}! (Beneficio: \${formatEco(profit)}).\`);
    } else {
        userEco.wallet -= amount;
        saveEconomy();
        enviar(\`🎰 La ruleta giró y cayó en *\${resultColor.toUpperCase()}* (\${roll}).\\nPerdiste \${formatEco(amount)}.\`);
    }
}
break;

case 'slots': case 'tragaperras': {
    let userEco = getUserEco(sender);
    let amount = parseInt(args[0]);
    
    if (isNaN(amount) || amount <= 0) return enviar("⚠️ Uso: \`#slots 100\`");
    if (amount > userEco.wallet) return enviar(\`⚠️ No tienes \${formatEco(amount)} en tu cartera para apostar.\`);
    
    let emojis = ['🍒', '🍋', '🍇', '🍉', '⭐', '💎'];
    let slot1 = emojis[Math.floor(Math.random() * emojis.length)];
    let slot2 = emojis[Math.floor(Math.random() * emojis.length)];
    let slot3 = emojis[Math.floor(Math.random() * emojis.length)];
    
    let txt = \`🎰 *TRAGAMONEDAS* 🎰\\n\\n [ \${slot1} | \${slot2} | \${slot3} ]\\n\\n\`;
    
    if (slot1 === slot2 && slot2 === slot3) {
        let win = amount * 5;
        userEco.wallet += (win - amount);
        txt += \`¡JACKPOT! 🏆 Has ganado \${formatEco(win)} (Beneficio: \${formatEco(win - amount)})\`;
    } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
        let win = amount * 2;
        userEco.wallet += (win - amount);
        txt += \`¡Mini premio! Ganaste \${formatEco(win)} (Beneficio: \${formatEco(win - amount)})\`;
    } else {
        userEco.wallet -= amount;
        txt += \`Perdiste \${formatEco(amount)}... ¡Suerte la próxima!\`;
    }
    saveEconomy();
    enviar(txt);
}
break;

case 'economyboard': case 'eboard': case 'baltop': {
    let leaderboard = Object.keys(economyDB).map(jid => {
        let total = economyDB[jid].wallet + economyDB[jid].bank;
        return { jid, total };
    }).sort((a, b) => b.total - a.total).slice(0, 10);
    
    if (leaderboard.length === 0) return enviar("⚠️ No hay nadie en la economía aún.");
    
    let txt = \`╭ ₊˚ ✧ 🏆 *TOP MILLONARIOS* 🏆 ✧ ˚₊ ╮\\n\\n\`;
    let mentionsArray = [];
    leaderboard.forEach((user, index) => {
        txt += \`│ *\${index + 1}.* @\${user.jid.split('@')[0]} - \${formatEco(user.total)}\\n\`;
        mentionsArray.push(user.jid);
    });
    txt += \`\\n╰ ₊˚ ✧ 🎀 ✧ ˚₊ ╯\`;
    mentions(txt, mentionsArray, true);
}
break;

`;

let mainCode = fs.readFileSync('index.js', 'utf8');
let targetIndex = mainCode.indexOf("case 'warn':");

if (targetIndex !== -1) {
    mainCode = mainCode.substring(0, targetIndex) + economyCode + "\\n" + mainCode.substring(targetIndex);
    fs.writeFileSync('index.js', mainCode);
    console.log("Successfully injected economy logic!");
} else {
    console.log("Could not find 'case \\'warn\\':' to inject code.");
}
