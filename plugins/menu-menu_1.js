/* 
Codigo abierto - Dejar creditos
Created by https://github.com/BrunoSobrino 
ðð» EMPEIZA A MODIFICAR DESDE AQUÃ ðð» */

import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender   
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric' })
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric' }).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric' })
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)}) * 1000 }
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore }
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])    
    
let imagen1 = fs.readFileSync('./media2/readme.img.jpg')
let imagen2 = fs.readFileSync('./media2/readme.img.jpg') 
let imagen3 = fs.readFileSync('./media2/readme.img.jpg')
let texto1 = `â­ââââââââââââ®
â   ð½ððºððððð - ð±ð¾ð - ð¼ð³
ââ°âââââââââââ¯
â â®
â- ð·ð¾ð»ð° @${m.sender.split("@")[0]}
â- ðð¸ð´ð¼ð¿ð¾ ð°ð²ðð¸ðð¾: ${uptime}
â¿- ðððð°ðð¸ð¾ð: ${rtotalreg}
â â¯               
â ââââ â¢ â â¢ âââââ®
â    *ï¼£ï¼¯ï¼­ï¼¡ï¼®ï¼¤ï¼¯ï¼³*
â ââââ â¢ â â¢ âââââ¯
â
â°â®
01â  Bot (ð¢ð ð ð ðð ððððððð)
02â  admins (ð¢ð ð ð ðð ððððððð)
03â  ${usedPrefix}grupos
04â  ${usedPrefix}estado
05â  ${usedPrefix}infobot
06â  ${usedPrefix}donar
07â  ${usedPrefix}grouplist
08â  ${usedPrefix}owner
09â  ${usedPrefix}script
10â  ${usedPrefix}join
11â  ${usedPrefix}mates
12â  ${usedPrefix}ppt 
13â  ${usedPrefix}prostituto 
14â  ${usedPrefix}prostituta 
15â  ${usedPrefix}gay2 
16â  ${usedPrefix}lesbiana 
17â  ${usedPrefix}pajero 
18â  ${usedPrefix}pajera 
19â  ${usedPrefix}puto 
20â  ${usedPrefix}puta 
21â  ${usedPrefix}manco 
22â  ${usedPrefix}manca 
23â  ${usedPrefix}rata 
24â  ${usedPrefix}love 
25â  ${usedPrefix}doxear 
26â  ${usedPrefix}pregunta 
27â  ${usedPrefix}slot 
28â  ${usedPrefix}pvp 
29â  ${usedPrefix}simi 
30â  ${usedPrefix}topgays
31â  ${usedPrefix}topotakus
32â  ${usedPrefix}formarpareja
33â  ${usedPrefix}verdad
34â  ${usedPrefix}reto
35â  ${usedPrefix}enable
36â  ${usedPrefix}disable
37â  ${usedPrefix}reporte
38â  ${usedPrefix}facebook
39â  ${usedPrefix}instagram
40â  ${usedPrefix}mediafire
41â  ${usedPrefix}instagram
42â  ${usedPrefix}gitclone
43â  ${usedPrefix}gdrive
44â  ${usedPrefix}tiktok
45â  ${usedPrefix}ytmp3
46â  ${usedPrefix}ytmp4
47â  ${usedPrefix}ytmp3doc
48â  ${usedPrefix}ytmp4doc
49â  ${usedPrefix}play.1
50â  ${usedPrefix}play.2
51â  ${usedPrefix}play
52â  ${usedPrefix}playdoc
53â  ${usedPrefix}spotify
54â  ${usedPrefix}imagen
55â  ${usedPrefix}pinteret
56â  ${usedPrefix}wallpaper
57â  ${usedPrefix}wallpaper2
58â  ${usedPrefix}pptiktok
59â  ${usedPrefix}igstalk
60â  ${usedPrefix}igstory
61â  ${usedPrefix}tiktokstalk
62â  ${usedPrefix}add
63â  ${usedPrefix}kick
64â  ${usedPrefix}grupo
65â  ${usedPrefix}promote
66â  ${usedPrefix}demote
67â  ${usedPrefix}demote 
68â  ${usedPrefix}infogroup
69â  ${usedPrefix}link
70â  ${usedPrefix}setname 
71â  ${usedPrefix}setdesc
72â  ${usedPrefix}invocar
73â  ${usedPrefix}setwelcome
74â  ${usedPrefix}setbye 
75â  ${usedPrefix}hidetag
76â  ${usedPrefix}toimg
77â  ${usedPrefix}tomp3
78â  ${usedPrefix}toptt
79â  ${usedPrefix}tovideo
80â  ${usedPrefix}tourl
81â  ${usedPrefix}tts
82â  ${usedPrefix}logos
83â  ${usedPrefix}simpcard
84â  ${usedPrefix}hornycard
85â  ${usedPrefix}lolice
86â  ${usedPrefix}ytcomment
87â  ${usedPrefix}itssostupid
88â  ${usedPrefix}pixelar
89â  ${usedPrefix}blur
90â  ${usedPrefix}cristianoronaldo
91â  ${usedPrefix}messi
92â  ${usedPrefix}meme
93â  ${usedPrefix}itzy
94â  ${usedPrefix}blackpink
95â  ${usedPrefix}kpop
96â  ${usedPrefix}lolivid
97â  ${usedPrefix}loli
98â  ${usedPrefix}navidad
99â  ${usedPrefix}ppcouple
â» â°â®
100â  ${usedPrefix}neko
101â  ${usedPrefix}waifu
102â  ${usedPrefix}akira
103â  ${usedPrefix}akiyama
104â  ${usedPrefix}anna
105â  ${usedPrefix}asuna
106â  ${usedPrefix}ayuzawa
107â  ${usedPrefix}boruto
108â  ${usedPrefix}chiho
109â  ${usedPrefix}chitoge
110â  ${usedPrefix}deidara
111â  ${usedPrefix}erza
112â  ${usedPrefix}elaina
113â  ${usedPrefix}eba
114â  ${usedPrefix}emilia
115â  ${usedPrefix}hestia
116â  ${usedPrefix}hinata
117â  ${usedPrefix}inori
118â  ${usedPrefix}isuzu
119â  ${usedPrefix}itachi
120â  ${usedPrefix}itori
121â  ${usedPrefix}kaga
122â  ${usedPrefix}kagura
123â  ${usedPrefix}kaori
124â  ${usedPrefix}keneki
125â  ${usedPrefix}kotori
126â  ${usedPrefix}kurumi
127â  ${usedPrefix}madara
128â  ${usedPrefix}mikasa
129â  ${usedPrefix}miku
130â  ${usedPrefix}minato
131â  ${usedPrefix}naruto
132â  ${usedPrefix}nezuko
133â  ${usedPrefix}sagiri
134â  ${usedPrefix}sasuke
135â  ${usedPrefix}sakura
136â  ${usedPrefix}cosplay
137â  ${usedPrefix}pack
138â  ${usedPrefix}pack2
139â  ${usedPrefix}pack3
140â  ${usedPrefix}videoxxx
141â  ${usedPrefix}tetas
142â  ${usedPrefix}booty
143â  ${usedPrefix}ecchi
144â  ${usedPrefix}furro
145â  ${usedPrefix}imagenlesbians
146â  ${usedPrefix}panties
147â  ${usedPrefix}pene
148â  ${usedPrefix}porno
149â  ${usedPrefix}porno2
150â  ${usedPrefix}randomxxx
151â  ${usedPrefix}pechos
152â  ${usedPrefix}yaoi
153â  ${usedPrefix}yaoi2
154â  ${usedPrefix}yuri
155â  ${usedPrefix}yuri2
156â  ${usedPrefix}trapito
157â  ${usedPrefix}hentai
158â  ${usedPrefix}pies
159â  ${usedPrefix}nsfwloli
160â  ${usedPrefix}nsfworgy
161â  ${usedPrefix}nsfwfoot
162â  ${usedPrefix}nsfwass
163â  ${usedPrefix}nsfwbdsm
164â  ${usedPrefix}nsfwcum
165â  ${usedPrefix}nsfwero
166â  ${usedPrefix}nsfwfemdom
167â  ${usedPrefix}nsfwglass
168â  ${usedPrefix}bass
169â  ${usedPrefix}blown
170â  ${usedPrefix}deep
171â  ${usedPrefix}earrape
172â  ${usedPrefix}fast
173â  ${usedPrefix}fat
174â  ${usedPrefix}nightcore
175â  ${usedPrefix}reverse
176â  ${usedPrefix}robot
177â  ${usedPrefix}slow
178â  ${usedPrefix}smooth
179â  ${usedPrefix}tupai
180â  ${usedPrefix}start
181â  ${usedPrefix}next
182â  ${usedPrefix}leave
183â  ${usedPrefix}animeinfo
184â  ${usedPrefix}google
185â  ${usedPrefix}letra
186â  ${usedPrefix}wikipedia
187â  ${usedPrefix}ytsearch
188â  ${usedPrefix}apkdone
189â  ${usedPrefix}apkgoogle
190â  ${usedPrefix}apkmody
191â  ${usedPrefix}apkshub
192â  ${usedPrefix}happymod
193â  ${usedPrefix}hostapk
194â  ${usedPrefix}revdl
195â  ${usedPrefix}toraccino
196â  ${usedPrefix}uapkpro
197â  ${usedPrefix}afk
198â  ${usedPrefix}acortar
199â  ${usedPrefix}calc
200â  ${usedPrefix}del
201â  ${usedPrefix}qrcode
202â  ${usedPrefix}readmore
203â  ${usedPrefix}spamwa
204â  ${usedPrefix}styletext
205â  ${usedPrefix}traducir
206â  ${usedPrefix}balance
207â  ${usedPrefix}claim
208â  ${usedPrefix}top
209â  ${usedPrefix}levelup
210â  ${usedPrefix}myns
210â  ${usedPrefix}perfil
210â  ${usedPrefix}work
210â  ${usedPrefix}minar
210â  ${usedPrefix}buy
210â  ${usedPrefix}buyall
210â  ${usedPrefix}transfer
210â  ${usedPrefix}verificar
210â  ${usedPrefix}unreg
210â  ${usedPrefix}sticker
220â  ${usedPrefix}emojimix
221â  ${usedPrefix}semoji
222â  ${usedPrefix}attp
223â  ${usedPrefix}ttp
224â  ${usedPrefix}pat
225â  ${usedPrefix}slap
226â  ${usedPrefix}kiss
227â  ${usedPrefix}dado
228â  ${usedPrefix}wm
229â  ${usedPrefix}stickermarker
230â  ${usedPrefix}stickerfilter
232â  ${usedPrefix}menucompleto
233â  ${usedPrefix}menuaudios
234â  ${usedPrefix}menu2
235â  ${usedPrefix}menu3
236â  ${usedPrefix}playlist
237â  ${usedPrefix}playlist2
â­ââ¯
â â¯
âã¤ã¤ã¤ A____A
âã¤ã¤ã¤ |ã»ãã»|
âã¤ã¤ã¤ |ã£ãï½|
âã¤ã¤ã¤ |ããã|
âã¤ã¤ã¤ |ããã|
âã¤ã¤ã¤ Uï¿£ï¿£U
â ââââ â¢ â â¢ âââââ®
â°ââââ â¢ â â¢ âââââ¯`
const fake = { quoted: {
key : {
participant : '0@s.whatsapp.net' },
message: {
orderMessage: {
itemCount : 999999,
status: 1,
surface : 1,
message: wm, 
orderTitle: 'WaBot',
thumbnail: imagen2, 
sellerJid: '0@s.whatsapp.net' }}}}      
const owner = "34623442554@s.whatsapp.net"
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{buttonId: `#donar`, buttonText: {displayText: 'ð® ð³ð¾ð½ð°ð ð®'}, type: 1},
{buttonId: `#menuaudios`, buttonText: {displayText: 'ð ð¼ð´ð½ð ð°ðð³ð¸ð¾ð ð'}, type: 1},
{buttonId: `#menucompleto`, buttonText: {displayText: 'ð ð¼ð´ð½ð ð²ð¾ð¼ð¿ð»ð´ðð¾ ð'}, type: 1}, ]
let buttonMessage = {
document: imagen1, 
fileName: `á´Ê á´á´á´á´Ê Êá´á´ á´á´ á´¡Êá´á´sá´á´á´â©`, 
mimetype: `application/${document}`,
jpegThumbnail: imagen1,
caption: texto1,
fileLength: "99999999999999",
mentions:[m.sender, owner],
footer: `ðð: ðððð¨ð¬ð¦ð¢ð`,
buttons: buttons,
headerType: 4,   
contextInfo: {
"mentionedJid": [m.sender, owner],
"externalAdReply": {
"showAdAttribution": false,
"title": `ðð¾ð²ð°ð¼ð´ 7ð7`,
"mediaType": 2, 
"previewType": "VIDEO",
"thumbnail": imagen3,
"mediaUrl": 'http://atom.bio/nekosmic-nk',
"sourceUrl": 'https://www.pornhub.com' }}} 
conn.sendMessage(m.chat, buttonMessage, fake)}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menusimple|menÃºsimple|memusimple|memÃºsimple|helpsimple|infosimple|comandossimple|allmenusimple|menusimple|ayudasimple|commandssimple|commandossimple)$/i
export default handler
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
