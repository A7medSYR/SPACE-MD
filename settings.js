require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJCiVVtSgGbJUwQAAHQHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGAHvRnTEchMRVAQUZWMeCqrAUuRSFCJO+O8b2NPT87A70ctTUZWRefLkOfkDpBkpsYEbMPsBckpukOH2yJocgxmQqijCFHQBggyCGRioj6kbN8NsM834QEEPt0T35tDhK+owO6+K4g7H3mI71bZv4NkFeRUkJPxDQg2K0dkenAv7IqZLp6mjs8SdRiiWjDBH+46wN2LPj2KFO76BZ5sREkrSWM1P+IopTAzcWJDQr8GvzGmzjrVRJq0XXLoP5fndIoNdqfuB8kA+sWVor5e6Zmj11+DPsx6V0apacLfD0iLmcdW3tsidWCy5KoxYinE9WkePOJL4Dr8kcYqRjnDKCGu+zPtlZc1VQQyGHT5Z9Y9ihxzLKmjUxDwrEzTMKv4mFz0jJtfJ14B7bimoDhJi4rmm0iO1b4mHw+Ohist9IwwD95BwS3+3Ocar34Fb9EMrl*D+3GToPG6M8ll02BmfzvPp5dobXtqNQ9u9rIoWHR0hkE68i5fgx*IfMr1eoYqOA+rZHK9Wjmi91janVV2IaOACCskkI6je4NP+JBV9E8og3DYyKHWMc3rgl5R8MA2TaVm25tHzjHUz55aHON1uMqQd+PuysXPL*q24M51s2OyfJeG83UdmY+TkMULjjf384zMX57dXTBjY7AjH92AcUxKRmFjGTp624gdAFENweHFLMXvSDt3S3JTqhvhaQzSC*CzlWmS1TEczbfmGa2UuuBodfLmzJ5A12Q0yzEZYnRgpQso80KlyWMcQlmf3*vghTf2fvg2nIjvgsiQku2S6s8ySD6mOrHIwzDrEqZ06Sh3B4wBTPu8xozRtK4bHmsUkjDE7lh+QRZCWYRTEr8q0NMMQIzRiv8y7Vyhlri1ZG*t4euBLrg+hoIQe1umfLDcX*Mj4TpcDIbj*4qv9VtXpjn31LMQBckrzhhyA2mw8lowA8GPPeKbB+evyC2GRFmkCQlmAHZCnb1uFZVnXr9Sahp4jYW5VgEny19aOOd+23S6FriBKK5qxgt00zLTNM2FC3Bu15wU28+NGxtSVeN+vYvSdr+ahQif5QZF79YC+WdLi+VLrhG7Dr14TSx1*ASnqa5fh4UhXDekGrIe24vTLZ2qtyuJ5eMj46moD6c3k3CB49wM3GU+q2thvCNhPj3YiP9lK8lLeKSTuHj49pPtcjQBIUv4PERKJYrDzO0T4KtubNrZwrNnWdAZdp30uq0ybx+PleRlUWHYlmijjR2YaJkyk*VvlyT*NxW5KWndljtb0Twy*wpbEf4heG9I29Fxj27vyX5uU*+w5PSbhkSKd9da5k3KRwvR1IhN5wT3*NDYgnjuyl45GIT+FidwPP5vQvyBLIoo1cwAzBFNCMIdAHNqla1ehplfygmi5wubd9bT2DJxE8nuOSKSwavOZjx4xHPjSdcn3+PsmiWL2B5aqW5H4+LXSvrRsxzh0H2YSwgtp+iDsDzH1BLAQIUAxQAAAgIAJCiVVtSgGbJUwQAAHQHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'A7medSYR',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
