'use strict';
let list = document.getElementById('target');
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
for(let i = 0; i< 3; i++){
  let element = document.createElement('option')
  element.innerText = students[i]['name']
  element.value = students[i]['id']
  list.appendChild(element)
}

