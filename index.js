const express = require('express')
const app = express()

app.get('/', function (req, res) {

    res.sendFile("views/index.html", { root: __dirname });
    
    });

app.listen(3000, ()=>{
    console.log('App running at port 3000 ....')
})