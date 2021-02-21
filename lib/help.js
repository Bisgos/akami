// NÃO REMOVA OS CREDITOS POR FAVOR, LEVOU MUITO TEMPO PRA SE FAZER UM BOT ASSIM!
const config = require('./config/config.json')
const prefix = config.prefix

exports.cmdNotFound = (cmd) => {
    return `*[Atenção]*\n Comando *${prefix}${cmd}* não foi encontrado!!`
}


exports.help = help()
function help() {
	return `   
    
    
╭───「  *❬ Akami Bot ❭*  」───
│ℹ️ Conheça a Akami *${prefix}sobre*
│ℹ️ Bugs, Erros? *${prefix}report*
│ℹ️ Regras da Akami *${prefix}regras*
╰───────────────────   
    
╭───「🔆 ❬ 𝚃𝚊𝚋𝚎𝚕𝚊 ❭ 🔆」──
│    
│     ❬✅❭ _${prefix}painel_  
│     ❬🔧❭ _${prefix}stickers_ 
│     ❬⚡️❭ _${prefix}animes_ 
│     ❬📚❭ _${prefix}estudos_
│     ❬🎨❭ _${prefix}logos_
│     ❬🐨❭ _${prefix}animais_
│     ❬💰❭ _${prefix}avançado_
│     ❬👮🏻❭ _${prefix}admins_ 
│     ❬💘❭ _${prefix}bisgos_
│     ❬🔞❭ _${prefix}adulto_
│     ❬📥❭ _${prefix}down_
│     ❬🆎❭ _${prefix}letras_
│     ❬⚜️❭ _${prefix}outros_
╰───────────────────
`
}
    

exports.down = down()
function down() {
     return `
╭───「*[Painel de Downloads]*」───
│    
│*Caso algum comando não funcione, 
│significa que o servidor caiu e é 
│necessario esperar.*
│    
│───「📥 ❬ Downloads ❭ 📥」───
│    
│*1 - ${prefix}happymod <apk>*
│ → _Info e download de apk._
│*2 - ${prefix}moddroid <apk>*
│ → _Info e download de apk._
│*3 - ${prefix}apkpure <apk>*
│→ _Info e download de apk._
╰───────────────────
`
}

exports.adult = adult()
function adult() {
    return `

╭─「[*Comandos do PV - Grupos NSFW*]」─
│
│😈 ❬ Adulto ❭ 😈
│ *1 - ${prefix}randomNeko*
│ → _Temos hentai de nekos por aqui e.e_
│ *2 - ${prefix}ihentai*
│ → _Mas se nõ gostar, temos aleatorios também!_
│ *3 - ${prefix}nh (codigo)*
│ → _Seja feliz vendo NHentai comigo e.e_
│ *4 - ${prefix}trap*
│ → _Se você gosta de traps, isso é pra você e.e_
│ *5 - ${prefix}blowjob*
│ → _Fotinhas de blowjob em anime._
│ *6 - ${prefix}iecchi*
│ → _Umas fotos de ecchi que tenho aqui..._
│ *7 - ${prefix}feet*
│ → _Hentai para os amantes de pezinho._
│ *8 - ${prefix}lick*
│ → _"Lambidinha..."_
│ *9 - ${prefix}femdom*
│ → _Meio que um yuri...hentai..._
│ *10 - ${prefix}futanari*
│ → _Vai uma futanari?_
│ *11 - ${prefix}boobs*
│ → _Olha a tetinhaaa..._
│ *12 - ${prefix}masturb*
│ → _Hmmm, garotas solo..._
│ *13 - ${prefix}anal*
│ → _Hentai "padrão" de anal claro._
│ *14 - ${prefix}nsfwicon*
│ → _Foto de perfil ${prefix}18 por aqui..._
│ *15 - ${prefix}randomLoli*
│ → _Hentai do tipo Lolicon._
│ *16 - ${prefix}hard*
│ → _Hentai de diciplinação, por exemplo,_
│   _hentai de tapas na bunda._
│ *17 - ${prefix}pezinho*
│ → _Fotos de pezinho._
│ *18 - ${prefix}porn*
│ → _Pornografia real._
│ *19 - ${prefix}lesbica*
│ → _Lesbicas reais se pegando._
│ *20 - ${prefix}gay*
│ → _Pornografia gay para quem curte._
│ *21 - ${prefix}peitos*
│ → _Fotos de peitos reais._
│ *22 - ${prefix}bsdm*
│ → _Fotos BDSM._
│ *23 - ${prefix}coroa*
│ → _Milfs reais._
│ *24 - ${prefix}buceta*
│ → _Belas maças cortadas pela metade..._
│ *25 - ${prefix}ass*
│ → _Bundas..._
│ *26 - ${prefix}bblack*
│ → _Bundas negras.._
│ *27 - ${prefix}traps*
│ → _Fotos de traps..._
│ *28 - ${prefix}femboy*
│ → _Fotos de Female Boys.._
│ *29 - ${prefix}penis*
│ → _Fotos de pênis..._
│ *30 - ${prefix}garotas*
│ → _nuds de garotas lindas..._
│ *31 - ${prefix}sporn <termo>*
│ → _Pesquiso vídeo relacionado ao termo_
│   _descrito._
│
│ _Comando sem resposta, servidor offline!_
╰───────────────────
`
}

exports.owner = owner()
function owner() {
    return `
╭───「*[ Meu dono apenas ]*」───
│
│───「💝 ❬ Bisgos ❭ 💝」───
│
│ *1 - ${prefix}clearall*
│ → _Com isso todas as mensagens são limpas._
│ *2 - ${prefix}broad (mensagem)*
│ → _Posso enviar uma mensagem para todos usando._
│ *3 - ${prefix}leaveall*
│ → _Se desejar saio de todos os grupos._
│ *4 - ${prefix}tela*
│ → _Peça-me um print da tela._
│ *5 - ${prefix}blocks*
│ → _Saiba quem tentou me ligar, atacar ou floodar._
│ *6 - ${prefix}welcome [on|off]*
│ → _Me faz dar Boas-Vindas e Good-Bye._
│ *7 - ${prefix}encerrar*
│ → _Faz com que eu me desligue._
│ *8 - ${prefix}exclusive [on|off]*
│ → _Ativa os comandos exclusivos do Legião-Z._
│ *9 - ${prefix}kickall*
│ → _Remova todos os membros._
│ *10 - ${prefix}cmd <comando>*
│ → _Rode terminal pelo WhatsAPP._
│ → _Rode terminal/programação pelo WhatsApp._
│ *11 - ${prefix}Bomb <número sem espaco, ${prefix} e - >*
│ → _Ataque com spam SMS quem vier fazer gracinhas em seu grupo.
│ *12 - ${prefix}statusdono*
│ → _Status sobre mim._
│ *13 - ${prefix}setstatus*
│ → _Seta meu status do perfil._
│ *14 - ${prefix}mutepv <número sem ${prefix} ou ->*
│ → _Mande a Hinata ignorar pessoas no PV._
│ *15 - ${prefix}perm <on|off e número>*
│ → _Remove e coloca Premium._
│
│ _Comando sem resposta, servidor offline!_
╰───────────────────
`
}

exports.admins = admins()
function admins() {
    return `
╭───「*[Painel ADMINS]*」───
│_Comandos que apenas os ademir podem usar!_
│
│     👮🏻 ❬ ADMINISTRADORES ❭ 👮🏻
│
│ *1 - ${prefix}kick @user ou <Marque uma mensagem>*
│ → _Expulse bebados do bar (pode ser mais de 1)._
│ *2 - ${prefix}promote @user ou <Marque uma mensagem>*
│ → _Faça os bebados do bar virarem administradores._
│ *3 - ${prefix}leave*
│ → _Se quiser eu saio do barzinho._
│ *4 - ${prefix}demote @user ou <Marque uma mensagem>*
│ → _Isso é pra você demitir administradores do barzinho._
│ *5 - ${prefix}everyone <assunto>*
│ → _Marque todos os bebados para uma porradaria! ~Brincadeira, ou não~_
│ *6 - ${prefix}del [Marque a mensagem do BOT]*
│ → _Se precisar deletar minhas mensagens, use isso._
│ *7 - ${prefix}onlyadms [on|off]*
│ → _Com isso eu fecho o bar apenas para os administradores, e vice versa._
│ *8 - ${prefix}setimage*
│ → _Dê ao seu bar uma cara nova!_
│ *9 - ${prefix}revoke*
│ → _Se usar isso, eu irei resetar o link._
│ *11 - ${prefix}blacklist <on/off>*
│ → _Bane quem tiver nela quando entrarem no grupo._
│ *12 - ${prefix}fake <on/off>*
│ → _Bane números de fora do seu país._
│ *13 - ${prefix}mute <on/off>*
│ → _Faz com que eu pare de fazer comandos no grupo de quem usou._
│ *14 - ${prefix}unban <Marque uma mensagem>*
│ → _Desfaz um ban._
│
│ _Comando sem resposta, servidor offline!_
╰───────────────────
`
}


exports.animal = animal()
function animal() {
	return `
╭───「*[Painel de Animal]*   
│
│   🐶 ❬ Animais ❭ 🙈
│
│ *1 - ${prefix}dog*
│ → _Envio uma imagem de um doguinho._
│ *2 - ${prefix}gato*
│ → _Envio imagem de um doguinho._
│ *3 - ${prefix}fatos*
│ → _Digo fatos de animais._
│ *4 - ${prefix}lizard*
│ → _Envio foto de lagarto._
│ *5 - ${prefix}quack*
│ → _Envio foto de patos._
│ *6 - ${prefix}macaco*
│ → _Envio foto de macacos._
│ *7 - ${prefix}fox*
│ → _Envio foto de raposas._
│
│ _Comando sem resposta, servidor offline!_
╰───────────────────
`
} 


exports.Akami = Akami()
function Akami() {
	return `
╭───「*[Comandos com a Akami]*  
│
│       🍕 ❬ Painel ❭ 🍕
│
│ *1 - ${prefix}tts <cc> <frase>*
│ → _Converse comigo._
│ *2 - ${prefix}speak <frase>*
│ → _Converse em aúdio comigo._
│ *3 - ${prefix}ptt <marque um aúdio>*
│ → _Roubo o aúdio._
│ *4 - ${prefix}get <marque um aúdio>*
│ → _Envio o aúdio._
│ *5 - ${prefix}status*
│ → _Veja meu status de conversa atual._
│ *6 - ${prefix}gadometro <mencione ou não>*
│ → _Irei calcular o seu nivel de gado._
│ *7 - ${prefix}resposta <frase>*
│ → _Adicione respostas a Akami._
│ *8 - ${prefix}slap <mencione>*
│ → _Tapa na pessoa._
│ *9 - ${prefix}hug <mencione>*
│ → _Abraça a pessoa._
│ *10 - ${prefix}cafune*
│ → _Todos nós gostamos de cafune._
│ *11 - ${prefix}cocegas*
│ → _Cocegaaaaas, hahahaaha._
│ *12 - ${prefix}ball*
│ → _Ball de frases aleatorias._
│ *13 - ${prefix}baka*
│ → _Bakaa!_
│ *14 - ${prefix}inverter <frase>*
│ → _Inverta frases._
│ *15 - ${prefix}ping*
│ → _Veja minha velocidade de resposta._
│ *16 - ${prefix}contar <mensagem>*
│ → _Quer contas as letras que tem em um texto?_
│*17 - ${prefix}death <nome>*
│ → _Digo o tempo de morte de nomes._
│ *18 - ${prefix}gender <nome>*
│ → _Se quiser saber sobre nome de alguém._
│*19 - ${prefix}kiss <mencione>*
│ → _Beija a pessoa._
│ *20 - ${prefix}msg <frase>*
│ → _Brinca de mimica com a Akami._
│ *21 - ${prefix}make <frase>*
│ → _Caso queira escrever um diário DeathNote._
│ *22 - ${prefix}random <assunto>*
│ → _Vou escolher alguém aleatorio do grupo._
│ *23 - ${prefix}ID*
│ → _Adquira a ID do chat_
│ *24 - ${prefix}life*
│ → _Stalkear alguém aleatorio do mundo._
│ *25 - ${prefix}roll*
│ → _Jogo do par ou impar, ou seja dados._
│ *26 - ${prefix}flip*
│ → _Jogo de cara e coroa._
│ *27 - ${prefix}link*
│ → _Pego o link do grupo._
│ *28 - ${prefix}adms*
│ → _Veja lista de admins._
│ *29 - ${prefix}donate*
│ → _Me ajuda a ficar acordada._
│ *30 - ${prefix}hinata <frase>*
│ → _Converse comigo._
│ *31 - ${prefix}dono*
│ → _Pegue o contato do meu dono._
│ *32 - ${prefix}about*
│ → _Me conheça._
│ *33 - ${prefix}poll*
│ → _Verifique enquentes ativas._
│ *34 - ${prefix}vote (número)*
│ → _Vote numa enquete, se estiver tendo uma..._
│ *35 - ${prefix}newpoll (nome)*
│ → _Crie uma enquete para os outros votarem._
│ *36 - ${prefix}ins (nome)*
│ → _Adicione opções de voto na enquete._
│ *37 - ${prefix}curiosidade*
│ → _Adquira curiosidades._
│ *38 - ${prefix}valor <Quantia/Tipo de Moeda>*
│ → _Converta moedas de outros países em real._
│ *39 - ${prefix}oculto*
│ → _???_
│ *40 - ${prefix}detector*
│ → _Detecta gostosas no grupo._
│ *41 - ${prefix}gamemode <tipo>*
│ → _Comando de minecraft só de zoas._
│ *42 - ${prefix}rolette*
│ → _Jogue roleta russa._
│ *43 - ${prefix}chance <Do que>*
│ → _Calcule as chances._
│ *44 - ${prefix}data*
│ → _Data do sistema._
│ *45 - ${prefix}trecho*
│ → _Frases de pessoas._
│ *46 - ${prefix}akinator*
│ → _Jogue akinator._
│
│ _Comando sem resposta, servidor offline!_
╰───────────────────
`
} 


