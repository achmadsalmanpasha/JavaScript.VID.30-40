$( document ).ready(function(){
    console.log("asiap");
});

$(function () {
    $("#isi").html("<h1>belajar jquery</h1>");
    
    $("#klik").click(function (e) { 
    e.preventDefault();
    alert("belajar javascript");
    });

    $("#isi").mouseleave(function () { 
        alert("mouse leave");
        console.log("mouse");
    });

});


