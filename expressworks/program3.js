<<<<<<< HEAD
const express = require('express')
const app = express()

app.get('/search', function(req, res){
  const query = req.query
  res.send(query)
})

=======
const express = require('express')
const app = express()

app.get('/search', function(req, res){
  const query = req.query
  res.send(query)
})

>>>>>>> 896398106047ae73aa180e5ce935cd35d13f065b
app.listen(process.argv[2])