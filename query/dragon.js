const dragonModel = require("../model/dragon")
const dragonReqs = require("../request/dragon")
const { GraphQLObjectType, GraphQLList } = require("graphql")

const dragon = new GraphQLObjectType({
    name: "DragonQuery",
    description: "Dragon Query",
    fields: {
        dragons: {
            type: new GraphQLList(dragonModel),
            resolve: async () => await dragonReqs.getAll()
        }
    }
})

module.exports = dragon