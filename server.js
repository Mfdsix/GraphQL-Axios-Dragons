const express = require("express")
const {
    graphqlHTTP
} = require("express-graphql")
const dragonSchema = require("./schema/dragon")
const app = express()
const cors = require("cors")

app.use(cors)
app.use("/dragons", graphqlHTTP({
    schema: dragonSchema,
    graphiql: true,
}))

app.listen(5000., () => {
    console.log("Server Running ...")
})