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
*γπ π·πΎπ»π° _${name}_ πε½‘*

*<ππππ πππππππ/>*
*- π΄ππ²ππΈπ±π΄ π»π°π ππΈπΆππΈπ΄π½ππ΄π πΏπ°π»π°π±ππ°π πΎ π΅ππ°ππ΄π ππΈπ½ π½πΈπ½πΆππ½ πΏππ΄π΅πΈπΉπΎ (#, /, *, .)*

Β° ΰΆ¬βπ _HBO-MAXπ_
Β° ΰΆ¬βπ _aehkwbv501@ondania.com_
Β° ΰΆ¬βπ _NeKosmic-V1P_
Β° ΰΆ¬βπ _Disneyπ_
Β° ΰΆ¬βπ _
Β° ΰΆ¬βπ _

`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://www.instagram.com/invites/contact/?i=lwv1dph6f3rt&utm_content=ohvhscn', 'ππΈπ½ππππΆππ°πΌπ', null, null, [
['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menΓΊ2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
