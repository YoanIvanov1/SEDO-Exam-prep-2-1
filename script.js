// Base functionality: add task, toggle complete, delete on double-click

const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

function isTaskItem(element) {
  return element.tagName === 'LI';
}

function createTaskElement(text) {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
}

// Handlers
function addTask() {
  const text = input.value;
  list.appendChild(createTaskElement(text));
  input.value = '';
}

function toggleComplete(e) {
  if (isTaskItem(e.target)) {
    e.target.classList.toggle('completed');
  }
}

function deleteTask(e) {
  if (isTaskItem(e.target)) {
    e.target.remove();
  }
}

// Event listeners
addBtn.addEventListener('click', addTask);
list.addEventListener('click', toggleComplete);
list.addEventListener('dblclick', deleteTask);
