const express = require('express');
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs")
port = process.env.port || 3000







const apply = require('./router/apply')
app.post("/", apply)
const email = require('./router/email')
app.post("/email", email)
app.listen(port)

//save data to database end!!!
//retrieve data from database end!!
//add css and js to ejs file end!!!
//save uploaded file location to database end!!!
//change name of uploaded 
//loop through result in ejs ???
//show new data in table dynamical ???