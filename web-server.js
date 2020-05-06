const express = require('express')
const app = express()
const port = 8080

app.set('trust proxy', '127.0.0.1');
app.get('/', function (req, res) {
 console.log(req.headers)
 
 res.send('Hello World!\n')
 })
app.listen(port, () => console.log(`Example app listening on port ${port}!\n`))
