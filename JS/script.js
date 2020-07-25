
$(".imgDetails .img1").click(function(){
    $(".details").show();
    $(".imgDetails .img1").hide();
});
$(".imgDetails .img1").mouseout(function() {
    $(".details").hide();
    $(".imgDetails .img1").show();
  });