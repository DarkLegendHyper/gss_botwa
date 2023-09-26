// menu.js
module.exports = {
  mainMenu: (pushname, pushwish, botname, OWNER_NAME, owner, prefix, hours, minutes, seconds, xtime, xdate, me, isPublic) => `
  Hi 👋 *${pushname}*
  *${pushwish}*
  
  ╭◯━━━  *Bot Info* ━━━◯
  │ 🤖 *Bot Name* : *${botname}*
  │ 👤 *Owner Name* : *${OWNER_NAME}*
  │ 👨‍💻 *Owner number* : *${owner}*
  │ 🚀 *Prefix* :  *${prefix}*
  │ ⏳ *Uptime* : *${hours}h ${minutes}m ${seconds}s*
  │ 🌐 *Mode* : *${isPublic ? 'Public' : 'Self'}*
   ╰◯━━━━━━━━━━━━◯
 
╭◯━━━ *User Info* ━━━◯
│ 🧑 - *Name*: ${pushname}   
│ 📞 - *Number*: @${me.split('@')[0]}
│ ✅ - *Premium*: ✅        
╰◯━━━━━━━━━━━━◯

╭◯━━ *Time Info* ━━◯
│ ⏰ - *Time*: ${xtime}   
│ 📅 - *Date*: ${xdate}   
╰◯━━━━━━━━━━━━━━━━◯

╭◯━━━━━ *Help* ━━━━━◯
│ 🆘 - Please Type */help* 
╰◯━━━━━━━━━━━━━━━━◯

╭◯━ *Bot Commands* ━━━━━◯
│ 1️⃣ - .gpt 🅕 - 
│ 2️⃣ - .img 🅕 - 
│ 3️⃣ - .dall 🅕 -   
╰◯━━━━━━━━━━━━━━━━◯

╭◯━━━ *Bard* ━━━━━◯
│ 🎭 - .bard 🅕           
╰◯━━━━━━━━━━━━━◯

╭◯━━━━ *Tools Menu* ━━━━━◯
│ 🗣 - .tts 🅕
│ 📋 - .delete  🅞
│ 🌐 - .translate 🅕
│ ℹ️ - .info 🅕
│ 🧬 - Getbio  🅕
│ 🖇️ - tinyurl 🅕
│ 📧 - tempmail 🅕
│ 📩 - checkmail 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━━ *Group Menu* ━━━━━◯
│ 🚫 - .kick @user  🅖
│ 🚫 - .kick @user 🅖
│ ➕ - .add @user  🅖
│ 👑 - .promote @user  🅖
│ 👤 - .demote @user  🅖
│ 📣 - .group off / on  🅖
│ 🔗 - .linkgc  🅖
│ 🕠 - closetime  🅖
│ 🕥 - opentime  🅖
│ ️⛓️ - Antilinkgc  🅖
│ 🗣️ - antitox i  🅖
│ 🚪 - .leavegc 🅖
│ ️📊 - .poll 🅖
│ 🤝 - .join 🅖
│🚫 - .revoke  🅖
│💌 - .invite  🅖
╰◯━━━━━━━━━━━━━◯ 

╭◯━━━━ *Owner Menu* ━━━━━◯
│ ✏️ - .setname  🅞
│ 📝 - .setbio  🅞
│ 🚫 - .block 🅞
│ ✅ - .unblock 🅞
│ 😴 - .sleep 🅞
│ 🔁 - .autoread  🅞
│ 🌐 - .self 🅞
│ 🌍 - .public  🅞
│ 🆕 - .addowner 🅞
│ 🚮 - .delowner  🅞
│ ➕ - .addrpem 🅞
│ ➖ - .delprem 🅞
│ ➕🚫 - .addbadword  🅞
│ ➖🚫 - .delbadword  🅞
│ 📋 - .listprem  🅞
│ 📋🚫 - .listbadword  🅞
│ 📝 - .autotyping 🅞
│ 🌟 - .alwaysonline 🅞
╰◯━━━━━━━━━━━━━◯

╭◯━━ *Bug Reporting* ━━◯
│ 🐞 - .bug 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━━ *Sticker Menu* ━━━◯
│ 🎨 - .sticker 🅕          
╰◯━━━━━━━━━━━━━◯

╭◯━━━━ *Search Menu* ━━━━━◯
│ 🔍 - .google 🅕
│ 📷 - .insta 🅕
│ 📦 - .apk 🅕
│ 🎬 - .yts 🅕
│ 🌦️ - .weather 🅕
│ 🎵 - .lyrics 🅕
│ 🕵️️ - .githubstalk 🅕
│ 👤 - .igs 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━* Downloaders* ━◯
│ 🎬 - video 🅕
│ 🎵 - song 🅕
│ 🌐 - fb 🅕
│ 📂 - Gdrive 🅕
│ 🔖 - gitclone 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━*Anime (18+)*━━━━◯
│ 🔞 - nsfw Menu 🅟
│ 📵 - .AntiNsfw   🅞
╰◯━━━━━━━━━━━━━◯

🤖 𝐆𝐒𝐒_𝚩𝚯𝚻𝐖𝚫 
👨‍💻 *𝐶𝑅𝛯𝛥𝑇𝛯𝐷 𝐵𝑌* :𝐒𝚰𝐃 𝚩𝚮𝚫𝚰 & 𝐆𝚫𝐔𝚻𝚫𝚳
`,
  nsfwMenu: `
 ╭◯━*Anime (18+)*━━━━◯
│ 🍑 - .hentai 🅕 
│ 😺 - .neko  🅕 
│ 🙇♂️ - .trap   🅕 
│ 💦 - .gasm 🅕 
│ 😮 - .ahegao 🅕 
│ 🍑 - .ass 🅕 
│ 🔞 - .bdsm 🅕 
│ 👄 - .blowjob 🅕 
│ 👀 - .cuckold 🅕 
│ 💦 - .cum 🅕
│ 👩🦰 - .milf 🅕 
│ 🦄 - .eba 🅕 
│ 💋 - .ero 🅕 
│ 👠 - .femdom 🅕 
│ 👣 - .foot 🅕 
│ 🥂 - .gangbang 🅕
│ 👓 - .glasses 🅕 
│ 🎸 - .jahy 🅕 
│ 🍆 - .masturbation 🅕 
│ 📚 - .manga   🅕 
│ 😼 - .neko-hentai  🅕 
│ 😽 - .neko-hentai2 🅕 
│ 🍭 - .nsfwloli 🅕 
│ 🎉 - .orgy 🅕 
│ 👙 - .panties 🅕 
│ 🍑 - .pussy 🅕 
│ 🐙 - .tentacles 🅕
│ 🦵 - .thighs 🅕 
│ 👭 - .yuri 🅕 
│ 🩱 - .zettai 🅕 
╰◯━━━━━━━━━━━━━◯
  `
};
