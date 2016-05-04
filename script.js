$(document).ready(function() {

        $('#wrapper').fadeIn(2000);

        var hamburger = $('#hamburgerIcon');
       
        
        /* Home Page Hover Effects */
        $('#loopsLink').mouseenter(function() { $('#loopsImg').fadeTo("slow", 1); });
        $('#loopsLink').mouseleave(function() { $('#loopsImg').fadeTo("slow", .5); });

        $('#bendsLink').mouseenter(function() { $('#bendsImg').fadeTo("slow", 1); });
        $('#bendsLink').mouseleave(function() { $('#bendsImg').fadeTo("slow", .5); });

        $('#hitchesLink').mouseenter(function() { $('#hitchesImg').fadeTo("slow", 1); });
        $('#hitchesLink').mouseleave(function() { $('#hitchesImg').fadeTo("slow", .5); });

        $('#stoppersLink').mouseenter(function() { $('#stoppersImg').fadeTo("slow", 1); });
        $('#stoppersLink').mouseleave(function() { $('#stoppersImg').fadeTo("slow", .5); });

        
        /* Hamburger Menu Toggle */
         
        function x() {
            hamburger.toggleClass('active');
            return false;
        }
        hamburger.click(function() {
            x()
        });
        function y() {
             $('#hamburgerLinks').animate({width: 'toggle'}, 500); 
        }
        hamburger.click(function(){
            y()
        });
        y();

        $('#butterflyblue').mouseenter(function() { $(this).setAttribute('src', 'butterflygreen.png'); });


});