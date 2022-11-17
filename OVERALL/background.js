chrome.runtime.onInstalled.addListener(async() => {
    let url = chrome.runtime.getURL('buddy_choice.html');
    let tab = await chrome.tabs.create({url});
    console.log(`Created tab ${tab.id}`);
    });

let blockingList = ["instagram"];
let holder = ["instagram", "facebook", "twitter", "youtube"];

//when url in a tab changes this is activated
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){ 
    console.log(tab.url);
    checkURL = tab.url.toLowerCase()
    for(let i = 0; i < blockingList.length; i++){
        if(checkURL.includes(blockingList[i])){
        let oops = chrome.runtime.getURL('../Images/Phox_copy.jpg')
        chrome.tabs.update(null, {url: oops});
        }
    }
});

//alarms! woo!
chrome.alarms.onAlarm.addListener((alarm) =>{
    console.log(alarm.name);
});
