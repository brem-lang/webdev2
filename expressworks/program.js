<<<<<<< HEAD
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})

=======
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})

>>>>>>> 896398106047ae73aa180e5ce935cd35d13f065b
app.listen(process.argv[2])