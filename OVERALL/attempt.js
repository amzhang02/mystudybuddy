

chrome.addEventListener('load', ()=> {
    console.log("Failed access");
    //not currently working
});
var str = "";
function loadBud(){
    chrome.runtime.sendMessage(
    {message: "getBuddy"}, function(response){
        console.log("omg");
        str = './Images/'+response+'_copy.jpg';
        document.getElementById('buddy').src='./Images/',response,'_copy.jpg';
    });
}  
