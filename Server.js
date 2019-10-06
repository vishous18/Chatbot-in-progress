var express = require("express")
var app = express()

app.use(express.static(__dirname))

var messages = [

    {name :"ADB", message :"Yello"},
    {name :"JAX", message :"Ciao"}

]

app.get('/messages', (req,res)=>{

    res.send(messages)

})

var server = app.listen(3010 , ()=> {


    console.log("IT'S ALIVE v2.0",server.address().port)
})

