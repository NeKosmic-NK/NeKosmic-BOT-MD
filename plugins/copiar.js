/* Adaptado por https://github.com/BrunoSobrino */
let handler = async (m, { text, usedPrefix, command, conn }) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ ππ½ ππ΄πππΎ*`
const botones = [
{index: 1, urlButton: {displayText: `π²πΎπΏπΈπ°π ππ΄πππΎ`, url: `https://www.whatsapp.com/otp/copy/${text}`}},
]
await conn.sendMessage(m.chat, { text: `${text}`, templateButtons: botones, footer: wm })  
}
handler.command = ['copybutton']
export default handler
