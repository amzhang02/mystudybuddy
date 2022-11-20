buddyChoice = '';
let phrogClicked = false;
let phoxClicked = false;
let phlamingoClicked = false;
//variable for testing
//let user_choice = document.querySelector('#user_choice')

document.querySelector('#nextButton').onclick = function () {
    if(phrogClicked) {
        buddyChoice = 'phrog';
        location.replace('reminder_choice.html?buddy=phrog&&&');
    } else if(phoxClicked) {
        buddyChoice = 'phox';
        location.replace('reminder_choice.html?buddy=phox&&&');
    } else if(phlamingoClicked) {
        buddyChoice = 'phlamingo';
        location.replace('reminder_choice.html?buddy=phlamingo&&&');
    } else {
        alert("You must select a buddy to continue!");
    }
}

//For the Phrog button
document.querySelector('#phrog').onclick = function () {
    phrogClicked = !phrogClicked;
    if(phrogClicked) {
        this.style.border = "1px solid blue";
        phox.style.border = "";
        phlamingo.style.border = "";
        phoxClicked = false;
        phlamingoClicked = false;
    } else {
        this.style.border = "";
    }
}
//For the Phox button
document.querySelector('#phox').onclick = function () {
    phoxClicked = !phoxClicked;
    if(phoxClicked) {
        this.style.border = "1px solid blue";
        phrog.style.border = "";
        phlamingo.style.border = "";
        phrogClicked = false;
        phlamingoClicked = false;
    } else {
        this.style.border = "";
    }
}
//For the Phlamingo button
document.querySelector('#phlamingo').onclick = function () {
    phlamingoClicked = !phlamingoClicked;
    if(phlamingoClicked) {
        this.style.border = "1px solid blue";
        phrog.style.border = "";
        phox.style.border = "";
        phrogClicked = false;
        phoxClicked = false;
    } else {
        this.style.border = "";
    }
}
