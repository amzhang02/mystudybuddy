
chrome.runtime.sendMessage({message: "getAlarm"}, function(response){
    if(response == undefined){
        localStorage.setItem("customName", "Unnamed Alarm");
    }
    else{
        localStorage.setItem("customName", response);
        console.log("custom alarm sending: ", response);
    }
     //this is just a backup during coding to check that info saves
    document.getElementById("reminderName").textContent = response;
});

//There is a weird thing going on where the port closes before a response is received