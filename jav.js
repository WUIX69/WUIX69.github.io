function add_Function() {
  var new_id = document.getElementById("new_id").value;
  var new_Fname = document.getElementById("new_Fname").value;
  var new_Lname = document.getElementById("new_Lname").value;
  var new_course = document.getElementById("new_course").value;

  var table = document.getElementById("allTable");
  var table_len = (table.rows.length)-1;
  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='id_row"+table_len+"'>"+new_id+"</td><td id='Fname_row"+table_len+"'>"+new_Fname+"</td><td id='Lname_row"+table_len+"'>"+new_Lname+"</td><td id='course_row"+table_len+"'>"+new_course+"</td></tr>";
  
  //Input reset to " " value, after adding
	document.getElementById("new_id").value="";
	document.getElementById("new_Fname").value="";
	document.getElementById("new_Lname").value="";
	document.getElementById("new_course").value="";
	
	alert("Successfully added!")
}

function edit_row(no)
{
 document.getElementById("eBtn"+no).style.display="none";
 document.getElementById("sBtn"+no).style.display="block";
	
 var ID=document.getElementById("Id_r"+no);
 var Name=document.getElementById("Name_r"+no);
 var Last=document.getElementById("Last_r"+no);
 var Course=document.getElementById("Course_r"+no);
	
 var ID_data=ID.innerHTML;	
 var Name_data=Name.innerHTML;
 var Last_data=Last.innerHTML;
 var Course_data=Course.innerHTML;
 
 ID.innerHTML="<input type='text' id='ID_text"+no+"' value='"+ID_data+"'>"; 
 Name.innerHTML="<input type='text' id='Name_text"+no+"' value='"+Name_data+"'>";
 Last.innerHTML="<input type='text' id='Last_text"+no+"' value='"+Last_data+"'>";
 Course.innerHTML="<input type='text' id='Course_text"+no+"' value='"+Course_data+"'>";
}

function save_row(no)
{
 var ID_val=document.getElementById("ID_text"+no).value;
 var Name_val=document.getElementById("Name_text"+no).value;
 var Last_val=document.getElementById("Last_text"+no).value;
 var Course_val=document.getElementById("Course_text"+no).value;

 document.getElementById("Id_r"+no).innerHTML=ID_val;
 document.getElementById("Name_r"+no).innerHTML=Name_val;
 document.getElementById("Last_r"+no).innerHTML=Last_val;
 document.getElementById("Course_r"+no).innerHTML=Course_val;

 document.getElementById("eBtn"+no).style.display="block";
 document.getElementById("sBtn"+no).style.display="none";
 
 alert("Successfully Saved!");
}

function del_function() {
  var index, table = document.getElementById("allTable");
  var table_reduce = (table.rows.length);
  
            for(var i = 1; i < table_reduce; i++)
            {
                table.rows[i].cells[4].onclick = function()
                {
                    var c = confirm("Do you want to delete this row, You can't undo this!");
                    if(c === true)
                    {
                        index = this.parentElement.rowIndex;
                        table.deleteRow(index);
                    }
                    
                    
                };
                
            }
	
}


