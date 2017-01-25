
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
    var allRadios = document.getElementsByName('rad'),
        allLabel = document.getElementsByName('lab'),
        check = false,
        booRadio = null;
    
    for (var x=0; x < allLabel.length; x++){
        allLabel[x].onclick = function() {
            if (booRadio != null) {
                $(booRadio).css('background', '#ff5500');
                $(booRadio).css('color', 'white');
            }  
            booRadio = this;
            $(this).css('background', 'white');
            $(this).css('color', '#ff5500');
            var rad = $(this).attr('value');
            $('#' + rad).click();
        };
    }
    
    
    
    $('button').click(function (){
        if ($('#search').val() != undefined && $('#search').val() != ''){
            if ($('input[name=rad]:checked', '#choice').val() == undefined)
                console.log("choose one type search 'artist', 'track' or 'album'");
            else {
                for (var i=0; i < allRadios.length; i++){
                    if (i == 0 && $('input[name=rad]:checked', '#choice').val() == "0")
                        console.log('artist');
                        //search_artist($('#search').value);
                    else if (i == 1 && $('input[name=rad]:checked', '#choice').val() == "1") {
                        var q = $('#search').val();
                        youtube_track(q);
                        soundcloud_track(q);
                        check = true;
                    }
                    else if (i == 2  && $('input[name=rad]:checked', '#choice').val() == "2")
                        console.log('album');
                        //search_album($('#search').value);
                }
                
            }
        } else {
            console.log('write something in the search bar');
        }
    });
    
    $('#youtube-result').on('click', 'ul', function() {
        var _url = $(this).attr('value');
        var _channel = $($(this).find('p')[1]).html();
        var _artiste;
        for (var i=0; i < _channel.length; i++) {
            if (i == 0)
                _artiste = _channel.charAt(i);
            else if (i < _channel.length-4)
                _artiste += _channel.charAt(i);
        }
        $('#home').css('display', 'none');
        $('#search-result').css('display', 'none');
    });
    
    $('#soundcloud-result').on('click', 'ul', function() {
        var _url = $(this).attr('value');
        var _artiste = $($(this).find('p')[1]).html();
        var _artiste_url = "http://soundcloud.com/" + _artiste;
        $('#home').css('display', 'none');
        $('#search-result').css('display', 'none');
    });
}
$(document).ready(domready);

function youtube_track(q) {
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
    });
    request.execute(function(response) {
        $('#youtube-result').empty();
        for (var i=0; i < response.result.items.length; i++) {
            if (response.result.items[i].id.kind == "youtube#video") {
                var channel = response.result.items[i].snippet.channelTitle;
                var legit = channel.slice(channel.length-4, channel.length);
                if (legit == "VEVO"){
                    
                    $('#youtube-result').append('<ul value="https://www.youtube.com/watch?v=' + response.result.items[i].id.videoId + '"><li><img src="' + response.result.items[i].snippet.thumbnails.medium.url + '"></li><li><p>' + response.result.items[i].snippet.title + '</p><p>' + channel + '</p><img src="images/youtube-logo.png"></li>');
                }
            }

        }
    });

}

function youtube_iframe(){
    
}

function soundcloud_track(q) {
        SC.initialize({
            client_id: '1c1fbacee3dd327615fd1b22af834084'
        });

        var page_size = 5;
        SC.get('/tracks', { q: q, license: '', limit: page_size }).then(function(tracks) {
            $('#soundcloud-result').empty();
            for (var i=0; i < tracks.length; i++){
                if (tracks[i].kind == "track"){
                    $('#soundcloud-result').append('<ul value="' + tracks[i].permalink_url + '"><li><img src="' + tracks[i].artwork_url + '"></li><li><p>' + tracks[i].title + '</p><p>' + tracks[i].user.permalink + '</p><img src="images/soundcloud-logo.png"></li>');
                }  
            }
        });
    }

function handleAPILoaded() {
    $('button').attr('disabled', false);
}
