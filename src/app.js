import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  let itemsExcuse = [who, action, what, when];

  let generarRandom = array => array[Math.floor(Math.random() * array.length)]

  let generateExcuse = () => itemsExcuse.map(generarRandom).join(' ');

  document.getElementById("excuse").innerText = generateExcuse();

};
