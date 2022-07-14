/* Adaptado por https://github.com/BrunoSobrino */
let handler = async (m, { text, usedPrefix, command, conn }) => {
if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾*`
const botones = [
{index: 1, urlButton: {displayText: `𝙲𝙾𝙿𝙸𝙰𝚁 𝚃𝙴𝚇𝚃𝙾`, url: `https://www.whatsapp.com/otp/copy/${text}`}},
]
await conn.sendMessage(m.chat, { text: `${text}`, templateButtons: botones, footer: wm })  
}
handler.command = ['copybutton']
export default handler
