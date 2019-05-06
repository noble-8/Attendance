var express = require('express');
var xls = require("./xls.js");
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());



app.get('/', function (req, res) {
	res.send('Hello World');
	console.log(req.rawHeaders);
	xls.postToExcel(1,req.rawHeaders);
})


app.post('/', function (req, res) {

	res.send('This shit is working maaanzs\n');
 	var row = [];
 	console.log(req.body)
 	// row.push(req.body.username);
 	// row.push(req.body.pwd);
 	// console.log(row);
 	// xls.postToExcel(1,row);
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})