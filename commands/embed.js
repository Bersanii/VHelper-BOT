module.exports = {
    name: 'emb',
    description: 'Generates a embeded messsage',
    execute(message, params, args){
        
        if(!params){
            message.channel.send('To create a embed use: ```-emb / Tipo?Titulo?LinkDoPost?LinkDireto?UrlDaImagem```')
            
            return
        }

        //Tipo, Titulo, Link post, Link direto, URL da imagem
        const paramsArr = params.split('?')

        const embData = {
            nome: paramsArr[0],
            color: '0xff6136',
            linkPost: paramsArr[1],
            linkDireto: paramsArr[2],
            imagemUrl: paramsArr[3]
        }

        console.log('-------- embData --------')
        console.log(embData)
        console.log('-------------------------')
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