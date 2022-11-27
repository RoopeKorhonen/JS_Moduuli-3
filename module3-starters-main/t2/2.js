//Add the following HTML code to the element with id="target"
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// Add class my-item to the second list item
'use strict';
let target = document.querySelector('#target')
let item_amount = parseInt(prompt('Give number of items'))
let items = []

// Luetaan nimet
for(let i = 0; i<item_amount; i++){
    items[i] = prompt('Item: ');
}


// Generoidaan html-lista
let html = '<ul class="my-list">';
html += '<ol>';
for(let i = 0; i< item_amount; i++){
    if (i === 1) {
        html += '<li>';
        html += '<ul class="my-item"></ul>'
        html += items[i];
        html += '</li>';
    }else{
    html += '<li>';
    html += items[i];
    html += '</li>';
    }
}

html += '</ol></ul>';
target.innerHTML = html
