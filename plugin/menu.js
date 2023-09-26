// menu.js
module.exports = {
  mainMenu: (pushname, pushwish, botname, OWNER_NAME, owner, prefix, hours, minutes, seconds, xtime, xdate, me, isPublic) => `
  Hi 👋 *${pushname}*
  *${pushwish}*
  
 ╔═══════════════════╗
 ║ [🤖] 『 BOT INFO 』 [🤖]
 ║  ☬─────────────☬  
 ║ 🤖 *Bot Name*: ${botname}
 ║ 👤 *Owner Name*: ${OWNER_NAME}
 ║ 👨‍💻 *Owner Number*: ${owner}
 ║ 🚀 *Prefix*: ${prefix}
 ║ ⏳ *Uptime*: ${hours}h ${minutes}m ${seconds}s
 ║ 🌐 *Mode*: ${isPublic ? 'Public' : 'Self'}
 ╠═══════════════════╣
 ║ [🧑] 『 USER INFO 』 [🧑]
 ║  ☬─────────────☬  
 ║ 🧑 *Name*: ${pushname}
 ║ 📞 *Number*: @${me.split('@')[0]}
 ║ ✅ *Premium*: ✅
 ╠═══════════════════╣
 ║ [⏰] 『 TIME INFO 』 [⏰]
 ║  ☬─────────────☬  
 ║ ⏰ *Time*: ${xtime}
 ║ 📅 *Date*: ${xdate}
 ╠═══════════════════╣
 ║ [🆘] 『 HELP 』 [🆘]
 ║  ☬─────────────☬  
 ║ 🆘 Please Type */help*
 ╠═══════════════════╣
 ║ [1️⃣] 『 BOT COMMANDS 』 [1️⃣]
 ║  ☬─────────────☬  
 ║ 1️⃣ .gpt 🅕
 ║ 2️⃣ .img 🅕
 ║ 3️⃣ .dall 🅕
 ╠═══════════════════╣
 ║ [🎭] 『 BARD 』 [🎭]
 ║  ☬─────────────☬  
 ║ 🎭 .bard 🅕
 ╠═══════════════════╣
 ║ [🗣] 『 TOOLS MENU 』 [🗣]
 ║  ☬─────────────☬  
 ║ 🗣 .tts 🅕
 ║ 📋 .delete 🅅
 ║ 🌐 .translate 🅕
 ║ ℹ️ .info 🅕
 ║ 🧬 Getbio 🅕
 ║ 🖇️ tinyurl 🅕
 ║ 📧 tempmail 🅕
 ║ 📩 checkmail 🅕
 ╠═══════════════════╣
 ║ [🚫] 『 GROUP MENU 』 [🚫]
 ║  ☬─────────────☬  
 ║ 🚫 .kick @user 🅖
 ║ 🚫 .ban @user 🅖
 ║ ➕ .add @user 🅖
 ║ 👑 .promote @user 🅖
 ║ 👤 .demote @user 🅖
 ║ 📣 .group off/on 🅖
 ║ 🔗 .linkgc 🅖
 ║ 🕠 .closetime 🅖
 ║ 🕥 .opentime 🅖
 ║ ⛓️ .Antilinkgc 🅖
 ║ 🗣️ .antitoxi 🅖
 ║ 🚪 .leavegc 🅖
 ║ 📊 .poll 🅖
 ║ 🤝 .join 🅖
 ║ 🚫 .revoke 🅖
 ║ 💌 .invite 🅖
 ╠═══════════════════╣
 ║ [✏️] 『 OWNER MENU 』 [✏️]
 ║  ☬─────────────☬  
 ║ ✏️ .setname 🅅
 ║ 📝 .setbio 🅅
 ║ 🚫 .block 🅅
 ║ ✅ .unblock 🅅
 ║ 😴 .sleep 🅅
 ║ 🔁 .autoread 🅅
 ║ 🌐 .self 🅅
 ║ 🌍 .public 🅅
 ║ 🆕 .addowner 🅅
 ║ 🚮 .delowner 🅅
 ║ ➕ .addrpem 🅅
 ║ ➖ .delprem 🅅
 ║ ➕🚫 .addbadword 🅅
 ║ ➖🚫 .delbadword 🅅
 ║ 📋 .listprem 🅅
 ║ 📋🚫 .listbadword 🅅
 ║ 📝 .autotyping 🅅
 ║ 🌟 .alwaysonline 🅅
 ╠═══════════════════╣
 ║ [🐞] 『 BUG REPORTING 』 [🐞]
 ║  ☬─────────────☬  
 ║ 🐞 .bug 🅕
 ╠═══════════════════╣
 ║ [🎨] 『 STICKER MENU 』 [🎨]
 ║  ☬─────────────☬  
 ║ 🎨 .sticker 🅕
 ╠═══════════════════╣
 ║ [🔍] 『 SEARCH MENU 』 [🔍]
 ║  ☬─────────────☬ 
 ║ 🔍 .google 🅕
 ║ 📷 .insta 🅕
 ║ 📦 - .apk 🅕
 ║ 🎬 - .yts 🅕
 ║ 🌦️ - .weather 🅕
 ║ 🎵 - .lyrics 🅕
 ║ 🕵️️ - .githubstalk 🅕
 ║ 👤 - .igs 🅕
 ╠═══════════════════╣
 ║ [🔍] 『 DOWNLOAD MENU 』 [🔍]
 ║ ☬─────────────☬ 
 ║ 📽️ - .video 🅕
 ║ 🎵 - .song 🅕
 ║ 📂 - .fb 🅕
 ║ 📦 - .gdrive 🅕
 ║ 📦 - .gitclone 🅕
 ╠══════════════════╣
 ║ [💢] 『 ANIME 18+ MENU 』 [💢]
 ║ ☬─────────────────☬ 
 ║ 🚫 - .antinsfw 🅕
 ║ 🔞 - .nsfwmenu 🅕
 ╚═══════════════════╝
 ╔═══════════════════╗
 ║🤖 𝐆𝐒𝐒_𝚩𝚯𝚻𝐖𝚫: 👨‍💻 *𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐠𝐬𝐬 𝐭𝐞𝐚𝐦*
 ╚═══════════════════╝
`,
  nsfwmenu: `
 ╔═════════════════════╗
 ║ [🔞] 『 ANIME (18+) SEARCH MENU 』 [🔞]
 ║  ☬─────────────────☬  
 ║ 🍑 - .hentai 🅕 
 ║ 😺 - .neko  🅕 
 ║ 🙇♂️ - .trap   🅕 
 ║ 💦 - .gasm 🅕 
 ║ 😮 - .ahegao 🅕 
 ║ 🍑 - .ass 🅕 
 ║ 🔞 - .bdsm 🅕 
 ║ 👄 - .blowjob 🅕 
 ║ 👀 - .cuckold 🅕 
 ║ 💦 - .cum 🅕
 ║ 👩🦰 - .milf 🅕 
 ║ 🦄 - .eba 🅕 
 ║ 💋 - .ero 🅕 
 ║ 👠 - .femdom 🅕 
 ║ 👣 - .foot 🅕 
 ║ 🥂 - .gangbang 🅕
 ║ 👓 - .glasses 🅕 
 ║ 🎸 - .jahy 🅕 
 ║ 🍆 - .masturbation 🅕 
 ║ 📚 - .manga   🅕 
 ║ 😼 - .neko-hentai  🅕 
 ║ 😽 - .neko-hentai2 🅕 
 ║ 🍭 - .nsfwloli 🅕 
 ║ 🎉 - .orgy 🅕 
 ║ 👙 - .panties 🅕 
 ║ 🍑 - .pussy 🅕 
 ║ 🐙 - .tentacles 🅕
 ║ 🦵 - .thighs 🅕 
 ║ 👭 - .yuri 🅕 
 ║ 🩱 - .zettai 🅕 
 ╚═══════════════════╝
 ╔═══════════════════╗
 ║🤖 𝐆𝐒𝐒_𝚩𝚯𝚻𝐖𝚫: 👨‍💻 *𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐠𝐬𝐬 𝐭𝐞𝐚𝐦*
 ╚═══════════════════╝
  `
};
