$(function(){
    "use strict";

    // Adjust Header Height
    $(".header").height($(window).height());

    // Nice Scroll Trigger
    $("body").niceScroll({
        cursorcolor : "#f32853",
        cursorwidth : "7px",
        cursorborder : "1px solid #f32853"
    });

    // Adjust Fixed Navbar On Generic Page
    $("html, body").css("marginTop",$(".generic-navbar").innerHeight());

    $(".fa-chevron-down").click(function(){
        $("html, body").animate({
            scrollTop : $(".first-section").offset().top
        }, 1000);
    });
    $(".get-started").click(function(){
        $("html, body").animate({
            scrollTop : $(".first-section").offset().top
        }, 1000);
    });

    // hide placeholder on input focus
    var placeholder = "";
    $(":input").focus(function(){
        placeholder = $(this).attr("placeholder");
        $(this).attr("placeholder","");
    }).blur(function(){
        $(this).attr("placeholder",placeholder);
    });

    // form pop up trigger 
    $(".form-trigger").click(function(){
        $(".popup").fadeIn(500);
    });

    $(".popup-content .fa-close").click(function(){
        $(this).parentsUntil(".popup").parent(".popup").fadeOut();
    });

    $(".form-one").submit(function(e){
        e.preventDefault();
        location.reload();
    });
});