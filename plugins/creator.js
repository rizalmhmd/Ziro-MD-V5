import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'creator') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; ðððð\nNICKNAME:ð Owner ðð¼ððð­ð½ððð\nORG: ðð¼ððð­ð½ððð\nTITLE:soft\nitem1.TEL;waid=6281333154367:+62 813-3315-4367\nitem1.X-ABLabel:ð Nomor Owner\nitem2.URL:https://s.id/Cerdasin62\nitem2.X-ABLabel:ð¬ More\nitem3.EMAIL;type=INTERNET: payahhawok@gmail.com\nitem3.X-ABLabel:ð Mail Owner ðð¼ððð­ð½ððð\nitem4.ADR:;;ð®ð© Indonesia;;;;\nitem4.X-ABADR:ð¬ More\nitem4.X-ABLabel:ð Lokasi Saya\nBDAY;value=date:ð ,PRIVATE\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `ð Hai *@${who.split("@")[0]}*, Nih Owner Saya kak`
    await conn.sendButton(m.chat, caption, author, null, [['ð¨Sapa Owner', 'Huuu']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
if (command == 'own') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6281392128956:+62 813-9212-8956\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya `,m)
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|own)$/i

export default handler
