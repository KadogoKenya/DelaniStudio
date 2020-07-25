// image one
$(document).ready(function(){
    $("#img1").click(function(){
        $(".details").hide().toggle();
        $("#img1").slideup();
    });
    
    $(".details").click(function(){
        $("#img1").slidedown();
        $(".details").hide();
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
    $(".dddetails").click(function() {
        $(".dddetails").hide();
        $(".img3").show();
    });


});