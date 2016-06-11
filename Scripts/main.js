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
  x: "-57%;"
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
  var scolling = document.body.scrollTop;
  var left = (left - 2600 +'px');
  $(".cam_container img").css({'left': left});
  var currentScrolling = left;
  res[res.length]= currentScrolling;
  if(res[res.length-2]>res[res.length-1]){
    $("#camion").attr("src", "Images/camion_recul.png");
    console.log("En train de d'avancer");
  }
  else{
    $("#camion").attr("src", "Images/camion.png");
    console.log("En train de reculer");
  }
  if((res[res.length-2]>res[res.length-1]) & ( scolling > 2500)){
    if (scolling < 3500) {
      var beep = new Audio ();
      beep.src = "sounds/beep.wav"
      beep.play();
    }
    else {

    }
  }
  else{

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
  $('#tables').hide();
  $('#fauteuil').hide();
  $('#mob_ext').hide();
  $('#buffet').hide();
  $('#deco').hide();
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
        $("#content-2").slideUp( 300);
        $("#content-1").show(1000);
    });
    $('#canapes_btn').click(function(e){
        e.preventDefault();
        $( ".design__4" ).replaceWith('<h1 class="design__4">nos canapés</h1>');
        $('#canapes').slideDown(300);
        $('#fauteuil').slideUp(300);
        $('#tables').slideUp(300);
        $('#mob_ext').slideUp(300);
        $('#buffet').slideUp(300);
        $('#deco').slideUp(300);

    });
    $('#fauteuils_btn').click(function(e){
        e.preventDefault();
        $( ".design__4" ).replaceWith('<h1 class="design__4">nos fauteuils</h1>');
        $('#canapes').slideUp(300);
        $('#fauteuil').slideDown(300);
        $('#tables').slideUp(300);
        $('#mob_ext').slideUp(300);
        $('#buffet').slideUp(300);
        $('#deco').slideUp(300);

    });
    $('#tables_btn').click(function(e){
        e.preventDefault();
        $( ".design__4" ).replaceWith('<h1 class="design__4">nos tables</h1>');
        $('#canapes').slideUp(300);
        $('#fauteuil').slideUp(300);
        $('#tables').slideDown(300);
        $('#mob_ext').slideUp(300);
        $('#buffet').slideUp(300);
        $('#deco').slideUp(300);
    });
    $('#mob_ext_btn').click(function(e){
        e.preventDefault();
        $( ".design__4" ).replaceWith('<h1 class="design__4">mobilier d&apos;exterieur</h1>');
        $('#canapes').slideUp(300);
        $('#fauteuil').slideUp(300);
        $('#tables').slideUp(300);
        $('#mob_ext').slideDown(300);
        $('#buffet').slideUp(300);
        $('#deco').slideUp(300);


    });
    $('#buffet_btn').click(function(e){
        e.preventDefault();
        $( ".design__4" ).replaceWith('<h1 class="design__4">nos buffets</h1>');
        $('#canapes').slideUp(300);
        $('#fauteuil').slideUp(300);
        $('#tables').slideUp(300);
        $('#mob_ext').slideUp(300);
        $('#buffet').slideDown(300);
        $('#deco').slideUp(300);


    });
    $('#deco_btn').click(function(e){
        e.preventDefault();
        $( ".design__4" ).replaceWith('<h1 class="design__4">nos décorations</h1>');
        $('#canapes').slideUp(300);
        $('#fauteuil').slideUp(300);
        $('#tables').slideUp(300);
        $('#mob_ext').slideUp(300);
        $('#buffet').slideUp(300);
        $('#deco').slideDown(300);


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

$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight');
			} else {
		    label.removeClass('highlight');
			}
    } else if (e.type === 'focus') {

      if( $this.val() === '' ) {
    		label.removeClass('highlight');
			}
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

/********** MASONRY ***********/

var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  columnWidth: 120,
  itemSelector: '.grid-item'
});

grid.addEventListener( 'click', function( event ) {
  // don't proceed if item content was not clicked on
  if ( !matchesSelector( event.target, '.grid-item-content' )  ) {
    return;
  }
  var itemElem = event.target.parentNode;
  itemElem.classList.toggle('is-expanded');

  msnry.layout();
});

/********** MASONRY ***********/
