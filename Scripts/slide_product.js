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