exports.animes = animes()
function animes() {
	return `
╭───「*[Painel sobre comandos Animes]* 
│
│        🍨 ❬ ANIMES ❭ 🍨
│
│ *1 - ${prefix}icon*
│ → _Icones para perfil._
│ *2 - ${prefix}holo*
│ → _Fotos da Personagem Holo._
│ *3 - ${prefix}yaoi*
│ → _Sem hentai._
│ *4 - ${prefix}face>
│ → _Icon do rosto de garotas de anime._
│ *5 - ${prefix}truth*
│ → _Algumas verdades do universo dos animes._
│ *6 - ${prefix}feed*
│ → _Eventos que tem haver com comidas em animes._
│ *7 - ${prefix}yuri*
│ → _Caso goste de algo lesbico em anime._
│ *8 - ${prefix}pokemon*
│ → _Foto de pokemon._
│ *9 - ${prefix}randomwall*
│ → _Wallpapers de Anime._
│ *10 - ${prefix}randomanime*
│ → _Enviarei fotos de anime aleatorias._
│ *11 - ${prefix}loli*
│ → _Fotos de lolis._
│ *12 - ${prefix}waifu*
│ → _Fotos de waifus.*
│ *13 - ${prefix}anime <nome>*
│ → _Pesquiso um anime._
│ *14 - ${prefix}neko*
│ → _Envio fotos de neko._
│ *15 - ${prefix}husb*
│ → _Foto de Husbs._
│ *16 - ${prefix}dva*
│ → _Obter fotos da DVA do Lol._
│ *17 - ${prefix}search <digite em foto de anime>*
│ → _Pesquiso o anime por foto._
│ *18 - ${prefix}nekowall*
│ → _Wallpapers de mobile._
│
│ _Comando sem resposta, servidor offline!_
╰───────────────────
`
} 


exports.stic = stic()
function stic() {
	return `
╭───「*[Painel de Stickers]*  
│
│       🔳 ❬ FIGURINHAS ❭ 🔳
│
│ *1 - ${prefix}sticker ou ${prefix}stiker <apenas foto>*
│ → _Faço Stickers imagens._
│ *2 - ${prefix}gif  ${prefix} <gif ou vídeo>*
│ → _Faço Sticker animado._
│ *3 - ${prefix}stickernobg <apenas foto>*
│ → _Transforme em sticker sem fundo._
│ *4 - ${prefix}ttp <frase>*
│ → _Transforme frases em stickers._
│ *5 - ${prefix}giphy <link do site giphy>*
│ → _Faça stickers por link usando o giphy._
│ *6 - ${prefix}makesticker*
│ → _Procura imagem e crio em sticker._
│ *7 - ${prefix}randomsticker*
│ → _Envio stickers de Anime.
│
│ _Comando sem resposta, servidor offline!_
╰───────────────────
`
} 


exports.downa = downa()
function downa() {
	return `
╭───「*[COMANDOS AVANÇADO.]* 
│
│      💰 ❬ AVANÇADO ❭ 💰
│ 
│ *1 - ${prefix}play <nome>*
│ → _Baixo música pra você._
│ *2 - ${prefix}video <nome>*
│ → _Baixo vídeo pra você._
│ *3 - ${prefix}mp3 <link>*
│ → _Baixe música por link._
│ *4 - ${prefix}mp4 <link>*
│ → _Baixe vídeo por link._
│ *5 - ${prefix}placa <AAA1010>*
│ → _Informo sobre o veiculo._
│ *6 - ${prefix}sip <IP>*
│ → _Puxo dados sobre o IP._
│ *7 - ${prefix}scep <CEP>*
│ → _Puxo dados sobre o CEP._
│ *8 - ${prefix}scnpj <CNJP>*
│ → _Puxo dados sobre o CNPJ._
│ *9 - ${prefix}card*
│ → _Envio Cartões de Crédito._
│ *10 - ${prefix}xvideos <link>*
│ → _Baixo vídeo do XVideos._
│ *11 - ${prefix}fb <link>*
│ → _Baixo vídeo do Facebook._
│ *12 - ${prefix}ig <link>*
│ → _Baixo vídeo do Instagram._
│ *13 - ${prefix}twitter <link>*
│ → _Baixo vídeo do Twitter._
│ *14 - ${prefix}xnxxapp*
│ → _Envio o APK do Xnxx._
│
│ _Comando sem resposta, servidor offline!_
╰───────────────────
`
}

exports.outros = outros()
function outros() {
	return `
╭───「*[Painel de outros comandos]*  
│
│     ⚜️ ❬ ${prefix}COMANDOS ❭ ⚜️
│
│ *1 - ${prefix}screenshot <link>*
│ → _Tem medo de acessar sites? Use isso e eu mostro o que há dentro._
│ *2 - ${prefix}clima <cidade>*
│ → _Veja o clima atual da cidade._
│ *3 - ${prefix}store <nome>*
│ → _Obter informações de Apps da PlayStore?._
│ *4 - ${prefix}upimg <use numa foto>*
│ → _Irei fazer Upload de imagens com duração de 1 dia._
│ *5 - ${prefix}mac <Número do MAC>*
│ → _Com isso eu irei pesquisar de onde é o MAC._
│ *6 - ${prefix}simg <use numa foto>*
│ → _Pesquiso imagens na internet usando esse comando._
│ *7 - ${prefix}send <link de imagem>*
│ → _Caso queira, posso enviar fotos de um link._
│ *8 - ${prefix}img <marque um sticker>*
│ → _Converto o sticker em imagem._
│ *9 - ${prefix}image <nome>*
│ → _Sem Internet fora do WhatsApp? Pesquiso imagens do Pinterest._
│ *10 - ${prefix}girl*
│ → _Fotos de garotas._
│ *11 - ${prefix}add <número>*
│ → _Adicione números no grupo. Ex: ${prefix}add 55859.._
│ *12 - ${prefix}getmeme*
│ → _Envio memes brasileiros._
│ *13 - ${prefix}frase*
│ → _Envio frases de anime ou inspiradoras._
│ *14 - ${prefix}groupinfo*
│ → _Envio informações de um grupo._
│ *15 - ${prefix}idiomas*
│ → _Lista de idiomas para o tts._
│ *16 - ${prefix}wallmobile*
│ → _Envio wallpapers de mobile HD._
│ *17 - ${prefix}wa*
│ → _Envio o convite de conversa sua._
│ *18 - ${prefix}coins*
│ → _Veja a lista de moedas pra usar no comando Valor, é uma lista gigante._
│ *19 - ${prefix}translate*
│ → _Traduza algo._
│ *20 - ${prefix}nickff*
│ → _Envio nicknames aleatórios para o freefire._
│ *21 - ${prefix}stickdarcula <Frase>*
│ → _Faço uma imagem darcula._
│ *22 - ${prefix}wasted*
│ → _Cria uma imagem no estilo Wasted GTAV_
│ 
│ _Comando sem resposta, servidor offline!_
╰───────────────────
`
} 


exports.estudo = estudo()
function estudo() {
	return `
╭───「*[Painel de Estudos]*  
│
│        📚 ❬ Estudos ❭ 📚
│
│ *1 - ${prefix}nasa*
│ → _Obtenha informações da nasa._
│ *2 - ${prefix}conv -h*
│ → _Converta temperatura ou distância._
│ *3 - ${prefix}brainly <termo>*
│ → _Pesquise no brainly._
│ *4 - ${prefix}google <termo>*
│ → _Pesquise coisas no google._
│ *5 - ${prefix}math <expressão>*
│ → _Realizo calculos de matemática._
│ 
│ _Comando sem resposta, servidor offline!_
╰───────────────────
`
}


exports.maker = maker()
function maker() {
	return `
╭───「*[Painel de Logo Makers]*  
│
│         🎨 ❬ LOGOS ❭ 🎨
│
│ *1 - ${prefix}luzes*
│ → _logo com efeito Luz._
│ *2 - ${prefix}water*
│ → _logo com efeito tinta d'agua._
│ *3 - ${prefix}retro*
│ → _logo estilo anos 80's._
│
│ _Comando sem resposta, servidor offline!_
╰───────────────────
`
} 

exports.readme = readme()
function readme() {
    return `
☾ Menu de ajuda ☽

Caso não entenda, chame o meu dono, use o comando ${prefix}criador ou pergunte no grupo que alguém com certeza te ajudará!`
}

exports.donate = donate()
function donate() {
    return `
    _Agradecemos muito pelo carinho!_
    _O seu interesse em ajudar é muito importante para nós_
    _Akami é grátis para usar desde que esteja em um de nossos grupos oficiais_
        *Saiba que temos um presente especial para você que deseja ajudar*
    _Para saber como ajudar e resgatar seu presente especial acesse o link abaixo_
            
            https://akami-bot.webnode.com/donate/   
    
    _Obrigado por compartilhar seu carinho conosco Beijo da Akami._ ;D ❤️`
}

exports.lang = lang()
function lang() {
    return `
☾ Linguas do comando de Voz ☽
       ☾ Use sem ' ' ☽
	
'af' =  'Africano'

'ar' =  'Arabico'

'au' =  'Inglês da Australia'

'br' =  'Português do Brasil'

'ca' =  'Catalã (Catalonia)'

'cn' =  'Chinês (Mandarin/China)'

'cs' =  'Tcheca'

'cy' =  'Galês'

'da' =  'Dinamarquês'

'de' =  'Germanico/Alemão'

'el' =  'Grega'

'en' =  'Inglês'

'eo' =  'Esperanto'

'es' =  'Espanhol'

'fi' =  'Finlandês'

'fr' =  'Francês'

'hi' =  'Hindi'

'hr' =  'Croácio'

'ht' =  'Haitiano'

'hu' =  'Húngaro'

'hy' =  'Armenico'

'id' =  'Indonesio'

'is' =  'islandês'

'it' =  'Italiano'

'jp' =  'Japonês'

'ko' =  'Coreano'

'la' =  'Latim'

'lv' =  'Letonês'

'mk' =  'Macedónio'

'nl' =  'Holandês'

'no' =  'Norueguês'

'pl' =  'Polonês'

'pt' =  'Português de Portugal'

'ro' =  'Romeno'

'ru' =  'Russo'

'sk' =  'Eslovaco'

'sp' =  'Espanhol da Espanha'

'sq' =  'Albanês'

'sr' =  'Servia'

'su' =  'Espanhol dos Estados Unidos'

'sv' =  'Sueco'

'sw' =  'Suaíli'

'ta' =  'Tamil'

'th' =  'Thailandês'

'tr' =  'Turco'

'tw' =  'Chinês (Mandarin/Taiwan)'

'uk' =  'Inglês do Reino Unido)'

'us' =  'Inglês dos Estados Unidos'

'vi' =  'Vietnamita'

'yu' =  'Chinês (Cantonesa)'

'zh' =  'Chinês'`
}

exports.convh = convh()
function convh() {
	return `_Para usar você deve digitar_ *${prefix}conv [-sigla] [Número para conversão]* _, confira abaixo as siglas e um exemplo._
	
*-h* _= Esse menu._

*-c* _= Converte de Fahfenheit para Celsius._

*-f* _= Converte Celsius para Fahfenheit._

*-q* _= Converte Milhas para Quilômetros._

*-m* _= Converte Quilômetros para Milhas._

_Exemplo de uso:_ *${prefix}conv -c 113*
`}


