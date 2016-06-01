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
/************* SCROLL VOITURE ********************/
  .setPin("#pinContainer")
  .setTween(wipeAnimation)
  .addTo(controller);

/*********** HORIZONTAL ******************/

res = [];
$(window).scroll(function() {
  var left = document.body.scrollTop;
  var left = (left - 2500 +'px');
  $(".cam_container img").css({'left': left});
  /*res = [];
  var currentScroll = left;
  var lastScroll;
  if (currentScroll < lastScroll) {
    alert('fumé');
  }
  tab.push(left);
  res.push(left);// Inscrit le resultat dans un tableau
  console.log(res);*/
  var currentScrolling = left;
  res[res.length]= currentScrolling;
  if(res[res.length-2]>res[res.length-1]){
    $("#camion").attr("src", "Images/camion_recul.png");
    console.log("En train de reculer");
  }
  else{
    $("#camion").attr("src", "Images/camion.png");
    console.log("En train d'avancer");
  }
});

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

/**************** Products ***************/
$(window).scroll(function(){
    var effect = document.body.scrollTop;
    console.log(effect);
    if(effect > 1200){
      $("#container_2").removeClass('view_2').addClass('view_1');
    }
    else{

    }
    if(effect > 1600){
      $("#container_3").removeClass('view_2').addClass('view_1');
    }
    else{

    }
    if(effect > 1800){
      $("#container_4").removeClass('view_2').addClass('view_1');
    }
    else{

    }
    if(effect > 2200){
      $("#container_5").removeClass('view_2').addClass('view_1');
    }
    else{

    }
    if(effect < 1200){
      $("#container_2").removeClass('view_1').addClass('view_2');
    }
    else{


    if(effect < 1600){
      $("#container_3").removeClass('view_1').addClass('view_2');
    }
    else{

    }
    if(effect < 1800){
      $("#container_4").removeClass('view_1').addClass('view_2');
    }
    else{

    }
    if(effect < 2200){
      $("#container_5").removeClass('view_1').addClass('view_2');
    }
    else{

    }
  }
});

/*************** FADE IN *****************/

$(document).ready(function(){
  $('#villa').fadeIn(2000);
});

$(document).ready(function(){
  $('#villa2').fadeIn(2100);
  $(".hamburger").on("click",function(){
    $(".menu").slideToggle();
    $(".hamburger").toggleClass("is-active");
  });
    $("#content-2").hide();
  $(document).ready(function(){
    });
    $('.btn__click').click(function(e){
        e.preventDefault();
        $("#content-2").slideDown( 300);
        $("#content-1").hide();
    });
    $('.btn__click_cross').click(function(e){
        e.preventDefault();
        $("#content-2").slideUp( 300 );
        $("#content-1").show( 1000 );

    });

});

/************* FADE IN ********************/


$(window).scroll(function(){
  $("#villa").css("opacity", 1 - $(window).scrollTop() / 250);
});


/************* RESOLUTION ********************/

$(document).ready(function(){
  width = $(window).width();
  $(".one").css({'width': width});
});
/************* BLUR ON SCROLL ********************/
$(window).scroll(function() {
  // Get scroll position
  var s = $(window).scrollTop(),
      // scroll value and opacity
      opacityVal = (s / 150.0);
  // opacity value 0% to 100%
  $('.blurred-img').css('opacity', opacityVal);
});

$(window).scroll(function() {
  // Get scroll position
  var suit = $(window).scrollTop(),
      // scroll value and opacity
      opacityVal = (suit / 150.0);
  // opacity value 0% to 100%
  $('.blurred-img-suit').css('opacity', opacityVal);
});
/************* BLUR ON SCROLL ********************/
