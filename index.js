const Discord = require('discord.js')
const client = new Discord.Client()

var prefix = '.';
var token = 'NDE3MzUzOTYwMjI0MDYzNDg4.DwAJkA.iLgQoJCUbr-SeH_0okM4ofNpKKU';

client.login(token);

client.on('ready' , function (){
	client.user.setActivity("A coder !")
	console.log("prêt frr")
});

client.on('message',function(message){
	if(message.content.includes(prefix + 'stop')){
		message.channel.send(` **au revoir les gars :cry:**`)
		message.delete().then(client.destroy())
	}
})

client.on('message' , message =>{
		if(message.content === "tu fais quoi ?"){
			message.reply('je te viole :sueur:');
			console.log('un fdp Vien de se faire violer');
		}

		if (message.content === prefix + "createur"){
			 message.channel.send("**bot cree par Flow**")
			 message.delete();
			 console.log("une personne a excuter la commande : !createur")
		}

		if (message.content === prefix + "help"){
				var embed = new Discord.RichEmbed()
					   .setTitle("Help")
					   .setDescription("commande du Bot")
					   .addField(".help","Page d'aide", true)
					   .addField(".dox","Dox , mise a jour hebdomadaire", true)
					   .addField(".createur","affiche le createur", true)
					   .addField(".raid","pour raid un serveur discord.", true)
					   .addField(".flow","a toi de voir :)", true)
					   .addField(".membres","affiche les membres sur votre serveur", true)
					   .addField(".rejoins","affiche le jour et l heure ou tu as rejoins le serveur", true)
					   .addField(".image","affiche l icone du serveur", true)
					   .addField(".cree","affiche la date de creation de votre compte !", true)
					   .addField(".avatar","affiche ton avatar", true)
					   .addField(".kick","pour kick un utilisateur.", true)
					   .addField(".ban","pour bannir un utilisateur.", true)
					   .setColor("0xDBA901")
					   .setFooter("Bon moment parmis nous :D")
				message.channel.sendEmbed(embed);
			message.delete();
		}
});

client.on('message' , message =>{
		if(message.content === prefix + "flow"){
			message.channel.send('flow est un fils de pute de trolleur et niqueur de daronne ;)');
			message.delete();
			console.log("un utilisateur vient d'executer la commande : !help");
		}
});

/*Kick*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.delete();
       message.channel.send("**"+member.user.username + '** a été exclu :white_check_mark:')
    }
});
 
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande :(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 1})
       message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')
    }
});

client.on('message' , message =>{
		if(message.content === prefix + "del"){
	
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`tu n as pas la permission ${member.author.id} .`);
			message.channel.send("J ai supprimer votre message.");
			console.log("un utilisateur vient d'executer la commande : !del");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
	if(message.content === prefix + "membres"){
		message.channel.send(`il y a ${message.guild.memberCount} personnes :D !`)
		message.delete();
		console.log("nice")
	}
});

client.on('message', message => {
	if(message.content === prefix + "rejoins"){
		message.channel.send(`tu as rejoins le ${message.guild.joinedAt} :D !`)
		message.delete();
		console.log("une personne a executer la commande : .rejoins")
	}
});

client.on('message', message => {
	if(message.content === prefix + "image"){
		message.channel.send(`icone du serveur ! ${message.guild.iconURL}`)
		message.delete();
		console.log("réussis")
	}
});

client.on('message', message => {
	if(message.content === prefix + "avatar"){
		message.channel.send(`ton image de profil : ${client.user.avatarURL} , voilà :D !`)
		console.log("une personne a demandé son avatar.")
		message.delete();
	}
});

client.on('message', message => {
	if(message.content === prefix + "cree"){
		message.channel.send(`cree le : ${client.user.createdAt} !`)
		message.delete();
		console.log("quelq'un a demandé le jour de la création de son compte !")
	}
});

client.on('message', message => {
	if(message.content === "kais"){
		message.channel.send("@here")
		message.delete();
		console.log("quelq'un à appeler kais")
	}
});

client.on('message', message => {
	if(message.content === "kais"){
		message.channel.send("@here")
		message.delete();
		console.log("quelq'un à appeler kais")
	}
});

client.on('message', message => {
	if(message.content === "kais"){
		message.channel.send("@here")
		message.delete();
		console.log("quelq'un à appeler kais")
	}
});

client.on('message', message => {
	if(message.content === "kais"){
		message.channel.send("@here")
		message.delete();
		console.log("quelq'un à appeler kais")
	}
});

client.on('message', message => {
	if(message.content === "kais"){
		message.channel.send("@here")
		message.delete();
		console.log("quelq'un à appeler kais")
	}
});

client.on('message', message => {
	if(message.content === "kais"){
		message.channel.send("@here")
		message.delete();
		console.log("quelq'un à appeler kais")
	}
});

client.on('message', message => {
	if(message.content === "kais"){
		message.channel.send("@here")
		message.delete();
		console.log("quelq'un à appeler kais")
	}
});

client.on('message', message => {
	if(message.content === "kais"){
		message.channel.send(".raid")
		message.delete();
		console.log("quelq'un à appeler kais")
	}
});

client.on('message', message => {
	if(message.content === prefix + "ytb"){
		message.channel.send("youporn.com")
		message.channel.send("xxxporn.com")
		message.channel.send("!nude")
		message.delete();
		console.log("+1 porn")
	}
});

client.on('message', message => {
	if(message.content === prefix + "dox"){
				var embed1 = new Discord.RichEmbed()
					   .setTitle("Dox1")
					   .setDescription("Dox de Nathan Bodex")
					   .addField("Ip: ","82.132.237.48", true)
					   .addField("Nom:","Bodex", true)
					   .addField("Prenom:","Nathan", true)
					   .addField("Nom de domaine:","BTHub5-HZP7", true)
					   .addField("Age:","18", true)
					   .addField("Adresse:","Middle Dr, Ponteland, Newcastle upon Tyne, NE20 9DH.", true)
					   .addField("Numéro de tel","+447445759076", true)
					   .addField("Telephone:","Samsung Galaxy S9+.", true)
					   .setColor("0xDBA901")
					   .setFooter("commande test dox")
				message.channel.sendEmbed(embed1);
			message.delete();
		}
});

client.on('message', message => {
	if(message.content === prefix + "infosrv"){
		var embed2 = new Discord.RichEmbed()
				.setTitle("Info du Serveur !")
				.setDescription(`Info de ${message.guild.name} ! :tada:`)
				.addField(`Crée le : ${message.guild.createdAt} ! `)
				.addField(`Les roles: ${message.guild.roles} !`)
				.addField(`Crée par : ${message.guild.owner} !`)
				.setFooter("Voilà ! :D")
			message.channel.sendEmbed(embed2);
		message.delete();
	}
});

client.on('message', message => {
	if(message.content === prefix + "raid"){
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send("vous vous êtes fait violer bande de shlags @everyone")
		message.channel.send(".raid")
		message.delete()
		console.log("-1 srv")
	}
});
