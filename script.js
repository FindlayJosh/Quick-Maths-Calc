document.querySelector('.add').addEventListener('click', clickAdd) 
document.querySelector('.subtract').addEventListener('click', clickSubtract) 
document.querySelector('.multiply').addEventListener('click', clickMultiply) 
document.querySelector('.division').addEventListener('click', clickDivide) 



function clickAdd(){
let intialInput = document.querySelector('.initialInput').value
let secondaryInput = document.querySelector('.secondaryInput').value
var total = Number(intialInput) + Number(secondaryInput) /* "+" symbol will force the numbers to be concetrated, not added, 'var total = Number('whatever your class for number is') + Number('whatever your second class for number is')" */
document.querySelector('.results').innerText = total
}
function clickSubtract(){
let intialInput = document.querySelector('.initialInput').value
let secondaryInput = document.querySelector('.secondaryInput').value
let total = intialInput - secondaryInput
document.querySelector('.results').innerText = total
}
function clickMultiply(){
let intialInput = document.querySelector('.initialInput').value
let secondaryInput = document.querySelector('.secondaryInput').value
let total = intialInput * secondaryInput
document.querySelector('.results').innerText = total
}
function clickDivide(){
let intialInput = document.querySelector('.initialInput').value
let secondaryInput = document.querySelector('.secondaryInput').value
let total = intialInput / secondaryInput
document.querySelector('.results').innerText = total
}