// image one

$("#img1").click(function(){
    $("#designDetails").show();
    $("#img1").hide();
});
$("#designDetails").click(function(){
    $("#img1").show();
    $("#designDetails").hide();
});

// image two
$(".img2").click(function(){
    $(".details").show();
    $(".img2").hide();
});
$(".details").click(function(){
    $(".img2").show();
    $(".details").hide();
});


//   image three script
$(".img3").click(function(){
    $(".dddetails").show();
    $(".img3").hide();
});
$(".dddetails").mouseout(function() {
    $(".dddetails").hide();
    $(".img3").show();
  });
