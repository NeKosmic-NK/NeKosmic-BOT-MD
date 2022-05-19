import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let stiker = await sticker(null, global.API('xteam', '/attp', { file: '', text: teks }), global.packname, global.author)
if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^attp$/i
export default handler
