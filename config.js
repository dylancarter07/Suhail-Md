const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_09_22_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5LFxuICAgICAgICA1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc0LFxuICAgICAgICA0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MixcbiAgICAgICAgMTg5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUyLFxuICAgICAgICAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk1LFxuICAgICAgICA4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkxLFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3LFxuICAgICAgICA0MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc5LFxuICAgICAgICA2NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJc3dJaTM4N0g1amlHelg4d0E0NFJpdG5XNGpuQkFRbGU0UmszWW91RTVVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjMzNzQ1OTA5MDU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QTk1NUY3QkM5QjRDRUQ4NEQwODE3N0IzRTY5NkJBRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1MTY5MzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS0VhTUtIM0pTZ0todGtadWtnU3dLZ1wiLFxuICBcInBob25lSWRcIjogXCIwNmE4Yzk2ZC0wYTc2LTRiMDctYTZiNC04YTZiY2EwMTk4ODNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgMjcsXG4gICAgICA3LFxuICAgICAgMjA1LFxuICAgICAgMTc1LFxuICAgICAgNjMsXG4gICAgICA3MCxcbiAgICAgIDIwMixcbiAgICAgIDg4LFxuICAgICAgNzksXG4gICAgICAxNjksXG4gICAgICAyMTMsXG4gICAgICA4OSxcbiAgICAgIDIwNixcbiAgICAgIDE0LFxuICAgICAgMzUsXG4gICAgICA0MyxcbiAgICAgIDE1LFxuICAgICAgMTM1LFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMTY0LFxuICAgICAgMTE3LFxuICAgICAgNDQsXG4gICAgICAxODcsXG4gICAgICAxNjQsXG4gICAgICA4MixcbiAgICAgIDIyMSxcbiAgICAgIDI1MixcbiAgICAgIDgsXG4gICAgICAxMzksXG4gICAgICA1NyxcbiAgICAgIDEsXG4gICAgICAxNTQsXG4gICAgICA4MixcbiAgICAgIDE2LFxuICAgICAgMTQxLFxuICAgICAgMTYxLFxuICAgICAgMTYwLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFBTS1lINzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjMzNzQ1OTA5MDU0OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjA2MzcxNjc3MzkyODozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZXY1NUFIRU1HQ3RMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldVMmZOMndiSnJiRVJyREJoWU9jSUlBZzdhZmJVSnFyK3VoU3VXY0xoUms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidjhPQWFhVXRQajUxSmhzY0NHYmhjNC90RTBCNG0rd1QzR0dHOVhsc2svdXRmZ3BLYVpUbVhLbWFCZEpzcFdtLzFDVlpPMWxtbzMrL3d5OG9BU3BQRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOXVISW5jUmE2NGFjNStMemYyOUVsYnhlcDdFSWsrcEh4R2xhSXdlYldJM3M0UGptbi90bGxXUk5ObG8wakxLYXRrSEQyZ1BpK2tjMXFRYzh6ajRXZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMzM3NDU5MDkwNTQ6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MTY5MzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQdHJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB0ci5qc29uIjogIntcImtleURhdGFcIjpcInphb0VWbzBZeVE3Vk1FMnRhZU81WmJYM1kyV3Y1NS9EVmRqNUJDeUFiV1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkxNDI5NjI3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
