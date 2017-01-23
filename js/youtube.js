/*============================================================
#title            : Zic'Mix
#description      : exercice API
#author           : DUPRE Anthony
#date             : 20/01/2017
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/

$(document).ready(function(){
    
    //MENU DISCO & BIO
    function changecolor_bio () {

        $('#disco').css('color', 'black')
        $('#disco').css('background-color', 'white')

        $('#disco').hover(function() {
            $('#disco').css('background-color', '#e52d27')
            $('#disco').css('color', 'white')
            $('#disco').css('border-radius', '5px 5px 0px 0px')
        });
        
        $('#bio').css('color', 'white')
        $('#bio').css('background-color', '#e52d27')
        $('#bio').css('border-radius', '5px 5px 0px 0px')
            
    }
    
    function changecolor_disco () {
        $('#bio').css('color', 'black')
        $('#bio').css('background-color', 'white')
        
        $('#bio').hover(function() {
            $('#bio').css('background-color', '#e52d27')
            $('#bio').css('color', 'white')
            $('#bio').css('border-radius', '5px 5px 0px 0px')
        });
        
        $('#disco').css('color', 'white')
        $('#disco').css('background-color', '#e52d27')
        $('#disco').css('border-radius', '5px 5px 0px 0px')
            
    }
    
    //SWIPPER
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30
    });
    
    $('.swiper-container img').hover(function() {
        $('.swiper-container img').css('')
        $('.swiper-container img').css('color', 'white')
        $('.swiper-container img').css('border-radius', '5px 5px 0px 0px')
    })
    
    $("#disco").click(changecolor_disco);
    $("#bio").click(changecolor_bio);

});