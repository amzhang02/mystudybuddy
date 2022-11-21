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
var buddyStringAccess;
const button1 = document.getElementById("introbtn");
button1.addEventListener("click", clickyclick);
var buttonList = document.getElementsByClassName("button");

function clickyclick(){
    console.log("click");    
    //send message to SET
    chrome.runtime.sendMessage(
      {message: "setBuddy", buddy: "phlamingo"}, function(response){
        //console.log("ahhhhhhhhhhh: ", response);
      });

    //send message to GET
    chrome.runtime.sendMessage(
      {message: "getBuddy"}, function(response){
        console.log("ahhhhhhhhhhh: ", response);
        localStorage.setItem('buddy', response);
      });
    buddyStringAccess = './Images/'+localStorage.getItem('buddy')+'_copy.jpg';
    buddySwap();
    //idea for accessing alarms for background is through html, good luck self
}
let user_reminders = [];

//commented out to test background.js

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

    chrome.alarms.onAlarm.addListener(function(alarm) {
      console.log(alarm);
      alert(alarm.name);
    });
  }
  document.getElementById("new reminder set").innerHTML = text;
}

function generalReminderForm(){
  chrome.alarms.create("stretch", {periodInMinutes : parseInt(1)} );
  chrome.alarms.create("drink water", {periodInMinutes : parseInt(2)} );
  chrome.alarms.create("take a break", {periodInMinutes : parseInt(3)} );

  text = "You will now occasionally get reminders to stretch, drink water, and take a break from studying.";
}
function clearReminders(){
  chrome.alarms.clearAll();
  text = "All reminders cleared.";
  document.getElementById("new reminder set").innerHTML = text;
}

function cleargenReminders(){
  chrome.alarms.clear("drink water");
  chrome.alarms.clear("strech");
  chrome.alarms.clear("take a break");
  text = "General reminders stopped.";
  document.getElementById("new reminder set").innerHTML = text;
}

document.getElementById("reminderbtn").addEventListener("click", openReminderForm);
document.getElementById("genreminderbtn").addEventListener("click", generalReminderForm);
document.getElementById("clearUserReminders").addEventListener("click", clearReminders);
document.getElementById("clearGenReminders").addEventListener("click", cleargenReminders);

function buddySwap(){
  if(localStorage.getItem('buddy') == 'phrog'){
    for(let i = 0; i < buttonList.length; i++){
      buttonList[i].style.backgroundColor='#8ce3dc';
    }
    document.getElementById('buddy').src=buddyStringAccess;
  }
  else if(localStorage.getItem('buddy') == 'phox'){
    for(let i = 0; i < buttonList.length; i++){
      buttonList[i].style.backgroundColor='#fb9493';
    }
    document.getElementById('buddy').src=buddyStringAccess;

  }
  else if(localStorage.getItem('buddy') == 'phlamingo'){
    for(let i = 0; i < buttonList.length; i++){
      buttonList[i].style.backgroundColor='#fbcc34';
    }
    document.getElementById('buddy').src=buddyStringAccess;

  }
  else{
    for(let i = 0; i < buttonList.length; i++){
      buttonList[i].style.backgroundColor='#454f5a';
    }
    document.getElementById('buddy').src='./Images/msb_logo.jpg';
  }
}