const pexesoGrid = document.getElementById('pexeso-grid');
const srcs = ['img/flowers1.jpeg', 'img/flowers2.jpg', 'img/flowers3.jpeg', 'img/flowers4.jpg'];
const cards = [];
const srcsPairs = [...srcs, ...srcs];
shuffleArray(srcsPairs)

function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

srcsPairs.forEach((src, index) => {
    const card = document.createElement('img');
    card.classList.add('card');
    card.setAttribute('id', 'card' + index);
    card.setAttribute('initial-src', src);
    card.src = src;
    card.addEventListener('click', () => changeCard(card.getAttribute('id')));
    pexesoGrid.appendChild(card);
    cards.push(card);
});

function changeCard(cardId){
    var current = document.getElementById(cardId)

    if(current.src.indexOf("flowers") !== -1){
        current.src = 'img/back_side.jpg'
        console.log('turning backside')
    }else{
        current.src = current.getAttribute('initial-src')
        console.log('turning frontside')
    }
}

document.addEventListener('DOMContentLoaded', function() {
    cards.forEach((card) => {
        card.src = 'img/back_side.jpg';
    });
});