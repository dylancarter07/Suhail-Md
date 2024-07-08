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
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_19_47_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjExLFxuICAgICAgICA4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMixcbiAgICAgICAgNjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNixcbiAgICAgICAgMTA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNkU5TXYwSkN3MEd5MW9xdU5sZnNsQlJXbjhiU2s1SmExRnBSUlRBRHN6Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQldQeEE1b29RdS1ERzhJVVEwYU1FZ1wiLFxuICBcInBob25lSWRcIjogXCJjOGM1ZTVkZi0xOGQyLTQzYzAtOTcxZi0yMGJiMGRjNmUwNzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICA1MixcbiAgICAgIDExNyxcbiAgICAgIDEwNixcbiAgICAgIDE5MixcbiAgICAgIDE4NCxcbiAgICAgIDcxLFxuICAgICAgMjU0LFxuICAgICAgMTYxLFxuICAgICAgMTMyLFxuICAgICAgNTYsXG4gICAgICAyMDEsXG4gICAgICAyNTMsXG4gICAgICA2NyxcbiAgICAgIDIzMCxcbiAgICAgIDU0LFxuICAgICAgNjIsXG4gICAgICAxMjAsXG4gICAgICA0MCxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDUzLFxuICAgICAgMTk3LFxuICAgICAgMjI2LFxuICAgICAgMTcxLFxuICAgICAgMjgsXG4gICAgICA3MixcbiAgICAgIDE2MCxcbiAgICAgIDE0LFxuICAgICAgMTYyLFxuICAgICAgMTk5LFxuICAgICAgNTksXG4gICAgICAxNSxcbiAgICAgIDE1NSxcbiAgICAgIDIyNSxcbiAgICAgIDE5NixcbiAgICAgIDU1LFxuICAgICAgMTg0LFxuICAgICAgOSxcbiAgICAgIDc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkwzTjRCODFGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIzMzc0NTkwOTA1NDoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIwNjM3MTY3NzM5Mjg6MjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTld2NTVBSEVMdUVzYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXVTJmTjJ3YkpyYkVSckRCaFlPY0lJQWc3YWZiVUpxcit1aFN1V2NMaFJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkw2MjkzZmJJU09NVlpQNUs2NjBFd1ZtOE53bGNxcnBiTVFWSFE2SCtkcE5kd1RTM2syTks1Wm9JYmZ6UkZMb2pEMkhCNkU2WWFGbWxML3pyRCtuYkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVQV3FYZTZoMlAydFJqbmE4N0pNY25oVDlXZ1ZNWTFmcnVKYlpwZ3ppbTJDLy9ya200TFZHMVMyOWVsWTlLQkhldko5OEpINGJoTThDTi9IQ0x2V0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjMzNzQ1OTA5MDU0OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDY4MDMwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==


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
