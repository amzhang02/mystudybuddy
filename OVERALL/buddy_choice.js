let buddyChoice = ''
//variable for testing
//let user_choice = document.querySelector('#user_choice')

//For the Phrog button
phrogChoice = document.getElementById('phrog')
//phrogChoice.onclick = () => {console.log('phrog')}
document.querySelector('#phrog').onclick = function () {
    buddyChoice = 'phrog';
}
//For the Phox button
phoxChoice = document.getElementById('phox')
//phoxChoice.onclick = () => {console.log('phox')}
document.querySelector('#phox').onclick = function () {
    buddyChoice = 'phox';
}
//For the Phlamingo button
phlamingoChoice = document.getElementById('phlamingo')
//phlamingoChoice.onclick = () => {console.log('phlamingo')}
document.querySelector('#phlamingo').onclick = function () {
    buddyChoice = 'phlamingo';
}

//Button action for testing user input storage
/*
user_choice.addEventListener('click', function() {
    console.log(buddyChoice)
}) */
