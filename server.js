const express = require('express')
const GraphQL = require('express-graphql').graphqlHTTP
const {
GraphQLSchema,
GraphQLObjectType,
GraphQLString,
} = require('graphql')
const app = express()
const schema = new GraphQLSchema({
query:new GraphQLObjectType({
name: 'HelloWorld',
fields: ()=>(
{
message: {
type: GraphQLString,
resolve: ()=> "Hello World"
}

})
})
})
// start the server with GraphQL
app.use('/',GraphQL({
schema:schema,
graphiql:true
}))
const PORT = 8080
app.listen(PORT,()=> console.log('GraphQL Server is Running!'))