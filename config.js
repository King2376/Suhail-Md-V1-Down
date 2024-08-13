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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237692446850";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE ||  process.env.AUTO_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME ||  process.env.AUTO_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG || "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_35_08_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTczLFxuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDgzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICAxMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwLFxuICAgICAgICA4OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgODYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgODgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUithNXN2bTQvOEVWdTkvbUhvRXlaVE5YYndzcEE5M2M4YkRFZ0RwRmFCaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidUtUY2UtdHZUSU9BTGJBTlVCQURUUVwiLFxuICBcInBob25lSWRcIjogXCIxNGMzNzNhMC1iNzg5LTQ4M2UtOWJlYi02NDdiZjAzODliMzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICA5MSxcbiAgICAgIDExOSxcbiAgICAgIDM4LFxuICAgICAgMTczLFxuICAgICAgMjQ0LFxuICAgICAgMjMsXG4gICAgICAxMTksXG4gICAgICAxOTAsXG4gICAgICA1OCxcbiAgICAgIDQwLFxuICAgICAgMTkwLFxuICAgICAgNTcsXG4gICAgICAyNyxcbiAgICAgIDEwOSxcbiAgICAgIDc5LFxuICAgICAgMTcxLFxuICAgICAgMjUsXG4gICAgICAzNixcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgMTkxLFxuICAgICAgMzgsXG4gICAgICAxNDYsXG4gICAgICAyNDAsXG4gICAgICAxMjMsXG4gICAgICA1MSxcbiAgICAgIDY1LFxuICAgICAgMjAzLFxuICAgICAgMTU3LFxuICAgICAgOSxcbiAgICAgIDcxLFxuICAgICAgMjA4LFxuICAgICAgMjMxLFxuICAgICAgMzAsXG4gICAgICA0MSxcbiAgICAgIDk3LFxuICAgICAgMzEsXG4gICAgICAxODUsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVzRub2dDRUpiNjdiVUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1pT05uVWRtcG0yYlRjajVWdy9rbmRQVFdLa2hVdzc2ZmlLZEJYdXJhVGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUEhsaHdNbDZqWjlwTC91Rk8wRG1OejJvQ1MreTFFa29zc2lGZ0MrN3Y4ME1NRitXaERmUEo4NFh2SW8vbDdZbDFHTHlTakMzSEpSQThPWk1pYWNGaXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTmgrMUtVRHBDM0xUYmtwNnoxNEp1dXhXY2M3VXErU2orYTVQVkd3bWZmYWp4Q2hvZU5Ycm1Ybkc5WEVwZjJWdSs2aElaK3FPS1dLYURwM3lkUDFUaFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTI0NDY4NTA6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMjQ5Mzk3NzU2MTQ2OjEwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjkyNDQ2ODUwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzU2MzI5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURBSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREFKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTU40UjVqNEl4UFUvVUs5ajk2K3pnSVdRd0JBelhRcXA0cGdxRk5IZmQ3QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NTQxNDY4MjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjc1NTU4NzI5MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURBSy5qc29uIjogIntcImtleURhdGFcIjpcInR5Znh3SXdXT0FsdTU4S2QxckM5d0REaWJKZ1Z5a25mNUNWWVlmU0FzRGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTU0MTQ2ODIxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI4NTI5ODUxMDdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEQUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqamJ2TS96cDYxMVJPRC83Ny83Nk9ObnpzbktVaUd5MkNDUnJ6d2hpTndFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU1NDE0NjgyMSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIyODU2NzAyMzEzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREFNLmpzb24iOiAie1wia2V5RGF0YVwiOlwib0QyaU9vc3MvR0dzNmd1aXFIRDZFcjA3RTNmTjZqenhmSU9OVk5RZ1VhWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NTQxNDY4MjEsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlsxLDAsNV19LFwidGltZXN0YW1wXCI6XCIxNzIyODY4NTIzMjgyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREFPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR3BQcUJla2JobEhNbDRDTkV5cis1TXZtNUJLS1lyMkc2Z01qUXE0UytZQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NTQxNDY4MjEsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOls2LDAsMSw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjM1MjA4ODY1OTFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEQVAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4V0FrcjZ1SzdyMFBibFhFb3F5TzlsRWJ1RllHWGU2SFJaaFluWTFlbUhrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU1NDE0NjgyMSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzUsNiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjM1MjA4ODg4MDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Monsieur-Richy",
  ownername:process.env.OWNER_NAME|| "Monsieur Richy",


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

// fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

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
