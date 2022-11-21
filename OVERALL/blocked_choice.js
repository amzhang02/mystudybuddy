
let instagram = false;
let facebook = false;
let twitter = false;
let youtube = false;
let snapchat = false;
let tiktok = false;

document.querySelector('#prevButton').onclick = function () {
    location.replace('time_choice.html');
}

document.querySelector('#saveButton').onclick = function () {
    /*console.log('thanks.html' + location.search + 
    '&insta=' + instagram + '&fb=' + facebook + '&tw=' + 
    twitter + '&yt=' + youtube + '&sc=' + snapchat + '&tt=' + tiktok);*/

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