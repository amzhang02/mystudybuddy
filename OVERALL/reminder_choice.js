// Variables
let reminderChoice = ''
let waterClicked = false;
let snackClicked = false;
let stretchClicked = false;

//variable for testing
//let user_choice = document.querySelector('#user_choice')

document.querySelector('#prevButton').onclick = function() {
  location.replace('buddy_choice.html')
}

document.querySelector('#nextButton').onclick = function() {
  if(waterClicked || snackClicked || stretchClicked){
    location.replace("time_choice.html" + location.search + "&water=" + waterClicked + "&snack=" + snackClicked + "&stretch=" + stretchClicked)
  } else {
    alert("Must select at least one option!");
  }
}

//For the Phrog button
document.querySelector('#water').onclick = function () {
    waterClicked = !waterClicked;
    if(waterClicked) {
      this.style.border = "1px solid blue";
    } else {
      this.style.border = "";
    }
}
//For the Phox button
document.querySelector('#snack').onclick = function () {
    snackClicked = !snackClicked;
    if(snackClicked) {
      this.style.border = "1px solid blue";
    } else {
      this.style.border = "";
    }
}
//For the Phlamingo button
document.querySelector('#stretch').onclick = function () {
    stretchClicked = !stretchClicked;
    if(stretchClicked) {
      this.style.border = "1px solid blue";
    } else {
      this.style.border = "";
    }
}
