//background.js file used to help create this, so we know what to credit

chrome.runtime.onInstalled.addListener(async () => {
//addListener is listening to what we want to do when this opens
    let url = chrome.runtime.getURL("pop-up.html");
    //open the html file with the name
    let tab = await chrome.tabs.create({ url });
    //the tab create command within chrome will return a tab that shows what is in the url (the html)
    console.log(`Created tab ${tab.id}`);
    //console log the ID of the tab so we know it's working
});

//b1.addEventListener("click", surprise());

function surprise(){
    
    //alert("SURPRISE!\nIt works! Wooooooooooooo!");

}