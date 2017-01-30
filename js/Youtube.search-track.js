/*============================================================
#title            : Exercise 7: APi work
#description      : integration with HTML/CSS/JAVASCRIPT
#author           : DUPRE Anthony, PAMFIL Eva, PINEAU Ludovic and SAUMUROT Florian
#date             : 20161212
#version          : Constantly on progress
#usage            : JAVASCRIPT/JQUERY
#notes            : Only working on search engine
=============================================================*/

function youtube_tracks(track){
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
    });
    
    request.execute(function(reponse) {
        for (var i=0; i < response.result.items.length; i++){
            if (reponse.result.items[i].id.kind == "youtube#video"){
                var url_video ="https://www.youtube.com/watch?v=" + JSON.stringify(reponse.result.items[i].id.videoId);
                var video_img = JSON.stringify(reponse.result.items[i].snippet.thumbnails.medium.url);
                var title_track = JSON.stringify(reponse.result.items[i].snippet.title);
                var name_channel = JSON.stringify(reponse.result.items[i].snippet.hannelTittle);
            }
        }
    })
}