let el = document.getElementById('stav-hry');
el.innerHTML = 'Nova hra';

let counter = 5;

function myfnc() {
    console.log("myFnc executed");
    el.innerHTML = counter;
    counter--;
    if (counter > 0) {
        setTimeout(myfnc, 1000);
    }
}

setTimeout(myfnc, 3000);

let card1a = document.getElementById('card1a');
let card1b = document.getElementById('card1b');
let card2a = document.getElementById('card2a');
let card2b = document.getElementById('card2b');
let card3a = document.getElementById('card3a');
let card3b = document.getElementById('card3b');
let card4a = document.getElementById('card4a');
let card4b = document.getElementById('card4b');

let isCard1aBackSide = true;
function clickCard1a() {
    if(isCard1aBackSide){
        card1a.innerHTML = '<img src="img/angry_cat.jpg" alt="angry_cat">';
    }else{
        card1a.innerHTML = '<img src="img/back_side.jpg" alt="back_side">';
    }
    isCard1aBackSide = !isCard1aBackSide
}

let isCard1bBackSide = true;
function clickCard1b() {
    if(isCard1aBackSide){
        card1b.innerHTML = '<img src="img/angry_cat.jpg" alt="angry_cat">';
    }else{
        card1b.innerHTML = '<img src="img/back_side.jpg" alt="back_side">';
    }
    isCard1bBackSide = !isCard1bBackSide
}

let isCard2aBackSide = true;
function clickCard2a() {
    if(isCard2aBackSide){
        card2a.innerHTML = '<img src="img/angry_dog.jpg" alt="angry_dog">';
    }else{
        card2a.innerHTML = '<img src="img/back_side.jpg" alt="back_side">';
    }
    isCard2aBackSide = !isCard2aBackSide
}

let isCard2bBackSide = true;
function clickCard2b() {
    if(isCard2bBackSide){
        card2b.innerHTML = '<img src="img/angry_dog.jpg" alt="angry_dog">';
    }else{
        card2b.innerHTML = '<img src="img/back_side.jpg" alt="back_side">';
    }
    isCard2bBackSide = !isCard2bBackSide
}

let isCard3aBackSide = true;
function clickCard3a() {
    if(isCard3aBackSide){
        card3a.innerHTML = '<img src="img/happy_cat.jpg" alt="happy_cat">';
    }else{
        card3a.innerHTML = '<img src="img/back_side.jpg" alt="back_side">';
    }
    isCard3aBackSide = !isCard3aBackSide
}

let isCard3bBackSide = true;
function clickCard3b() {
    if(isCard3bBackSide){
        card3b.innerHTML = '<img src="img/happy_cat.jpg" alt="happy_cat">';
    }else{
        card3b.innerHTML = '<img src="img/back_side.jpg" alt="back_side">';
    }
    isCard3bBackSide = !isCard3bBackSide
}

let isCard4aBackSide = true;
function clickCard4a() {
    if(isCard4aBackSide){
        card4a.innerHTML = '<img src="img/happy_dog.png" alt="happy_dog">';
    }else{
        card4a.innerHTML = '<img src="img/back_side.jpg" alt="back_side">';
    }
    isCard4aBackSide = !isCard4aBackSide
}

let isCard4bBackSide = true;
function clickCard4b() {
    if(isCard4bBackSide){
        card4b.innerHTML = '<img src="img/happy_dog.png" alt="happy_dog">';
    }else{
        card4b.innerHTML = '<img src="img/back_side.jpg" alt="back_side">';
    }
    isCard4bBackSide = !isCard4bBackSide
}