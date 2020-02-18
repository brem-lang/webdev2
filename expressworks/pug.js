<<<<<<< HEAD
const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.set('views', process.argv[3])
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])
=======
const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.set('views', process.argv[3])
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])
>>>>>>> 896398106047ae73aa180e5ce935cd35d13f065b
