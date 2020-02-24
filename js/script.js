  
$(document).ready(function() {
    $("#button1").mouseenter(function() {
        $("#button1").removeClass("makeRed").addCass("makeBorder");
    }); 

    $("#button1").mouseleave(function() {
        $("#button1").removeClass("makeBorder").addClass("makeRed");
    });

    $("#button").click(function() {
        $("p").hide(2000).show(2000);
    });
    

    $("#button").click(function() {
        $("p").fadeIn().fadeOut();
    });

}); 