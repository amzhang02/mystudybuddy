let queryString = location.search;
let water = queryString.split("water=")[1].split("&")[0];
let snack = queryString.split("snack=")[1].split("&")[0];
let stretch = queryString.split("stretch=")[1].split("&")[0];

let water30Clicked = false;
let water60Clicked = false;
let water120Clicked = false;
let snack30Clicked = false;
let snack60Clicked = false;
let snack120Clicked = false;
let stretch30Clicked = false;
let stretch60Clicked = false;
let stretch120Clicked = false;

let waterTime = "none";
let snackTime = "none";
let stretchTime = "none";

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
  if (water == "true" && (water30Clicked == false && water60Clicked == false && water120Clicked == false)) {
    alert("Must select reminder time for water!");
  } else if (snack == "true" && (snack30Clicked == false && snack60Clicked == false && snack120Clicked == false)) {
    alert("Must select reminder time for snack!")
  } else if (stretch == "true" && (stretch30Clicked == false && stretch60Clicked == false && stretch120Clicked == false)) {
    alert("Must select reminder time for stretch!")
  } else {
    location.replace("blocked_choice.html" + location.search + 
    "&waterTime=" + waterTime + "&snackTime=" + snackTime + "&stretchTime=" + stretchTime)
  }
}

document.querySelector('#mins30water').onclick = function() {
  water30Clicked = !water30Clicked;
  if(water30Clicked) {
    this.style.border = "1px solid blue";
    waterTime = "30";
    mins60water.style.border = "";
    mins120water.style.border = "";
    water60Clicked = false;
    water120Clicked = false;
  } else {
    this.style.border = "";
  }
}

document.querySelector('#mins60water').onclick = function() {
  water60Clicked = !water60Clicked;
  if(water60Clicked) {
    this.style.border = "1px solid blue";
    waterTime = "60";
    mins30water.style.border = "";
    mins120water.style.border = "";
    water30Clicked = false;
    water120Clicked = false;
  } else {
    this.style.border = "";
  }
}

document.querySelector('#mins120water').onclick = function() {
  water120Clicked = !water120Clicked;
  if(water120Clicked) {
    this.style.border = "1px solid blue";
    waterTime = "120";
    mins30water.style.border = "";
    mins60water.style.border = "";
    water30Clicked = false;
    water60Clicked = false;
  } else {
    this.style.border = "";
  }
}

document.querySelector('#mins30snack').onclick = function() {
  snack30Clicked = !snack30Clicked;
  if(snack30Clicked) {
    this.style.border = "1px solid blue";
    snackTime = "30";
    mins60snack.style.border = "";
    mins120snack.style.border = "";
    snack60Clicked = false;
    snack120Clicked = false;
  } else {
    this.style.border = "";
  }
}

document.querySelector('#mins60snack').onclick = function() {
  snack60Clicked = !snack60Clicked;
  if(snack60Clicked) {
    this.style.border = "1px solid blue";
    snackTime = "60";
    mins30snack.style.border = "";
    mins120snack.style.border = "";
    snack30Clicked = false;
    snack120Clicked = false;
  } else {
    this.style.border = "";
  }
}

document.querySelector('#mins120snack').onclick = function() {
  snack120Clicked = !snack120Clicked;
  if(snack120Clicked) {
    this.style.border = "1px solid blue";
    snackTime = "120"
    mins30snack.style.border = "";
    mins60snack.style.border = "";
    snack30Clicked = false;
    snack60Clicked = false;
  } else {
    this.style.border = "";
  }
}

document.querySelector('#mins30stretch').onclick = function() {
  stretch30Clicked = !stretch30Clicked;
  if(stretch30Clicked) {
    this.style.border = "1px solid blue";
    stretchTime = "30";
    mins60stretch.style.border = "";
    mins120stretch.style.border = "";
    stretch60Clicked = false;
    stretch120Clicked = false;
  } else {
    this.style.border = "";
  }
}

document.querySelector('#mins60stretch').onclick = function() {
  stretch60Clicked = !stretch60Clicked;
  if(stretch60Clicked) {
    this.style.border = "1px solid blue";
    stretchTime = "60";
    mins30stretch.style.border = "";
    mins120stretch.style.border = "";
    stretch30Clicked = false;
    stretch120Clicked = false;
  } else {
    this.style.border = "";
  }
}

document.querySelector('#mins120stretch').onclick = function() {
  stretch120Clicked = !stretch120Clicked;
  if(stretch120Clicked) {
    this.style.border = "1px solid blue";
    stretchTime = "120";
    mins30stretch.style.border = "";
    mins60stretch.style.border = "";
    stretch30Clicked = false;
    stretch60Clicked = false;
  } else {
    this.style.border = "";
  }
}