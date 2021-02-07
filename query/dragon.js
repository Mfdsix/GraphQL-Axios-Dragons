const dragonModel = require("../model/dragon")
const dragonReqs = require("../request/dragon")
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull } = require("graphql")

const dragon = new GraphQLObjectType({
    name: "DragonQuery",
    description: "Dragon Query",
    fields: {
        dragons: {
            type: new GraphQLList(dragonModel),
            resolve: async () => await dragonReqs.getAll()
        },
        dragon: {
            type: dragonModel,
            args: {
                id: {
                    type: GraphQLNonNull(GraphQLString)
                }
            },
            resolve: async(_, args) => await dragonReqs.getOne(args.id)
        }
    }
})

module.exports = dragon