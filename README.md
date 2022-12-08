[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
# IHC-CATALOG

## Projeto
O catálogo de Instrumentos de Avaliação de Experiência do usuário é um projeto
para conclusão da cadeira de Interação Humano Computador (IHC) do curso de Sistemas e
Midias Digitais (SMD) da Universidade Federal do Ceará.

O catálogo será uma Aplicação Web com intuito de catalogar e filtrar
Instrumentos de Avaliação UX permitindo que o usuário tenha um local que
centralize essas informações e evite ter que ir de site em site buscando por
meios de avaliar a experiência do usuário.


## Dados

* Cliente:
    * Ticianne Darin
* Produto:
    *  Ferramenta que disponibilize para o usuário um conjunto de instrumentos de avaliação e redirecione para o link de acesso a esses instrumentos. Tal ferramenta deve ser capaz de gerenciar esses instrumentos.
* Prazo:
* Equipe | Dante Araújo | Drielle Furtado | Luis Eduardo | Manoel Costa | Maxwell de Sousa |
* Ferramentas
    * Ferramentas de Gerenciamento:

        [![Trello](https://img.shields.io/badge/Trello-0052CC.svg?style=for-the-badge&logo=Trello&logoColor=white)](https://trello.com)
        [![Github](https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com)

    * Ferramentas de Prototipação e Design: Figma, Miro, Canva.

        [![Miro](https://img.shields.io/badge/Miro-050038.svg?style=for-the-badge&logo=Miro&logoColor=white)](https://miro.com)
        [![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](https://figma.com)
        [![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)](https://canva.com)

    * Ferramentas de Desenvolvimento:
        * Editores de Texto:

            [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?style=for-the-badge&logo=Visual-Studio-Code&logoColor=white)](https://code.visualstudio.com/)
            [![Neovim](https://img.shields.io/badge/Neovim-57A143.svg?style=for-the-badge&logo=Neovim&logoColor=white)](https://neovim.com/)

        * Banco de Dados:

            [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)

        * Frameworks:

            ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
            ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
            ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

            * Packages

                * Package Manager:    ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

                * Components: ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

                * Routes: ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

                * Build Tool: ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)<BS>



## Requisistos Funcionais

### Acompanhe o andamento da nossa aplicação

|  Código                           |  Descrição                                                              |  Codificação    | Status    |
|  ----------------------------     |  --------------------------                                             |  ---------      | --------- |
|  RF001                            |  Autenticação(admin)                                                    |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/userController.js#L6-L53)     | Concluído
|  RF002                            |  Sugestão de novos instrumentos(usuário)                                |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/suggestionController.js#L5-L29)     | Iniciado
|  RF003                            |  Filtragem de conteúdos por categorias(usuário)                         |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/articleController.js#L104-L147)     | Iniciado
|  RF004                            |  Ferramenta de busca por palavras chaves(usuário)                       |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/articleController.js#L94-L102)[código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/components/Navigation/NavigationHeader.jsx#L17-L29)[código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/components/Navigation/NavigationHeader.jsx#L81-L140)     | Concluído
|  RF005                            |  Aprovar sugestões(admin)                                               |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/suggestionController.js#L31-L53)     | Não iniciado
|  RF006                            |  Reprovar sugestões(admin)                                              |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/suggestionController.js#L54-L76)     | Não iniciado
|  RF007                            |  Visualizar instrumentos aprovados ou reprovados(admin)                 |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/components/Panels/SuggestionManagerPanel.jsx#L21-L205)[código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/suggestionController.js#L78-L90)     | Não iniciado
|  RF008                            |  Adição de subcategorias(admin)                                         |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/categoryController.js#L8-L29)     | Não iniciado
|  RF009                            |  Remoção de subcategorias(admin)                                        |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/categoryController.js#L138-L153)     | Não iniciado
|  RF010                            |  Edição de subcategorias(admin)                                         |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/categoryController.js#L117-L136)     | Não iniciado
|  RF011                            |  Mostrar lista de resultados na busca(usuário)                          |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/routes/InstrumentDetail.jsx#L1-L108)     | Concluído
|  RF012                            |  Mostrar formulário de sugestão(usuário)                                |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/components/Modals/InstrumentAdd.jsx)     | Concluído
|  RF013                            |  Mostrar lista de resultados filtrados(usuário)                         |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/routes/ResultList.jsx)     | Concluído
|  RF014                            |  Pesquisar por categorias específicas(usuário)                          |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/components/Navigation/NavigationBar.jsx)[código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/categoryController.js#L97-L105)[código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/categoryController.js#L223-L230)     | Concluído
|  RF015                            |  Mostrar subcategorias da pesquisa por categorias(usuário)              |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/routes/ResultList.jsx)     | Concluído
|  RF016                            |  Mostrar subcategorias da pesquisa por categorias(usuário)              |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/routes/Tutorial.jsx)     | Concluído
|  RF017                            |  Mostrar subcategorias da pesquisa por categorias(usuário)              |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/routes/About.jsx)     | Concluído
|  RF018                            |  Mostrar subcategorias da pesquisa por categorias(usuário)              |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/routes/Login.jsx)     | Concluído
|  RF019                            |  Mostrar subcategorias da pesquisa por categorias(usuário)              |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/components/Panels/InstrumentManagerPanel.jsx)     | Concluído
|  RF020                            |  Mostrar subcategorias da pesquisa por categorias(usuário)              |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/components/Panels/InstrumentAddPanel.jsx)[código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/articleController.js#L10-L47)     | Concluído
|  RF021                            |  Mostrar subcategorias da pesquisa por categorias(usuário)              |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/components/Panels/InstrumentEditPanel.jsx)[código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/articleController.js#L149-L196)     | Concluído
|  RF022                            |  Mostrar subcategorias da pesquisa por categorias(usuário)              |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/backend/controllers/articleController.js#L198-L235)     | Concluído
|  RF023                            |  Mostrar subcategorias da pesquisa por categorias(usuário)              |  [código]()     | Concluído
|  RF024                            |  Mostrar subcategorias da pesquisa por categorias(usuário)              |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/components/Filter/SideFilter.jsx)[código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/routes/ResultList.jsx#L133-L151)     | Concluído
|  RF025                            |  Mostrar subcategorias da pesquisa por categorias(usuário)              |  [código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/routes/InstrumentDetail.jsx#L36-L52)[código](https://github.com/dantearaujo1/ihc-catalog/blob/0200b848e767d8c68193803aff424c5a22d59563/frontend/src/components/PageCard.jsx#L67-L120)     | Concluído

### Instruções


1. Clone o projeto em uma pasta de sua preferência.
2. Acesse a branch develop, é nela que encontram-se os arquivos necessários para rodar a aplicação

```git
git clone https://github.com/dantearaujo1/ihc-catalog && cd ihc-catalog
git checkout develop
```

2. Existem três maneiras para rodar a aplicação

##### Usando Batch Script da pasta dist (FORMA MAIS FÁCIL)

* Entre na pasta dist e execute o arquivo runWindows.bat, ele irá se
encarregar de executar os comandos e rodar os servidores.

##### Usando Docker

> **Será preciso ter o Docker instalado no seu computador**
* Primeiro, crie um build da imagem docker a partir do Dockerfile do repositório.

```bash
docker build -t ihc .
```

* Depois dê inicio ao seu container docker com o seguinte comando:

```bash
docker run -dp 5173:5173 ihc
```

* Basta acessar a aplicação

 &ensp; &ensp; &ensp; [Acesse a aplicação aqui](http://localhost:5173)

##### Usando Node Package Manager (NPM)

> **Tenha instalado a versão 18.11.0 ou superior do NodeJS**

* Entre na sua pasta raiz da pasta clonada e digite o seguinte comando:

```NodeJS
npm install
```

* Espere a instalação terminar e poderá rodá-la com o seguinte comando:

```NodeJS
npm run dev
```
* Basta acessar sua aplicação

 &ensp; &ensp; &ensp; [Acesse a aplicação aqui](http://localhost:5173)


### Estrutura de Pastas

```bash.
.
|-- .dockerignore
|-- .gitignore
|-- Dockerfile
|-- README.md
|-- backend
|   |-- .env
|   |-- app.js
|   |-- articleXsub.json
|   |-- controllers
|   |   |-- articleController.js
|   |   |-- categoryController.js
|   |   `-- userController.js
|   |-- dataa.json
|   |-- models
|   |   |-- Article.js
|   |   |-- Category.js
|   |   |-- Group.js
|   |   `-- User.js
|   |-- package-lock.json
|   |-- package.json
|   |-- routes
|   |   |-- articleRoutes.js
|   |   |-- categoryRoutes.js
|   |   `-- loginRoutes.js
|   |-- sanitized_data.json
|   `-- scratch.js
|-- frontend
|   |-- index.html
|   |-- package-lock.json
|   |-- package.json
|   |-- public
|   |   `-- vite.svg
|   |-- src
|   |   |-- App.css
|   |   |-- App.jsx
|   |   |-- assets
|   |   |   |-- ComponentStyle.jsx
|   |   |   |-- react.svg
|   |   |   `-- themes.jsx
|   |   |-- components
|   |   |   |-- ArticleCard.jsx
|   |   |   |-- Filter
|   |   |   |   `-- TagSelect.jsx
|   |   |   |-- GroupBadge.jsx
|   |   |   |-- Modals
|   |   |   |   `-- InstrumentAdd.jsx
|   |   |   `-- Navigation
|   |   |       |-- InstrumentManager.jsx
|   |   |       |-- NavigationBar.jsx
|   |   |       |-- NavigationHeader.jsx
|   |   |       `-- SuggestionList.jsx
|   |   |-- index.css
|   |   |-- main.jsx
|   |   `-- routes
|   |       |-- Admin.jsx
|   |       |-- Home.jsx
|   |       |-- InstrumentDetail.jsx
|   |       |-- Login.jsx
|   |       |-- ResultList.jsx
|   |       `-- routes.jsx
|   `-- vite.config.js
|-- logs
|-- package-lock.json
|-- package.json
|-- scrathfile.json
`-- todo.norg

```

