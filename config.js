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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_08_55_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDk2LFxuICAgICAgICA0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDM2LFxuICAgICAgICA1OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgODIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDk0LFxuICAgICAgICA1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcxLFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4LFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlN1NHE5SWI4T2tHTzVlS25GUVdyNU12dFEwR2Z2VkxWdHFCaW43Z3E4TU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllIQUZ1UWF4VFlxTXFrZmVscUotNHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDIyOGEzZjItMzc2OS00OTZkLTg5ZjMtMmIxYjlmM2E1MDk1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDIxMCxcbiAgICAgIDI0LFxuICAgICAgOSxcbiAgICAgIDIzNixcbiAgICAgIDE4NyxcbiAgICAgIDE2NixcbiAgICAgIDM1LFxuICAgICAgMTQxLFxuICAgICAgNTEsXG4gICAgICAxNTEsXG4gICAgICA4MixcbiAgICAgIDQ1LFxuICAgICAgMTU3LFxuICAgICAgMzQsXG4gICAgICAxMDUsXG4gICAgICAyMzUsXG4gICAgICAxNzEsXG4gICAgICAxNDcsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICAxNTAsXG4gICAgICAxMixcbiAgICAgIDE4OSxcbiAgICAgIDIzMCxcbiAgICAgIDg3LFxuICAgICAgMTY2LFxuICAgICAgMzMsXG4gICAgICAyOCxcbiAgICAgIDQ4LFxuICAgICAgMTM4LFxuICAgICAgMTc1LFxuICAgICAgMzksXG4gICAgICA5NyxcbiAgICAgIDE3MyxcbiAgICAgIDIyOCxcbiAgICAgIDc0LFxuICAgICAgOSxcbiAgICAgIDM0LFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdXMVI1Q1o0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIzMzc0NTkwOTA1NDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIwNjM3MTY3NzM5Mjg6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmF2NTVBSEVPajFzN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXVTJmTjJ3YkpyYkVSckRCaFlPY0lJQWc3YWZiVUpxcit1aFN1V2NMaFJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFjdC9PSFhrUFl1Y0ZHZFF3VTVYZ1F5OVgrNXZ6VVpENU9KNHdaV0lnQVl2TXdocGFWeTdzcmdJVncwVlJhR2tEcnlvV1BkT00rYUVrQ2gybXJhQUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVJWURaV2UzQTU4OGNSRUJmYnBWSzdsenVYeVFBRGlWQW04Mm83RWlZK2dkemNWbmR5WWNCSHp3ZzRVYjBNN2NZbldmY3orelZKc3MyeklDZTBUb2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjMzNzQ1OTA5MDU0OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTE1MzA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHRyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQdHIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6YW9FVm8wWXlRN1ZNRTJ0YWVPNVpiWDNZMld2NTUvRFZkajVCQ3lBYldZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MTQyOTYyNzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==


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
