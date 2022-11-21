chrome.runtime.onInstalled.addListener(async() => {
    let url = chrome.runtime.getURL('buddy_choice.html');
    let tab = await chrome.tabs.create({url});
    console.log(`Created tab ${tab.id}`);
    });

let blockingList = [];
let buddy = '';
//when url in a tab changes this is activated
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){ 
    //console.log(tab.url);
    checkURL = tab.url.toLowerCase()
    for(let i = 0; i < blockingList.length; i++){
        if(checkURL.includes(blockingList[i])){
        //let oops = chrome.runtime.getURL('./Images/', buddy, '_copy.jpg')
        chrome.tabs.update(null,({url: "attempt.html"}));
        }
    }
});
//background listening for messages
//messages include: buddy request, buddy send
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    //console.log("ugh");
    if(request.message === "setBuddy"){
        console.log("setting");
        buddy = request.buddy
        sendResponse("set: ", buddy);
    }

    if(request.message === "getBuddy"){
        console.log("get bestie");
        sendResponse(buddy);
    }
    
    if(request.message === "blockList"){
        blockingList = request.blocked;
        console.log("blocking: ", blockingList);
        sendResponse("Blocked");
    }
})

//alarms! woo!
chrome.alarms.onAlarm.addListener((alarm) =>{
    console.log(alarm.name); //ok so this DOES hear the alarms when the popup part closes
    if(alarm.name === "water"){
        //chrome.tabs.create({url: "./Images.water_copy.jpg"})
    }
    if(alarm.name === "stretch"){
        //chrome.tabs.create({url: "./Images.stretch_copy.jpg"})

    }
    if(alarm.name === "snack"){
        //chrome.tabs.create({url: "./Images.snack_copy.jpg"})
    }
    //chrome.tabs.create({url: "./Images.water_copy.jpg"})

});
