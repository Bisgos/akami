const { create, Client } = require('@open-wa/wa-automate') // As consts aqui declaram as funções de outros arquivos
const fs = require('fs-extra')
const kconfig = require('./config')
const options = require('./options')
const color = require('./lib/color')
const figlet = require('figlet')
const canvas = require('discord-canvas')
const config = require('./lib/config/config.json')
const welkom = JSON.parse(fs.readFileSync('./lib/config/welcome.json'))
const bklist = JSON.parse(fs.readFileSync('./lib/config/anti.json'))
const anti = JSON.parse(fs.readFileSync('./lib/config/blacklist.json'))
const fks = JSON.parse(fs.readFileSync('./lib/config/fake.json'))

// Cria um cliente de inicialização da BOT
const start = (kill = new Client()) => {
    console.log(color(figlet.textSync('Akami', 'Larry 3D'), 'cyan'))
    console.log(color('[Akami Informa]'), color('Akami, está online! Aguarde um pouco', 'yellow'))
    console.log(color('[BISGOS]', 'cyan'), color('Bem vindo de volta Bisgos! É um prazer ter você novamente aqui~', 'magenta'))
	console.log(color('\n>'), color('Inicialização finalizada, os comandos podem ser usados agora...', 'red'))
	
		// Forçar recarregamento caso obtenha erros
		kill.onStateChanged((state) => {
			console.log('[Estado da Akami]', state)
			if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') kill.forceRefocus()
		})
	
		
        // Le as mensagens e limpa cache
        kill.onMessage((async (message) => {
            kill.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 3000) {
                    kill.cutMsgCache()
                }
            })
            kconfig(kill, message)
        }))
		
		// Configuração do welcome
		kill.onGlobalParticipantsChanged(async (event) => {
            const welkom = JSON.parse(fs.readFileSync('./lib/config/welcome.json'))
			const ddi = '55'
			const isWelkom = welkom.includes(event.chat)
			const isFake = fks.includes(event.chat)
			const fake = event.who.startsWith(ddi)
			const isAnti = anti.includes(event.chat)
			const fuck = bklist.includes(event.who)
			const gChat = await kill.getChatById(event.chat)
            const pcChat = await kill.getContact(event.who)
			const { contact, groupMetadata, name } = gChat
            let { pushname, verifiedName, formattedName } = pcChat
            pushname = pushname || verifiedName || formattedName
            const botNumbers = await kill.getHostNumber() + '@c.us'
			try {
                if (event.action === 'add' && event.who !== botNumbers && isWelkom) {
                    if (isAnti && fuck) {
                    await kill.sendText(event.chat, `E TU TA AQUI MENÓ?! TU TA AQUI DNV MENÓ??`)
                    await sleep(2000)
                    await kill.removeParticipant(event.chat, event.who)
                    } else if (isFake && !fake) {
                    await kill.sendTextWithMentions(event.chat, `Olá @${event.who.replace('@c.us', '')}, como parte do nosso sistema de segurança, números de fora do Brasil são banidos, se você não for alguém mal e quiser estar no grupo pacificamente, por favor contate os administradores 😉.\n\nHello @${event.who.replace('@c.us', '')}, as part of our security system, numbers outside Brazil are banned, if you are not someone bad and want to be in the group peacefully, please contact the administrators 😉.\n\nHalo @${event.who.replace('@c.us', '')}, sebagai bagian dari sistem keamanan kami, nomor di luar Brasil dilarang, jika Anda bukan orang jahat dan ingin berada di grup dengan damai, silakan hubungi administrator 😉.\n\nHola @${event.who.replace('@c.us', '')}, como parte de nuestro sistema de seguridad, los números fuera de Brasil están prohibidos, si no eres alguien malo y quieres estar en el grupo pacíficamente, por favor contacte a los administradores 😉.`)
                    await sleep(4000)
                    await kill.removeParticipant(event.chat, event.who)
                    }
                    const pic = await kill.getProfilePicFromServer(event.who)
                    if (pic === undefined) {
                        var picx = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    } else {
                        picx = pic
                    }
                    const welcomer = await new canvas.Welcome()
                        .setUsername(pushname)
                        .setDiscriminator(event.who.substring(6, 10))
                        .setMemberCount(groupMetadata.participants.length)
                        .setGuildName(name)
                        .setAvatar(picx)
                        .setColor('border', '#00100C')
                        .setColor('username-box', '#00100C')
                        .setColor('discriminator-box', '#00100C')
                        .setColor('message-box', '#00100C')
                        .setColor('title', '#FF69B4')
                        .setBackground('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg')
                        .toAttachment()
                    const base64 = `data:image/png;base64,${welcomer.toBuffer().toString('base64')}`
                    await kill.sendFile(event.chat, base64, 'welcome.png', `Seja Bem-vindo(a) @${event.who.replace('@c.us', '')}\n\nDesejamos que se divirta e obviamente que siga nossas regras! ✅ \n\nCaso precise, chame um Administrador ou digite ${config.prefix}ajuda 👨🏻‍💻!`)
                } else if (event.action === 'remove' && event.who !== botNumbers && isWelkom) {
                    const pic = await kill.getProfilePicFromServer(event.who)
                    if (pic === undefined) {
                        var picxs = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    } else {
                        picxs = pic
                    }
                    const bye = await new canvas.Goodbye()
                        .setUsername(pushname)
                        .setDiscriminator(event.who.substring(6, 10))
                        .setMemberCount(groupMetadata.participants.length)
                        .setGuildName(name)
                        .setAvatar(picxs)
                        .setColor('border', '#00100C')
                        .setColor('username-box', '#00100C')
                        .setColor('discriminator-box', '#00100C')
                        .setColor('message-box', '#00100C')
                        .setColor('title', '#FF69B4')
                        .setBackground('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg')
                        .toAttachment()
                    const base64 = `data:image/png;base64,${bye.toBuffer().toString('base64')}`
                    await kill.sendFile(event.chat, base64, 'welcome.png', `Bye @${event.who.replace('@c.us', '')}, ~sentiremos falta~ `)
                    await kill.sendPtt(from, './lib/media/tts/exit.mp3', id)
            }
        } catch (err) {
            console.error(err)
        }
    })
        
        // Block
        kill.onIncomingCall(async (callData) => {
            await kill.sendText(callData.peerJid, ind.blocked(ownerNumber))
            await kill.contactBlock(callData.peerJid)
            console.log(color('[BLOCK]', 'red'), color(`${callData.peerJid} foi bloqueado!.`, 'yellow'))
        })
		
		// Funções para caso seja adicionada em um grupo
        kill.onAddedToGroup(async (chat) => {
			const wlcmsg = 'Oi! 🌟\nFui requisitada como BOT para esse grupo, e estarei a disposição de vocês! 🤖\nSe quiserem ver minhas funcões usem .ajuda!'
			const lmtgru = await kill.getAllGroups()
            let totalMem = chat.groupMetadata.participants.length
			if (chat.groupMetadata.participants.includes(config.owner)) {
				await kill.sendText(chat.id, wlcmsg)
			} else if (gc.length > config.memberLimit) {
            	await kill.sendText(chat.id, `Um novo grupo, Eba! 😃\nUma pena que vocês não tem o requisito, que é ter pelo menos ${config.memberLimit} membros. Você possui ${totalMem}, junte mais pessoas! 😉`)
				await kill.leaveGroup(chat.id)
				await kill.deleteChat(chat.id)
			} else if (lmtgruc.length > config.gpLimit) {
				await kill.sendText(chat.id, `Desculpe, estamos no maximo de grupos!\nAtualmente estamos em ${lmtgru.length}/${config.gpLimit}`)
				await kill.leaveGroup(chat.id)
				await kill.deleteChat(chat.id)
            } else {
                kill.sendText(chat.id, wlcmsg)
            }
        })
		

        // Bloqueia na call
        kill.onIncomingCall(async (call) => {
            await kill.sendText(call.peerJid, `Que pena! Chamadas não são suportadas e atrapalham muito! 😊\nTe bloqueei para evitar novas, contate o dono wa.me/${config.owner.replace('c.us', '')} para efetuar o desbloqueio. 👋`)
            await kill.contactBlock(call.peerJid)
        })
    }

create(options(true, start))
    .then((kill) => start(kill))
    .catch((err) => new Error(err))