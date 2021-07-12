$(document).ready(function() {
    $("#content-main a[rel=gallery]").fancybox({
        overlayColor: "#2c3e50",
        opacity: true,
        modal: false,
        padding: 2,
        margin: 45,
        overlayOpacity: .9,
        transitionIn: "elastic",
        transitionOut: "easeOutElastic",
        cyclic: true,
        titlePosition: "over",
        enableEscapeButton: false,
        speedIn: 500,
        speedOut: 500,
    });

});
window.jQuery || document.write('<script src="js/jquery-3.6.0.js"><\/script>')