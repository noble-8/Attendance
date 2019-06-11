/*$.getJSON('http://192.168.1.8:8081/DataIN', function(data) {
        
        var text = data;
        console.log(text[0])
        $(".mypanel1").html(text[0].NAME);
        $(".mypanel2").html(text[0].DATE);
    });*/

//null is where the rew goes

    $.post('http://192.168.1.8:8081/DataIN',null, function(data) {
    	
        console.log(data[0])
        addRow("my-table",data)
        // $(".mypanel1").html(text[0].NAME);
        // $(".mypanel2").html(text[0].DATE);
}, 'json');

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
  	newText = document.createTextNode(data[i].DATE);
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
  }
}

/*
function addRow(tableID) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);

  // Append a text node to the cell
  let newText = document.createTextNode('New bottom row');
  newCell.appendChild(newText);
}*/
