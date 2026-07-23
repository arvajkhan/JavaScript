import {createCard} from './card.js';
export function renderStudents(students){
  const c=document.getElementById('studentContainer');
  c.innerHTML=students.map(createCard).join('');}