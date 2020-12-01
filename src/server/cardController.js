const cards = require('./data/data.json')

module.exports={
    getCards:(req,res)=>res.status(200).send(res.data),
    
}

