var express = require('express');
var router = express();
let port = 3000;

let parser = require("body-parser")
router.use(parser.text())
router.use(parser.json())

router.get("/przywitanie",(request,response)=>{
  response.send(":D")
})

router.post("/przywitanie",(request,response)=>{
  response.json("Witam, Twoje imie to:"+request.body.username)
})
router.listen(port)
console.log("Serwer działa")