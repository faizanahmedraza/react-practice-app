$(document).ready(function(){

    $(".navBar ul li a[href='" + window.location.pathname + "']").parent().addClass("active");

    $(".sidebar-collapse").click(function () {
        $(".page-container").toggleClass("sidebar-collapsed");
    });
}); 