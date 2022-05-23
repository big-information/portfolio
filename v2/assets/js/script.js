$( "#work" ).click( function() {
    if ($("#work-categories").hasClass("d-none")) {
        $("#work-categories").toggleClass("d-none");
        $("#container-main-0").toggleClass("border-top-left-0");
        $("#container-main-1").toggleClass("border-bottom-left-0");
        $("#col-main").toggleClass("box-shadow");
        $("#col-main").toggleClass("col-md-8");
        $("#col-main").toggleClass("col-lg-6");
        $(".row").toggleClass("box-shadow");
        $("#work").toggleClass("text-white-50");
        $("#work").toggleClass("text-light");
        $("#info").toggleClass("text-light");
        $("#info").toggleClass("text-white-50");
    }
});
$( "#info" ).click( function() {
    if (!($("#work-categories").hasClass("d-none"))) {
        $("#work-categories").toggleClass("d-none");
        $("#container-main-0").toggleClass("border-top-left-0");
        $("#container-main-1").toggleClass("border-bottom-left-0");
        $("#col-main").toggleClass("box-shadow");
        $("#col-main").toggleClass("col-md-8");
        $("#col-main").toggleClass("col-lg-6");
        $(".row").toggleClass("box-shadow");
        $("#work").toggleClass("text-white-50");
        $("#work").toggleClass("text-light");
        $("#info").toggleClass("text-light");
        $("#info").toggleClass("text-white-50");
    }  
});