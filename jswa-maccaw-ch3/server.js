var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

var users = [];

app.get('/api/user', function(req, res) {
  res.send(users);
});

app.post('/api/user', function(req, res) {
  console.log('posted', req.body);
  users.push(req.body);
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log('Listening on port 3000.');
});
