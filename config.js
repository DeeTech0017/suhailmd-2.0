const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349114501700";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_50_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICA4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDksXG4gICAgICAgIDcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU1LFxuICAgICAgICA4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInE4UWRkVS9BRm9lUEZISVpSWTRsU0tqTWZ0NlpIb2tBQkFNanFrZTFxcUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklsTmRMcG9kVC02c2t0RWhkYzJqMXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTYwMDE2OTgtNjFjOS00OWZhLWJlMzktODdmNTBkYmZiNWY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MixcbiAgICAgIDI0NixcbiAgICAgIDIyNCxcbiAgICAgIDY5LFxuICAgICAgMTE0LFxuICAgICAgMTg4LFxuICAgICAgMTk3LFxuICAgICAgMTEyLFxuICAgICAgMjEsXG4gICAgICA1NCxcbiAgICAgIDc4LFxuICAgICAgMzgsXG4gICAgICAxODcsXG4gICAgICAxOTYsXG4gICAgICAyNTIsXG4gICAgICAyNDIsXG4gICAgICAxMzgsXG4gICAgICAxMTEsXG4gICAgICAyNTIsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAyMzMsXG4gICAgICAyNSxcbiAgICAgIDEwNixcbiAgICAgIDEzNixcbiAgICAgIDEwOSxcbiAgICAgIDE3NixcbiAgICAgIDEwMyxcbiAgICAgIDIyMCxcbiAgICAgIDE3OCxcbiAgICAgIDEzMixcbiAgICAgIDI0NSxcbiAgICAgIDYwLFxuICAgICAgMTYsXG4gICAgICA2MixcbiAgICAgIDI1MCxcbiAgICAgIDM3LFxuICAgICAgMTIsXG4gICAgICAxODcsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjRKOUVRWVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTQ1MDE3MDA6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjcxNjQ0NTg0Mzk4OTM4OjQwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xDRi9UY1F4ZUdvdVFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN3pseS83b3pUMkV1eXl4bGJtTnNpQWdpcGRDNUJ0UUJQeVlMV0szck5nZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDdEw3TVVNMDlUaCs2TXpEMjNabG0yOVZQRHhNOTNDZG82WkkxMlIvNWVOdTNyZGREb3k3MnFNcFdqdzcrTEZUQ0U3Uk03VFduYmJjT1FhMjIxK1hCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIdjQ2YkNJKzZXZlNhK3JlMXQwZE5rV05uUW9TbmlHUU1rZDRNendySFpJM0JrUHJsNitKQkZXN0VWREFNUVZYcHMrY1ROWlM4TTZRNWNmZXhLaFJpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE0NTAxNzAwOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwODE4MjQ5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
