let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Silahkan masukan query', m)
let tetete = `https://api.zacros.my.id/search/konachan?query=${text}`
conn.sendButtonImg(m.chat, tetete, `Hasil Dari ${text}`, wm2, 'Thanks', 'thanks', m) 
}
handler.help = ['konachann'].map(v => v + ' <query>')
handler.tags = ['anime', 'internet',]
handler.command = /^(konachann)$/i

export default handler 