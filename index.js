const express = require('express')
const mysql = require('mysql')

const app = express()

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

// Route หลัก
app.get('/', function(req, res) {
    res.send('Hello World!')
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))