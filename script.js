$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:9

            },
            suname:{
                required:true,
                minlength:2
                
            },
            emailadd:{
                required:true,
                email:true
                

            },
            pswd:{
                required:true,
                minlength:4,
                maxlength:9


            },
            day:{
                required:true 
            },
            month:{
                required:true 
            },
            year:{
                required:true 
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Enter atleast 4 characters",
                maxlength:"Maximum 9 characters"

            },
            suname:{
                required:"Enter surname",
                minlength:"Enter atleast 2 characters"
            },
            pswd:{
               
                    required:"Enter first name",
                    minlength:"Enter atleast 4 characters",
                    maxlength:"Maximum 9 characters"
    
                },
                emailadd:{
                    email:"Enter correct format",
                    required:"Enter email address"
                }
            }

        
      
    })
})