# GQL Sandbox

A safe place to explore new-to-me technologies and share with team. 

## Goals

- Using [Nest.js](https://nestjs.com/), create single Graphql endpoint for multiple data sources. 
- Run Graphql API as AWS Lambda with [serverless](https://www.serverless.com/) framework.
- Research DX of CRUD operations using [Apollo Client](https://www.apollographql.com/) in React app.
- Try out [Prisma ORM](https://www.prisma.io/)
- Write script for sharing generated TypeScript interfaces with client. Shouldnt have to write GQL Schema / Types multiple times.


## Starting Demo

In separate shells:

`cd grapql-api && npm install && npm run start:dev`

`cd mock-service && npm install && npm start`

`cd mock-service-02 && npm install && npm start`

`cd client/ && npm install && npm start`


### Graphql Playground GUI

[http://localhost:3000/graphql](http://localhost:3000/graphql)

### Mock Service 01

[http://localhost:3001/](http://localhost:3001/)

### Mock Service 02

[http://localhost:3002/](http://localhost:3002/)

### Client/React App

[http://localhost:3003/](http://localhost:3003/)
