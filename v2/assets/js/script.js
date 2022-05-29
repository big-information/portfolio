$( "#work" ).click( function() {
    if ($("#info").hasClass("text-light")) {
        swap();
    }
});

$( "#info" ).click( function() {
    if ($("#work").hasClass("text-light")) {
        swap();
    }
});

function swap() {
    $("#work").toggleClass("text-light text-white-50");
    $("#info").toggleClass("text-light text-white-50");
    $("#col-main").toggleClass(" col-12 col-md-8 col-lg-6");
    $("#container-main-0").toggleClass("d-none");
    $("#container-main-1").toggleClass("d-none");
}
