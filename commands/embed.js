const { Discord } = require("discord.js")

module.exports = {
    name: 'emb',
    description: 'Generates a embeded messsage',
    execute(message, params, args){
        
        if(!params){
            message.channel.send('To create a embed use: ```-emb --params:Tipo??Titulo??LinkDoPost??LinkDireto??UrlDaImagem```')
            message.channel.send('Tipos:')
            message.channel.send('```ASSETTO CORSA\n    Carros: acCar\n    Pistas: acTrack```')
            message.channel.send('```AMERICAN TRUCK SIMULATOR\n    Mapas: atsMap```')
            return
        }

        //Tipo, Titulo, Link post, Link direto, URL da imagem
        const paramsArr = params.split('??')


        //Define variaveis de acordo com o tipo selecionado pelo user
        let cor = ''
        let idCanal = ''
        switch (paramsArr[0]) {
            case 'acCar':
                cor = '0xff6b6b'
                idCanal = '931173509558861864'
                break;

            case 'acTrack':
                cor = '0xff6136'
                idCanal = '931173530719117352'
                break;

            case 'atsMap':
                cor = '0x4fff75'
                idCanal = '931221797767090186'
                break;
        
            default:
                break;
        }
        
        const embData = {
            nome: paramsArr[1],
            cor: cor,
            canalDefinido: idCanal,
            linkPost: paramsArr[2],
            linkDireto: paramsArr[3],
            imagemUrl: paramsArr[4]
        }

        message.client.channels.cache.get(embData.canalDefinido).send({
            "embeds": [
                {
                "type": "rich",
                "title": embData.nome,
                "description": "",
                "color": embData.cor,
                "fields": [
                    {
                    "name": `» Link Direto`,
                    "value": embData.linkDireto
                    },
                    {
                    "name": `» Link do post`,
                    "value": embData.linkPost
                    }
                ],
                "image": {
                    "url": embData.imagemUrl,
                    "height": 0,
                    "width": 0
                }
                }
            ]
        })

        message.reply('Embed criado')

    }
}

// const paramsArr = params.split('?')
//     paramsArr.forEach(element => {
//         console.log(element)
//     });


// function Embed(fname, lname) {
//     this.tipo = fname;
//     this.titulo = fname;
//     this.lastName = lname;
// }






// const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// await lib.discord.channels['@0.2.0'].messages.create({
//   "channel_id": `${context.params.event.channel_id}`,
//   "content": "",
//   "tts": false,
//   "embeds": [
//     {
//       "type": "rich",
//       "title": `Gunsai`,
//       "description": "",
//       "color": 0xff6136,
//       "fields": [
//         {
//           "name": `» Link Direto`,
//           "value": `https://www.racedepartment.com/downloads/gunma-cycle-sports-center-aka-gunsai-touge-new-scratch-made.32941/download`,
//           "inline": true
//         },
//         {
//           "name": `» Link do post`,
//           "value": `https://www.racedepartment.com/downloads/`
//         }
//       ],
//       "timestamp": `2022-01-12T03:00:00.000Z`,
//       "image": {
//         "url": `https://www.racedepartment.com/attachments/screenshot_p3_mitsubishi_evo8_s2_pk_gunma_cycle_sports_center_4-5-120-18-32-13-jpg.371779/`,
//         "height": 0,
//         "width": 0
//       }
//     }
//   ]
// });