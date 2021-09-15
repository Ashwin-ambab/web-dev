$(document).ready(function() {
    $("#sub").click(function(e) {
        e.preventDefault();
        validator();
    })
});

    function validator() {

    var name = $("#firstname").val();
    var lastname = $("#lastname").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var number = $("#phonenumber").val();
    

    var nameRegex = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/;
    var emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9]+(\.[a-z]{2,4})$/;
    var numberRegex = /^[0-9]+$/;

    $("#nameErr").html("");
    $("#lastErr").html("");
    $("#emailErr").html("");
    $("#gendErr").html("");
    $("#phoneErr").html("");
    $("#passErr").html("");
    $("#passErrLen").html("");
    $("#repassErr").html("");

    if(!name.match(nameRegex)){
        $("#nameErr").html("enter a name");
        return false;
    }

    if(!lastname.match(nameRegex)){
        $('#lastErr').html("enter a lastname");
        return false;
    }

    if(!email.match(emailRegex)){
        $("#emailErr").html("Enter a email");
        return false;
    }

    if(!number.match(numberRegex)){
        $("#phoneErr").html("Enter a number");
        return false;
    }

    if(number.length != 10){
        $("#phoneErr").html("number should be 10 digits");
        return false;
    }

    if(( !($("#r1").prop("checked"))) && (!($("#r2").prop("checked"))) && (!($("#r3").prop("checked"))) ) {
        $("#gendErr").html("Select a gender");
        return false;
    }

    if($("#password").val() == ""){
        $("#passErr").html("password is required");
        return false;
    }

    if(password.length != 5){
        $("#passErrLen").html("password should be minimum 5 number")
    }

    if($("#repassword").val() == ""){
        $("#repassErr").html("repassword is required");
        return false;
    }else{
        if(($("#password").val() !== ($("#repassword").val() ) )){
            $("#repassErr").html("password should be same");
            return false;
        }

    }

    

    $("#result").html("Your Form Is Submitted");
    $("#registration")[0].reset();

    }




























    //     if($("#firstname").val() == ""){
    //         $("#nameErr").text("name is required");
    //     }
    //     if($("#lastname").val() == ""){
    //         $("#lastErr").html("name is required");
    //     }
    //     if($("#email").val() == ""){
    //         $("#emailErr").html("email is required");
    //     }
    //     if($("#password").val() == ""){
    //         $("#passErr").html("password is required");
    //     }
    //     if($("#repassword").val() == ""){
    //         $("#repassErr").html("repassword is required")
    //     }else{
    //         if(($("#password").val() !== ($("#repassword").val() ) )){
    //             $("#repassErr").html("password should be same");
    //         }
    //     }
    //     if(( !$("#r1").prop("true").val() && !$("#r2").prop("true").val() && !$("#r3").prop("true").val() )){
    //         $("#gendErr").html("gender is required");
    //     }
        
