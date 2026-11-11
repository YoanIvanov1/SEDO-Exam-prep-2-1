// Base functionality: add task, toggle complete, delete on double-click

const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

function addTask() {
  const text = input.value;
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
  input.value = '';
}

function toggleComplete(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
}

function deleteTask(e) {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
}

addBtn.addEventListener('click', addTask);
list.addEventListener('click', toggleComplete);
list.addEventListener('dblclick', deleteTask);
