chrome.runtime.onInstalled.addListener(async() => {
    chrome.storage.sync.clear();
    let url = chrome.runtime.getURL('buddy_choice.html');
    let tab = await chrome.tabs.create({url});
    console.log(`Created tab ${tab.id}`);
});
    
var blockingList = [];
var reminderNames = [];
var reminderTimes = [];
var buddy = '';

//when url in a tab changes this is activated
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){ 
    //console.log(tab.url);
    
    chrome.storage.sync.get("block", function (obj){
        //console.log("storage in background:  ", obj);
        if(obj != null && obj != undefined){
            var holder = Object.values(obj);
            blockingList = holder[0];
        }
        //console.log("test test ", blockingList);
    });
    checkURL = tab.url.toLowerCase();
    if(blockingList != undefined && blockingList.length != 0){
        for(let i = 0; i < blockingList.length; i++){
            if(checkURL.includes(blockingList[i])){
            //let oops = chrome.runtime.getURL('./Images/', buddy, '_copy.jpg')
            chrome.tabs.update(null,({url: "attempt.html"}));
            }
        }
    }
});
//background listening for messages
//messages include: buddy request, buddy send, website blocking, set alarms, get alarms
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    //setting buddy: buddy_choice.js
    if(request.message === "setBuddy"){
        buddy = request.buddy
        console.log("setting bestie: ", buddy);
        sendResponse("set: ", buddy);
    }
    //getting buddy: popup.js
    if(request.message === "getBuddy"){
        console.log("get bestie: ", buddy);
        sendResponse(buddy);
    }
    //grabbing the websites: blocked_choice.js
    if(request.message === "blockList"){
        blockingList = request.blocked;
        chrome.storage.sync.set({"block": blockingList}, function(){
            console.log("saved in storage: ", blockingList);
        })
        sendResponse("Blocked");
    }

    //information about reminders needed: reminder_choice.js
    if(request.message === "setGeneralReminders"){
        reminderNames = request.genRemind;
        console.log("setting reminders for: ", reminderNames);
        sendResponse("confirmation");
    }

    //information about reminders needed: time_choice.js
    if(request.message === "setTimes"){
        reminderTimes = request.times;
        console.log("setting times (respectively): ", reminderTimes);
        sendResponse("confirmation");
        //order of reminders is always water, snack, stretch and times are in sync with chosen reminders
    }

    //info going towards popup.js
    if(request.message === "getGeneralReminders"){
        console.log("sending reminder names: ", reminderNames);
        sendResponse(reminderNames);
    }
    
    //info going towards popup.js
    if(request.message === "getGenTimes"){
        console.log("sending reminder times: ", reminderTimes);
        sendResponse(reminderTimes);
    }

})

chrome.alarms.onAlarm.addListener(function(alarm) {
    console.log(alarm);
    chrome.notifications.create(
        {
            title: 'MyStudyBuddy',
            message: alarm.name,
            type: 'basic',
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/92/92386.png'

        }
    )
  });

