$(document).ready(function() {
    $("#Add").click(function(){
        add();
    });
    $("#Substract").click(function() {
        subtract();
    });
    $("#Divide").click(function() {
        div();
    });
    $("#Multiply").click(function() {
        mult();
    });
    $("#AllClear").click(function() {
        ac();
    });

});

function add() {
    var no1 = parseInt($("#txtNo1").val());
    var no2 = parseInt($("#txtNo2").val());

    var result = no1 + no2;
    $("#results").html(result);
    console.log(result);
}

function subtract() {
    var no1 = Number($("#txtNo1").val());
    var no2 = Number($("#txtNo2").val());

    var result = no1 - no2;
    $("#results").html(result);
    console.log(result);
}

function div() {
    var no1 = Number($("#txtNo1").val());
    var no2 = Number($("#txtNo2").val());

    var result = no1 % no2;
    $("#results").html(result);
}

function mult() {
    var no1 = Number($("#txtNo1").val());
    var no2 = Number($("#txtNo2").val());

    var result = no1 * no2;
    $("#results").html(result);
}

function ac() {
    ($("#txtNo1").val(""));
    ($("#txtNo2").val(""));

    $("#results").html("");
}