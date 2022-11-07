chrome.runtime.onInstalled.addListener(async() => {
    let url = chrome.runtime.getURL('buddy_choice.html');
    let tab = await chrome.tabs.create({url});
    console.log(`Created tab ${tab.id}`);
    });

//pre-writing some code: for blocking feature we're going to use chrome.storage I assume
//this gets that storage when it is changed
let blockingList = ['instagram', 'facebook'];
chrome.storage.onChanged.addListener((changes, area) => {
    if(area === 'sync' && changes.options?.newValue){
        console.log("something has changed");
    }

});

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
})