var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/list', function(req, res) {
    res.sendFile(path.join(__dirname + '/list.html'));
});

app.listen(3004);