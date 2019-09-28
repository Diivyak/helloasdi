const express = require('express')
const app = express()
const port = 5000

var java = require('java');
console.log("in testing111");
var javaLangSystem = java.import('java.lang.System');

javaLangSystem.out.printlnSync('Hello World');


app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(__dirname+'/public/views/index.html'))
app.get('/generic', (req, res) => res.sendFile(__dirname+'/public/views/generic.html'))
app.get('/elements', (req, res) => res.sendFile(__dirname+'/public/views/elements.html'))

app.get('/welcome', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
