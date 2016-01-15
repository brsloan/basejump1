/*
'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

var app = express();
require('dotenv').load();
require('./app/config/passport')(passport);

mongoose.connect(process.env.MONGO_URI);

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/common', express.static(process.cwd() + '/app/common'));

app.use(session({
	secret: 'secretClementine',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
*/

var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
    
    response.writeHead(200,{ 'Content-Type': 'application/json' });
    
    var parsedUrl = url.parse(request.url,true);
    var timeString = parsedUrl.path.replace('/','').replace(/%20/g,' ');
    
    response.end(JSON.stringify(timeCheck(timeString)));
});

var port = process.env.PORT || 8080;
server.listen(port);

function timeCheck(str){
    var date = Date.parse(str);
    if(date && isNaN(str))
        return { unix: date, natural: str };
    else if(parseInt(str)){
        date = new Date(parseInt(str));
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var natural = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
        return { unix: parseInt(str), natural: natural };    
    }
    else
        return {unix: null, natural: null };
}