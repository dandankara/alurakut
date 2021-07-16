import {SiteClient} from 'datocms-client';

export default async function recebedorDeRequest (request, response) {

  if(request.method === 'POST') {
    const TOKEN = '81027c8a1a9a8b8b6aad0bcc1b3677';
    const client = new SiteClient(TOKEN);
  
    const CriarComunidade = await client.items.create({
      itemType: "972071",
      ...request.body,
      // title: "teste",
      // imageUrl: "https://github.com/dandankara.png",
    })
  
    console.log(CriarComunidade)
   
    response.json({
      dados: 'Algum dado qualquer para o front',
      CriarComunidade: CriarComunidade,
    });
    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!'
})
 
  
}