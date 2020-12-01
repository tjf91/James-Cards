    const express = require('express')
    const app = express()

    app.use(express.json())
    app.use(express.static(__dirname+'../../public'))



    const SERVER_PORT = 5000

    app.listen(SERVER_PORT,()=>console.log("Serving balling on port 5000! (●＾o＾●)"))



