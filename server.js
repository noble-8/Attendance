var express = require('express');
// var xls = require("./xls.js");
var mysql = require("./mysql.js")
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
	res.redirect('/SignIn');
})


app.post('/http://www.eseskayprojects.com/attendance/swipeIn', function (req, res) {

	res.send("Valar Dohaeris");
 	var row = [];
 	console.log(req.body)
 	row.push(req.body.ID);
 	row.push(req.body.lat);
 	row.push(req.body.long);
 	row.push(getTime())
 	console.log(row);
 	// xls.postToExcel(1,row);
 	mysql.swipeIn(req.body.ID,req.body.lat,req.body.long,getTime());
})

app.post('/http://www.eseskayprojects.com/attendance/register', function (req, res) {


	// 
	// 
	// 
	// add code here from below
})


//delete this
//
//
//
app.post('/register', function (req, res) {

	
 	var row = [];
 	console.log(req.body)
 	row.push(req.body.Name);
 	row.push(req.body.IMEI);
 	console.log(row);
	var query = mysql.register(req.body.Name,req.body.IMEI);
	if(query==1){
		res.send("Registered successfully");
	}
	else{
		res.send("error");
	}
})


app.post('http://www.eseskayprojects.com/attendance/swipeOut', function (req, res) {

	res.send("Valar Morghulis");
 	var row = [];
 	console.log(req.body)
 	row.push(req.body.ID);
 	row.push(req.body.lat);
 	row.push(req.body.long);
 	row.push(getTime())
 	console.log(row);
 	// xls.postToExcel(2,row);
})

// copy code here
//
//
//
app.get('/http://www.eseskayprojects.com/attendance/SignIn', function (req, res) {

	
})

//delete this
//
//
//


app.get('/Data', function (req, res) {
	res.sendFile('Data.html', {root: __dirname });
})


app.get('/test', function (req, res) {
	console.log(mysql.getData().con);
})


app.get('/SignIn', function (req, res) {
	res.sendFile('SignIn.html', {root: __dirname });
})



app.post('/SignIn', function (req, res) {

	console.log(req.body);
	
	if(req.body.uname=="snehal" && req.body.psw=="ssk"){
		res.redirect('/Data');
	}
	else {
		res.redirect('/SignIn');
	}
})
// 
// 
// 
// 
// 
// 
// 
// delete till here

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
function getDate() {

    var date = new Date();

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    
    return day + ":" + month + ":" + year;

}
