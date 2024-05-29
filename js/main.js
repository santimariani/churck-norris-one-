'use strict';

document.addEventListener('DOMContentLoaded', function () {
    getQuote();
    const fetchQuote = document.querySelector("#fetchQuote");
    fetchQuote.addEventListener('click', function () {
        getQuote();
    });
});

function getQuote() {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
        .then(
            function(response) {
                return response.json();
            }
        ).then(function (data) {
            return showQuote(data.value);
        });
}

function showQuote(quote) {
    const app = document.querySelector("#app");

    const quoteDisplay = document.createElement('p');
    quoteDisplay.innerText = quote;

    app.appendChild(quoteDisplay);
}