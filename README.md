<img src="./src/assets/logoBlack.svg" width="400">

[![License](https://img.shields.io/github/license/day8/re-frame.svg)](LICENSE)

## O Projeto ℹ

O Projeto consiste em um Live Chat de canal único construído em React utilizando serviços Firebase. 


📌 [Visite clicando aqui](https://live-chat-one.vercel.app/)


## Como foi feito?

Foi utilizado o serviço Cloud Firestore do Google Firebase para armazenadar os dados das mensagens (documentos) na coleção do chat. Combinando com os Hooks do [react-firebase-hooks](https://www.npmjs.com/package/react-firebase-hooks) foi possível acompanhar os [estados do usuário](https://github.com/csfrequency/react-firebase-hooks/tree/1e893b11a41df8618a80ac7964bdf02dcf05735e/auth) - Logado ou Não - e também em caso positivo ter acesso aos dados do CurrentUser para realizar o envio de mensagens identificadas. Além disso, com o hook [useCollectionData](https://github.com/csfrequency/react-firebase-hooks/tree/1e893b11a41df8618a80ac7964bdf02dcf05735e/firestore#usecollectiondata) é possível extrair os valores dos documentos de uma coleção do nosso database, nesse caso a coleção de mensagens, estas possuem o id do usuário, seu nome, foto, horário de envio e texto, o qual ajudou a manter a sincronia entre dados mostrados em tela e dados que estão sendo salvos na coleção de mensagens. A partir de uma query por horário de envio é possível mostrar para o usuário as mensagens em ordem de recentes.

## Rodando localmente

Para rodar o Talk It localmente em modo desenvolvimento você deve:

```
git clone https://github.com/Fernanda-Kipper/LiveChat.git
cd project_name
npm install
npm run-script dev
```

No local de npm você pode utilizar o package manager de sua preferência

### Atenção ‼

Não é recomendado armazenar suas chaves de acesso a API no lado do cliente, nesse projeto fora utilizado as variáveis de ambiente react app estritamente para estudo e prática, mas em modo de produção esssa prática não é recomendada 

