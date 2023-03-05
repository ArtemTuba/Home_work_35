"use strict"
const inputElement = document.querySelector('.element');
const radioGrowth = document.querySelector('.growth');
const radioDecrease = document.querySelector('.decrease');
let arrayNumber = [];
const bt = document.querySelector('.bt').addEventListener('click', event => {
    event.preventDefault();
    let inputNaumber = inputElement.value.split(',');
    arrayNumber = inputNaumber.map(number => {
        return Number(number);
    })
    if(radioGrowth.checked){
        arrayNumber.sort((a,b) => {
            return a - b;
        }) 
    }
    if (radioDecrease.checked){
        arrayNumber.sort((a,b) => {
            return b - a;
        }) 
    }
    document.querySelector(".form").reset();
    console.log(arrayNumber)
})






