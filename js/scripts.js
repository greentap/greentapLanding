var mCheck = false; 
var userEmail; 

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	mCheck = true; 
}

function email(){
	if(mCheck){
		window.location="mailto:me@tash-had.com"; 
	}
	else{
		window.prompt("Press Ctrl+C to Copy", "me@tash-had.com"); 
	}

}


function emailFunction(){
alertify
  .defaultValue("")
  .okBtn("Submit")
  .cancelBtn("Cancel")
  .prompt("The iOS release is right around the corner! If you put in your e-mail, I can let you know when it comes out. :)",
    function (val, event) {

      // The click event is in the event variable, so you can use it here.
      event.preventDefault();

      // The value entered is availble in the val variable.
      storeEmail(val); 

    }, function(event) {

      // The click event is in the event variable, so you can use it here.
      event.preventDefault();

      alertify.error("You've clicked Cancel");

    }
  );  
}

function storeEmail(email){
	var emailObject = Parse.Object.extend("Emails_iOS"); 
	var emailObj = new emailObject(); 

	emailObj.set("email", email); 
	emailObj.save(null, {
		success: function(emailObj) {
			alertify.success("Thank you!");
  },
  error: function(emailObj, error) {
  	      alertify.error("Uh oh! Something went wrong! You can see my contact info below!");
  }
});
}
