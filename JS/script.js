
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

});