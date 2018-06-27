
var currentSound = null;
var speed = 100;
function playSound(character) {
    var nextSound = null;

    if (!/[^a-zA-Z]/.test(character)) {
        speed = 200;
        var capchar = character.toUpperCase();
        $('g').removeAttr('class', 'fillPath');
        capchar = capchar == ' ' ? 'asd' : capchar;
        $('#' + capchar).attr('class', 'fillPath');

    }
    else if (character == "\b") {
        speed = 10;
        $('g').removeAttr('class', 'fillPath');
        $('#Backspace').attr('class', 'fillPath');
    }
    else if (character == " ") {
        speed = 200;
        $('g').removeAttr('class', 'fillPath');
        $('#Spacebar').attr('class', 'fillPath');
    }
}
$(function () {
    var typewriter = new Typewriter($("#typewriter"));
    typewriter.setCaret('|');
    //  typewriter.typeText("Your Digital Evolution Starts Here ");
    typewriter.setCaretPeriod(500);
    typewriter.setDelay(speed, speed);
    typewriter.setCharacterCallback(playSound);
    animate(typewriter);

});



 $('.owl-carousel').owlCarousel({
      
    loop: true,
    margin:50,
    nav: false,
    autoplay: true,
    autoPlaySpeed: 500,
    autoPlayTimeout: 500,
    autoplayHoverPause: true,  
    smartSpeed:500,
    animateIn: 'bounceOutDown animated', // add this
     animateOut: 'bounceInUp animated', // and this
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$(document).ready(function(){

        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load('particles-js', 'assets/particles/particles.json', function() {
            console.log('callback - particles.js config loaded');
          });

});
