//background.js file used to help create this, so we know what to credit

chrome.runtime.onInstalled.addListener(async () => {
//addListener is listening to what we want to do when this opens
    let url = chrome.getURL("pop-up.html");
    //open the html file with the name
    let tab = await chrome.tabs.create({ url });
    //the tab create command within chrome will return a tab that shows what is in the url (the html)
    console.log(`Created tab ${tab.id}`);
    //console log the ID of the tab so we know it's working
});

const button1 = document.getElementById("button1");
console.log("test: ", button1);
button1.addEventListener("click", changeColor);

function changeColor(){
    //document.body.style.backgroundColor = 'pink';
    console.log("click");
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

