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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348152453993";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_14_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2LFxuICAgICAgICA0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDg2LFxuICAgICAgICA2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgNjksXG4gICAgICAgIDkzLFxuICAgICAgICAzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcxLFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDM4LFxuICAgICAgICA2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDgyLFxuICAgICAgICAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDczLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM0LFxuICAgICAgICA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYyLFxuICAgICAgICA3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDk2LFxuICAgICAgICAzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg3LFxuICAgICAgICA5LFxuICAgICAgICA3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3S2RtR2tKOGdLNmRTZ0tJT3dPVUFOazBRN21uQkQ4c1o0M253Z0VrZmY0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNTI0NTM5OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU1QTQ3NDI0MjI4RDkyNzM5NzVDQzE5NTEyMEUyOUY1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTcwMTI2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNTI0NTM5OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE1QzAyQUEwMTkyREU5NzFBRjg4NjI5QzY3MDhBNjIxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTcwMTI2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNTI0NTM5OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMwMDFFOTJBMDNDQUVEQ0RBMjQ4M0QzRDYwNjI4NzZCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTcwMTI2OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNTI0NTM5OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ2NzU2NjhDQzAyMUVGOTNGQjZCREVBNjZCN0ExOUQwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTcwMTI3MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtcUVoa2pXUlNfaUtBQ05NbUoyc3FRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA3MTNjYjVmLTUyM2EtNDEwNy04ZjJhLWYwNDMzM2IyNjQyMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICA5NSxcbiAgICAgIDEyMixcbiAgICAgIDU4LFxuICAgICAgMjIzLFxuICAgICAgMTAzLFxuICAgICAgMjM0LFxuICAgICAgMTQyLFxuICAgICAgMjcsXG4gICAgICAyMzEsXG4gICAgICA5MSxcbiAgICAgIDEzOSxcbiAgICAgIDIxLFxuICAgICAgMjMyLFxuICAgICAgMTk0LFxuICAgICAgODgsXG4gICAgICAyMTIsXG4gICAgICAyMzcsXG4gICAgICAyMjIsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMTI5LFxuICAgICAgODUsXG4gICAgICA3MCxcbiAgICAgIDE0NyxcbiAgICAgIDIxNCxcbiAgICAgIDEwOSxcbiAgICAgIDY5LFxuICAgICAgMTI0LFxuICAgICAgMzMsXG4gICAgICA5OSxcbiAgICAgIDk3LFxuICAgICAgMTk4LFxuICAgICAgMTk3LFxuICAgICAgMTY1LFxuICAgICAgMTIsXG4gICAgICAxODQsXG4gICAgICAxMTMsXG4gICAgICA2OSxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhYWjRRVDVZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTUyNDUzOTkzOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTY4Njk3NzE0NTI1NjY6MzRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRPCfkZFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNMmNnVE1RamViU3V3WVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZzVHY5WlluTkJiMWlRS3lxKzF3aFAyQXQ0QUVadmJTSlZ6aWZPeEpaeUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN2I1RHB1RGJDT2dsSDIreC82clF3OGVwQm9ZRmhWQjR6aUJvMGtaS3B2YU1mS0d2SlVRQS9RVm9FcjMzZUV6M0o0NGlrT3pCa1BtRUxNak5XczUxRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV2NwTVI0RThGRFJtTldNMHNiaXVSWWJWUi8yeTJwNnplREs1RkUzenV6VjI4MlFjeXdBTDREcXVjWW9kb1oweWlJcGUrY0p2cGxBODVadXhibEg3aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1MjQ1Mzk5MzozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTcwMTI2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJtYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm1hLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMlBhVHgwSXp1ZEtaSnVhY1FaS0o4M3ovOVZlc25Xbi9JWmtmc1lia2JRQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDY5NzQ3OTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTcwMTA5ODcwNVwifSIKfQ=="  // PUT your SESSION_ID 


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
