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

//ALL BUTTONS ON POP-UP CLICK EVENTS
document.getElementById("reminderbtn").addEventListener("click", openReminderForm);
document.getElementById("clearUserReminders").addEventListener("click", clearReminders);
document.getElementById("clearGenReminders").addEventListener("click", cleargenReminders);
document.getElementById("settings").addEventListener("click", setting);
var buttonList = document.getElementsByClassName("button");

var buddy = localStorage.getItem('buddy');
console.log("current buddy: ", buddy);
var buddyStringAccess = './Images/'+buddy+'_copy.jpg';

let user_reminders = []; //these are the custom reminders
let recurringReminders = []; //this is the general reminders
let recurringTimes = [];
var alarmCreated = false;

refresh(); //buddy is now automatically received upon opening


function refresh(){
  chrome.runtime.sendMessage(
   {message: "getBuddy"}, function(response){
     localStorage.setItem('buddy', response);
     buddySwap();
   });
   console.log("REFRESH")
   generalReminderForm();

}

function setting(){
  chrome.tabs.create({url:"buddy_choice.html"});
}

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
  console.log(text);
}

//THE IF STATEMENTS ARE NOT WORKING BUT THE INFORMATION IS ALL PASSED AND IT IS THERE
function generalReminderForm(){
  chrome.runtime.sendMessage({message: "getGeneralReminders"}, function(response){
    recurringReminders = response;
    console.log("received names: ", recurringReminders);
  });
  chrome.runtime.sendMessage({message:"getGenTimes"}, function(response){
    recurringTimes = response;
    console.log("received times: ", recurringTimes)
  });
  console.log("[0]: ", recurringReminders[0]);
  if(recurringReminders.includes("water")){
    let waterTime = reminderTimes[0];
    console.log("water alarm creation!");
    chrome.alarms.create("water", {periodInMinutes : parseInt(waterTime)} );
  }
  if(recurringReminders.includes("snack")){
    let snackTime = reminderTimes[1];
    console.log("snack alarm creation!");
    chrome.alarms.create("snack", {periodInMinutes : parseInt(snackTime)} );

  }
  if(recurringReminders.includes("stretch")){
    let stretchTime = reminderTimes[2];
    console.log("stretch alarm creation!");
    chrome.alarms.create("stretch", {periodInMinutes : parseInt(stretchTime)} );

  }
  console.log("You will now occasionally get reminders to stretch, drink water, and take a break from studying.");
  //document.getElementById("new reminder set").innerHTML = text;
}

function clearReminders(){
  chrome.alarms.clearAll();
  text = "All reminders cleared.";
  document.getElementById("new reminder set").innerHTML = text;
}

function cleargenReminders(){
  if(recurringReminders.includes("water")){
    chrome.alarms.clear("water");
  }
  if(recurringReminders.includes("snack")){
    chrome.alarms.clear("snack");
  }
  if(recurringReminders.includes("stretch")){
    chrome.alarms.clear("stretch");
  }
  console.log("General reminders stopped.");
  //document.getElementById("new reminder set").innerHTML = text;
}

function buddySwap(){
  buddy = localStorage.getItem('buddy');
  buddyStringAccess = './Images/'+buddy+'_copy.jpg';
  if(localStorage.getItem('buddy') == 'phrog'){
    for(let i = 0; i < buttonList.length; i++){
      buttonList[i].style.backgroundColor='#8ce3dc';
    }
    document.getElementById('buddy').src=buddyStringAccess;
  }
  else if(buddy == 'phox'){
    for(let i = 0; i < buttonList.length; i++){
      buttonList[i].style.backgroundColor='#fb9493';
    }
    document.getElementById('buddy').src=buddyStringAccess;

  }
  else if(buddy == 'phlamingo'){
    for(let i = 0; i < buttonList.length; i++){
      buttonList[i].style.backgroundColor='#fbcc34';
    }
    document.getElementById('buddy').src=buddyStringAccess;
  }
  else{
    for(let i = 0; i < buttonList.length; i++){
      buttonList[i].style.backgroundColor='#F8F8F8';
    }
    document.getElementById('buddy').src='./Images/msb_logo.jpg';
  }
}
