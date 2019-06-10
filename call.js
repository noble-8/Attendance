
let hostname = "localhost"
let guser = "root"
let password = "nair27san"
let database = "attendance" 

var mysql = require('mysql');
var con = mysql.createConnection({
	host: hostname,
	user: guser,
	password: password,
	database: database
});


			
var x = con.connect(function(err) {
			if (err) console.log(err);
			con.query("SELECT * FROM swipeIn;", function (err, result, fields) {
			if (err)  console.log(err);
			// console.log(result);
			return result;
			});
		});

console.log(x);