    const express = require('express')
    const axios = require('axios')
    const { addComment, editComment, deleteComment } = require('./cardController')
    const cC = require('./cardController')
    const app = express()

    app.use(express.json())
    app.use(express.static(__dirname+'../../public'))

    

    const api='/api/cards'
    const apiCardId= '/api/cards/:card_id'
    app.get(api, cC.getLastCards)
    app.get(api+"/all", cC.getCards)
    app.post(api, cC.addCard)
    app.put(apiCardId,cC.editCard)
    app.delete(apiCardId,cC.deleteCard)
    app.post(apiCardId+'/comments',addComment)
    app.put(apiCardId+'/comments/:com_id',editComment)
    app.delete(apiCardId+'/comments/:com_id',deleteComment)

    const SERVER_PORT = 5000

    app.listen(SERVER_PORT,()=>console.log("Server balling on port 5000! (●＾o＾●)"))



