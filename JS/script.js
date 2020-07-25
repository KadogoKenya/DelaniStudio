
$(".imageDetails .img1").click(function(){
    $(".details").show();
    $(".imageDetails .img1").hide();
});
$(".imageDetails .img1").mouseout(function() {
    $(".details").hide();
    $(".imageDetails .img1").show();
  });