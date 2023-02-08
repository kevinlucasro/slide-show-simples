'use strict'

const images = [
    {'id': '1', 'url': './img/marvel.jpeg'},
    {'id': '2', 'url': './img/marvel2.jpg'},
    {'id': '3', 'url': './img/marvel3.jpg'},
    {'id': '4', 'url': './img/marvel4.jpg'},
    {'id': '5', 'url': './img/marvel5.jpg'},
    {'id': '6', 'url': './img/marvel6.webp'},
]

const containerItems = document.querySelector('#container-items')

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
            <div class='item'>
            <img src='${image.url}'>
            </div>
        `
    })    
}

loadImages ( images, containerItems );

let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')

}
const next = () => {
    const lastItems = items[items.length - 1 ];
    containerItems.insertBefore(lastItems, items[0] );
}
document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);