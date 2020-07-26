<!--
*** Obrigado por estar vendo o meu README. Agora vamos rodar esse projeto :D
-->

<p align="center"><img src="https://github.com/Bruno-Carv/DiscordUiClone/blob/Web(ReactJS-TypeScript)/docs/LogoDiscordClone.png?raw=true"></p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conteúdo)
- [Sobre o Projeto](#sobre-o-Projeto)
  - [Tecnologias aplicadas](#tecnologias-aplicadas)
- [Interface da aplicação](#interface-da-aplicação)
- [Começando](#Começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Licença](#licença)
- [Contato](#contato)

## Sobre o Projeto

Como projeto com base no canal da Rocketseat, o DiscordClone é uma das aplicações desenvolvidas com base no conhecimento de Front-end ensinado por Guilherme Brazs da equipe da Rocketseat. Com base nessa aula e conhecimentos da tecnologia, foi implementado alguns detalhes para vincular o front-end ao serviço de stream e chat do Discord.

### Tecnologias aplicadas

- [ReactJS](https://reactnative.dev/) - O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites. Os componentes dessa ferramenta foram desenvolvidos pelo Facebook.

- [Typescript](https://www.typescriptlang.org) - TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem. Anders Hejlsberg, arquiteto da linguagem C# e criador das linguagens Delphi e Turbo Pascal, trabalhou no desenvolvimento do TypeScript. A linguagem pode ser usada para desenvolver aplicações JavaScript no lado cliente e lado servidor.

- [Styled-components](https://styled-components.com) - Styled components são componentes onde criamos o CSS no próprio arquivo do componente, o arquivo JS. Com isso conseguimos obter algumas vantagens em diversos quesitos, tais como: Carregamento automático do CSS crítico, isso é, os componentes são renderizados com a página e são injetados apenas o CSS que realmente será utilizado, nada mais!

## Interface da aplicação

### Aplicação Web

<p align="center"><img src="https://github.com/Bruno-Carv/DiscordUiClone/blob/Web(ReactJS-TypeScript)/docs/UI.png?raw=true"></p>

## Começando

### Pré-requisitos

- [NodeJS](https://nodejs.org/pt-br/) - versão 12.18 LTS;
- [Yarn](https://yarnpkg.com/) - versão 1.22.0;

### Executar Projeto

Entrando na raiz do projeto, primeiro passo é instalar a dependências do 
projeto, para isso execute o comando `npm install` ou `yarn install`, 
logo após o download execute o comando `npm start` ou `yarn start`, assim executará a 
dependência react-scripts que irá abrir o projeto na URL `http://localhost:3000`.

#### Docker 

Entrando na raiz do projeto, primeiro passo é criar a imagem para gerar o container do projeto, 
para isso com o Docker instalado e ativo, execute o comando `docker image build . -t brunocarvalhs/discordclone`, após será gerado a imagem que estára em seu cache do docker, logo em seguida execute o comando:
 - [Linux]:`docker container run -p 80:3000 -v $pwd:/www -it --name DiscordClone brunocarvalhs/discordclone`
 - [Windows]:`docker container run -p 80:3000 -v ${pwd}:/www -it --name DiscordClone brunocarvalhs/discordclone`
 - [Mac]:`docker container run -p 80:3000 -v $pwd:/www -it --name DiscordClone brunocarvalhs/discordclone`
assim executará a dependência react-scripts que irá abrir o projeto na URL `http://localhost`.
### Estrutura de Arquivos

```bash
DiscordUIClone
├── docs/
│   ├── LogoDiscordClone.png
│   └── UI.png
├── public/
│   ├── favicon.png
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── load.gif
│   │   └── logo-rocketseat.svg
│   ├── components/
│   │   ├── ChannelButton/
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── ChannelData/
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── Channelinfo/
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── ChannelMessage/
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── Layout/
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── LoadDiscord/
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── ModalDiscord/
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── ServerBottom/
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── ServerList/
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── ServerName/
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── UserInfo/
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   └── UserList/
│   │       ├── index.tsx
│   │       └── styles.tsx
│   ├── styles/
│   │   └── GlobalStyles.ts
│   ├── App.tsx
│   ├── chat.json
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   └── users.json
├── .gitignore
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

## Licença

Distribuído sob a licença GNU GENERAL PUBLIC LICENSE. Veja `LICENSE` para mais informações.

## Contato

Bruno Silva Carvalho - [Github](https://github.com/bruno-carv)