function displayTable(){
      const url = 'https://randomuser.me/api/?results=10'; 
      fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
          let res=data.results;

       console.log("Length of array is: ",res.length);
    
        //extract html headers 
        var columns=[];
        for(var i=0;i<res.length;i++){
            for(var key in res[i]){
                if(columns.indexOf(key)===-1){
                   columns.push(key);
                }
            }        
        }
        console.log("data in columns is: ",columns);
        console.log("length of columns is:",columns.length);
        var table=document.createElement("table");
        var tr=table.insertRow(-1);
        for(var i=0;i<columns.length;i++){
            var th=document.createElement("th");
            th.innerHTML=columns[i];
            tr.appendChild(th);
        }
          
              //add json data to table as rows
        for(var i=0;i<res.length;i++){
            tr=table.insertRow(-1);
            for(var j=0;j<columns.length;j++){
                var tableCell=tr.insertCell(-1);
                tableCell.innerHTML=res[i][columns[j]];
            }
        }
            var container=document.getElementById("myTable");
            container.innerHTML="";
            container.appendChild(table);
        })
      
      
      .catch(function(error) {
          alert("Error!!!!!!!!!!! Page Not Found");
        // If there is any error you will catch them here
      });
      
}