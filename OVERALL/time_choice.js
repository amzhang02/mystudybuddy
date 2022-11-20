let queryString = location.search;
let water = queryString.split("water=")[1].split("&")[0];
let snack = queryString.split("snack=")[1].split("&")[0];
let stretch = queryString.split("stretch=")[1].split("&")[0];
let water30Clicked = false;
if(water == "false") {
  document.getElementById("waterSection").style.display = "none";
}
if(snack == "false") {
  document.getElementById("snackSection").style.display = "none";
}
if(stretch == "false") {
  document.getElementById("stretchSection").style.display = "none";
}
// Listeners
document.querySelector('#prevButton').onclick = function() {
  location.replace('reminder_choice.html' + queryString.split("&")[0]);
}
document.querySelector('#nextButton').onclick = function() {
  location.replace("blocked_choice.html" + location.search + "&morestuff=willaddlater")
}

document.querySelector('#mins30water').onclick = function() {
  water30Clicked = !water30Clicked;
  if(water30Clicked) {
    this.style.border = "1x solid blue";
  } else {
    this.style.border = "";
  }
}
