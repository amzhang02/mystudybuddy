chrome.runtime.onInstalled.addListener(async() => {
    let url = chrome.runtime.getURL('buddy_choice.html');
    let tab = await chrome.tabs.create({url});
    console.log(`Created tab ${tab.id}`);
    });

let blockingList = ["instagram", "facebook"];

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
    alert(alarm.name);
});

/*

//reminder form
function openReminderForm() {
    var reminder_name = prompt("What do you want to name the reminder?");
    var reminder_time = prompt("How many minutes from now do you want to be reminded?");
    if (reminder_name == null || reminder_name == "" || reminder_time == null || reminder_time == ""){
      text = "The reminder was cancelled";
    }
    else{
      text = "Reminder '" + reminder_name + "'" + "set for " + reminder_time + " minutes from now.";
      user_reminders.push(reminder_name);
      chrome.alarms.create(reminder_name, {delayInMinutes : parseInt(reminder_time)} );
    }
    //document.getElementById("new reminder set").innerHTML = text;
  }

  function generalReminderForm(){
    text = "You will now occasionally get reminders to stretch, drink water, and take a break from studying.";
    chrome.alarms.create("drink water", {periodInMinutes : parseInt(1)} );
    chrome.alarms.create("stretch", {periodInMinutes : parseInt(2)} );
    chrome.alarms.create("take a break", {periodInMinutes : parseInt(3)} );
    //document.getElementById("new reminder set").innerHTML = text;
};


  function clearReminders(){
    chrome.alarms.clearAll();
    text = "All reminders cleared.";
    //document.getElementById("new reminder set").innerHTML = text;
  }

  function cleargenReminders(){
    chrome.alarms.clear("drink water");
    chrome.alarms.clear("strech");
    chrome.alarms.clear("take a break");
    text = "General reminders stopped.";
    //document.getElementById("new reminder set").innerHTML = text;
  }
  */