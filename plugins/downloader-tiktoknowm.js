import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
   if (!args[0]) return m.reply(`Masukan Url TikTok !`)
   let res = await fetch(`https://api.ibeng.tech/api/download/tiktok?url=${args[0]}&apikey=ibeng`)
  if (!res.ok) throw await res.text()
let json = await res.json()
   let cap = `Cara Simpan\n\n1. Download Dulu Vidio Nya Kalau Sudah\n2. Masuk Ke Dalam Vidio Nya\n3. Lalu Tekan Titik3 Pojok Kanan Atas\n4. Lalu Pilih Yang Ada Bacaan  Simpan `
conn.sendFile(m.chat, json.result.video, 'tiktok.mp4', cap, m)
}
handler.help = ['ttnowm']
handler.tags = ['downloader']
handler.command = /^(ttnowm)$/i

handler.premium = false
handler.limit = true 

export default handler
