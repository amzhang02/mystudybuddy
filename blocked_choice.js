let instagram = false;
let facebook = false;
let twitter = false;
let youtube = false;
let snapchat = false;
let tiktok = false;
let blockThis = [];

let queryString = location.search;
let prevQueryString = queryString.split('waterTime=')[0];

document.querySelector('#prevButton').onclick = function () {
    location.replace('time_choice.html' + prevQueryString);
}

document.querySelector('#saveButton').onclick = function () {
    /*console.log('thanks.html' + location.search + 
    '&insta=' + instagram + '&fb=' + facebook + '&tw=' + 
    twitter + '&yt=' + youtube + '&sc=' + snapchat + '&tt=' + tiktok);*/
    if(instagram){
        blockThis.push("instagram");
    }
    if(facebook){
        blockThis.push("facebook");
    }
    if(twitter){
        blockThis.push("twitter");
    }
    if(youtube){
        blockThis.push("youtube");
    }
    if(snapchat){
        blockThis.push("snapchat");
    }
    if(tiktok){
        blockThis.push("tiktok");
    }
    chrome.runtime.sendMessage(
        {message: "blockList", blocked: blockThis}, function(response){
          console.log(response);
        }
    );
    
    location.replace('thanks.html' + location.search + 
    '&ig=' + instagram + '&fb=' + facebook + '&tw=' + 
    twitter + '&yt=' + youtube + '&sc=' + snapchat + '&tt=' + tiktok);
}

document.querySelector('#instagram').onclick = function () {
    instagram = !instagram;
}

document.querySelector('#facebook').onclick = function () {
    facebook = !facebook;
}

document.querySelector('#twitter').onclick = function () {
    twitter = !twitter;
}

document.querySelector('#youtube').onclick = function () {
    youtube = !youtube;
}

document.querySelector('#snapchat').onclick = function () {
    snapchat = !snapchat;
}

document.querySelector('#tiktok').onclick = function () {
    tiktok = !tiktok;
}