
$(document).ready(function(){
    // image one
    $(".img1").click(function(){
        $(".details").show();
        $(".img1").hide();
    });
    $(".details").click(function() {
        $(".details").hide();
        $(".img1").show();
    });


    // image two
    $(".img2").click(function(){
        $(".ddetails").show();
        $(".img2").hide();
    });
    $(".ddetails").click(function(){
        $(".img2").show();
        $(".ddetails").hide();
    });


    //   image three script
    $(".img3").click(function(){
        $(".dddetails").show();
        $(".img3").hide();
    });
    $(".dddetails").click(function() {
        $(".dddetails").hide();
        $(".img3").show();
    });


// portifolio
$(".myportifolio").hover(
    function() {
      $(this)
        .find(".overlay")
        .show();
    },
    function() {
      $(this)
        .find(".overlay")
        .hide();
    }
  );
$(".btn btn-sbumit").click(event =>{
    event.preventDefault()

    alert("welcome")
});

$(".imgage1").mouseover(function(){
    $(".text1").show();
   
});
$(".text1").mouseover(function(){
    $(".image1").show();
});
});

// $("#button").click( function myFunction () {

    function myFunction(form){

        // event.preventDefault();

        let NAME=document.forms ["contact"]["NAME"].value;
        let EMAIL=document.forms ["contact"]["EMAIL"].value;
        let MESSAGE=document.forms ["contact"]["MESSAGE"].value;

        Alert('Hello', + name +  'Your accout has been updated!');
    };




// document.getElementById("button").onclick = myFunction;
    

