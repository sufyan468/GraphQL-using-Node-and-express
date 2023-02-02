const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const expressGraphQL = require('express-graphql').graphqlHTTP
const {GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const app = express();
const port = 5000

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'query',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Hello World',
      },
    })
  })
})

app.use('/graphql', expressGraphQL({
  graphiql: true,
  schema: schema
}))

app.listen(port, () => console.log(`listening on port ${port}`));
