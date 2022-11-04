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
    
    const button1 = document.getElementById("button1");
    console.log("test: ", button1);
    button1.addEventListener("click", changeColor);
    
    function changeColor(){
        //document.body.style.backgroundColor = 'pink';
        console.log("click");
        chrome.tabs.create({url: "ext_tab.html"});
    }

    function openReminderForm() {
        var reminder_name = prompt("What do you want to name the reminder?");
        var reminder_time = prompt("How many minutes from now do you want to be reminded?");
      
        if (reminder_name == null || reminder_name == "" || reminder_time == null || reminder_time == ""){
          text = "The reminder was cancelled";
        }
        else{
          text = "Reminder '" + reminder_name + "'" + "set for " + reminder_time + " minutes from now.";
      
          chrome.alarms.create(reminder_name, {delayInMinutes : parseInt(reminder_time)} );
      
          chrome.alarms.onAlarm.addListener(function(alarm) {
            console.log(alarm);
            alert(alarm.name);
          });
        }
        document.getElementById("new reminder set").innerHTML = text;
      }
    f
      function generalReminderForm(){
        text = "You will now occasionally get reminders to stretch, drink water, and take a break from studying.";

        chrome.alarms.create("drink water", {periodInMinutes : parseInt(1)} );
        chrome.alarms.create("stretch", {periodInMinutes : parseInt(2)} );
        chrome.alarms.create("take a break", {periodInMinutes : parseInt(3)} );

        chrome.alarms.onAlarm.addListener(function(alarm) {
          console.log(alarm);
          alert(alarm.name);
        });

        document.getElementById("new reminder set").innerHTML = text;
      }
    /*function surprise(){
        chrome.notifications.create({
            notificationsId? ,
            options: 
            callback?:function,
        });
    }
    
    function openTab(){
        chrome.tabs.create({});
    }*/
    
    document.getElementById("reminderbtn").addEventListener("click", openReminderForm);
    document.getElementById("genreminderbtn").addEventListener("click", generalReminderForm);