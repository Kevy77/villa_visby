$(document).ready(function(){

  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);
        $(".menu").fadeToggle();
        $(".hamburger").toggleClass("is-active");
        return false;
      }
    }
  });
});
  $('#gal1').galereya();
  $('#villa').fadeIn(2000);
  window.sr = new ScrollReveal({ reset: true });
  sr.reveal('.col-md-4', { origin: 'top',duration: 600,distance: '250px',rotate: { x:0, y: -360, z: 0 }});
  sr.reveal('.product_block', { origin: 'right',duration: 600,distance: '250px' });
  sr.reveal('.product_block_2', { origin: 'left',duration: 600,distance: '250px' });
  sr.reveal('.box_center', { origin: 'bottom',duration: 600,distance: '250px' });
  sr.reveal('#gal1 img', { duration: 2000,origin: 'left',distance:'250px' }, 50);
  sr.reveal('.result', { origin: 'bottom',duration: 600,distance: '250px' });
  sr.reveal('.result__2', { origin: 'bottom',duration: 600,distance: '250px' });
});
/*************** FADE IN *****************/


$(document).ready(function(){
  $('#tables').hide();
  $('#fauteuil').hide();
  $('#mob_ext').hide();
  $('#buffet').hide();
  $('#deco').hide();
  $('#villa2').fadeIn(2100);
  $(".hamburger").on("click",function(){
    $(".menu").fadeToggle();
    $(".hamburger").toggleClass("is-active");
  });
    $("#content-2").hide();
  $(document).ready(function(){
    });
    $('.btn__click').click(function(e){
        e.preventDefault();
        $("#content-2").slideDown(600);
        $("#content-1").hide();
    });
    $('.btn__click_cross').click(function(e){
        e.preventDefault();
        $("#content-2").slideUp(600);
        $("#content-1").slideDown(600);
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
    $('#fauteuils_btn_1').click(function(e){
        e.preventDefault();
        $( ".design__4" ).replaceWith('<h1 class="design__4">nos fauteuils</h1>');
        $('#canapes').slideUp(300);
        $('#fauteuil').slideDown(300);
        $('#tables').slideUp(300);
        $('#mob_ext').slideUp(300);
        $('#buffet').slideUp(300);
        $('#deco').slideUp(300);

    });
    $('#tables_btn_1').click(function(e){
        e.preventDefault();
        $( ".design__4" ).replaceWith('<h1 class="design__4">nos tables</h1>');
        $('#canapes').slideUp(300);
        $('#fauteuil').slideUp(300);
        $('#tables').slideDown(300);
        $('#mob_ext').slideUp(300);
        $('#buffet').slideUp(300);
        $('#deco').slideUp(300);
    });
    $('#mob_ext_btn_1').click(function(e){
        e.preventDefault();
        $( ".design__4" ).replaceWith('<h1 class="design__4">mobilier d&apos;exterieur</h1>');
        $('#canapes').slideUp(300);
        $('#fauteuil').slideUp(300);
        $('#tables').slideUp(300);
        $('#mob_ext').slideDown(300);
        $('#buffet').slideUp(300);
        $('#deco').slideUp(300);


    });
    $('#buffet_btn_1').click(function(e){
        e.preventDefault();
        $( ".design__4" ).replaceWith('<h1 class="design__4">nos buffets</h1>');
        $('#canapes').slideUp(300);
        $('#fauteuil').slideUp(300);
        $('#tables').slideUp(300);
        $('#mob_ext').slideUp(300);
        $('#buffet').slideDown(300);
        $('#deco').slideUp(300);


    });
    $('#deco_btn_1').click(function(e){
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




/************* RESOLUTION ********************/

$(window).resize(function(){
  width = $(window).width();
  $(".one").css({'width': width});
});

/************* BLUR ON SCROLL ********************/
$(window).scroll(function() {
  $("#villa").css("opacity", 1 - $(window).scrollTop() / 250);
  // Get scroll position
  var s = $(window).scrollTop(),
      // scroll value and opacity
      opacityVal = (s / 150.0);
  // opacity value 0% to 100%
  $('.blurred-img').css('opacity', opacityVal);
});
