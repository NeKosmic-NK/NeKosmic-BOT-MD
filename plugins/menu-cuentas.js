const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media2/5.jpeg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*ミ💖 𝙷𝙾𝙻𝙰 _${name}_ 💖彡*

*<𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒/>*
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)*

° ඬ⃟👑 _HBO-MAX👇_
° ඬ⃟👑 _aehkwbv501@ondania.com_
° ඬ⃟👑 _NeKosmic-V1P_
° ඬ⃟👑 _Disney👇_
° ඬ⃟👑 _
° ඬ⃟👑 _

`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://www.instagram.com/invites/contact/?i=lwv1dph6f3rt&utm_content=ohvhscn', '👑𝙸𝙽𝚂𝚃𝚂𝙶𝚁𝙰𝙼👑', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
