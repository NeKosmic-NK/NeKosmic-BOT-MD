let media = './media2/5.jpeg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola 👋, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de NeKosmic - Bot*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/FJAu5KYaawU5ty9apbdFmy

*2.-* https://chat.whatsapp.com/EyVSDmxcdguBJDDKQEVplc

*3.-* https://chat.whatsapp.com/JC4Q6NAn4iEIsWJKNrvV4N

*4.-* https://chat.whatsapp.com/Gm0veATfRP75zmq1W2Ypb3
`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
