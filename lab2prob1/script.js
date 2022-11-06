function enterContact(){
  
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value

    console.log("this is the email => " + email )

    let error_div = document.getElementById("error");
    error_div.innerHTML = "";
    if(name == "" )
    {
        error_div.innerHTML = "Please fill in name " + "<br/>";
    }
    if(mobile == "" || mobile.length != 10){
        error_div.innerHTML = error_div.innerHTML + "Please fill in mobile " + "<br/>";
    }
    if(email == ""){
        error_div.innerHTML = error_div.innerHTML + "Please fill in email";
    }else{
        if (!(/^[a-z ,.'-]+$/i).test(name)){
            error_div.innerHTML = "name must be in correct format" + "<br/>";
        }
       
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            error_div.innerHTML = error_div.innerHTML + "Email must be in correct format"+ "<br/>";
        }
    }
    if(error_div.innerHTML == ""){
        let phone_dir = document.getElementById("phone_dir");

        let newRow = document.createElement("tr");
    
        let nameRow = document.createElement("td");
        let mobileRow = document.createElement("td");
        let emailRow = document.createElement("td");
    
        nameRow.innerHTML = name;
        mobileRow.innerHTML = mobile;
        emailRow.innerHTML = email;
    
        phone_dir.appendChild(newRow);
    
        newRow.appendChild(nameRow);
        newRow.appendChild(mobileRow);
        newRow.appendChild(emailRow);

    }

}

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("phone_dir");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) { 
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("phone_dir");
    switching = true;
    
    dir = "asc";
    
    while (switching) {
     
      switching = false;
      rows = table.rows;
      
      for (i = 1; i < (rows.length - 1); i++) {
        
        shouldSwitch = false;
      
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
       
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
           
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {

        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }