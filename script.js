






































































let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');


priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();
  let itemImportant = document.createElement('li');
  if (priority.classList.contains('is-important')) {
    itemImportant.classList.add('is-important');
  } 
  itemImportant.textContent = input.value;
  list.append(itemImportant);
  input.value = '';
};

