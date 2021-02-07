const axios = require("axios")

const dragon = {
    getAll: async () => {
        try{
            let req = await axios("https://api.spacexdata.com/v4/dragons")
            return req.data
        }catch(e){
            console.log(e)
            return []
        }
    },
    getOne: async(id) => {
        try{
            let req = await axios("https://api.spacexdata.com/v4/dragons/" + id)
            return req.data
        }catch(e){
            console.log(e)
            return null
        }
    }
}

module.exports = dragon