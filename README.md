# LiveChat 📡
LiveChat construído em React utilizando serviços Firebase. 

## Como foi feito? 🔎

Foi utilizado o serviço Cloud FireStore do Firebase que mantém os dados em sincronia. Combinando com os Hooks do [react-firebase-hooks](https://www.npmjs.com/package/react-firebase-hooks)
foi possível acompanhar os [estados do usuário](https://github.com/csfrequency/react-firebase-hooks/tree/1e893b11a41df8618a80ac7964bdf02dcf05735e/auth) - Logado ou Não - e também em caso positivo ter acesso aos dados do CurrentUser para realizar o envio de mensagens identificadas. Akém disso,
com o hook [useCollectionData](https://github.com/csfrequency/react-firebase-hooks/tree/1e893b11a41df8618a80ac7964bdf02dcf05735e/firestore#usecollectiondata) é possível extrair os valores dos documentos de uma coleção do nosso database, nesse caso a coleção de mensagens, estas possuem o id do usuário, seu nome, foto, horário de envio e texto.
Apartir de uma query por horário de envio é possível mostrar para o usuário as mensagens em ordem de recentes.

📌 [Visite clicando aqui](https://live-chat-one.vercel.app/)

### Atenção: ‼

Não é recomendado armazenar suas chaves de acesso a API no lado do cliente, nesse projeto fora utilizado as variáveis de ambiente react app estritamente para estudo e prática, mas em modo de produção esssa prática não é recomendada 

