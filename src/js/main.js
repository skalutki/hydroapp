"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// place your code below


const counter = document.querySelector('.form__glass__counter--js');

const currentValue = 0;

const addButton = document.querySelector('.form__button__add--js');

const subtractButton = document.querySelector('.form__button__subtract--js');



const key = new Date().toISOString().slice(0, 10);


addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const currentValue = parseInt(counter.innerHTML) + 1;
    counter.innerHTML = currentValue;
    localStorage.setItem(key, currentValue);
    chechFunction(currentValue);
    checkCounter(counter.innerHTML);


});

subtractButton.addEventListener('click', (e) => {
    e.preventDefault();
    const currentValue = parseInt(counter.innerHTML) - 1;
    counter.innerHTML = currentValue;
    localStorage.setItem(key, currentValue);
    checkFunction(currentValue);
    checkCounter(counter.innerHTML);


});


function checkFunction(checkFunction) {
    if (checkFunction < 0) {
        alert('Nie możesz zejść ponieżej zera!');
        counter.innerHTML = currentValue;
    }
}
const localKey = key;

if (counter.innerHTML = 0) {
    counter.innerHTML = localStorage.getItem(key);

}

console.log(counter.innerHTML);
console.log(localStorage.getItem(key));



/*if (checkStatus == 0) {
    const localKey = localStorage.getItem(key);
    counter.innerHTML = currentValue;
}

checkStatus.onstorage = event => {
    if (event.key != 0) {
        localKey = localStorage.getItem(key);
        counter.innerHTML = currentValue;
    }
}

if (key ==!0) {
    localStorage.setItem(key, 0);
}

if (counter == 0) {
    localStorage.getItem(key, currentValue);
    counter.innerHTML = currentValue
}

if (localStorage(key, currentValue) < 0) {
    alert("Nie możesz zejść ponieżej zera!");
    const currentValue = 0;
}*/