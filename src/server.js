var express = require('express');

var PORT = 8080;

var app = express();
app.get('/', function(req,res) {
  res.send('Hello World from Ani');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);