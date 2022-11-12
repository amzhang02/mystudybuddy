let reminderChoice = ''
//variable for testing
//let user_choice = document.querySelector('#user_choice')

//For the Phrog button
waterChoice = document.getElementById('water')
//phrogChoice.onclick = () => {console.log('phrog')}
document.querySelector('#water').onclick = function () {
    reminderChoice = 'water';
    location.replace('time_choice.html')
}
//For the Phox button
phoxChoice = document.getElementById('snack')
//phoxChoice.onclick = () => {console.log('phox')}
document.querySelector('#snack').onclick = function () {
    reminderChoice = 'snack';
    //location.replace('reminder_choice.html')
}
//For the Phlamingo button
phlamingoChoice = document.getElementById('stretch')
//phlamingoChoice.onclick = () => {console.log('phlamingo')}
document.querySelector('#stretch').onclick = function () {
    reminderChoice = 'stretch';
    //location.replace('reminder_choice.html')
}