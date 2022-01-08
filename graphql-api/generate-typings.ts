import { GraphQLDefinitionsFactory } from '@nestjs/graphql';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: ['graphql-api/src/**/*.graphql'],
    path: 'graphql-api/src/graphql.ts',
    emitTypenameField: false
}).then(() => {
    console.log('typings generated...')
})
