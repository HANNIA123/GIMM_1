 



/*Cerrar menú*/
$("#btn-sal").click(function(e){
$("#cabecera").css('transform','translateX(-100%)')   
     $('body').css('opacity', '1');
 

})
/*Abrir menú*/
$("#btn-menu").click(function(e){
$("#cabecera").css('position','absolute');    
    
$("#cabecera").css('transform','translateX(0%)');
     //$('#ocultar').css('opacity','0.9');
       var height = $(window).height();
    $('#cabecera').height(height);
    $('.menu').height(height);
   //$('#ocultar').show(); 

    //$('#ocultar').css('opacity', '0.9');
})



$(".submenu").click(function (e) {
   
      
        e.preventDefault();
        if ($(this).hasClass('activado')) {
            
            $(this).removeClass('activado');
                // $(this).css('background-color',"#fff");
         
            $(this).children('ul').slideUp();
       
               
           
            
        }
        else {
          
            $('.con').slideUp();
           
            $('.submenu').removeClass('activado');
          
            $(this).addClass('activado');
         
            
            $(this).children('ul').slideDown();
                
           
           
           
        }
        
    })
    //propagacion de eventos 
$("ul").click(function (p) {
    p.stopPropagation();
})



$(window).resize(function () {
    if ($(window).width() >= 830) {
         location.reload();
    }
});
