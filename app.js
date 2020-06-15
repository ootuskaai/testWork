"use strict"

console.log('here is a hidden message');

let selectElement = document.getElementById('date');
selectElement.innerHTML = new Date().toDateString();

