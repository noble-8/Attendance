// Excel xlFilePath="D:\\DataFiles\\SampleExcel.xlsx"
// function editExistingFile(xlFilePath) {
//     var Excel = require("exceljs");// load exceljs module
//     var workbook = new Excel.Workbook();
//     //Read xlsx file and use then fuction to handle promise before executing next step
//     workbook.xlsx.readFile(xlFilePath).then(function () {
//     	//check here
//         var worksheet = workbook.getWorksheet("Sheet 1");
//         //Use nested iterator to read cell in rows 
//         //First iterator for finding row
//         worksheet.eachRow(function (row, rowID) {
//             console.log("Current Row:" + rowID);
//             //Second iterator to read data from cell in row
//             row.eachCell(function (cell, colID) {
//                 //print row number, column number and cell value at[row][col]
//                 console.log("Cell Value=" + cell.value + " for cell [" + rowID + "]" + "[" + colID + "]");              
//                 //condition to modify row and col data
//                if(rowID>1 && colID==3){
//                 cell.value="New Result for OLDW";
//                }

//             });
//         });
//         workbook.xlsx.writeFile(xlFilePath);
//     });
// }


module.exports = {
	postToExcel: function(sheetnumber,row){
		var xlFilePath="/Users/santhosh/Documents/Akash's workspace/data.xlsx";
		var Excel = require("exceljs");
		var workbook = new Excel.Workbook();
		workbook.xlsx.readFile(xlFilePath)
		.then(function()  {
			//constant value here for the sheet ...
			var worksheet = workbook.getWorksheet(sheetnumber);
			var lastRow = worksheet.lastRow;
			var i=0;
			for(i=0;i<row.length;i++){

				var getRowInsert = worksheet.getRow(++(lastRow.number));
				//constant value for column here ...
				getRowInsert.getCell(1+i).value = row[i];
				getRowInsert.commit();
			}
			
			return workbook.xlsx.writeFile(xlFilePath);
		});
	}
};

