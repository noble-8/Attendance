/*$.getJSON('http://192.168.1.8:8081/DataIN', function(data) {
        
        var text = data;
        console.log(text[0])
        $(".mypanel1").html(text[0].NAME);
        $(".mypanel2").html(text[0].DATE);
    });*/

//null is where the rew goes

$.post('http://192.168.1.8:8081/DataIN',null, function(data) {
    	
        // console.log(data[0])
        // var date1dayBefore = getDateBefore(5);
        // var filtered_data = data.filter(istheSameDate);
        var filtered_data_yesterday = data.filter(data => data.DATE == getDateBefore(4));
        addRow("day",filtered_data_yesterday)
        var filtered_data_day_before = data.filter(data => data.DATE == getDateBefore(5));
        addRow("yest",filtered_data_day_before)
        // addRow
        // $(".mypanel1").html(text[0].NAME);
        // $(".mypanel2").html(text[0].DATE);
}, 'json');


$.post('http://192.168.1.8:8081/DataOUT',null, function(data) {
    	
        // console.log(data[0])
        // var date1dayBefore = getDateBefore(5);
        // var filtered_data = data.filter(istheSameDate);
        var filtered_data_yesterday = data.filter(data => data.DATE == getDateBefore(4));
        addRow("dayout",filtered_data_yesterday)
        var filtered_data_day_before = data.filter(data => data.DATE == getDateBefore(5));
        addRow("yestout",filtered_data_day_before)
        // addRow
        // $(".mypanel1").html(text[0].NAME);
        // $(".mypanel2").html(text[0].DATE);
}, 'json');



function istheSameDate(date1){
	return date1.DATE == getDateBefore(1);
}
function addRow(tableID,data) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);

  
  var n = data.length;
  var i=0
  for(i=0;i<n;i++){
  	// Insert a row at the end of the table
  	let newRow = tableRef.insertRow(-1);
  	
  	var j=0;
  	// Insert a cell in the row at index 0
  	let newCell = newRow.insertCell(j);
  	// Append a text node to the cell
  	let newText = document.createTextNode(data[i].NAME);
  	newCell.appendChild(newText);

  	j++;
  	newCell = newRow.insertCell(j);
  	newText = document.createTextNode(data[i].LAT);
  	newCell.appendChild(newText);

    j++;
    newCell = newRow.insertCell(j);
    newText = document.createTextNode(data[i].LON);
    newCell.appendChild(newText);

    j++;
    newCell = newRow.insertCell(j);
    newText = document.createTextNode(data[i].TIME);
    newCell.appendChild(newText);

    j++;
    newCell = newRow.insertCell(j);
    newText = document.createTextNode(data[i].DATE);
    newCell.appendChild(newText);
  }
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

function getDateBefore(x) {

    var date = new Date();

    date.setDate(date.getDate()-x);

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    
    return day + ":" + month + ":" + year;

}

