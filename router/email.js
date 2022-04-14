const express = require('express')
const router = express.Router()
const mysql = require('mysql')
var nodemailer = require('nodemailer');


router.post("/email", function(req, res){
    if(req.body.email == 'worldmission@tvet' || req.body.email == 'WORLDMISSION@TVET'){
      var con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'WORLDMISSION'
      })
      con.connect(function(err){
        if(err) throw err;
        console.log("database connected!!!")
        var sql = "SELECT * FROM newapply";
      con.query(sql, function(err, result, fields){
        if(err){
          console.log("there is any erro: " + err)
        }else{
          res.render("dashboard", ({result}))
        }
      })
      })
        
    }else{
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'airaning250@gmail.com',
              pass: ''
            }
          });
          
          var mailOptions = {
            from: 'airaning250@gmail.com',
            to: `${req.body.email}`,
            subject: 'FROM WORLD MISSION WEBSITE',
            text: 'HELLO thank you for visiting our website if you need school WELCOME call us on 0788990919'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              res.send("<h3>something went wrong ???</h1>")
            } else {
              console.log('Email sent: ' + info.response);
            }
          }); 
    }
});

module.exports = router