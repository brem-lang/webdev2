<<<<<<< HEAD
const express = require('express')
const app = express()

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));


=======
const express = require('express')
const app = express()

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));


>>>>>>> 896398106047ae73aa180e5ce935cd35d13f065b
app.listen(process.argv[2])