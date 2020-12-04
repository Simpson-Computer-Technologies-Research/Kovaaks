$(document).ready(function(){
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.r6logo2',
        reverse: false
    })
    .setClassToggle('.r6logo2', 'show')
    .addTo(controller);
})