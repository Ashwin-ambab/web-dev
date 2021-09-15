$(document).ready(function() {
    $("ul.tabs li").click(function() {
        var tab_id = $(this).attr("data-tab"); 
    

        $("ul.tabs li").removeClass("current");
        $(".tab-content").removeClass("current");

        $(this).addClass("current");
        $("#"+ tab_id).addClass("current");
    });
});


$(document).ready(function(){
    $(".demo div ").hide();
    $(".demo h3").click(function(){
        $(this).next().slideToggle().siblings("div:visible").slideUp();
    });
});