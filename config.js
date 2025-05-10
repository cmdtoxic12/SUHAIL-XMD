const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Accra/Ghana";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "233535679394";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233535679394";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_34_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg2LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDc4LFxuICAgICAgICA0MixcbiAgICAgICAgMTM0LFxuICAgICAgICA1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxLFxuICAgICAgICA5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxLFxuICAgICAgICAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExLFxuICAgICAgICA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMixcbiAgICAgICAgMTI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAxLFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICA5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcwLFxuICAgICAgICA3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU4LFxuICAgICAgICA4NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5KN0NjWU9IMnhiRVJLbytRL05QeElVVkFLN2d1WHcxQVBEbGg5YVZ3bG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZzSVB2ZF9oUUpxS0JOQ2NYaWREekFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzllZjIyMTUtNWJiMC00NDhiLTk5YTctY2VhNDY2M2IzYTYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgMzIsXG4gICAgICAxNDQsXG4gICAgICAxNTYsXG4gICAgICAyMzMsXG4gICAgICAxMzcsXG4gICAgICAyMjMsXG4gICAgICAyMDYsXG4gICAgICAxOTksXG4gICAgICA2NCxcbiAgICAgIDE2NixcbiAgICAgIDE1OCxcbiAgICAgIDc5LFxuICAgICAgMTk4LFxuICAgICAgMzQsXG4gICAgICAyMTQsXG4gICAgICA3NCxcbiAgICAgIDEzLFxuICAgICAgMTU2LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDc4LFxuICAgICAgOTEsXG4gICAgICAyMjMsXG4gICAgICAxODcsXG4gICAgICAyNyxcbiAgICAgIDEwMixcbiAgICAgIDE4NCxcbiAgICAgIDExMyxcbiAgICAgIDI3LFxuICAgICAgMTY0LFxuICAgICAgNzYsXG4gICAgICAyMTQsXG4gICAgICAxNjcsXG4gICAgICAxOTAsXG4gICAgICAxOTcsXG4gICAgICAxNTAsXG4gICAgICAxOTksXG4gICAgICA2NixcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUWVk3UUpSM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTM1Njc5Mzk0OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTY1MjI5NjYwNjk0NTg6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEh5aHZRSEVQaUMvTUFHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5c001YWxhT0VqcW5MQ2MwOUJOTjJZcmdjc3VxTTR3Rmg4alBBRlFZKzNBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhJbTRoTmxycEFlYktoQUIrbnBDZXpIemlvLzdrWXRhdmdmbDZlMnVic3RZZkJTOTlyWmsyY1ErU2Z1bHR4MUQ2REw4WXlkSm1lbFlBWWxrY0RGL0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkcrajRGUVErQkk1ZmwrVjMwRm9xRkFkWG1FN2J6cWRMOVdDcEp0Rnp1WDh5dmVabkJGL0o4UUY0MnhoVitYMWpwUnlVUTlYemtTdEI2UitPTitqZ0RBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzNTY3OTM5NDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2ODYyNDYxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "MRWILL-available",
  packname: process.env.PACK_NAME || "MRWILL-available",
  botname : process.env.BOT_NAME  || "MRWILL-available",
  ownername:process.env.OWNER_NAME|| "MRWILL-available",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
