import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'π»πΈπ½πΊ π³π΄π» πΆπππΏπΎ',
body: 'π±π π½ππΊπππππ - π±πΎπ',         
previewType: 0, thumbnail: fs.readFileSync("./media2/4.jpeg"),
sourceUrl: `https://www.instagram.com/invites/contact/?i=lwv1dph6f3rt&utm_content=ohvhscn`}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.botAdmin = true
export default handler
