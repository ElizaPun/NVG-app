const express = require('express')
const router = express.Router()

router.get('/test',(request, response)=>{
    response.send("hello there I am Amos Pun")
})


module.exports  = router
