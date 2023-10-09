function validateForm() {

    if (document.Form.Name.value == "") {
       alert("Please provide your name!");
       document.Form.Name.focus();
       return false;
    }

    if (document.Form.mobilenumber.value == "") {
       alert("Please provide your first name!");
       document.Form.mobilenumber.focus();
       return false;
    }
    
    if (document.Form.mobilenumber.value == "") {
       alert("Please provide your mobile number");
       document.Form.mobilenumber.focus();
       return false;
    }

    if (document.Form.date.value == "") {
       alert("Please provide your date of dine In!");
       document.Form.date.focus();
       return false;
    }
    
    if (document.Form.time.value == "") {
       alert("Please provide your Time Of Visit!");
       document.Form.time.focus();
       return false;
    }
    
    if (document.Form.guest.value == "") {
       alert("Please provide Number of guests!");
       document.Form.guest.focus();
       return false;
    }
 
    alert("Great ! Thanks for your submission !! ");
    return false;
 
 }
 
 