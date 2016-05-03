/************ HORIZONTAL *****************/

var x = $(".one h1").offset();
var one = $(".one").width();
var para = $(".one h1").width();
var right = one - (x.left + para);
var twoOffset = $(".two h1").offset();
var twoLeftOffset = twoOffset.left - one;
var firstLine = twoLeftOffset + right;
var leftPos = para + x.left;

// initie le controller
var controller = new ScrollMagic.Controller();

var controller = new ScrollMagic.Controller();

// Définit le mouvement des panels
var wipeAnimation = new TimelineMax()
	.to("#slideContainer", 1, {
		x: "-75%"
	})

// creation d'une action 
new ScrollMagic.Scene({
		triggerElement: "#pinContainer",
		triggerHook: "onLeave",
		duration: "500%"
	})
	.setPin("#pinContainer")
	.setTween(wipeAnimation)
	.addIndicators()
	.addTo(controller);


/*********** HORIZONTAL ******************/

/**************** PANORAMA ***************/
var
        $target  = $(".panorama").first(),
        currentPosition = 0,
        moveBy = function(scrolledBy){
            currentPosition += scrolledBy;
            $target.css("transform", "translateX(" + (currentPosition) + "px)")
        },
        lastScrollTop = 0 ;

    $(window).bind("scroll",function(e){
        var scrolledBy = $(window).scrollTop() - lastScrollTop;
        moveBy(-scrolledBy);
        lastScrollTop = $(window).scrollTop();
    });

    $(document).ready(function(){
        var image = $(".panorama > img"),
            $target  = $(".panorama").first();
        image.load(function(){
            var panorama = $(".panorama"),
                    updateHtml = "";
            var imageSrc = image.attr("src");
            var imagesNeededToFillDocument = $(document).height() / image.width();
            for(var i =0; i < imagesNeededToFillDocument; i ++){
                updateHtml += "<img src='"+imageSrc+"'>";
            }
            panorama.append(updateHtml);
            $(".loader").first().hide();
        });
    });

/**************** PANORAMA ***************/

/*************** FADE IN *****************/

$(document).ready(function(){	
	$('#villa').fadeIn(2000);
});

$(document).ready(function(){	
	$('#villa2').fadeIn(2100);
});

/************* FADE IN ********************/


$(window).scroll(function(){
    $("#villa").css("opacity", 1 - $(window).scrollTop() / 250);
  });


$(window).scroll(function() {
    // Get scroll position
    var s = $(window).scrollTop(),
    // scroll value and opacity
    opacityVal = (s / 150.0);
    // opacity value 0% to 100%
    $('.blurred-img').css('opacity', opacityVal);
});