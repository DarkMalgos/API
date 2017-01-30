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
    
    var album = null; 
        
    
    
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
    
    $("#disco").click(changecolor_disco);
    $("#bio").click(changecolor_bio);
    
    var _url="https://api.spotify.com/v1/search?query=artist:rihanna&&limit=50&type=album";


        $.get(_url, function(data){ 
            console.log(data); // affiche le résultat au format JSON
            for (var i=0; i < data.albums.items.length; i++){
                $('#swipper').append('<div class="swiper-slide"><img src=' + data.albums.items[i].images[1].url + ' data-id=' + data.albums.items[i].id + ' ></div>');
                
                if(i === data.albums.items.length-1){
                    //SWIPPER
                    var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        slidesPerView: 4,
                        paginationClickable: true,
                        spaceBetween: 30
                    });
                    $(".swiper-slide").click(change_slide);
                }
            }
        });
    function convertMillisecondsToDigitalClock(ms) {
    minutes = Math.floor((ms % 3600000) / 60000), // 1 Minutes = 60000 Milliseconds
    seconds = Math.floor(((ms % 360000) % 60000) / 1000) // 1 Second = 1000 Milliseconds
        return {
        minutes : minutes,
        seconds : seconds,
        clock : minutes + ":" + seconds
    };
}
    
    function change_slide() {
        var _ids = $(this).find('img').attr('data-id');
        album = $(this).find('img').attr('src');
        
        $("#content").css('display', 'none');
        console.log(album);
        $('#content2').append('<img id="albumImg" src="' + album + '">');
        var _url = "https://api.spotify.com/v1/albums/?ids=" + _ids ;
             $.get(_url, function(data){ 
                console.log(data); // affiche le résultat au format JSON
                $('#content2').append('<div id="content3"><p id="name-album">' + data.albums[0].name + '-</p><p id="name-artist">' + data.albums[0].artists[0].name + '</p><ul id="category"><li class ="number_tracks">N°</li><li class="name_tracks">Titre</li><li>Durée</li></ul>');
                for (var i=0; i < data.albums[0].tracks.items.length; i++) {
                    console.log("toto");
                    $('#content3').append('<ul class="num_track"><li class="number_tracks">' + (i+1) + '</li><li class="name_tracks">' + data.albums[0].tracks.items[i].name + '</li><li class="duree">' + convertMillisecondsToDigitalClock(data.albums[0].tracks.items[i].duration_ms).clock + '</li> <li class="play"><img src="../images/play-red.png"</li></ul></div>');
                }
                $('#content2').css('display', 'block');
        });
    }
    
    
    

});