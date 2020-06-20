

// node crone is a node library to help us run simple cron jobs https://www.npmjs.com/package/cron - A cron job is the scheduled task itself. Cron jobs can be very useful to automate repetitive tasks

var CronJob = require('cron').CronJob; // import library
const fetchGithub = require('./tasks/fetchGithub');
new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles');