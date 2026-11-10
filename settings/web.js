// Dashboard Web para Thecowbots
function getDashboardHtml(data) {
  const status = data.status || 'disconnected';
  const pairingCode = data.pairingCode || '';
  const phoneNumber = data.phoneNumber || '50492772142';
  const subBots = data.subBots || [];
  const uptime = data.uptime || 0;

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thecowbots | Panel de Control & Vinculación</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-base: #080c14;
      --bg-surface: #0f172a;
      --bg-card: rgba(17, 24, 39, 0.75);
      --border-color: rgba(255, 255, 255, 0.08);
      --border-hover: rgba(16, 185, 129, 0.4);
      --accent-green: #10b981;
      --accent-green-glow: rgba(16, 185, 129, 0.25);
      --accent-cyan: #06b6d4;
      --accent-yellow: #f59e0b;
      --accent-red: #ef4444;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      background-color: var(--bg-base);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      line-height: 1.5;
      background-image: 
        radial-gradient(ellipse 60% 40% at 50% -10%, rgba(16, 185, 129, 0.15), transparent),
        radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.08), transparent);
      background-attachment: fixed;
    }

    .container {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem 1.25rem 4rem;
      flex: 1;
    }

    /* Header */
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2.5rem;
      padding-bottom: 1.25rem;
      border-bottom: 1px solid var(--border-color);
      flex-wrap: wrap;
      gap: 1rem;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.85rem;
    }

    .brand-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, #10b981, #06b6d4);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
    }

    .brand-text h1 {
      font-size: 1.45rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      background: linear-gradient(to right, #fff, #cbd5e1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .brand-text p {
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    /* Status Pill */
    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.45rem 1rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid var(--border-color);
      backdrop-filter: blur(8px);
      transition: all 0.3s ease;
    }

    .status-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: var(--accent-yellow);
      box-shadow: 0 0 10px var(--accent-yellow);
      animation: pulse 2s infinite;
    }

    .status-pill.connected .status-dot {
      background-color: var(--accent-green);
      box-shadow: 0 0 12px var(--accent-green);
    }
    .status-pill.connected {
      border-color: rgba(16, 185, 129, 0.3);
      color: #34d399;
    }

    .status-pill.pairing .status-dot {
      background-color: var(--accent-yellow);
      box-shadow: 0 0 12px var(--accent-yellow);
    }
    .status-pill.pairing {
      border-color: rgba(245, 158, 11, 0.3);
      color: #fbbf24;
    }

    .status-pill.disconnected .status-dot {
      background-color: var(--accent-red);
      box-shadow: 0 0 12px var(--accent-red);
      animation: none;
    }
    .status-pill.disconnected {
      border-color: rgba(239, 68, 68, 0.3);
      color: #f87171;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.9); }
    }

    /* Grid Layout */
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    /* Cards */
    .card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 18px;
      padding: 1.75rem;
      backdrop-filter: blur(12px);
      transition: border-color 0.25s ease;
    }

    .card:hover {
      border-color: rgba(255, 255, 255, 0.15);
    }

    .card-title {
      font-size: 1.15rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    .card-desc {
      color: var(--text-muted);
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }

    /* Pairing Box (Hero) */
    .pairing-box {
      background: rgba(0, 0, 0, 0.4);
      border: 1px dashed rgba(16, 185, 129, 0.4);
      border-radius: 14px;
      padding: 1.75rem;
      text-align: center;
      margin-bottom: 1.5rem;
      position: relative;
      overflow: hidden;
    }

    .code-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--accent-cyan);
      font-weight: 700;
      margin-bottom: 0.6rem;
    }

    .code-display {
      font-family: 'JetBrains Mono', monospace;
      font-size: 2.75rem;
      font-weight: 800;
      letter-spacing: 0.25em;
      color: #ffffff;
      text-shadow: 0 0 25px rgba(16, 185, 129, 0.6);
      margin: 0.5rem 0 1rem;
      user-select: all;
    }

    .code-actions {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    button {
      font-family: inherit;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
      padding: 0.65rem 1.25rem;
      border-radius: 10px;
      border: none;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .btn-primary {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
    }

    .btn-primary:hover {
      background: linear-gradient(135deg, #059669, #047857);
      transform: translateY(-1px);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.08);
      color: var(--text-main);
      border: 1px solid var(--border-color);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.14);
      transform: translateY(-1px);
    }

    .btn-danger {
      background: rgba(239, 68, 68, 0.15);
      color: #fca5a5;
      border: 1px solid rgba(239, 68, 68, 0.3);
    }

    .btn-danger:hover {
      background: rgba(239, 68, 68, 0.25);
    }

    /* Steps list */
    .steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1.25rem;
    }

    .step-item {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1rem;
    }

    .step-num {
      width: 24px;
      height: 24px;
      border-radius: 6px;
      background: var(--accent-cyan);
      color: #0f172a;
      font-size: 0.75rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.6rem;
    }

    .step-text {
      font-size: 0.85rem;
      color: #cbd5e1;
    }

    .step-text b {
      color: #fff;
    }

    /* Connected View */
    .connected-card {
      text-align: center;
      padding: 2.5rem 1.5rem;
      background: linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, rgba(15, 23, 42, 0.4) 100%);
      border: 1px solid rgba(16, 185, 129, 0.3);
      border-radius: 16px;
    }

    .connected-icon {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: rgba(16, 185, 129, 0.15);
      border: 2px solid var(--accent-green);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.2rem;
      margin: 0 auto 1.25rem;
      box-shadow: 0 0 25px rgba(16, 185, 129, 0.3);
    }

    .connected-card h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.5rem;
    }

    .connected-card p {
      color: var(--text-muted);
      font-size: 0.95rem;
      max-width: 500px;
      margin: 0 auto 1.5rem;
    }

    /* Stats bar */
    .stats-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .stat-box {
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1rem;
      text-align: center;
    }

    .stat-val {
      font-size: 1.35rem;
      font-weight: 700;
      color: #fff;
      font-family: 'JetBrains Mono', monospace;
    }

    .stat-lbl {
      font-size: 0.75rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 0.25rem;
    }

    /* Sub-Bots Section */
    .subbots-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    .subbots-table th {
      text-align: left;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--border-color);
    }

    .subbots-table td {
      padding: 0.9rem 1rem;
      border-bottom: 1px solid var(--border-color);
      font-size: 0.88rem;
    }

    .subbots-empty {
      text-align: center;
      padding: 2.5rem 1rem;
      color: var(--text-muted);
      font-size: 0.9rem;
      background: rgba(255, 255, 255, 0.02);
      border-radius: 12px;
      border: 1px dashed var(--border-color);
      margin-top: 1rem;
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 2rem 1rem;
      color: var(--text-muted);
      font-size: 0.8rem;
      border-top: 1px solid var(--border-color);
    }

    footer a {
      color: var(--accent-green);
      text-decoration: none;
    }

    .badge-phone {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      background: rgba(6, 182, 212, 0.15);
      color: #67e8f9;
      padding: 0.25rem 0.65rem;
      border-radius: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <div class="brand-icon">🐮</div>
        <div class="brand-text">
          <h1>Thecowbots</h1>
          <p>WhatsApp Multi-Device Cloud Bot & Sub-Bot Manager</p>
        </div>
      </div>
      <div id="statusPill" class="status-pill ${status}">
        <div class="status-dot"></div>
        <span id="statusPillText">
          ${status === 'connected' ? 'En línea' : status === 'pairing' ? 'Esperando vinculación' : 'Desconectado'}
        </span>
      </div>
    </header>

    <div class="grid">
      <!-- Main Bot Card -->
      <div class="card">
        <div class="card-title">
          <span>📱</span> Bot Principal
          <span class="badge-phone" id="phoneDisplay">+${phoneNumber}</span>
        </div>
        <p class="card-desc">Estado actual de la conexión de Baileys en la nube de Render.</p>

        <!-- Dynamic Content: Pairing View vs Connected View -->
        <div id="pairingView" style="display: ${status === 'connected' ? 'none' : 'block'};">
          <div class="pairing-box">
            <div class="code-label">Código de Vinculación de WhatsApp</div>
            <div id="codeDisplay" class="code-display">${pairingCode ? pairingCode : 'SOLICITANDO...'}</div>
            <div class="code-actions">
              <button class="btn-primary" id="copyBtn" onclick="copyCode()">
                📋 Copiar Código
              </button>
              <button class="btn-secondary" onclick="requestNewCode()">
                🔄 Generar nuevo código
              </button>
              <button class="btn-danger" onclick="resetSession()">
                ⚠️ Reiniciar Sesión
              </button>
            </div>
          </div>

          <div class="steps">
            <div class="step-item">
              <div class="step-num">1</div>
              <div class="step-text">Abre <b>WhatsApp</b> en el teléfono <b>+${phoneNumber}</b>.</div>
            </div>
            <div class="step-item">
              <div class="step-num">2</div>
              <div class="step-text">Entra a <b>Ajustes</b> o menú de 3 puntos <b>⋮</b>.</div>
            </div>
            <div class="step-item">
              <div class="step-num">3</div>
              <div class="step-text">Toca en <b>Dispositivos vinculados</b>.</div>
            </div>
            <div class="step-item">
              <div class="step-num">4</div>
              <div class="step-text">Toca <b>Vincular un dispositivo</b> y luego <b>Vincular con número</b>.</div>
            </div>
            <div class="step-item">
              <div class="step-num">5</div>
              <div class="step-text">Escribe el <b>código de 8 dígitos</b> mostrado arriba.</div>
            </div>
          </div>
        </div>

        <div id="connectedView" style="display: ${status === 'connected' ? 'block' : 'none'};">
          <div class="connected-card">
            <div class="connected-icon">✓</div>
            <h3>¡Bot Principal Conectado Exitosamente!</h3>
            <p>La sesión de WhatsApp está activa y procesando mensajes en tiempo real. Todos los comandos, economía e Inteligencia Artificial están operando.</p>
            <div class="code-actions">
              <button class="btn-danger" onclick="resetSession()">
                Desvincular / Reiniciar Sesión
              </button>
            </div>
          </div>
        </div>

        <div class="stats-bar">
          <div class="stat-box">
            <div class="stat-val" id="uptimeVal">${Math.floor(uptime / 60)}m</div>
            <div class="stat-lbl">Tiempo de Actividad</div>
          </div>
          <div class="stat-box">
            <div class="stat-val" id="subBotsCountVal">${subBots.length}</div>
            <div class="stat-lbl">Sub-Bots Activos</div>
          </div>
          <div class="stat-box">
            <div class="stat-val" id="aiStatusVal">Gemini 2.5</div>
            <div class="stat-lbl">Motor IA</div>
          </div>
        </div>
      </div>

      <!-- Sub-Bots Card -->
      <div class="card">
        <div class="card-title">
          <span>🤖</span> Sub-Bots Activos (JadiBots)
        </div>
        <p class="card-desc">
          Los administradores de cualquier grupo donde esté el bot pueden usar <code>#serbot</code> para convertir su propio WhatsApp en un Sub-Bot con todos los poderes.
        </p>

        <div id="subBotsContainer">
          ${subBots.length === 0 ? `
            <div class="subbots-empty">
              No hay Sub-Bots vinculados en este momento.<br>
              Escribe <b>#serbot</b> en un grupo de WhatsApp siendo administrador para activar uno.
            </div>
          ` : `
            <table class="subbots-table">
              <thead>
                <tr>
                  <th>Número</th>
                  <th>Estado</th>
                  <th>Autorizante</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                ${subBots.map(b => `
                  <tr>
                    <td><b>+${b.phoneNumber}</b></td>
                    <td><span style="color: ${b.status === 'connected' ? '#10b981' : '#f59e0b'}">● ${b.status === 'connected' ? 'Conectado' : 'Vinculando'}</span></td>
                    <td>${b.adminJid ? '@' + b.adminJid.split('@')[0] : 'Sistema'}</td>
                    <td><button class="btn-danger" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;" onclick="stopSubBot('${b.phoneNumber}')">Detener</button></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          `}
        </div>
      </div>
    </div>
  </div>

  <footer>
    Thecowbots Cloud Edition &bull; Servidor activo en Render &bull; <a href="https://github.com/oneyenma-bit/botsito" target="_blank">Repositorio GitHub</a>
  </footer>

  <script>
    let currentCode = "${pairingCode}";

    function copyCode() {
      if (!currentCode) return alert('No hay código disponible para copiar.');
      navigator.clipboard.writeText(currentCode).then(() => {
        const btn = document.getElementById('copyBtn');
        btn.innerHTML = '✅ ¡Copiado!';
        btn.style.background = '#059669';
        setTimeout(() => {
          btn.innerHTML = '📋 Copiar Código';
          btn.style.background = '';
        }, 2500);
      }).catch(err => {
        prompt('Copia manualmente este código:', currentCode);
      });
    }

    async function requestNewCode() {
      try {
        const codeDisplay = document.getElementById('codeDisplay');
        codeDisplay.innerText = 'GENERANDO...';
        const res = await fetch('/api/pair?number=50492772142');
        const data = await res.json();
        if (data.code) {
          currentCode = data.code;
          codeDisplay.innerText = data.code;
        } else if (data.message) {
          alert(data.message);
        }
      } catch (e) {
        alert('Error al solicitar nuevo código: ' + e.message);
      }
    }

    async function resetSession() {
      if (!confirm('¿Seguro que deseas reiniciar la sesión? Deberás volver a vincular el bot con el código de WhatsApp.')) return;
      try {
        await fetch('/api/reset-session', { method: 'POST' });
        alert('Sesión reseteada. En unos segundos aparecerá el nuevo código de vinculación.');
        setTimeout(pollStatus, 1500);
      } catch (e) {
        alert('Error: ' + e.message);
      }
    }

    async function stopSubBot(number) {
      if (!confirm('¿Detener el Sub-Bot +' + number + '?')) return;
      try {
        await fetch('/api/subbots/stop?number=' + number);
        alert('Sub-Bot detenido.');
        pollStatus();
      } catch (e) {
        alert('Error: ' + e.message);
      }
    }

    // Polling en tiempo real cada 2.5 segundos
    async function pollStatus() {
      try {
        const res = await fetch('/api/status');
        const data = await res.json();

        // Actualizar píldora de estado
        const pill = document.getElementById('statusPill');
        const pillText = document.getElementById('statusPillText');
        pill.className = 'status-pill ' + data.status;
        pillText.innerText = data.status === 'connected' ? 'En línea' : data.status === 'pairing' ? 'Esperando vinculación' : 'Desconectado';

        // Vista vinculación vs conectado
        const pairingView = document.getElementById('pairingView');
        const connectedView = document.getElementById('connectedView');
        if (data.status === 'connected') {
          pairingView.style.display = 'none';
          connectedView.style.display = 'block';
        } else {
          pairingView.style.display = 'block';
          connectedView.style.display = 'none';
          if (data.pairingCode) {
            currentCode = data.pairingCode;
            document.getElementById('codeDisplay').innerText = data.pairingCode;
          }
        }

        // Stats
        if (data.uptime) {
          const mins = Math.floor(data.uptime / 60);
          document.getElementById('uptimeVal').innerText = mins + 'm';
        }
        if (data.subBotsCount !== undefined) {
          document.getElementById('subBotsCountVal').innerText = data.subBotsCount;
        }
        if (data.phoneNumber) {
          document.getElementById('phoneDisplay').innerText = '+' + data.phoneNumber;
        }
      } catch (e) {
        // En caso de reconexión
      }
    }

    setInterval(pollStatus, 2500);
  </script>
</body>
</html>`;
}

module.exports = { getDashboardHtml };
