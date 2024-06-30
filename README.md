# Aplicação cadastro de clientes

![GitHub](https://img.shields.io/github/license/jeferson-guimaraes/cadastro-clientes)

## Sobre o projeto

Este projeto foi desenvolvido junto as videos aulas: [Criando API completa com NODEJS + TypeScript e MongoDB #backaofront 01](https://www.youtube.com/watch?v=XuTfN_84rcU&ab_channel=Sujeitoprogramador) e [Criando projeto do Backend ao Frontend com React JS + TypeScript #backaofront 02](https://www.youtube.com/watch?v=JlYrbEBZ3PE&t=0s&ab_channel=Sujeitoprogramador) do **Matheus Fraga**. Participei destas aulas com intuíto de conhecer melhor as tecnologias utilizadas.

Este projeto consiste em uma aplicação de cadastro de clientes com funcionalidades de cadastrar, listar e deletar clientes. O backend foi desenvolvido em Node.js utilizando MongoDB para persistência de dados. O frontend foi criado utilizando React com Vite, Tailwind CSS e Axios para fazer requisições à API do backend.

```
/
├── backend/
|   ├── prisma/
│   |   ├── schema.prisma
│   ├── src/
│   |   ├── controllers/
|   │   |   ├── CreateCustomerController.ts
|   │   |   ├── DeleteCustomerController.ts
|   │   |   ├── ListCustomerController.ts
│   |   ├── prisma/
|   │   |   ├── index.ts
│   |   ├── service/
|   │   |   ├── CreateCustomerService.ts
|   │   |   ├── DeleteCustomerService.ts
|   │   |   ├── ListCustomerService.ts
│   |   ├── routes.ts
│   |   ├── server.ts
│   ├── .env
│   ├── package.json
│   ├── tsconfig.json
├── frontend/
│   ├── public/
|   │   ├── vite.svg
│   ├── src/
│   │   ├── services/
|   |   │   ├── api.ts
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   ├── index.html
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── package.json
├── README.md
```

### Funcionalidades

* Cadastrar novos clientes
* Listar todos os clientes
* Deletar clientes

### Tecnologias utilizadas

#### Backend

* Node.js
* Fastify
* MongoDB
* Prisma
* Dotenv
* TypeScript

#### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* TypeScript

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/pt)

Além disso, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).

### Como executar o projeto

#### 1. Clone o repositório
```
git clone https://github.com/jeferson-guimaraes/cadastro-clientes.git
```

#### 2. Acesse o diretório do projeto
```
cd cadastro-clientes/backend
```

#### 3. Instale as dependências
```
npm install
```

#### 4. Configure as variáveis de ambiente
Renomeie o arquivo _.env-exemple_ para _.env_ e coloque a URL da conexão com seu banco de dados MongoDB

>**Obs:** Pode ser preciso inserir o nome do banco de dados entre a '/' e o '?' após 'mongodb.net' na URL fornecida pelo MongoDB. Ex:
``` mongodb+srv://<user-name>:<passwrod>@<db-name>.qfy4xz1.mongodb.net/<inserir-db-name>?retryWrites=true&w=majority&appName=<db-name> ```

```
DATABASE_URL=your_database_url_here
```

#### 5. Gere o prisma client
```
npx prisma generate
```

#### 5. Execute o backend
```
npm run dev
```

#### 6. Acesse o diretório do frontend
```
cd ../frontend
```

#### 7. Acesse o diretório do frontend em outro terminal
```
cd cadastro-clientes/frontend
```

#### 8. Instale as dependências
```
npm install
```

#### 9. Execute o frontend
```
npm run dev
```

### Endpoints da API

#### Cadastrar Cliente
```
POST /customer
```
##### Body:
```
{
    "name": "Nome do Cliente",
    "email": "email@cliente.com",
}
```

##### Resposta:
```
{
    "id": "iddocliente",
    "name": "Nome do Cliente",
    "email": "email@cliente.com",
    "status": true,
    "created_at": "2024-06-30T16:14:34.014Z",
    "updated_at": "2024-06-30T16:14:34.014Z"
}
```

#### Listar Clientes
```
GET /customers
```
##### Resposta:
```
{
    "id": "iddocliente",
    "name": "Nome do Cliente",
    "email": "email@cliente.com",
    "status": true,
    "created_at": "2024-06-30T16:14:34.014Z",
    "updated_at": "2024-06-30T16:14:34.014Z"
}
```

#### Deletar Cliente
```
DELETE /customer?id=:id
```
##### Query Parameter:
- `id`: ID do cliente a ser deletado

##### Resposta:
```
{
    "mensage": "Deletado com sucesso",
}
```