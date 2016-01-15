var http = require('http');
var url = require('url');
var timeCheck = require('./timeCheck.js');


var server = http.createServer(function(request, response){
    
    response.writeHead(200,{ 'Content-Type': 'application/json' });
    
    var parsedUrl = url.parse(request.url,true);
    var timeString = parsedUrl.path.replace('/','').replace(/%20/g,' ');
    
    response.end(JSON.stringify(timeCheck(timeString)));
});

var port = process.env.PORT || 8080;
server.listen(port);