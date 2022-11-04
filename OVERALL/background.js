chrome.runtime.onInstalled.addListener(async() => {
    let url = chrome.runtime.getURL('buddy_choice.html');
    let tab = await chrome.tabs.create({url});
    console.log(`Created tab ${tab.id}`);
    });

chrome.runtime.onStartup.addListener("pageshow", urlRead())


async function urlRead(){
    let checkURL = chrome.runtime.getURL();
    if(checkURL.includes("instagram")){

    }
}