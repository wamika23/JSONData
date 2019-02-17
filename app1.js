const url = 'https://randomuser.me/api/?results=10';
var results;
function displayTable(){
     // const url = 'https://randomuser.me/api/?results=10'; 
      fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
          let res=data.results;
          results=res;
console.log("original data is",data);
       console.log("Length of array is: ",res.length);
    display(res);
        //extract html headers 
  
        }) 
      .catch(function(error) {
          alert("Error!!!!!!!!!!! Page Not Found");
        // If there is any error you will catch them here
      });
    //showButtons();
}
    
        function display(res){
        var columns=[];
		var innerColumns=[];
        for(var i=0;i<res.length;i++){
            for(var key in res[i]){
				if(key=='picture' || key=="location" ||key=="registered" || key=="phone" || key=="cell" || key=="id" || key=="nat"){
					continue;
				}
                if(columns.indexOf(key)===-1){
                   columns.push(key);
                }
            }        
        }
        console.log("data in columns is: ",columns);
        console.log("length of columns is:",columns.length);
        var table=document.createElement("table");
          table.setAttribute("id","myDisplayTable");
        var tr=document.createElement("tr");
        tr=table.insertRow(-1);
        for(var i=0;i<columns.length;i++){
            var th=document.createElement("th");
            th.innerHTML=columns[i];
            tr.appendChild(th);
            th.onclick=function(event){
                var x=event.srcElement.cellIndex;
                console.log("header clicked",x);
                sortingFunction(x);
            }
        }

		

          
              //add json data to table as rows
        for(var i=0;i<res.length;i++){
            tr=table.insertRow(-1);
            for(var j=0;j<columns.length;j++){
				//console.log("column is",columns[j]);
				var td=document.createElement("td");
                td=tr.insertCell(-1);
                //console.log("result i is: ",res[i]);
				//console.log("columns are--",columns[j]);
				//tableCell.innerHTML=res[i][columns[j]];
				
				if(typeof res[i][columns[j]] === 'object'){
					var innerData=res[i][columns[j]];
					if(columns[j]=== 'name'){
						td.innerHTML=innerData.first+" "+innerData.last;
						//console.log("hi this is my nme-",name.first+" "+columns[j].last);
					}
					if(columns[j]=== 'location'){
						td.innerHTML=innerData.street+","+innerData.city+","+innerData.state+","+innerData.postcode;
					}
					if(columns[j]=== 'login'){
						td.innerHTML=innerData.username;
					}
					if(columns[j]=== 'dob'){
						td.innerHTML=innerData.date;
					}
					if(columns[j]=== 'registered'){
						td.innerHTML=innerData.date;
					}
					if(columns[j]=== 'id'){
						td.innerHTML=innerData.value;
					} 
					//else {
					//	alert("Please check for ");
					//}			
				}
				
				else if(typeof res[i][columns[j]] !== 'object'){		
				td.innerHTML=res[i][columns[j]];
				}
				
            }
            
        }
            var container=document.getElementById("myTable");
            container.innerHTML="";
            container.appendChild(table);
            //container.appendChild(showMales);
          }
        
function sortingFunction(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myDisplayTable");
    //console.log("table is",table);
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
      //console.log("rows are",rows);
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


function filterFunction(value){
    var compare;
   /* var table=document.getElementById("myDisplayTable");
    //console.log("table is:",table);
    var rows=document.getElementsByTagName("TR");
    var column;
   
    
    console.log("number of rows",rows.length);
    console.log("rows are",rows);
    //console.log("rows are",rows);
    var headers=document.getElementsByTagName("TH");
    for(var i=0;i<headers.length;i++){
        if(headers[i].innerHTML==="gender"){
           column=i;
            console.log("column of gender",i);
           }
         //console.log("headers are",typeof headers[i]);         
    }
    
    console.log("value of columns is",column);
    for(var i=1;i<rows.length;i++){
        var value=table.rows[i].cells[column].innerHTML;
        console.log("value is",value);
        if(value==="male"){"
           console.log("row having male is",i);
           }
        //console.log("resukt s",results);
      
}*/  
    if(value===0){
        compare="male";
       }else{
       compare="female";
       }
    console.log("type of compare",typeof coompare);
    document.getElementById("myDisplayTable").style.display="none";
    console.log("resut is",results);
    console.log("i type",results.length);
    var x=0;
    var filteredResult=[];
      for(var i=0;i<results.length;i++){
          console.log("inside loop");
            if(results[i].gender===compare){
            //   console.log("male find,column is:",results[i]);
               filteredResult[x]=results[i];
                x++;
                //console.log("filtered res is:",filteredResult);
               }
        }
     console.log("fiktered males are",filteredResult);
    display(filteredResult);
}
