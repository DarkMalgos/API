/*============================================================
#title            : Exercise 7: APi work
#description      : integration with HTML/CSS/JAVASCRIPT
#author           : DUPRE Anthony, PAMFIL Eva, PINEAU Ludovic and SAUMUROT Florian
#date             : 20161212
#version          : Constantly on progress
#usage            : JAVASCRIPT/JQUERY
#notes            : Only working on search engine
=============================================================*/

function domready{
    
}
$(document).ready(domready);

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