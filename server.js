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


app.post('/swipeIn', function (req, res) {

	res.send("Valar Dohaeris");
 	var row = [];
 	console.log(req.body)
 	row.push(req.body.ID);
 	row.push(req.body.lat);
 	row.push(req.body.long);
 	row.push(getTime())
 	console.log(row);
 	xls.postToExcel(1,row);
})

app.post('/swipeOut', function (req, res) {

	res.send("Valar Morghulis");
 	var row = [];
 	console.log(req.body)
 	row.push(req.body.ID);
 	row.push(req.body.lat);
 	row.push(req.body.long);
 	row.push(getTime())
 	console.log(row);
 	xls.postToExcel(2,row);
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

function getTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    return hour + ":" + min + ":" + sec;

}