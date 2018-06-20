/// <reference path="../jquery-3.1.1.js" />
    	
    	$(document).ready(function () {
    		//----------------------------------------------Login Confirm----------------------------------------------
    			 $("#register form").validate({
    			        rules: {
    			        	email : { 
    			        		email: true,
    			        		isEmail: true
    			        	},
    			        	
    			        	password : { 
    			        		required: true,         //requires password field
    			        		strongpassword: true
    			        	  },
    			        	  
    			        	confirmPassword : {
    			        		equalTo: "#password",
    			        }
    			    },

    		     
    		     messages: {
    			    	email: "please submit a valid email my dude or dudette",
    			    	password: "password must have ATLEAST one number, one capital and one lowercase and a piece of your soul",
    			    	confirmPassword: "bruh thats not the same password"
    			    },
    			    errorClass: "error",
    			    validClass: "valid"
    			 });
    			
    		});





    		//----------------------------------------------Login Validators----------------------------------------------


    		$.validator.addMethod("isEmail", function (value, index) {
    		    return value.toLowerCase().endsWith(".com");  // it would be safer to consider a regex here. 
    		}, "Please enter a valid email");

    		$.validator.addMethod("strongpassword", function (value, index) {
    			   var count=0;
    		    	
    			   //validate length
    		    	if(value.length>=10 && value.length<=128){
    		    		count++;
    		    	}
    		    	
    		    

    		    	//validate capital letter
    		    	if ( value.match(/[A-Z]/).match(/\d/).match(/[A-z]/) ) {
    		    	    count++;
    		    	}

    		    	if(count>1){
    		    		for(var i = 0; i < value.length, i++)
        		    	{
        		    		if(value.substring(i) == value.substring(i+2))
        		    		{
        		    			return false;
        		    		}
        		    	}
    		    		count++;
    		    	}
    		    	if(count > 2){
    		    		return true;
    		    	}
    		    	return false;
    		    	
    		}, "Please enter a strong password that meets ATLEAST 3 Criteria (one capital, one lower case, over ten letters and/or two numbers)");


