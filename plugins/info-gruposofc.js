let media = './media2/2.jpeg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola π, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de NeKosmic - Bot*

*β€ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/EOJQxQRVlIR0Wd4HSQZl58

*2.-* https://chat.whatsapp.com/EyVSDmxcdguBJDDKQEVplc

*3.-* https://chat.whatsapp.com/JC4Q6NAn4iEIsWJKNrvV4N

*4.-* https://chat.whatsapp.com/Gm0veATfRP75zmq1W2Ypb3

*5._* https://chat.whatsapp.com/Gm0veATfRP75zmq1W2Ypb3
`.trim(), wm, media, [['πΈπ π°π» πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
