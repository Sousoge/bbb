const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require('./config/config.json');
const token = cfg.token;
const prefix = cfg.prefix;