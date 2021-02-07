const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLFloat } = require("graphql")

const dragon = new GraphQLObjectType({
    name: "DragonModel",
    description: "Dragon Model",
    fields: {
        id: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        type: {
            type: GraphQLString,
        },
        active: {
            type: GraphQLBoolean,
        },
        dryMassKg: {
            type: GraphQLFloat,
            resolve: (data) => data.dry_mass_kg,
        },
        dryMassLb: {
            type: GraphQLFloat,
            resolve: (data) => data.dry_mass_lb,
        },
        firstFlight: {
            type: GraphQLString,
            resolve: (data) => data.first_flight,
        }
    }
})

module.exports = dragon