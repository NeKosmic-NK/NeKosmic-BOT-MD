let media = './media2/2.jpeg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola 👋, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de NeKosmic - Bot*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/EOJQxQRVlIR0Wd4HSQZl58

*2.-* https://chat.whatsapp.com/EyVSDmxcdguBJDDKQEVplc

*3.-* https://chat.whatsapp.com/JC4Q6NAn4iEIsWJKNrvV4N

*4.-* https://chat.whatsapp.com/Gm0veATfRP75zmq1W2Ypb3

*5._* https://chat.whatsapp.com/Gm0veATfRP75zmq1W2Ypb3
*_TEAM BLACK EAGLE_*
conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/H9aWccvYaJADCDYcAkLd0O', '✨𝘽𝙡𝙖𝙘𝙠 𝙀𝙖𝙜𝙡𝙚✨', null, null, [
], m,)
`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
