chrome.runtime.onInstalled.addListener(async() => {
    let url = chrome.runtime.getURL('buddy_choice.html');
    let tab = await chrome.tabs.create({url});
    console.log(`Created tab ${tab.id}`);
    });

let blockingList = ["instagram"];
let holder = ["instagram", "facebook", "twitter", "youtube"];
let buddy = '';
//when url in a tab changes this is activated
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){ 
    //console.log(tab.url);
    checkURL = tab.url.toLowerCase()
    /*if(checkURL.includes("buddy=")){
        let start = checkURL.indexOf("buddy=") + 6;
        let end = checkURL.indexOf("&&&")
        let buddyMessage = checkURL.substring(start,end);
        //console.log("TESTTEST: ", buddyMessage)
    }*/
    for(let i = 0; i < blockingList.length; i++){
        if(checkURL.includes(blockingList[i])){
        let oops = chrome.runtime.getURL('../Images/Phox_copy.jpg')
        chrome.tabs.update(null, {url: oops});
        }
    }
});
//background listening for messages
//messages include: buddy request, buddy send
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log("ugh");

    if(request.message === "setBuddy"){
        console.log("setting");
        buddy = request.buddy
        sendResponse("set: ", buddy);
    }

    if(request.message === "getBuddy"){
        console.log("get bestie");
        sendResponse(buddy);
    }
    
    

})

/*chrome.runtime.onMessage.addListener(function(message,sender,response){
    if(messsage == "buddy"){
        console.log("kk it went: ", message);
        localStorage.setItem('buddy', "phox");
        sendResponse({response: "let's see"});
    }
    else if(message.name == "generalReminders"){
        
    }
    else if(message.name == "timers"){

    }
    else if(message.name == "blockers"){

    }
});*/

//alarms! woo!
chrome.alarms.onAlarm.addListener((alarm) =>{
    console.log(alarm.name); //ok so this DOES hear the alarms when the popup part closes
    
});
