'use strict';
const names = ['John', 'Paul', 'Jones'];
let target = document.querySelector('#target')
let html = '<ol>';
for(let i = 0; i< 3; i++){
    html += '<li>';
    html += names[i];
    html += '</li>';
}

html += '</ol>';
target.innerHTML = html