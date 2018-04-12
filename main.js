const Discord = require('discord.js')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))
const talkedRecently = new Set();
var client = new Discord.Client()

client.on('ready', () => {
	console.log('Alt Bot is ready to go')

client.user.setActivity('Type !getalt for an alt', { type: 'Playing' });

})

var cmdmap = {
	getalt: cmd_getalt,
}

function cmd_getalt(msg, args) {
	if (msg.channel.id != 410287558413516800) {
		if (talkedRecently.has(msg.author.id)) {
				msg.channel.send(msg.author.toString() + ", please only use the !getalt command in <#410287558413516800>. (But you can't rightnow because of the cooldown.)");
				msg.delete();
		}
		else {
		msg.channel.send(msg.author.toString() + ', please only use the !getalt command in <#410287558413516800>')
		msg.delete();
	}


	}
	if (msg.channel.id == 410287558413516800) {
		if (talkedRecently.has(msg.author.id)) {
			msg.channel.send(msg.author.toString() + ', your still on cooldown so please wait (Cooldown: 5 mins)');
			msg.delete();
		}
		else {var textArray = [
		'Heres ur alt: wesleyboonstra1@hotmail.com:ryanne1233',
		'Heres ur alt: jbaileylive@gmail.com:family911',
		'Heres ur alt: foxx0007@gmail.com:corsair17',
		'Heres ur alt: vincent860906@gmail.com:v19970906',
		'Heres ur alt: admin@ryuujinx.com:omochao7',
		'Heres ur alt: willowwinter@gmail.com:osiris99',
		'Heres ur alt: sixjokercards@hotmail.com:x9m7mdtbm',
		'Heres ur alt: carsten.wie@web.de:Moritz05',
		'Heres ur alt: malaka@indosat.net.id:Rooney06',
		'Heres ur alt: cindar666@hotmail.de:julian6566',
		'Heres ur alt: olga_muller@ymail.com:Schumi2010',
		'Heres ur alt: nathanmcgraw64@gmail.com:Nathan98',
		'Heres ur alt: daniel.kemp03@gmail.com:F00tb4ll',
		'Heres ur alt: nathanmcgraw64@gmail.com:Nathan98',
		'Heres ur alt: jeffersonhuyle@yahoo.com:safepass12',
		'Heres ur alt: jonah.range@gmail.com:dodgers805',
		'Heres ur alt: biglol99@hotmail.com:Even2007',
		'Heres ur alt: thedrimm23@gmail.com:metin222',
		'Heres ur alt: severic_@hotmail.com:ct99hrek',
		'Heres ur alt: bradlperry@hotmail.com:brady321',
		'Heres ur alt: sardokar75015@hotmail.com:HnrMilf9',
		'Heres ur alt: westin.melvin@gmail.com:Extended20',
		'Heres ur alt: maureenelrick1@hotmail.co.uk:stanley4',
		'Heres ur alt: pazintys@gmail.com:mj229512',
		'Heres ur alt: jenem@interia.pl:jaja1977',
		'Heres ur alt: fin.marshall10@gmail.com:reacher12',
		'Heres ur alt: nikolastrochalakis@live.com:2AOrion4',
		'Heres ur alt: maokiki100248@gmail.com:gg1002',
		'Heres ur alt: jabinc@live.com:ilovemy44mama',
		'Heres ur alt: TheMcPiggy@outlook.com:Angel1256',
		'Heres ur alt: salerno96@gmail.com:iamcool24',
		'Heres ur alt: clarky-2k6@hotmail.com:Rehpyspizpr0',		
		'Heres ur alt: jarodlindemann@gmail.com:titians18',		
		'Heres ur alt: sweetadove@aol.com:roses1996',
		'Heres ur alt: carsten.wie@web.de:Moritz05',
		'Heres ur alt: ozziboy123@gmail.com:rmnkrmnk',
		'Heres ur alt: nikolastrochalakis@live.com:2AOrion4',
		'Heres ur alt: robert04841@gmail.com:4betty1234',
		'Heres ur alt: pivosh098@gmail.com:Damfer3456',
		'Heres ur alt: Treedognayt@yahoo.com:zxcvb130',
		'Heres ur alt: jabinc@live.com:ilovemy44mama',
		'Heres ur alt: sean.hutch@gmail.com:006holden',
		'Heres ur alt: salerno96@gmail.com:iamcool24',
		'Heres ur alt: clarky-2k6@hotmail.com:Rehpyspizpr0',
		'Heres ur alt: nynex_s2@hotmail.com:letmein1234',
		'Heres ur alt: tim.notelteirs@gmail.com:rj08393iq',
		'Heres ur alt: johnha1988@yahoo.com:asdfxghj123',
		'Heres ur alt: tyler21y@yahoo.com:animal021'];
	var alt = Math.floor(Math.random()*textArray.length);
	msg.author.sendMessage(`${textArray[alt]}`);
	msg.channel.send(msg.author.toString() + ', I PM you an alt.');
    msg.delete();
    talkedRecently.add(msg.author.id);
    setTimeout(() => {
    talkedRecently.delete(msg.author.id);
    }, 300000);
}}}

client.on(`message`, (msg) => {
  var cont   = msg.content,
	  author = msg.member,
	  chan   = msg.channel,
	  guild  = msg.guild
	
	if (cont.startsWith(config.prefix)) {

	var invoke = cont.split(' ')[0].substring(config.prefix.length)
			args = cont.split(' ').slice(1)
		
	if (invoke in cmdmap) {
		cmdmap[invoke](msg, args)

	}
  }
});

client.login(config.token)