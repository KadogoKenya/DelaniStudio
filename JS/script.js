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
    $(".img2").hide();
});


//   image three script
$(".imageDetails .img3").click(function(){
    $(".details").show();
    $(".imageDetails .img3").hide();
});
$(".imageDetails .img3").mouseout(function() {
    $(".details").hide();
    $(".imageDetails .img3").show();
  });
