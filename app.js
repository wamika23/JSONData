function displayTable(){
    var data=[
        {
            "ID" : "1",
            "Name" :"Java",
            "Category" :"Languages",
            "Price" :"100"
        },
        {
            "ID" : "2",
            "Name" :"c++",
            "Category" :"Languages",
            "Price" :"200"
        },
        {
            "ID" : "3",
            "Name" :"Python",
            "Category" :"Languages",
            "Price" :"300",
            "Extra Key":"ABCD"
        }
    ]
    console.log("Length of array is: ",data.length);
    
    //extract html headers 
    var columns=[];
    for(var i=0;i<data.length;i++){
        for(var key in data[i]){
            if(columns.indexOf(key)===-1){
               columns.push(key);
            }
        }        
    }
    console.log("data in columns is: ",columns);
    console.log("length of columns is:",columns.length);
    //create table dynamically
    var table=document.createElement("table");
    
    //create html header row using extract headers above
    var tr=table.insertRow(-1);
    
    for(var i=0;i<columns.length;i++){
        var th=document.createElement("th");
        th.innerHTML=columns[i];
        tr.appendChild(th);
    }
    
    //add json data to table as rows
    for(var i=0;i<data.length;i++){
        tr=table.insertRow(-1);
        for(var j=0;j<columns.length;j++){
            var tableCell=tr.insertCell(-1);
            tableCell.innerHTML=data[i][columns[j]];
        }
    }
    
    
    var container=document.getElementById("myTable");
    container.innerHTML="";
    container.appendChild(table);
}