function openReminderForm() {
  var reminder_name = prompt("What do you want to name the reminder?");
  var reminder_time = prompt("How many minutes from now do you want to be reminded?");

  if (reminder_name == null || reminder_name == "" || reminder_time == null || reminder_time == ""){
    text = "The reminder was cancelled.";
  }
  else{
    text = "Reminder " + reminder_name + " set for " + reminder_time + " minutes from now.";

    chrome.alarms.create(reminder_name, {delayInMinutes : parseInt(reminder_time)} );

    chrome.alarms.onAlarm.addListener(function(alarm) {
      console.log(alarm);
      alert(alarm.name + " has fired!");
    });
  }
  document.getElementById("new reminder").innerHTML = text;
}

function openBlockForm(){
  siteSet = new Set();
  var site_name = prompt("Enter the URL of the website you want to block.");

  if (site_name == null || site_name == ""){
    text = "No webiste was blocked.";
  }

  else{
    siteSet.add(site_name)
    var blockedUrl = window.location.href;
    if siteSet.has(blockedUrl){
      text = blockedUrl + "was added to the block list."
      //copied from https://codereview.stackexchange.com/questions/229158/block-a-website-script-with-vanilla-javascript
      const regexToMatchTLD = /\.[^.]+$/;
      const domain = location.hostname.replace(regexToMatchTLD, '');
      document.body.innerHTML =`
          <div style="direction: ltr; position: fixed; top: 0; z-index: 999999; display: block; width: 100%; height: 100%; background: red">
            <p style="position: relative; top: 40%; display: block; font-size: 66px; font-weight: bold; color: #fff; margin: 0 auto; text-align: center">
              The website ${domain} successfully blocked !
            </p>
          </div>
    `;
    }


  }
  document.getElementById("new reminder").innerHTML = text;
}

document.getElementById("myButton").addEventListener("click", openReminderForm);
document.getElementById("blockButton").addEventListener("click", openBlockForm);
