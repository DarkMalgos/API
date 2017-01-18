/*============================================================
#title            : Exercise 7: APi work
#description      : integration with HTML/CSS/JAVASCRIPT
#author           : DUPRE Anthony, PAMFIL Eva, PINEAU Ludovic and SAUMUROT Florian
#date             : 20161212
#version          : Constantly on progress
#usage            : JAVASCRIPT/JQUERY
#notes            : Only working on search engine
=============================================================*/

function domready() {
    var allRadios = document.getElementsByName('re');
    var booRadio;
    console.log(allRadios.length)
    
    for(var x = 0; x < allRadios.length; x++){
        allRadios[x].onclick = function() {
            if(booRadio == this) {
                this.checked = false;
                booRadio = null;
            } else {
                booRadio = this;
            }
        };
    }
    
    $('button').click(function (){
        if ($('#search').val() != undefined && $('#search').val() != ''){
            for (var i=0; i < allRadios.length; i++){
                if ($('input[name=re]:checked', '#radio-button').val() != undefined){
                    console.log('toto');
                    if (i == 0 && $('input[name=re]:checked', '#radio-button').val() == "0")
                        console.log('artist');
                        //search_artist($('#search').value);
                    else if (i == 1 && $('input[name=re]:checked', '#radio-button').val() == "1")
                        console.log('track');
                        //search_tracks($('#search').value);
                    else if (i == 2  && $('input[name=re]:checked', '#radio-button').val() == "2")
                        console.log('album');
                        //search_album($('#search').value);
                }
            }
            if ($('input[name=re]:checked', '#radio-button').val() == undefined)
                console.log("choose one type search 'artist', 'track' or 'album'");
        }
        else {
            console.log('write something in the search bar');
        }
    });
}
$(document).ready(domready);

<<<<<<< HEAD
=======
var allRadios = document.getElementsByName('re');
var booRadio;

allRadios[x].onclick = function() {
    for(var x = 0; x < allRadios.length; x++){
        if(booRadio == this) {
            this.checked = false;
            booRadio = null;
        } else {
            booRadio = this;
        }
    }
};
>>>>>>> 556c052d9fda37bd4cd11848ab8cb2767610739c
