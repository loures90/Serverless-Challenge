# Serverless-Challenge
O desafio proposto é provisionar uma infraestrutura na AWS, em que se tenha uma lambda que seja capaz de registrar em um banco de dados relacional ou não relacional, dados sobre funcionários de uma empresa.


## Resultado
Foi desenvolvido o backend de uma aplicação NodeJS que cria, recupera, deleta e atualiza os dados de uma tabela Employee de uma Empresa fictícia.

A linguagem de programação do projeto é Typescript, utilizou-se as bibliotecas Express para gerenciar requisições http, knex para conectar ao banco de dados MySql, uuid para gerar ids, jest para realização de testes unitários entre outras.

O TDD foi realizado apenas pasta business do projeto, ou seja atuando nas regras de negócio do projeto.

### Rotas criadas
#### Recuperra todos os Empregados
GET http://localhost:3003/employee/

#### Recuperra todos os Empregados
GET http://localhost:3003/employee/:id
#### Recuperra um empregado a partir do id
PATCH http://localhost:3003/employee/:id
#### Cria um novo empregado
POST http://localhost:3003/employee/
#### Deleta um empregado a partir do id
DELETE http://localhost:3003/employee/:id