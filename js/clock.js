'use strict;';

let firstName = prompt('Ad girin');
console.log(firstName);
let userName = document.querySelector('#myName');
userName.innerHTML = firstName;
// userName.innerHTML = 'yasin';

function displayTime() {
  const dateTime = new Date();
  const hrs = dateTime.getHours();
  const min = dateTime.getMinutes();
  const sec = dateTime.getSeconds();
  document.querySelector('.hrs').innerHTML = hrs;
  document.querySelector('.min').innerHTML = min;
  document.querySelector('.sec').innerHTML = sec;
}

setInterval(displayTime, 10);
