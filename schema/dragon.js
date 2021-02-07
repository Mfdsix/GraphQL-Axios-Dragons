const dragonQuery = require("../query/dragon")
const { GraphQLSchema } = require("graphql")

const dragon = new GraphQLSchema({
    query: dragonQuery
})

module.exports = dragon