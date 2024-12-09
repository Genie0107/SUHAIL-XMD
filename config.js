const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348081585553";




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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_30_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk3LFxuICAgICAgICA3NyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDc1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDU2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDksXG4gICAgICAgIDIyLFxuICAgICAgICAyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUxLFxuICAgICAgICA3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDI4LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrVi83ZjZTR01PVXJWTXZ5K240WjFyU2s3MXM1T3hXVExFdW9VV1VXekdZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOSVhCWWY5V1JKR3BCbW5ZcTZkazBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNiNmEyZTgxLTc0OTktNGJhOC1iNmViLTRmMTIzNmE3MWMxM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDIxNyxcbiAgICAgIDk3LFxuICAgICAgMTU1LFxuICAgICAgNDQsXG4gICAgICAyMDYsXG4gICAgICA3NSxcbiAgICAgIDIyOCxcbiAgICAgIDIzNyxcbiAgICAgIDEwMixcbiAgICAgIDIwOCxcbiAgICAgIDI1NSxcbiAgICAgIDE3MCxcbiAgICAgIDIzLFxuICAgICAgMTU0LFxuICAgICAgMjUsXG4gICAgICA3NSxcbiAgICAgIDIwMCxcbiAgICAgIDE3NyxcbiAgICAgIDIzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDM1LFxuICAgICAgMTY1LFxuICAgICAgMTA4LFxuICAgICAgODAsXG4gICAgICA0MSxcbiAgICAgIDE1LFxuICAgICAgNTcsXG4gICAgICAzMyxcbiAgICAgIDM3LFxuICAgICAgMzYsXG4gICAgICAyNDgsXG4gICAgICAyNDgsXG4gICAgICAxNjEsXG4gICAgICAzMCxcbiAgICAgIDIwNCxcbiAgICAgIDc0LFxuICAgICAgMTExLFxuICAgICAgNDUsXG4gICAgICAyMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjQ3VjFZQ1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODE1ODU1NTM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkdlbmVzaXNcIixcbiAgICBcImxpZFwiOiBcIjI2MDY2NjQxMzg1NDk3Mjo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ096TzV0NENFSkRmM2JvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN0JxQkVScFBtUzdWZkI5a0JudHl1Y3NOU254bmpzQnl0NHIzNENPZFZ3UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0L09rcmx0MDZlOUNBM1Irb2YyMHI2RFJUQXJmMWtSMzFJRXRjR2pHT24wOXVEd2EwYzJ3c0tjanpaUTg2R3F5TVlYQ2ZMaXF3OFpMbE8ycUhYaU5CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvTnRicTZxOU1RRkJxcTkybmQxck5VWnpmZGFlVHNqUjNDSTY0Y3pMSHdCT3NEcUwzc00wRWY5eHJUZ2pBd1lKNXRreE9HeW8xOWE1UmpjSkNrcDVBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDgxNTg1NTUzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNzgzNDQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmR2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGZHYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0aGNsU1RkaTFoWitOYjEvbk1sQld0azM3SjgrV2ROVS9XVFBOOWhBaUdVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjczNTY4NDQ1NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzY2MjQ1ODc0NFwifSIKfQ=="  // PUT your SESSION_ID 


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
