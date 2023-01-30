var express = require('express');
var apka = express();
let port = 5500;

let parser = require("body-parser")
apka.use(parser.text())
apka.use(parser.json())

apka.get("/przywitanie",(request,response)=>{
  response.send(":D")
})

apka.post("/przywitanie",(request,response)=>{
  response.json("Witam, Twoje imie to:"+request.body.username)
})
apka.listen(port)
console.log("Serwer działa")