$(document).ready(function() {

        $('#wrapper').fadeIn(2000);

        
        /* Home Page Hover Effects */
        $('#loopsLink').mouseenter(function() { $('#loopsImg').fadeTo("slow", 1); });
        $('#loopsLink').mouseleave(function() { $('#loopsImg').fadeTo("slow", .5); });

        $('#bendsLink').mouseenter(function() { $('#bendsImg').fadeTo("slow", 1); });
        $('#bendsLink').mouseleave(function() { $('#bendsImg').fadeTo("slow", .5); });

        $('#hitchesLink').mouseenter(function() { $('#hitchesImg').fadeTo("slow", 1); });
        $('#hitchesLink').mouseleave(function() { $('#hitchesImg').fadeTo("slow", .5); });

        $('#stoppersLink').mouseenter(function() { $('#stoppersImg').fadeTo("slow", 1); });
        $('#stoppersLink').mouseleave(function() { $('#stoppersImg').fadeTo("slow", .5); });



/* Image Change */
        stepOne.onclick = function pictureChange()
{
document.getElementById('howTo').src="one.jpg";
}

        stepTwo.onclick = function pictureChange()
{
document.getElementById('howTo').src="two.jpg";
}

        stepThree.onclick = function pictureChange()
{
document.getElementById('howTo').src="three.jpg";
}

        stepFour.onclick = function pictureChange()
{
document.getElementById('howTo').src="four.jpg";
}

});