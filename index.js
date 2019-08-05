var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/data', function (req, res) {
    res.json({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    });
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})