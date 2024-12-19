var sectionArray = [1, 2, 3, 4, 5, 6];

each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 80;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.nav-link').removeClass('active');
             $('.nav-link:link').addClass('inactive');  
             $('.nav-link').eq(index).addClass('active');
             $('.nav-link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.nav-link').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 80;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
        
        
    });
 
    
});

$(document).ready(function(){
    $('.nav-link:link').addClass('inactive');    
    $('.nav-link').eq(0).addClass('active');
    $('.nav-link:link').eq(0).removeClass('inactive');
    


});