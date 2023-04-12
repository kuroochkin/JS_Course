const box = document.getElementById('box'),
        btns = document.getElementsByTagName('button')[1],
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        wrapper = document.querySelector('.wrapper');
        
hearts.forEach(item => {
    console.log(item);
});

box.style.backgroundColor = 'blue';
box.style.width = '500px';

// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
const text  = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.prepend(div);

circles[0].remove();

div.innerHTML = "Hello World!";

