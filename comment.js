// Create web server

// Import modules
var express = require('express');
var app = express();

// Create web server
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
});

// Set static file directory
app.use(express.static('public'));

// Set routing
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/main.html');
});

// Set routing
app.get('/main', function(req, res){
    res.sendFile(__dirname + '/public/main.html');
});

// Set routing
app.get('/main', function(req, res){
    res.sendFile(__dirname + '/public/main.html');
});

// Set routing
app.get('/main', function(req, res){
    res.sendFile(__dirname + '/public/main.html');
});

// Set routing
app.get('/main', function(req, res){
    res.sendFile(__dirname + '/public/main.html');
});

// Set routing
app.get('/main', function(req, res){
    res.sendFile(__dirname + '/public/main.html');
});

// Set routing
app.get('/main', function(req, res){
    res.sendFile(__dirname + '/public/main.html');
});

// Set routing
app.get('/main', function(req, res){
    res.sendFile(__dirname + '/public/main.html');
});
// Import modules