
let hostname = "localhost"
let guser = "root"
let password = "nair27san"
let database = "attendance" 


module.exports = {
	swipeIn: function  (IMEI,LAT,LON,time,date){
		var mysql = require('mysql');

		var con = mysql.createConnection({
		  host: hostname,
		  user: guser,
		  password: password,
		  database: attendance
		});

		con.connect(function(err) {
		  if (err) throw err;
		  console.log("Connected!");
		  var sql = "INSERT INTO swipeIn (IMEI, LAT,LON,time,date) VALUES ("+
		  "\""+IMEI+"\""+
		  ","+
		  "\""+LAT+"\""
		  +","+
		  "\""+LON+"\""+
		  ","+"\""
		  +time+"\""+
		  ","+"\""
		  +date+"\""+
		  ");";
		  con.query(sql, function (err, result) {
		    if (err) throw err;
		    console.log("1 record inserted");
	  		});

		});
	},

	register: function(userName, IMEI){
		var resultant = 0 ;
		var mysql = require('mysql');

		var con = mysql.createConnection({
		  host: hostname,
		  user: guser,
		  password: password,
		  database: attendance
		});

		con.connect(function(err) {
		  if (err) throw err;
		  console.log("Connected!");
		  var sql = "INSERT INTO empl (IMEI, NAME) VALUES ("+
		  "\""+IMEI+"\""+
		  ","+
		  "\""+userName+"\""+
		  ");";
		  con.query(sql, function (err, result) {
		    if (err) {
		    	console.log(err);
		    	resultant = -1;
		    }
		    else{
		    	console.log(result);	
		    	resultant = 1;
		    }
		    
	  		});

		});
		return resultant;
	},

	getData: function(){

		
		

		var seq = function(){
				var mysql = require('mysql');
				var con = mysql.createConnection({
					host: hostname,
					user: guser,
					password: password,
					database: database
				});


			
				con.connect(function(err) {
					if (err) console.log(err);
					con.query("SELECT * FROM swipeIn;", function (err, result, fields) {
			 			if (err)  console.log(err);
			    		// console.log(result);
			    		return result;
			  		});
				});
		}

		
		
		return seq
		
	}
};

