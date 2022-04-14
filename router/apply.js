const express = require('express')
const mysql = require('mysql')
const router = express.Router()

router.post("/", (req, res)=>{
    var con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"WORLDMISSION"
    })
    con.connect(function(err){
        if(err)throw err;
        console.log("database connected")
        var first = req.body.firstname
        var last = req.body.lastname
        var phone = req.body.phone
        var gender = req.body.gender
        var study = req.body.study
        var sql = "INSERT INTO newapply(firstname, lastname, phone,gender, study) VALUES(?,?,?,?,?)";
    con.query(sql, [first,last,phone,gender,study], function(err, result){
        if(err) throw err;
        console.log(`data inserted: ${result.affectedRows}`)
        res.send("<h1>DATA IS SAVED BRO WANGE</h1>")
    })
    })
})





module.exports = router