exports.letras = letras()
function letras() {
    return ` *TABELA DE LETRAS, CARACTERES BLABLA PARA WHATSAPP.*
    ͢͢͢
    ͢
    
    Ѧ ꙳ Δ̸ ꙳ ᐬ ꙳ 么 ꙳ ᮟ ꙳ ⨻
    
    多 ꙳ Ɓ ꙳ ℬ ꙳岌 ꙳ Ꞗ ꙳ Ḅ
    
    ℂ ꙳ ₡ ꙳ ℭ ꙳ Շ ꙳ Ḉ ꙳ ḉ
    
    Đ ꙳ ↁ ꙳ Ɗ ꙳ ⅅ ꙳ Ḑ ꙳ ᗫ
    
    Σ ꙳ 玄 ꙳ ℰ ꙳ Є ꙳ ᗴ ꙳ Ꭼ
    
    ℱ ꙳ ƒ ꙳ ₣ ꙳ Բ ꙳ Ғ ꙳ Ϝ
    
    ௹ ꙳ Ǥ ꙳ Ⴚ ꙳ Ꮹ ꙳ ᮱ ꙳ ⅁
    
    Ħ ꙳ ℍ ꙳ み ꙳ ℌ ꙳ Ꮋ ꙳ Ԩ
    
    ቾ ꙳ ł ꙳ ⷀ ꙳ ፤ ꙳ Ї ꙳ ί ꙳ ƚ
    
    ქ ꙳ ℑ ꙳ ⅉ ꙳ ʝ ꙳ ɉ ꙳ ǰ ꙳ Ĵ
    
    Ҝ ꙳ Ӄ ꙳ Ꮶ ꙳ Ҡ ꙳ Ǩ ꙳ Ƙ
    
    Ł ꙳ ℒ ꙳ 廴 ꙳ ₰ ꙳ Ļ ꙳ Ŀ
    
    ℳ ꙳ Ꮇ ꙳ ɱ ꙳ ற ꙳ ᗰ ꙳ ᘻ
    
    Ŋ ꙳ ₦ ꙳ ℕ ꙳ ᜰ ꙳ П ꙳ Ո
    
    ❍ ꙳ 〄 ꙳ ❂ ꙳ Ծ̸ ꙳ ϴ ꙳ Ω
    
    ℘ ꙳ ℙ ꙳ ₱ ꙳ や ꙳ Ҏ ꙳ Ꭾ
    
    Ҩ ꙳ ℚ ꙳ Ｑ ꙳ Ƣ ꙳ Ⴓ ꙳ զ
    
    ℜ ꙳ℛ ꙳ ℝ ꙳ ₹ ꙳ Ɍ ꙳ Ȓ 
    
    ₷ ꙳ 令 ꙳ ֆ ꙳ Ś ꙳ Ş ꙳ Š
    
    亇 ꙳ ₮ ꙳ 〒 ꙳ ፐ ꙳ Ť ꙳ Ƭ
    
    び ꙳ Ʋ ꙳ 凵 ꙳ Ⴎ ꙳ ℧ ꙳ Ư
    
    V ꙳ ℣ ꙳ ∇ ꙳ √ ꙳ ᜠ ꙳ Ṽ
    
    ₩ ꙳ Ꮤ ꙳ Ẁ ꙳ ฟ ꙳ Ⱳ ꙳ ⴓ
    
    χ ꙳ Ж ꙳ メ ꙳ ✘ ꙳ ⵋ ꙳ ✕
    
    ¥ ꙳ ψ ꙳ ƴ ꙳ ℽ ꙳ Ⲯ ꙳ ⴘ
    
    Ƶ ꙳ Ꮓ ꙳ 乙 ꙳ ℨ ꙳ Ɀ ꙳ Ź

    
    
    『Inicios para nick』
    
      ৢۜ͜͡ ꙳ ๖ۣۜ͡ஓீ͜͜͡❥ ꙳ ঔৣ͜͡ீ͜❥͜ ꙳ ू ፝͜❥ ꙳ ৎ❥̤֟٭ۣۜ ꙳ ✦ۣۜۜ☆ۣۜۜ͜͡   ꙳ ঔৣֳ᷌᷈͜͡❀ ꙳ ৎ✿̤֟٭ ꙳ ✦҈͜͡➳ ꙳ ঔৣ͜͡➳ ꙳ ๖ۣۜ͡ஓீ͜͡ ꙳ ஓீ͜͡ ꙳ ஓீ፝͜͡   ꙳ ஓீ͜ ꙳ ్మాై ꙳ ೈ፝͜͡๖ۣۜ  ꙳ ೈ ፝ ꙳ ீ͜ৡৢ͜͡   ꙳ ๖ۣۜۜ͜͡ீ͜  ꙳  ঔৣ͜͡   ꙳  ৢۜ͜͡⍣ ꙳ ೈ፝͜͡卐 ꙳ 🔥፝⃟ ꙳ ꦿ⃟ۜ✯ ꙳  ⃟ۣ❃ ꙳ ༻⃟༆ ꙳ ༆⃟᠁ ꙳ ွဳ⃟ꦿ ꙳ 💸⃟ꦿ⸼ ꙳ ⋆⃟ۣۜ᭪➣ ꙳ ⃘⃤꙰ 
    
    『Símbolos』
    
    ࿇ ꙳ ࿅ ꙳ ✞ ꙳ ⸙ ꙳ ❀ ꙳ ❆ ꙳ ❅ ꙳ ᪥ ꙳ ❁ ꙳ ❃ ꙳ ❈ ꙳ ✥ ꙳ 𖣘 ꙳ ✮ ꙳ ✯ ꙳ ✵ ꙳ ❂i ꙳ ֍ ꙳ ✇ ꙳ ۞ ꙳ ⌬ ꙳  ꙳ Ⱒ ꙳ ᪣ ꙳ 〠 ꙳ 𖠌 ꙳ Ⱑ ꙳ ༒ ꙳ ༆ ꙳ ⸎ ꙳ ࿕ ꙳ ွဳ ꙳ ෴ ꙳ ꦿ ꙳ ⸼ ꙳ ☫ ꙳ ☬ ꙳ ☭ ꙳ ☩ ꙳ ☙ ꙳ ☤ ꙳ ☾☽ ꙳ ♔ ꙳ ♕ ꙳ ♖ ꙳ ♗ ꙳ ♘ ꙳ ♙ ꙳ ♚ ꙳ ♛ ꙳ ♜ ꙳ ♝ ꙳ ♞ ꙳ ♟ ꙳ ♡ ꙳ ♧ ꙳ ♲ ꙳ ♳ ꙳ ♴ ꙳ ♵ ꙳ ♶ ꙳ ♷ ꙳ ♸ ꙳ ♹ ꙳ ♺ ꙳ ♼ ꙳ ♽ ꙳ ♾ ꙳ ♱ ꙳ ⚀ ꙳ ⚁ ꙳ ⚂ ꙳ ⚃ ꙳ ⚄ ꙳ ⚅ ꙳ ⚐ ꙳ ⚑ ꙳ ⚕ ꙳ ⚘ ꙳ ⚚ ꙳ ⛀ ꙳ ⛁ ꙳ ⛂ ꙳ ⛃ ꙳ ⛇ ꙳ ⛖ ꙳ ⛗ ꙳ ⛚ ꙳ ⛤ ꙳ ⛥ ꙳ ⛧ ꙳ ⛻ ꙳ ⛼ ꙳ ⛶ ꙳ ✵ ꙳ ✲ ꙳ ❝❞ ꙳ ❦ ꙳ ❧ ꙳ 〈〉 ꙳ 《》 ꙳「」꙳『』꙳【】꙳ 〓 ꙳〔〕꙳〖〗꙳〘〙꙳〚〛꙳ ︗︘ ꙳ ︻︼ ꙳﹝﹞
    
    『 Números 』
    
    ❶❷❸❹❺❻❼❽❾❿➀➁➂➃➄➅➆➇➈➉➊➋➌➍➎➏➐➑➒➓⓵⓶⓷⓸⓹⓺⓻⓼⓽⓾⓿⓪①②③④⑤⑥⑦⑧⑨⑩
    
    ⟬Letras Chinesas⟭
    㟋 - 勢 - 㪪 - 憋 - 㯓 - 㪪 - 勢 - 㰪 - 偲 - 𠐔 - 㐦 - ⻤ 

    
    TABELA DE LETRAS E SÍMBOLOS*
    
    A=Δ꙰ Λ λ Ⱥ ₳ ą å ส สั ล α ค ศ Ⴉ 🇦ศ ₳ ﾑΔ a ɑ Ă 厾 λ α Λ ɐ ส丹ⓐ Д ∆ ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά āλ Д Å ä ล Ẳ Ħ ª ẩ ส Ä ձ Ą ๖ۣۜĄ αสั ά ặ
    म स 禸 丒丸凡 丹入 ﾑ Д 开 ໞ Ѧ 月么 ਜ A҉ 岚 ๖ۣۜA ꬍꬅ 㞩
    
    B=多 乃 ঔৣ͜͡岌 в ฿ ß β ცⓑ ხ ɮ β ß ฿ Ъ طß в β ხ ฿ в ␢ ๒ Ъ ъ ь Ɓ ß ฿ Þ 乃 邦 ぶ ✇ 及 в Ⴊ 🇧 ๖ۣۜB 夃 ଷ
    ゐßѢƀЪЬβϐбБъьわゎらね ♭ ɓ B҉ ㄢ 
    
    C=¢ ₡ ₢ C ς ⊂ 匚 ㄷ ど に 二 ɕe ૮ C҉ ๖ۣۜC Շ 🇨 ¢ ₡ ᄃ c̈̈ ɔ ς C ¢ ς ζ Ƈ Ɔ ʗ ₡ ૮ ح¢ Ĉ č Č © ĉ Ć ૮
    
    D=ↁ Đ ɗ đ δ ɖ わ 力 ⊅ ⊅໓ 🇩 ∌ D҉ 刀 Ɗ
    ๖ۣۜD ಖ đ ɖ ⓓ ∂ ժÐ ∂ đ ۜ ₫Ð ∂ ð đ ๔ მ ძ ժ ɗ 
    
    E=Ɇ € ℮ ㉫ ∉ ∈ Ξ Σ ξ Є ๋Є ع ə ɇ є ჲ を
    ﾐ ﾓ 三 巨 玄乞 Ｅ它 ೯ ౯ ㄠ モ 🇪 E҉ 亥 ૯ ๖ۣۜE も ƎƏ Ɛ ؏ ៩ 乇 Є є Σ ε ξ ⓔ 玄 ៩ ₤ ჰ პ℮£ Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯૯ є პ ε Ë ع ﻊ ē € ξ έ ℮ ë Э ۼ
    
    F=Ғ ƒ Բ下 ﾁ Ϝ Fヂ Ք F 下 🇫 F҉. ๖ۣۜF ｷ ₣ ʃ ғ ⓕ f Ғƒ Բ ๖ۣۜF ₣ƒ ₣ ﬄ ךּ דּ Ғ ક 
    
    G=₲ ǥ Ⴚ Ǥ ❡ ሬ Ԍ G҉ ๖ۣۜG ໔ ໕ ផ ௹
    🇬 Ĝ Ģ g G̈̈ ⓖ ₲ ௹ ğ G๋ ๔ ġ ģ ğ๋ ؤ و פĢ ₢ ɠ ૬ ǥ
    
    H=Ħ ん ɧ 卄௮ அ ஆ Һ һ н Ҕ ҕ Ң ң Ҥҥ Ӈ ӈ Ԋ ԋ 艹 Ⴌ ╠╣ H み ђ ๖ۣۜH ਮ 🇭 ん ħ н ђ அ ჩ ħ ╠╣ ђ સ Њ ௮ Ћ нસ அ ħ ђ н Ћ Њ अ╠╣
    
    I=፤ ɨ ៛ í ∣ ழェ エ ｪ ｴ 工讠 辶 เ ቾ 🇮 ҉ I҉ 
    ๖ۣۜI ⶇⷀ ί Ξ រ ł ιΐ ι ║ï Î เ Ī ﭑ Ỉ î Į ĩϊ ΐ ذ ﻐ ɩ ւ ɨ
    
    J=ʝĲ ｊ Ｊ ʲქ ჟ J ℑ ๖ۣۜJ 🇯ʝ ქ J ɾ ე უل נ ਹ Ĵנ ل Ţ ړ ਹ ﻮ ʝ ჟ
    
    K=Ҝ Ҟ Ӄ ₭ Ҝ ҟ Ҡ ҡ ӄ ҝ 🇰 Ƙ K ઝ ๖ۣۜK ₭ Ҝ κ ķ К к ๖ۣۜK ઝ Қ ķ к Ҝ ₭ К қ ҝ
    
    L=Ł Լ ℓ ∟ ﾚ し ̽ſ ʆ ไ ₰ 🇱よ๊レ 廴 L҉ ㄥ โ Ն ₺ Ł ₰ ℓ Լ ℓ Ĺ Ł Լ Ľ Ļ Ŀ ┘£ ไŁ ℓ Ļ ๋╝Լ
    
    M=ℳ ๓ ற м რ ო ɱ ₥ Ӎ ボ /V\ 水 ണ Ӎ M҉ 爪 ๖ۣۜM
    🇲 м ℳ რ ற ო ɱ ๓ ʍ დლм ற /V\ ๓ ๖ۣۜM Щ๓ ற м ₥ რ ო ɱ
    
    N=₦ Ń ņ ரŋИ ภй מ Ň หฑ иη∩ ல ₪ ൯ Ŋ N҉ れ ๖ۣۜN ฌ ญ ൮ വശഷസ Л🇳и ₦ Π ₪ η ெ வ йи η ŋ ฑ ர И ภ й Ń ņ ή п ห Ŋ ภ Պ ฑ η и ர Ɲ ห ₪ ɳ מּ תּ ₦
    
    O=Ѻ θ Θ ❍ ◯ 〇Ծ҉ ゆ ∅ Ø Ծ Օ ס ⊗ ₴ Θ ΦϕФ Ω θ๑ ๏ ο ๐ σ ø ѳ Ѻ Ѳ Ө ०
    の ۝ O 口 汩 ଠ 🇴Ø ๏ σ ǿ ⊕ Ơ ₴ ΘԾ øΩ ❍ ტ ი ბ ❂ ø σ Ø ૭ Ǿ ö ♂ ợ Ů Ơ Ō Ծ Θ δ Ǿ Ф Ộ Ö ǿ Ŏ ό Ø ѳ ø ૭ σ ๏ ơ Θ Ф ठ ☻ θ Ө ɵ Ҩ ¤
    
    P=℘ ₱ 了 ァ 户 ㄕ 尸 卩卫 ƿ ρ م թ ｱ ק ¶ や ゃ ア マ ャ ヤ ヹ ｱ P҉ ๖ۣۜP 尹 🇵ρ ק թ þ φÞ ╠╝קּ թ φ þ քק Þ ρ P๋ ‽ ρ ƿ ք թ ॐ 
    
    Q=φ Ҩ ҩ. 🇶 ϑ Q҉ q ๖ۣۜQǪ ǫ գ
    
    R=ℛ ℜ Ԅ रै₹ Я 尺 㞍 尻 尺 尼 尽 Ի ʀ ɾ я Я 民 🇷 R҉ 屁 ૨ ๖ۣۜR ฯ ণ 尺 я ℜ Γ я ® л Я Ř ř ર ŗ ѓ ל гг ŗ я Я Ŗ
    
    S= ฐ ร ຮ ธ ऽ ₷ ֆ ى ک উ ঊ Տ હ ៜ 🇸 ട
    乌马 写 ㄅ ㄘㄎ 亐令 S҉ Ｓ ๖ۣۜS ঙ ຣ ଌ ঊ ₷ ន ѕ ร ₴ ஜى § ร ş ئ ટ ک Ŝ š હ Ş ઽ ՏȘ ร ﻜ § Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ 
    
    T=┳ ✞ 〒 Ԏ Ŧ ₮ ৳ ॠ ŧ ჭ ⊥ 匕十 क़ 丁 も デ テ ナ ㄤ ｲ 亻 ট ゼ Ⴀ 
    平 亇 T҉ す ๖ۣۜT ক ፐ ፓ 弋 字 🇹т † է Ե ｲ Ŧ ৳ჯ ₮ क も ł ┼ † т Ŧ Ţ Ť ŧ 〶〒ł Ŧ ♰ Ƭ τ † 
    
    U=น Ü บ ป ย ษ ข μ い ų น บ ป∪ リ ㄩ凵ひ სυʉ 🇺 Ҵ ચ થ ს U҉ む ષ ๖ۣۜU Ⴎ ษ ひ υ ს ∪ચ µ Ü ü џ ů ย Û û ŭ ن น ષย џ ផ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц
    
    V=√ 讠 V҉ ∨ ๖ۣۜV ง 🇻ν∇√ ૪√ ٧ ს
    
    W= ₩ ฬ ผ ฝ พ ฟ ௰ ឃ ω 🇼 W҉ ખ 山 ๖ۣۜW ຟ Ѡ Ш ₩ ωŴ ω ŵ ખ ώ ฬ ฝ พ ฟ ﷲ ਘ
    
    X =× 区×义冈区囟ҳ̸Ҳ̸ҳ✘✗ χ 乂 X҉. メ ๖ۣۜX 🇽χ Ҳ ҳ ✖χ Ж ჯ ×א ﭏ Ҳ ҳ χ ×
    
    [ ] Y = ƴ ¥ 丫吖 Ɏ Ύ Ⴘ 쏘 γ צ ყ Ⴘ Ⴗ ע γ у Y ﻻ ㄚ Ⴤ ψ Ψ Y҉. ๖ۣۜY ⼬ Ƴ🇾у Ψ ყ γμ¥ ﻻ ŷ Ў ყ γ ÿ ý ५У ყ ﻻ צּ Ұ ¥ У ұ ץ
    
    Ζั = ʑ Ӡ ӡ ろ る 乙 之 z ƶ ȥ ʒ ʐ ʑ ƺ ʓ Z҉ 🇿 z 乙 ζ Հ Ż ž ζ ż Ƶ Հ ƶ ƺ
    
    ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ᶤ ʲ ᵏ ˡ ᵐ ᶰ ᵒ ᵖ ˁ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ ᵈˡᶜ ᶤ ᶫᵒᵛᵉ ʸᵒᵘ
    
    ᴬ ᴮ ՟ ᴰ ᴱ ˁ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᵠ ᴿ ⁵ ᵀ ᵁ ᵛ ᵂ ᵡ ᵞ ᶻ
    
    ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹
    ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾ ❿ ➀ ➁ ➂ ➃ ➄ ➅ ➆ ➇ ➈ ➉ 
    Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ Ⅺ Ⅻ Ⅼ Ⅽ Ⅾ Ⅿ ↀ ↁ ↂ ↇ ↈ
    
    🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵 🇶 🇷 🇸 🇹 🇺 🇻 🇼 🇽 🇾 🇿
    
    就 像 模 像 ા િ ી ુ ૂ ૃ ૄ ૅ ે ૈ ૉ ₡ ₢ ₤ ₥ ₦ ₩ ₪ ₫ ₭ ₯ ₾ ₽ ₻ ₺ ₸ ₷ ₶ ₶ ₵₴ ₲ ₰₱ ₳ ⸿ ⸚ ⸛ ⶬ ⻞⸙ㆃ㑹䡤 ▒░▓ ҉ ҈ ℳ ℴ ℵ ℥ℤ ℨ ℘ ℜ
    ♔ ♕ ♖ ♗ ♘ ♚ ♝ ♟ ♢ ♤ ⚀ ⚂ ⚃ ⚅ ❥
    ๖ۣۜ͡ஓீ͜͡
    ❠ ❞ ❑ ❒ ❁ ❃ ❅❔❖❆❈❙❙❋❜❝❞❏❍❊❊❉❈❅✫✪✧✦✥✤✤✣✢✠✟✞✜ ✛ ✚ ✙ ✘ ✖ ✗ ✕✔✓✒✑✎ ঔৣீ͜ཾཿঔৣ͜͡➳ ⇝ۜ⇜꧁᭼⸼✞⸼᭼ঔৣ͜͡ீ͜❥͜ ঔৣ ⸎ •เั ⸎ ঔৣ͜͡➳ೈ፝͜͡❂ ஓீ͜↭ৢۜ͜͡✟ ✗✙ ✚ ✛ ✠ ✟ ✞ ✜ ✢ ✧ ✦ ✮ ✭ ✬ ✫ ✪ ✩ ✰ ✺ ✹ ✸ ✷ ❂ ❧ ⇝❦ ۜ✯ ۣۜৡ ⇜꧁᭼ ✞ ⸼᭼꧂ঔৣ͜͡ீ͜❥͜ ঔৣ ⸎ เั•⸎
    ۞ 𖤍 𖦴 𖣁 ༒ 𖣘 𖧃 𖥟 𖣧 𖣆 𖥂 𖠆 𖠦 � ဩ ⌲ ꫞ 𖠇 𖠃 𖠌 𖠍 𖠏 𖠎 𖠜 𖠝 𖠞 𖠟 𖠥 𖠧 𖠣 𖠢 𖠡 𖠠 𖠨 𖠩 𖠪 𖠫 𖠬 𖠭 𖠮 𖠯 𖠲 𖠳 𖠴 𖠵 𖠶 𖠷 𖠰 𖠀 𖡹 𖡸 𖢀 𖢁 𖢂 𖢃 𖢄 𖢇 𖡿 𖡾 𖡽 𖡼 𖡻 𖡷 𖡶 𖡴 𖡳 𖡲 𖡱 𖡰 𖢋 𖢚 𖢘𖢠 𖢔 𖢖 𖢝 𖢫 𖣐 𖣔 𖣕 𖣖 𖣗 𖣥 𖣦 𖣧 𖣲 𖣱 𖤼 𖧮 𖦺 𖦲 𖥶 ஓீ͜ ۞ཹཷླྀ   ீ͜ஓீ͜҉͜͡✦
    
    A҈ B҈ C҈ D҈ E҈ F҈ G҈ H҈ I҈ J҈ K҈ L҈ M҈ N҈ O҈ P҈ Q҈ R҈ S҈ T҈ U҈ V҈ W҈ X҈ Y҈ Z҈
    
    A҉ B҉ C҉ D҉ E҉ C҉ D҉ E҉ F҉ G҉H҉ I҉ J҉ K҉ L҉ M҉ N҉ O҉ P҉ Q҉ R҉ S҉ T҉ U҉ V҉ W҉ X҉ Y҉ Z҉
    
    ℬ ℰ ℯ ℱ ℊ ℋ ℎ ℐ ℒ ℓ ℳ ℴ ℘ ℛ 
    ℭ ℮ ℌ ℑ ℜ ℨ
    
    丹 乃 匚 刀 モ 下 ム 卄 工 Ｊ Ｋ ㄥ 爪 れ 口 ㄗ Ｑ 尺 ち 匕 ∪ ∨ 山 メ ㄚ 乙v ๖ۣۜÄ ๖ۣۜÖ ๖ۣۜÜ
    
    ๖ۣۜ€ ๖ۣۜ@ Ju
    ๖ۣۜA ๖ۣۜB ๖ۣۜC ๖ۣۜD ๖ۣۜE ๖ۣۜF ๖ۣۜG ๖ۣۜH ๖ۣۜI ๖ۣۜJ ๖ۣۜK ๖ۣۜL ๖ۣۜM ๖ۣۜN ๖ۣۜO ๖ۣۜP ๖ۣۜQ ๖ۣۜR ๖ۣۜS ๖ۣۜT ๖ۣۜU ๖ۣۜW ๖ۣۜV ๖ۣۜX ๖ۣۜY ๖ۣۜZ
    
    A = Д ∆ ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά ā
    B = ß в β ხ ฿ в ␢ ๒ Ъ ъ ь
    C = ¢ ς © ζ Ƈ Ɔ ʗ ₡ ૮ ح
    D = Ð ∂ ð đ ๔ მ ძ ժ ɗ
    E = £ Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯
    F = ƒ ₣ ﬄ ךּ דּ Ғ ક Ք
    G = Ģ ₢ ɠ ૬ ǥ Ҩ ҩ
    H = સ அ ħ ђ н Ћ Њ अ╠╣
    I = ϊ ΐ ذ ﻐ  ɩ ւ ɨ
    J = נ ل Ţ ړ ਹ ﻮ ʝ ჟ a
    K = Қ ķ к Ҝ ₭ К қ ҝ
    L = Ł ℓ Ļ ๋╝Լ
    M = ๓ ற м ₥ რ ო ɱ
    N = Ŋ ภ Պ ฑ η и ர Ɲ ห ₪ ɳ מּ תּ ₦
    O = Ø ѳ ø ૭ σ ๏ ơ Θ Ф ठ ☻￼
    P = ק Þ ρ P๋ ‽ ρ ƿ ք թ ॐ
    Q = Ǫ ǫ գ
    R = г ŗ я ® Я Ŗ ɾ
    S = Ș ร ﻜ § Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ
    T = ł Ŧ ♰ Ƭ τ †
    U = ย џ ચ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц
    V = √ ٧ ს
    X = א ﭏ Ҳ ҳ χ ×
    Z = Ƶ Հ ƶ ƺ .
    Y = У ყ ﻻ צּ Ұ ¥ У ұ ץ
    
    ☬⊹⊱ ⊰⊹ஐﻬﻬஐ๑✺ ︾𖣔⊰ ⊱𖣔
    
    ꣰ ꣱꣢꣩ ꣨꣯ ꥟ ꦀꦃ ꦄ ꦂꦶꦵ ꦴ꦳ꦿ ꧀ 𖨰 𖧧 𖧐 𖥟 𖥸 𖥓 𖥊 𖤇 𖤍 𖤝 𖤛 𖣴 𖣳 𖣔 𖣒 𖣘 𖡼 𖡎 ࿇ ࿅ ᪔ ᪘ᬽ⚞⚟⚜⚛ ⚝ ⚕ ⛧ ❁ ❦ ❥ ⸎ ⸙ ꕘ꙰꙳꣦꣭꣪
    
    ༒ ꧁꧂
    
    
    ෴ ේ ๛ ๖ ຂ ༒༻ ༗   ཹ      ཷཱུུ.  ࿓ ࿗ ᩎ ᩗ ᪘ ᪥ ᬻ ☸ ♡ ⚚ ⚵ 
    
    ଃౄ ృೋ ೊ ೈ
    
      ҈.  ۝ ۞ ۵ ߷ ि ॏ ऻ ৎৣ 
    
    ꔼ ꔶ ꔵ ꕥ ꖄ ꗥ ॏৎৣ
    れ ₡ ₩ ₤ ₦ ₱ ₲ ₰ ₳ ₷ ₸ ₹ ℐ ℑ ℒ ℊ ℋ ℌ ℍす や ⼳ ひ ቻ ঊ ֆ ℘ ℙ ℚ ℛ ℜ ℝ ℣ ℤ ℬ ℰ ℭ ℱ ℳ ⅅ ⅆ  Ǥ 㞩 ↁ Ҩ む ⷀ ₦ み ↁ ؏ 亇 ł 
    ❍ｷ Ⱥ 多 及 Δ̸ 弋  ៩ ൬̸ 岌 ₮ ቾ​ ℴ 
    
    ๖ۣۜ€ ๖ۣۜ@ 
    ๖ۣۜA ๖ۣۜB ๖ۣۜC ๖ۣۜD ๖ۣۜE ๖ۣۜF ๖ۣۜG ๖ۣۜH ๖ۣۜI ๖ۣۜJ ๖ۣۜK ๖ۣۜL ๖ۣۜM ๖ۣۜN ๖ۣۜO ๖ۣۜP ๖ۣۜQ ๖ۣۜR ๖ۣۜS ๖ۣۜT ๖ۣۜU ๖ۣۜW ๖ۣۜV ๖ۣۜX ๖ۣۜY ๖ۣۜZ
    
    A҈ B҈ C҈ D҈ E҈ F҈ G҈ H҈ I҈ J҈ K҈ L҈ M҈ N҈ O҈ P҈ Q҈ R҈ S҈   ҈  U҈ V҈ W҈ X҈ Y҈ Z҈
    
    A҉ B҉ C҉ D҉ E҉ C҉ D҉ E҉ F҉ G҉H҉ I҉ J҉ K҉ L҉ M҉ N҉ O҉ P҉ Q҉ R҉ S҉ T҉ U҉ V҉ W҉ X҉ Y҉ Z҉
    
    丹 乃 匚 刀 モ 下 ム 卄 工 Ｊ Ｋ ㄥ 爪 れ 口 ㄗ Ｑ 尺 ち 匕 ∪ ∨ 山 メ ㄚ 乙v ๖ۣۜÄ ๖ۣۜÖ ๖ۣۜÜ
    
    1. ๖ۣۜۜ͜͡ஓீ͜ ۣۜ    ፝͡ৎ✞̤֟٭  ৎ❥̤֟٭  ৎ̤✙֟٭  ஓீۣ̤֟͜٭̤֟ ঔ  ፝͡ৎ❅̤֟٭   ፝͡ৎ✞̤֟٭  ⸎✞
    
    ♡  ৎ❥̤֟٭ۣۜ ஓீ፝͜͡   ✦ۣۜۜ☆ۣۜۜ͜͡   ঔৣֳ᷌᷈͜͡❀ ్మాై  ू ፝͜❥ ೈ፝͜͡๖ۣۜ   ৎ✿̤֟٭ ೈ፝
    
    ✦҈͜͡➳ ீ͜ৡৢ͜͡   ๖ۣۜۜ͜͡ீ͜   ೈ፝͜͡    ঔৣ͜͡   ৢۜ͜͡✟ ঔৣ͜͡ீ͜❥͜ঔৣ
    ลѦคᎯสﾛꍏ开ਸ🈷 
    
    🇧乃вβƁദЂß฿ႪЬҍცɮɞᏰᕊℬᙖ侈
    
    🇨匚¢ḉ₡ე₵ႠƇꉓᏣᑕℂとͼℭ
    
    🇩刀∂ÐↁƊժ⊅ԃԂꀸᖱᎴᖙᗪᗬ
    
    🇪モєΣعэㄠპ℮∈∑ξϵﾓ౬ꍟᏋᙓℰ㉫ ૯を
    
    🇫下f₣ҒՔ౯Բヂբꎇℱ Բ
    
    🇬ムg❡Ⴚ₲ʛｇꁅℊᎶᏩԌੲǤ
    
    🇭卄нஅअĦዠせけみんჩℋℍザਮℌ♅
    
    🇮工ιΞ፤ቾ์łⱡ៛፣เቖェエＩใ ɪꀤᏐⅈɨ ¡
    
    🇯CD₭ҝƘӃꀘᏦҡ 
    
    🇱ㄥℓ ŁﾚⱠⱢ∠₺し८ไ₰Լ廴꒒ℒむもꞭ
    
    🇲爪м๓றℳო௱൬ლຕឮᙢᗰϻ从
    
    🇳れиภฑரƝห₪₦Ⴖல∩ຖหℕᏁग़ͷη
    
    🇴口σѻØᘎø๏ΘФӨのѺ❍ΩҩᎧҨᏫᎤԾ ❂
    
    🇵ㄗρㄕ ƤPᎵᕈթア₱や℘ԹｱヱᖘᎮ 伊
    
    🇶Ｑqℚ 
    
    🇷尺яरℜरै₹ ԄƦʀꋪԻᖇℛℝᏒ☈尻
    
    🇸丂s💲Şڪşک₷នঊՖᎦฐຮꌗऽธ
    
    🇹匕тτŦƬ†₮৳Ⴕ₸すｲ イकԵ꓄ནᅮ┳∓☨Ꭲ
    
    🇺∪υยひปႮখʊƲ∪นบฆնບນꀎᏌᏠथ໓
    
    🇻∨νƔ۷ɣᐯᏉᏤ
    
    🇼山ωwฬ₩Ꮃ௰ຟฝѠШพผฟຜຝᙡਘ
    
    🇽メ✗✘✖Ж×ꊼ艾 
    
    🇾ㄚуΥﭏצּҰ¥УұץჄყעꌩ⑂Ꭹϒ
    
    🇿乙zƵƶʑẕꁴᏃℤ
    
    
    A=Δ꙰ Λ λ Ⱥ ₳ ą å ส สั ล α ค ศ Ⴉ 🇦 🇦ศ ₳ ﾑΔ a ɑ Ă 厾 λ α Λ ɐ ส丹ⓐ Д ∆ ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά āλ Д Å ä ล Ẳ Ħ ª ẩ ส Ä ձ Ą ๖ۣۜĄ αสั ά ặ
    म स 禸 丒丸凡 丹入 ﾑ ム Д 开 ໞ Ѧ 月么 ਜ A҉ 岚 ๖ۣۜA ꬍꬅ 刄 㞩
    
    
    B=多 乃 ঔৣ͜͡岌 в ฿ ß β ცⓑ ხ ɮ β ß ฿ Ъ طß в β ხ ฿ в ␢ ๒ Ъ ъ ь Ɓ ß ฿ Þ 乃 邦 ぶ ✇ 及 в Ⴊ 🇧 ๖ۣۜB 夃 ଷ
    ゐßѢƀЪЬβϐбБъьわゎらね ♭ ɓ B҉ ㄢ 
    
    C=¢ ₡ ₢ C ς ⊂ 匚 ㄷ ど に 二仁 🇨 ɕ ૮ C҉ ๖ۣۜC Շ 🇨 ¢ ₡ ᄃ c̈̈ ɔ ς ©C¢ ς © ζ Ƈ Ɔ ʗ ₡ ૮ ح¢ Ĉ č Č © ĉ Ć ૮
    
    D=ↁ Đ ɗ đ δ ɖ わ 力 ⊅ ⊅໓ 🇩 ∌ D҉ 刀 Ɗ
    ๖ۣۜD ಖ 🇩đ Đ ɖ ⓓ ∂ ժÐ ∂ đ ۜÐ ₫Ð ∂ ð đ ๔ მ ძ ժ ɗ 
    
    
    
    E=Ɇ € ℮ ㉫ ∉ ∈ Ξ Σ ξ Є ๋Є ع ə ɇ є ჲ を
    ﾐ ﾓ 三 巨 玄乞 Ｅ它 ೯ ౯ ㄠ モ 🇪 E҉ 亥 ૯ ๖ۣۜE も ƎƏ Ɛ ؏៩ 🇪 乇 Є є Σ ε ξ ⓔ 玄 ៩ ₤ ჰ პ℮£ Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯૯ є პ ε Ë ع ﻊ ē € ξ έ ℮ ë Э ۼ
    
    F=Ғ ƒ Բ下 ﾁ Ϝ Fヂ Ք F 下 🇫 F҉. ๖ۣۜF  🇫 ｷ ₣ ʃ ғ ⓕ f Ғƒ Բ ๖ۣۜF ₣ƒ ₣ ﬄ ךּ דּ Ғ ક 
    
    
    G=₲ ǥ Ⴚ Ǥ ❡ ሬ 🇬 Ԍ G҉ ๖ۣۜG ໔ ໕ ផ ௹
    🇬 Ĝ Ģ g G̈̈ ⓖ ₲ ௹ ğ G๋ ๔ Ġ ġ ģ ğ๋ ؤ و פĢ ₢ ɠ ૬ ǥ
    
    H=Ħ ん ɧ 卄௮ அ ஆ Һ һ н Ҕ ҕ Ң ң Ҥҥ Ӈ ӈ Ԋ ԋ 艹 Ⴌ 🇭 ╠╣ H み ђ ๖ۣۜH ਮ 🇭 ん ħ н ђ அ ჩ ħ ╠╣ ђ સ Њ ௮ Ћ нસ அ ħ ђ н Ћ Њ अ╠╣
    
    I=፤ ɨ ៛ í ∣ ழェ エ ｪ ｴ 工讠 辶 เ ቾ 🇮 ҉ I҉ 
    ๖ۣۜI ⶇⷀ 🇮 ί Ξ រ ł ιΐ ι ║ï Î เ Ī ﭑ Ỉ î Į ĩϊ ΐ ذ ﻐ ɩ ւ ɨ
    
    J=ʝĲ ｊ Ｊ ʲქ ჟ 🇯 J ℑ ๖ۣۜJ 🇯ʝ ქ J Ĵ ɾ ე უل נ ਹ Ĵנ ل Ţ ړ ਹ ﻮ ʝ ჟ
    
    K=Ҝ Ҟ Ӄ ₭ Ҝ 长 ҟ Ҡ ҡ ӄ ҝ  🇰 Ƙ K ઝ ๖ۣۜK🇰 ₭ Ҝ κ ķ К к ๖ۣۜK ઝ Қ ķ к Ҝ ₭ К қ ҝ
    
    L=Ł Լ ℓ ∟ ﾚ し ̽ſ ʆ ไ ₰ 🇱よ๊レ 廴 L҉ ㄥ ๖ۣۜL โ Ն ₺ 🇱 Ł ₰ ℓ Լ よ ℓ Ĺ Ł Լ Ľ Ļ Ŀ ┘£ ไŁ ℓ Ļ ๋╝Լ
    
    M=ℳ ℳ๓ ற м რ ო ɱ ₥ Ӎ ポ ボ /V\ 水 ണ Ӎ 🇲 M҉ 爪 ๖ۣۜM
    🇲 м ℳ რ ற ო ɱ ๓ ʍ დლм ற /V\ ๓ ๖ۣۜM Щ๓ ற м ₥ რ ო ɱ
    
    N=₦ Ń ņ ரŋИ ภй מ Ň หฑ иη∩ ல ₪ ൯ Ŋ N҉ れ ๖ۣۜN ฌ ญ ൮ വശഷസ Л🇳и ₦ Π ₪ η ெ வ йи η ŋ ฑ ர И ภ й Ń ņ ή п ห Ŋ ภ Պ ฑ η и ர Ɲ ห ₪ ɳ מּ תּ ₦
    
    O=Ѻ θ Θ ❍ ◯ 〇Ծ҉ ゆ ∅ Ø Ծ Օ ס ⊗ ₴ Θ ΦϕФ Ω θ๑ ๏ ο ๐ σ ø ѳ Ѻ Ѳ Ө ०
    の 🇴 ۝ O 口 ๖ۣۜO 汩 ଠ 🇴Ø๏σǿ⊕ƠФץםץ₴ΘԾøΩ❍ტიბθ❂ ø σ Ø ૭ Ǿ ö ♂ ợ Ů Ơ Ō Ծ Θ δ Ǿ Ф Ộ Ö ǿ Ŏ ό Ø ѳ ø ૭ σ ๏ ơ Θ Ф ठ ☻￼
    
    P=℘ ₱ 了 ァ户 ㄕ尸 卩卫 ƿ ρ م թ ｱ ק ¶ や ゃ ア マ ャ ヤ ヹ   🇵 伊 ҉ P҉ ㄗ ๖ۣۜP 尹 🇵ρ ק թ þ φÞ ╠╝קּ թ φ þ քק Þ ρ P๋ ‽ ρ ƿ ք թ ॐ 
    
    Q=φ Ҩ ҩ. 🇶 ϑ Q҉ ๖ۣۜQ🇶q ๖ۣۜQǪ ǫ գ
    
    R=ℜ Ԅ रै₹Я 訳 尺 㞍尻尺 尼 尽 Ի ʀ ɾ я Я 民 🇷 R҉ 屁 ૨ ๖ۣۜR ฯ ণ 尺 尻 я ℜ Γ я ® л Я Ř ř ર ŗ ѓ ל гг ŗ я ® Я Ŗ
    
    S= ฐ ร ຮ ธ ऽ ₷ ֆ ى ک উ ঊ Տ હ ៜ 🇸 ട
    乌马 写 ㄅ ㄘㄎ 亐令 S҉ Ｓ ๖ۣۜS ঙ ຣ ଌ 🇸ঊ ₷ ន ѕ ร ₴ ஜى § ร ş ئ ટ ک Ŝ š હ Ş ઽ ՏȘ ร ﻜ § Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ 
    
    T=┳ 〒 Ԏ Ŧ ₮ ৳ ॠ ŧ ჭ ⊥ 匕十 क़ 丁 も デ テ ナ ㄤ ｲ 亻 ট ゼ Ⴀ 🇹
    平 亇 T҉ す ๖ۣۜT ক ፐ ፓ 弋 字 🇹т † է Ե ｲ Ŧ ৳ჯ ₮ क も ł ┼ † т Ŧ Ţ Ť ŧ 〶〒ł Ŧ ♰ Ƭ τ † 
    
    U=น Ü บ ป ย ษ ข μ い ų น บ ป∪ リ ㄩ凵びひ სυʉ 🇺 Ҵ ચ થ ს U҉ む ષ ๖ۣۜU Ⴎ ษ 🇺 ひ υ ს ∪ચ µ Ü ü џ ů ย Û û ŭ ن น ષย џ ચ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц
    
    V=√ 讠 🇻 V҉ ∨ ๖ۣۜV ง 🇻ν∇√ ૪√ ٧ ს
    
    W= ₩ ฬ ผ ฝ พ ฟ ௰ ឃ ω 🇼 W҉ ખ 山 ๖ۣۜW ຟ 🇼 Ѡ Ш ₩ ωŴ ω ŵ ખ ώ ฬ ฝ พ ฟ ﷲ ਘ
    
    X =× 区×义冈区囟ҳ̸Ҳ̸ҳ✘✗ χ 🇽 乂 X҉. メ ๖ۣۜX 🇽χ Ҳ ҳ ✖χ Ж ჯ ×א ﭏ Ҳ ҳ χ ×
    
    ✤✣✢✡✡✠✟✞✜✛✚✙✘✘✖✖✗✕✔✓✒✑✍✎✏ ೈ፝͜͡࿇ ঔৣ͜͡➳ ⇝❦ۜ✯ۣۜৡৡۣۜ✯ۜ❦⇜꧁᭼⸼✞⸼᭼꧂ ঔৣ͜͡ீ͜❥͜ঔৣ👼 ⸎✴•เั•✴⸎ ঔৣ͜͡➳ೈ፝͜͡ hj houve GG tu TRT5 T6 t tv GG te G
    
    ꧁ヂ.ണ.Ł꧂
    
    ࿇↭ৢۜ͜͡✟✗✙✚✛✠✟N✞✜✢✦✧ ✦✮✭✬✫✪✩✯✰✺✹✸✷✶✵❂❧❦ ⇝❦ۜ✯ۣۜৡৡۣۜ✯ۜ❦⇜꧁᭼⸼✞⸼᭼꧂ঔৣ͜͡ீ͜❥͜ঔৣ👼 ⸎✴•เั•✴⸎🔴⚪⚫
    ๖ۣۜۜ͜͡ஓீ͜ ۣۜ    ፝͡ৎ✞̤֟٭  ৎ❥̤֟٭  ৎ̤✙֟٭  ஓீۣ̤֟͜٭̤֟ ঔ  ፝͡ৎ❅̤֟٭   ፝͡ৎ✞̤֟٭  ⸎✞
    
    ♡  ৎ❥̤֟٭ۣۜ ஓீ፝͜͡   ✦ۣۜۜ☆ۣۜۜ͜͡   ঔৣֳ᷌᷈͜͡❀ ్మాై  ू ፝͜❥ ৎ✿̤֟٭ ೈ፝
    
    ✦҈͜͡➳ ீ͜ৡৢ͜͡   ๖ۣۜۜ͜͡ீ͜   ೈ፝͜͡    ঔৣ͜͡ TABELA DE LETRAS E SÍMBOLOS*
    
    A=Δ꙰ Λ λ Ⱥ ₳ ą å ส สั ล α ค ศ Ⴉ 🇦ศ ₳ ﾑΔ a ɑ Ă 厾 λ α Λ ɐ ส丹ⓐ Д ∆ ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά āλ Д Å ä ล Ẳ Ħ ª ẩ ส Ä ձ Ą ๖ۣۜĄ αสั ά ặ
    म स 禸 丒丸凡 丹入 ﾑ Д 开 ໞ Ѧ 月么 ਜ A҉ 岚 ๖ۣۜA ꬍꬅ 㞩
    
    B=多 乃 ঔৣ͜͡岌 в ฿ ß β ცⓑ ხ ɮ β ß ฿ Ъ طß в β ხ ฿ в ␢ ๒ Ъ ъ ь Ɓ ß ฿ Þ 乃 邦 ぶ ✇ 及 в Ⴊ 🇧 ๖ۣۜB 夃 ଷ
    ゐßѢƀЪЬβϐбБъьわゎらね ♭ ɓ B҉ ㄢ 
    
    C=¢ ₡ ₢ C ς ⊂ 匚 ㄷ ど に 二 ɕ ૮ C҉ ๖ۣۜC Շ 🇨 ¢ ₡ ᄃ c̈̈ ɔ ς C ¢ ς ζ Ƈ Ɔ ʗ ₡ ૮ ح¢ Ĉ č Č © ĉ Ć ૮
    
    D=ↁ Đ ɗ đ δ ɖ わ 力 ⊅ ⊅໓ 🇩 ∌ D҉ 刀 Ɗ
    ๖ۣۜD ಖ đ ɖ ⓓ ∂ ժÐ ∂ đ ۜ ₫Ð ∂ ð đ ๔ მ ძ ժ ɗ 
    
    E=Ɇ € ℮ ㉫ ∉ ∈ Ξ Σ ξ Є ๋Є ع ə ɇ є ჲ を
    ﾐ ﾓ 三 巨 玄乞 Ｅ它 ೯ ౯ ㄠ モ 🇪 E҉ 亥 ૯ ๖ۣۜE も ƎƏ Ɛ ؏ ៩ 乇 Є є Σ ε ξ ⓔ 玄 ៩ ₤ ჰ პ℮£ Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯૯ є პ ε Ë ع ﻊ ē € ξ έ ℮ ë Э ۼ
    
    F=Ғ ƒ Բ下 ﾁ Ϝ Fヂ Ք F 下 🇫 F҉. ๖ۣۜF ｷ ₣ ʃ ғ ⓕ f Ғƒ Բ ๖ۣۜF ₣ƒ ₣ ﬄ ךּ דּ Ғ ક 
    
    G=₲ ǥ Ⴚ Ǥ ❡ ሬ Ԍ G҉ ๖ۣۜG ໔ ໕ ផ ௹
    🇬 Ĝ Ģ g G̈̈ ⓖ ₲ ௹ ğ G๋ ๔ ġ ģ ğ๋ ؤ و פĢ ₢ ɠ ૬ ǥ
    
    H=Ħ ん ɧ 卄௮ அ ஆ Һ һ н Ҕ ҕ Ң ң Ҥҥ Ӈ ӈ Ԋ ԋ 艹 Ⴌ ╠╣ H み ђ ๖ۣۜH ਮ 🇭 ん ħ н ђ அ ჩ ħ ╠╣ ђ સ Њ ௮ Ћ нસ அ ħ ђ н Ћ Њ अ╠╣
    
    I=፤ ɨ ៛ í ∣ ழェ エ ｪ ｴ 工讠 辶 เ ቾ 🇮 ҉ I҉ 
    ๖ۣۜI ⶇⷀ ί Ξ រ ł ιΐ ι ║ï Î เ Ī ﭑ Ỉ î Į ĩϊ ΐ ذ ﻐ ɩ ւ ɨ
    
    J=ʝĲ ｊ Ｊ ʲქ ჟ J ℑ ๖ۣۜJ 🇯ʝ ქ J ɾ ე უل נ ਹ Ĵנ ل Ţ ړ ਹ ﻮ ʝ ჟ
    
    K=Ҝ Ҟ Ӄ ₭ Ҝ ҟ Ҡ ҡ ӄ ҝ 🇰 Ƙ K ઝ ๖ۣۜK ₭ Ҝ κ ķ К к ๖ۣۜK ઝ Қ ķ к Ҝ ₭ К қ ҝ
    
    L=Ł Լ ℓ ∟ ﾚ し ̽ſ ʆ ไ ₰ 🇱よ๊レ 廴 L҉ ㄥ โ Ն ₺ Ł ₰ ℓ Լ ℓ Ĺ Ł Լ Ľ Ļ Ŀ ┘£ ไŁ ℓ Ļ ๋╝Լ
    
    M=ℳ ๓ ற м რ ო ɱ ₥ Ӎ ボ /V\ 水 ണ Ӎ M҉ 爪 ๖ۣۜM
    🇲 м ℳ რ ற ო ɱ ๓ ʍ დლм ற /V\ ๓ ๖ۣۜM Щ๓ ற м ₥ რ ო ɱ
    
    N=₦ Ń ņ ரŋИ ภй מ Ň หฑ иη∩ ல ₪ ൯ Ŋ N҉ れ ๖ۣۜN ฌ ญ ൮ വശഷസ Л🇳и ₦ Π ₪ η ெ வ йи η ŋ ฑ ர И ภ й Ń ņ ή п ห Ŋ ภ Պ ฑ η и ர Ɲ ห ₪ ɳ מּ תּ ₦
    
    O=Ѻ θ Θ ❍ ◯ 〇Ծ҉ ゆ ∅ Ø Ծ Օ ס ⊗ ₴ Θ ΦϕФ Ω θ๑ ๏ ο ๐ σ ø ѳ Ѻ Ѳ Ө ०
    の ۝ O 口 汩 ଠ 🇴Ø ๏ σ ǿ ⊕ Ơ ₴ ΘԾ øΩ ❍ ტ ი ბ ❂ ø σ Ø ૭ Ǿ ö ♂ ợ Ů Ơ Ō Ծ Θ δ Ǿ Ф Ộ Ö ǿ Ŏ ό Ø ѳ ø ૭ σ ๏ ơ Θ Ф ठ ☻ θ Ө ɵ Ҩ ¤
    
    P=℘ ₱ 了 ァ 户 ㄕ 尸 卩卫 ƿ ρ م թ ｱ ק ¶ や ゃ ア マ ャ ヤ ヹ ｱ P҉ ๖ۣۜP 尹 🇵ρ ק թ þ φÞ ╠╝קּ թ φ þ քק Þ ρ P๋ ‽ ρ ƿ ք թ ॐ 
    
    Q=φ Ҩ ҩ. 🇶 ϑ Q҉ q ๖ۣۜQǪ ǫ գ
    
    R=ℛ ℜ Ԅ रै₹ Я 尺 㞍 尻 尺 尼 尽 Ի ʀ ɾ я Я 民 🇷 R҉ 屁 ૨ ๖ۣۜR ฯ ণ 尺 я ℜ Γ я ® л Я Ř ř ર ŗ ѓ ל гг ŗ я Я Ŗ
    
    S= ฐ ร ຮ ธ ऽ ₷ ֆ ى ک উ ঊ Տ હ ៜ 🇸 ട
    乌马 写 ㄅ ㄘㄎ 亐令 S҉ Ｓ ๖ۣۜS ঙ ຣ ଌ ঊ ₷ ន ѕ ร ₴ ஜى § ร ş ئ ટ ک Ŝ š હ Ş ઽ ՏȘ ร ﻜ § Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ 
    
    T=┳ ✞ 〒 Ԏ Ŧ ₮ ৳ ॠ ŧ ჭ ⊥ 匕十 क़ 丁 も デ テ ナ ㄤ ｲ 亻 ট ゼ Ⴀ 
    平 亇 T҉ す ๖ۣۜT ক ፐ ፓ 弋 字 🇹т † է Ե ｲ Ŧ ৳ჯ ₮ क も ł ┼ † т Ŧ Ţ Ť ŧ 〶〒ł Ŧ ♰ Ƭ τ † 
    
    U=น Ü บ ป ย ษ ข μ い ų น บ ป∪ リ ㄩ凵ひ სυʉ 🇺 Ҵ ચ થ ს U҉ む ષ ๖ۣۜU Ⴎ ษ ひ υ ს ∪ચ µ Ü ü џ ů ย Û û ŭ ن น ષย џ ផ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц
    
    V=√ 讠 V҉ ∨ ๖ۣۜV ง 🇻ν∇√ ૪√ ٧ ს
    
    W= ₩ ฬ ผ ฝ พ ฟ ௰ ឃ ω 🇼 W҉ ખ 山 ๖ۣۜW ຟ Ѡ Ш ₩ ωŴ ω ŵ ખ ώ ฬ ฝ พ ฟ ﷲ ਘ
    
    X =× 区×义冈区囟ҳ̸Ҳ̸ҳ✘✗ χ 乂 X҉. メ ๖ۣۜX 🇽χ Ҳ ҳ ✖χ Ж ჯ ×א ﭏ Ҳ ҳ χ ×
    
    Y = ƴ ¥ 丫吖 Ɏ Ύ Ⴘ 쏘 γ צ ყ Ⴘ Ⴗ ע γ у Y ﻻ ㄚ Ⴤ ψ Ψ Y҉. ๖ۣۜY ⼬ Ƴ🇾у Ψ ყ γμ¥ ﻻ ŷ Ў ყ γ ÿ ý ५У ყ ﻻ צּ Ұ ¥ У ұ ץ
    
    Ζั = ʑ Ӡ ӡ ろ る 乙 之 z ƶ ȥ ʒ ʐ ʑ ƺ ʓ Z҉ 🇿 z 乙 ζ Հ Ż ž ζ ż Ƶ Հ ƶ ƺ
    
    ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ᶤ ʲ ᵏ ˡ ᵐ ᶰ ᵒ ᵖ ˁ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ ᵈˡᶜ ᶤ ᶫᵒᵛᵉ ʸᵒᵘ
    
    ᴬ ᴮ ՟ ᴰ ᴱ ˁ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᵠ ᴿ ⁵ ᵀ ᵁ ᵛ ᵂ ᵡ ᵞ ᶻ
    
    ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹
    ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾ ❿ ➀ ➁ ➂ ➃ ➄ ➅ ➆ ➇ ➈ ➉ 
    Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ Ⅺ Ⅻ Ⅼ Ⅽ Ⅾ Ⅿ ↀ ↁ ↂ ↇ ↈ
    
    🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵 🇶 🇷 🇸 🇹 🇺 🇻 🇼 🇽 🇾 🇿
    
    就 像 模 像 ા િ ી ુ ૂ ૃ ૄ ૅ ે ૈ ૉ ₡ ₢ ₤ ₥ ₦ ₩ ₪ ₫ ₭ ₯ ₾ ₽ ₻ ₺ ₸ ₷ ₶ ₶ ₵₴ ₲ ₰₱ ₳ ⸿ ⸚ ⸛ ⶬ ⻞⸙ㆃ㑹䡤 ▒░▓ ҉ ҈ ℳ ℴ ℵ ℥ℤ ℨ ℘ ℜ
    ♔ ♕ ♖ ♗ ♘ ♚ ♝ ♟ ♢ ♤ ⚀ ⚂ ⚃ ⚅ ❥
    ๖ۣۜ͡ஓீ͜͡
    ❠ ❞ ❑ ❒ ❁ ❃ ❅❔❖❆❈❙❙❋❜❝❞❏❍❊❊❉❈❅✫✪✧✦✥✤✤✣✢✠✟✞✜ ✛ ✚ ✙ ✘ ✖ ✗ ✕✔✓✒✑✎ ঔৣீ͜ཾཿঔৣ͜͡➳ ⇝ۜ⇜꧁᭼⸼✞⸼᭼ঔৣ͜͡ீ͜❥͜ ঔৣ ⸎ •เั ⸎ ঔৣ͜͡➳ೈ፝͜͡❂ ஓீ͜↭ৢۜ͜͡✟ ✗✙ ✚ ✛ ✠ ✟ ✞ ✜ ✢ ✧ ✦ ✮ ✭ ✬ ✫ ✪ ✩ ✰ ✺ ✹ ✸ ✷ ❂ ❧ ⇝❦ ۜ✯ ۣۜৡ ⇜꧁᭼ ✞ ⸼᭼꧂ঔৣ͜͡ீ͜❥͜ ঔৣ ⸎ เั•⸎
    ۞ 𖤍 𖦴 𖣁 ༒ 𖣘 𖧃 𖥟 𖣧 𖣆 𖥂 𖠆 𖠦 � ဩ ⌲ ꫞ 𖠇 𖠃 𖠌 𖠍 𖠏 𖠎 𖠜 𖠝 𖠞 𖠟 𖠥 𖠧 𖠣 𖠢 𖠡 𖠠 𖠨 𖠩 𖠪 𖠫 𖠬 𖠭 𖠮 𖠯 𖠲 𖠳 𖠴 𖠵 𖠶 𖠷 𖠰 𖠀 𖡹 𖡸 𖢀 𖢁 𖢂 𖢃 𖢄 𖢇 𖡿 𖡾 𖡽 𖡼 𖡻 𖡷 𖡶 𖡴 𖡳 𖡲 𖡱 𖡰 𖢋 𖢚 𖢘𖢠 𖢔 𖢖 𖢝 𖢫 𖣐 𖣔 𖣕 𖣖 𖣗 𖣥 𖣦 𖣧 𖣲 𖣱 𖤼 𖧮 𖦺 𖦲 𖥶 ஓீ͜ ۞ཹཷླྀ   ீ͜ஓீ͜҉͜͡✦
    W
    A҈ B҈ C҈ D҈ E҈ F҈ G҈ H҈ I҈ J҈ K҈ L҈ M҈ N҈ O҈ P҈ Q҈ R҈ S҈ T҈ U҈ V҈ W҈ X҈ Y҈ Z҈
    
    A҉ B҉ C҉ D҉ E҉ C҉ D҉ E҉ F҉ G҉H҉ I҉ J҉ K҉ L҉ M҉ N҉ O҉ P҉ Q҉ R҉ S҉ T҉ U҉ V҉ W҉ X҉ Y҉ Z҉
    
    ℬ ℰ ℯ ℱ ℊ ℋ ℎ ℐ ℒ ℓ ℳ ℴ ℘ ℛ 
    ℭ ℮ ℌ ℑ ℜ ℨ
    
    丹 乃 匚 刀 モ 下 ム 卄 工 Ｊ Ｋ ㄥ 爪 れ 口 ㄗ Ｑ 尺 ち 匕 ∪ ∨ 山 メ ㄚ 乙v ๖ۣۜÄ ๖ۣۜÖ ๖ۣۜÜ
    
    ๖ۣۜ€ ๖ۣۜ@ Ju
    ๖ۣۜA ๖ۣۜB ๖ۣۜC ๖ۣۜD ๖ۣۜE ๖ۣۜF ๖ۣۜG ๖ۣۜH ๖ۣۜI ๖ۣۜJ ๖ۣۜK ๖ۣۜL ๖ۣۜM ๖ۣۜN ๖ۣۜO ๖ۣۜP ๖ۣۜQ ๖ۣۜR ๖ۣۜS ๖ۣۜT ๖ۣۜU ๖ۣۜW ๖ۣۜV ๖ۣۜX ๖ۣۜY ๖ۣۜZ
    
    A = Д ∆ ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά ā
    B = ß в β ხ ฿ в ␢ ๒ Ъ ъ ь
    C = ¢ ς © ζ Ƈ Ɔ ʗ ₡ ૮ ح
    D = Ð ∂ ð đ ๔ მ ძ ժ ɗ
    E = £ Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯
    F = ƒ ₣ ﬄ ךּ דּ Ғ ક Ք
    G = Ģ ₢ ɠ ૬ ǥ Ҩ ҩ
    H = સ அ ħ ђ н Ћ Њ अ╠╣
    I = ϊ ΐ ذ ﻐ  ɩ ւ ɨ
    J = נ ل Ţ ړ ਹ ﻮ ʝ ჟ a
    K = Қ ķ к Ҝ ₭ К қ ҝ
    L = Ł ℓ Ļ ๋╝Լ
    M = ๓ ற м ₥ რ ო ɱ
    N = Ŋ ภ Պ ฑ η и ர Ɲ ห ₪ ɳ מּ תּ ₦
    O = Ø ѳ ø ૭ σ ๏ ơ Θ Ф ठ ☻￼
    P = ק Þ ρ P๋ ‽ ρ ƿ ք թ ॐ
    Q = Ǫ ǫ գ
    R = г ŗ я ® Я Ŗ ɾ
    S = Ș ร ﻜ § Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ
    T = ł Ŧ ♰ Ƭ τ †
    U = ย џ ચ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц
    V = √ ٧ ს
    X = א ﭏ Ҳ ҳ χ ×
    Z = Ƶ Հ ƶ ƺ .
    Y = У ყ ﻻ צּ Ұ ¥ У ұ ץ
    
    ☬⊹⊱ ⊰⊹ஐﻬﻬஐ๑✺ ︾𖣔⊰ ⊱𖣔
    
    ꣰ ꣱꣢꣩ ꣨꣯ ꥟ ꦀꦃ ꦄ ꦂꦶꦵ ꦴ꦳ꦿ ꧀ 𖨰 𖧧 𖧐 𖥟 𖥸 𖥓 𖥊 𖤇 𖤍 𖤝 𖤛 𖣴 𖣳 𖣔 𖣒 𖣘 𖡼 𖡎 ࿇ ࿅ ᪔ ᪘ᬽ⚞⚟⚜⚛ ⚝ ⚕ ⛧ ❁ ❦ ❥ ⸎ ⸙ ꕘ꙰꙳꣦꣭꣪
    
    ༒ ꧁꧂
    
    
    ෴ ේ ๛ ๖ ຂ ༒༻ ༗   ཹ      ཷཱུུ.  ࿓ ࿗ ᩎ ᩗ ᪘ ᪥ ᬻ ☸ ♡ ⚚ ⚵ 
    
    ଃౄ ృೋ ೊ ೈ
    
      ҈.  ۝ ۞ ۵ ߷ ि ॏ ऻ ৎৣ 
    
    ꔼ ꔶ ꔵ ꕥ ꖄ ꗥ ॏৎৣ
    れ ₡ ₩ ₤ ₦ ₱ ₲ ₰ ₳ ₷ ₸ ₹ ℐ ℑ ℒ ℊ ℋ ℌ ℍす や ⼳ ひ ቻ ঊ ֆ ℘ ℙ ℚ ℛ ℜ ℝ ℣ ℤ ℬ ℰ ℭ ℱ ℳ ⅅ ⅆ  Ǥ 㞩 ↁ Ҩ む ⷀ ₦ み ↁ ؏ 亇 ł 
    ❍ｷ Ⱥ 多 及 Δ̸ 弋  ៩ ൬̸ 岌 ₮ ቾ​ ℴ 
    
    ๖ۣۜ€ ๖ۣۜ@ 
    ๖ۣۜA ๖ۣۜB ๖ۣۜC ๖ۣۜD ๖ۣۜE ๖ۣۜF ๖ۣۜG ๖ۣۜH ๖ۣۜI ๖ۣۜJ ๖ۣۜK ๖ۣۜL ๖ۣۜM ๖ۣۜN ๖ۣۜO ๖ۣۜP ๖ۣۜQ ๖ۣۜR ๖ۣۜS ๖ۣۜT ๖ۣۜU ๖ۣۜW ๖ۣۜV ๖ۣۜX ๖ۣۜY ๖ۣۜZ
    
    A҈ B҈ C҈ D҈ E҈ F҈ G҈ H҈ I҈ J҈ K҈ L҈ M҈ N҈ O҈ P҈ Q҈ R҈ S҈   ҈  U҈ V҈ W҈ X҈ Y҈ Z҈
    
    A҉ B҉ C҉ D҉ E҉ C҉ D҉ E҉ F҉ G҉H҉ I҉ J҉ K҉ L҉ M҉ N҉ O҉ P҉ Q҉ R҉ S҉ T҉ U҉ V҉ W҉ X҉ Y҉ Z҉
    
    丹 乃 匚 刀 モ 下 ム 卄 工 Ｊ Ｋ ㄥ 爪 れ 口 ㄗ Ｑ 尺 ち 匕 ∪ ∨ 山 メ ㄚ 乙v ๖ۣۜÄ ๖ۣۜÖ ๖ۣۜÜ
    
    ๖ۣۜۜ͜͡ஓீ͜ ۣۜ    ፝͡ৎ✞̤֟٭  ৎ❥̤֟٭  ৎ̤✙֟٭  ஓீۣ̤֟͜٭̤֟ ঔ  ፝͡ৎ❅̤֟٭   ፝͡ৎ✞̤֟٭  ⸎✞
    
    ♡  ৎ❥̤֟٭ۣۜ ஓீ፝͜͡   ✦ۣۜۜ☆ۣۜۜ͜͡   ঔৣֳ᷌᷈͜͡❀ ్మాై  ू ፝͜❥ ೈ፝͜͡๖ۣۜ   ৎ✿̤֟٭ ೈ፝
    
    ✦҈͜͡➳ ீ͜ৡৢ͜͡   ๖ۣۜۜ͜͡ீ͜   ೈ፝͜͡    ঔৣ͜͡   ৢۜ͜͡✟ ঔৣ͜͡ீ͜❥͜ঔৣ
    ลѦคᎯสﾛꍏ开ਸ🈷 
    
    🇧乃вβƁദЂß฿ႪЬҍცɮɞᏰᕊℬᙖ侈
    
    🇨匚¢ḉ₡ე₵ႠƇꉓᏣᑕℂとͼℭ
    
    🇩刀∂ÐↁƊժ⊅ԃԂꀸᖱᎴᖙᗪᗬ
    
    🇪モєΣعэㄠპ℮∈∑ξϵﾓ౬ꍟᏋᙓℰ㉫ ૯を
    
    🇫下f₣ҒՔ౯Բヂբꎇℱ Բ
    
    🇬ムg❡Ⴚ₲ʛｇꁅℊᎶᏩԌੲǤ
    
    🇭卄нஅअĦዠせけみんჩℋℍザਮℌ♅
    
    🇮工ιΞ፤ቾ์łⱡ៛፣เቖェエＩใ ɪꀤᏐⅈɨ ¡
    
    🇯CD₭ҝƘӃꀘᏦҡ 
    
    🇱ㄥℓ ŁﾚⱠⱢ∠₺し८ไ₰Լ廴꒒ℒむもꞭ
    
    🇲爪м๓றℳო௱൬ლຕឮᙢᗰϻ从
    
    🇳れиภฑரƝห₪₦Ⴖல∩ຖหℕᏁग़ͷη
    
    🇴口σѻØᘎø๏ΘФӨのѺ❍ΩҩᎧҨᏫᎤԾ ❂
    
    🇵ㄗρㄕ ƤPᎵᕈթア₱や℘ԹｱヱᖘᎮ 伊
    
    🇶Ｑqℚ 
    
    🇷尺яरℜरै₹ ԄƦʀꋪԻᖇℛℝᏒ☈尻
    
    🇸丂s💲Şڪşک₷នঊՖᎦฐຮꌗऽธ
    
    🇹匕тτŦƬ†₮৳Ⴕ₸すｲ イकԵ꓄ནᅮ┳∓☨Ꭲ
    
    🇺∪υยひปႮখʊƲ∪นบฆնບນꀎᏌᏠथ໓
    
    🇻∨νƔ۷ɣᐯᏉᏤ
    
    🇼山ωwฬ₩Ꮃ௰ຟฝѠШพผฟຜຝᙡਘ
    
    🇽メ✗✘✖Ж×ꊼ艾 
    
    🇾ㄚуΥﭏצּҰ¥УұץჄყעꌩ⑂Ꭹϒ
    
    🇿乙zƵƶʑẕꁴᏃℤ
    
    
    A=Δ꙰ Λ λ Ⱥ ₳ ą å ส สั ล α ค ศ Ⴉ 🇦 🇦ศ ₳ ﾑΔ a ɑ Ă 厾 λ α Λ ɐ ส丹ⓐ Д ∆ ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά āλ Д Å ä ล Ẳ Ħ ª ẩ ส Ä ձ Ą ๖ۣۜĄ αสั ά ặ
    म स 禸 丒丸凡 丹入 ﾑ ム Д 开 ໞ Ѧ 月么 ਜ A҉ 岚 ๖ۣۜA ꬍꬅ 刄 㞩
    
    
    B=多 乃 ঔৣ͜͡岌 в ฿ ß β ცⓑ ხ ɮ β ß ฿ Ъ طß в β ხ ฿ в ␢ ๒ Ъ ъ ь Ɓ ß ฿ Þ 乃 邦 ぶ ✇ 及 в Ⴊ 🇧 ๖ۣۜB 夃 ଷ
    ゐßѢƀЪЬβϐбБъьわゎらね ♭ ɓ B҉ ㄢ 
    
    C=¢ ₡ ₢ C ς ⊂ 匚 ㄷ ど に 二仁 🇨 ɕ ૮ C҉ ๖ۣۜC Շ 🇨 ¢ ₡ ᄃ c̈̈ ɔ ς ©C¢ ς © ζ Ƈ Ɔ ʗ ₡ ૮ ح¢ Ĉ č Č © ĉ Ć ૮
    
    D=ↁ Đ ɗ đ δ ɖ わ 力 ⊅ ⊅໓ 🇩 ∌ D҉ 刀 Ɗ
    ๖ۣۜD ಖ 🇩đ Đ ɖ ⓓ ∂ ժÐ ∂ đ ۜÐ ₫Ð ∂ ð đ ๔ მ ძ ժ ɗ 
    
    
    
    E=Ɇ € ℮ ㉫ ∉ ∈ Ξ Σ ξ Є ๋Є ع ə ɇ є ჲ を
    ﾐ ﾓ 三 巨 玄乞 Ｅ它 ೯ ౯ ㄠ モ 🇪 E҉ 亥 ૯ ๖ۣۜE も ƎƏ Ɛ ؏៩ 🇪 乇 Є є Σ ε ξ ⓔ 玄 ៩ ₤ ჰ პ℮£ Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯૯ є პ ε Ë ع ﻊ ē € ξ έ ℮ ë Э ۼ
    
    F=Ғ ƒ Բ下 ﾁ Ϝ Fヂ Ք F 下 🇫 F҉. ๖ۣۜF  🇫 ｷ ₣ ʃ ғ ⓕ f Ғƒ Բ ๖ۣۜF ₣ƒ ₣ ﬄ ךּ דּ Ғ ક 
    
    
    G=₲ ǥ Ⴚ Ǥ ❡ ሬ 🇬 Ԍ G҉ ๖ۣۜG ໔ ໕ ផ ௹
    🇬 Ĝ Ģ g G̈̈ ⓖ ₲ ௹ ğ G๋ ๔ Ġ ġ ģ ğ๋ ؤ و פĢ ₢ ɠ ૬ ǥ
    
    H=Ħ ん ɧ 卄௮ அ ஆ Һ һ н Ҕ ҕ Ң ң Ҥҥ Ӈ ӈ Ԋ ԋ 艹 Ⴌ 🇭 ╠╣ H み ђ ๖ۣۜH ਮ 🇭 ん ħ н ђ அ ჩ ħ ╠╣ ђ સ Њ ௮ Ћ нસ அ ħ ђ н Ћ Њ अ╠╣
    
    I=፤ ɨ ៛ í ∣ ழェ エ ｪ ｴ 工讠 辶 เ ቾ 🇮 ҉ I҉ 
    ๖ۣۜI ⶇⷀ 🇮 ί Ξ រ ł ιΐ ι ║ï Î เ Ī ﭑ Ỉ î Į ĩϊ ΐ ذ ﻐ ɩ ւ ɨ
    
    J=ʝĲ ｊ Ｊ ʲქ ჟ 🇯 J ℑ ๖ۣۜJ 🇯ʝ ქ J Ĵ ɾ ე უل נ ਹ Ĵנ ل Ţ ړ ਹ ﻮ ʝ ჟ
    
    K=Ҝ Ҟ Ӄ ₭ Ҝ 长 ҟ Ҡ ҡ ӄ ҝ  🇰 Ƙ K ઝ ๖ۣۜK🇰 ₭ Ҝ κ ķ К к ๖ۣۜK ઝ Қ ķ к Ҝ ₭ К қ ҝ
    
    L=Ł Լ ℓ ∟ ﾚ し ̽ſ ʆ ไ ₰ 🇱よ๊レ 廴 L҉ ㄥ ๖ۣۜL โ Ն ₺ 🇱 Ł ₰ ℓ Լ よ ℓ Ĺ Ł Լ Ľ Ļ Ŀ ┘£ ไŁ ℓ Ļ ๋╝Լ
    
    M=ℳ ℳ๓ ற м რ ო ɱ ₥ Ӎ ポ ボ /V\ 水 ണ Ӎ 🇲 M҉ 爪 ๖ۣۜM
    🇲 м ℳ რ ற ო ɱ ๓ ʍ დლм ற /V\ ๓ ๖ۣۜM Щ๓ ற м ₥ რ ო ɱ
    yg
    N=₦ Ń ņ ரŋИ ภй מ Ň หฑ иη∩ ல ₪ ൯ Ŋ N҉ れ ๖ۣۜN ฌ ญ ൮ വശഷസ Л🇳и ₦ Π ₪ η ெ வ йи η ŋ ฑ ர И ภ й Ń ņ ή п ห Ŋ ภ Պ ฑ η и ர Ɲ ห ₪ ɳ מּ תּ ₦
    
    O=Ѻ θ Θ ❍ ◯ 〇Ծ҉ ゆ ∅ Ø Ծ Օ ס ⊗ ₴ Θ ΦϕФ Ω θ๑ ๏ ο ๐ σ ø ѳ Ѻ Ѳ Ө ०
    の 🇴 ۝ O 口 ๖ۣۜO 汩 ଠ 🇴Ø๏σǿ⊕ƠФץםץ₴ΘԾøΩ❍ტიბθ❂ ø σ Ø ૭ Ǿ ö ♂ ợ Ů Ơ Ō Ծ Θ δ Ǿ Ф Ộ Ö ǿ Ŏ ό Ø ѳ ø ૭ σ ๏ ơ Θ Ф ठ ☻￼
    
    P=℘ ₱ 了 ァ户 ㄕ尸 卩卫 ƿ ρ م թ ｱ ק ¶ や ゃ ア マ ャ ヤ ヹ   🇵 伊 ҉ P҉ ㄗ ๖ۣۜP 尹 🇵ρ ק թ þ φÞ ╠╝קּ թ φ þ քק Þ ρ P๋ ‽ ρ ƿ ք թ ॐ 
    
    Q=φ Ҩ ҩ. 🇶 ϑ Q҉ ๖ۣۜQ🇶q ๖ۣۜQǪ ǫ գ
    
    R=ℜ Ԅ रै₹Я 訳 尺 㞍尻尺 尼 尽 Ի ʀ ɾ я Я 民 🇷 R҉ 屁 ૨ ๖ۣۜR ฯ ণ 尺 尻 я ℜ Γ я ® л Я Ř ř ર ŗ ѓ ל гг ŗ я ® Я Ŗ
    
    S= ฐ ร ຮ ธ ऽ ₷ ֆ ى ک উ ঊ Տ હ ៜ 🇸 ട
    乌马 写 ㄅ ㄘㄎ 亐令 S҉ Ｓ ๖ۣۜS ঙ ຣ ଌ 🇸ঊ ₷ ន ѕ ร ₴ ஜى § ร ş ئ ટ ک Ŝ š હ Ş ઽ ՏȘ ร ﻜ § Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ 
    
    T=┳ 〒 Ԏ Ŧ ₮ ৳ ॠ ŧ ჭ ⊥ 匕十 क़ 丁 も デ テ ナ ㄤ ｲ 亻 ট ゼ Ⴀ 🇹
    平 亇 T҉ す ๖ۣۜT ক ፐ ፓ 弋 字 🇹т † է Ե ｲ Ŧ ৳ჯ ₮ क も ł ┼ † т Ŧ Ţ Ť ŧ 〶〒ł Ŧ ♰ Ƭ τ † 
    
    U=น Ü บ ป ย ษ ข μ い ų น บ ป∪ リ ㄩ凵びひ სυʉ 🇺 Ҵ ચ થ ს U҉ む ષ ๖ۣۜU Ⴎ ษ 🇺 ひ υ ს ∪ચ µ Ü ü џ ů ย Û û ŭ ن น ષย џ ચ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц
    
    V=√ 讠 🇻 V҉ ∨ ๖ۣۜV ง 🇻ν∇√ ૪√ ٧ ს
    
    W= ₩ ฬ ผ ฝ พ ฟ ௰ ឃ ω 🇼 W҉ ખ 山 ๖ۣۜW ຟ 🇼 Ѡ Ш ₩ ωŴ ω ŵ ખ ώ ฬ ฝ พ ฟ ﷲ ਘ
    
    X =× 区×义冈区囟ҳ̸Ҳ̸ҳ✘✗ χ 🇽 乂 X҉. メ ๖ۣۜX 🇽χ Ҳ ҳ ✖χ Ж ჯ ×א ﭏ Ҳ ҳ χ ×
    
    Y = ƴ ¥ 丫吖 Ɏ Ύ Ⴘ 쏘 γ צ ყ Ⴘ Ⴗ ע γ у Y ﻻ ㄚ Ⴤ 🇾 ψ Ψ Y҉. ๖ۣۜY ⼬ Ƴ🇾у Ψ ყ γμ¥ ﻻ ŷ Ў ყ γ ÿ ý ५У ყ ﻻ צּ Ұ ¥ У ұ ץ
    
    Ζั = ʑ Ӡ ӡ ろ る 乙 之 z ƶ ȥ ʒ ʐ ʑ ƺ ʓ 🇿 Z҉ 🇿 z 乙 ζ Հ Ż ž ζ ż Ƶ Հ ƶ ƺ
    
    ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ᶤ ʲ ᵏ ˡ ᵐ ᶰ ᵒ ᵖ ˁ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ ᵈˡᶜ ᶤ ᶫᵒᵛᵉ ʸᵒᵘ
    
    ᴬ ᴮ ՟ ᴰ ᴱ ˁ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᵠ ᴿ ⁵`
}