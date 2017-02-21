/**
 * Created by 1609963 on 21/02/2017.
 */
var express = require('express'),
    app = express(),
    server = require('http').createServer(app);
app.use(express.static(__dirname + '/public'));
server.listen(8080);
app.get('/', function(req, res){
    console.log('index file requested')
    res.sendFile(__dirname+ '/views/index.html');
}); 