//background.js file used to help create this, so we know what to credit

chrome.runtime.onInstalled.addListener(async () => {
//addListener is listening to what we want to do when this opens
    let url = chrome.runtime.getURL("pop-up.html");
    //open the html file with the name
    let tab = await chrome.tabs.create({ url });
    //the tab create command within chrome will return a tab that shows what is in the url (the html)
    console.log(`Created tab ${tab.id}`);
    //console log the ID of the tab so we know it's working
});

const btnsurprise = document.getElementById('btn1')
console.log("buttonnnnnnn js: ", btnsurprise, "button in html for comp: ", document.getElementById('btn1'))
btnsurprise.addEventListener("click", printTest());

function printTest(){
    console.log("heyo");
}
/*function surprise(){
    chrome.notifications.create({
        notificationsId? ,
        options: 
        callback?:function,
    });
}

function openTab(){
    chrome.tabs.create({});
}*/

