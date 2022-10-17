
function openReminderForm() {
var reminder_name = prompt("What do you want to name the reminder?");
var reminder_time = prompt("How many minutes from now do you want to be reminded?");

if (reminder_name == null || reminder_name == "" || reminder_time == null || reminder_time == ""){
  text = "The reminder was cancelled";
}

else{
  text = "Reminder " + reminder_name + " set for " + reminder_time + " minutes from now.";
<<<<<<< Updated upstream:alarms/alarms.js
  document.getElementById("new reminder").innerHTML = text;
  chrome.alarms.create(reminder_name, {delayInMinutes: parseInt(reminder_time), } );
=======

  chrome.alarms.create(reminder_name, {delayInMinutes : parseInt(reminder_time)} );
  document.getElementById("new reminder").innerHTML = text;
>>>>>>> Stashed changes:alarms.js

  chrome.alarms.onAlarm.addListener(function(alarm){
    console.log(alarm)
  });
}
document.getElementById("new reminder").innerHTML = text;
}