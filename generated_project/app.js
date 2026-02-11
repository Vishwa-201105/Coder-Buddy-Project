// Task Management Application
// ------------------------------------------------------------
// Data Model
class Task {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
}

// In‑memory store
let tasks = [];

// ------------------------------------------------------------
// Persistence Layer
function loadTasks() {
  const raw = localStorage.getItem('tasks');
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      // Re‑instantiate as Task objects
      tasks = parsed.map(t => new Task(t.id, t.text, t.completed));
    } catch (e) {
      console.error('Failed to parse tasks from localStorage', e);
      tasks = [];
    }
  } else {
    tasks = [];
  }
  renderTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ------------------------------------------------------------
// Rendering
function renderTasks() {
  const listEl = document.getElementById('task-list');
  if (!listEl) return;
  // clear existing items
  listEl.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.dataset.id = task.id;

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleComplete(task.id));

    // Text span
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;
    if (task.completed) {
      span.classList.add('completed');
    }

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', () => deleteTask(task.id));

    // Assemble
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    listEl.appendChild(li);
  });
}

// ------------------------------------------------------------
// Task Operations
function addTask(text) {
  const id = Date.now(); // simple unique id
  const task = new Task(id, text);
  tasks.push(task);
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
}

function toggleComplete(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
  }
}

function clearCompleted() {
  tasks = tasks.filter(t => !t.completed);
  saveTasks();
  renderTasks();
}

// ------------------------------------------------------------
// Event Listeners (DOM ready)
document.addEventListener('DOMContentLoaded', () => {
  loadTasks();

  const addBtn = document.getElementById('add-task-btn');
  const input = document.getElementById('new-task-input');
  const clearBtn = document.getElementById('clear-completed-btn');

  if (addBtn && input) {
    addBtn.addEventListener('click', () => {
      const text = input.value.trim();
      if (text) {
        addTask(text);
        input.value = '';
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearCompleted();
    });
  }
});

// ------------------------------------------------------------
// Export for testing (optional)
window.Task = Task;
window.addTask = addTask;
window.deleteTask = deleteTask;
window.toggleComplete = toggleComplete;
window.clearCompleted = clearCompleted;
window.loadTasks = loadTasks;
window.saveTasks = saveTasks;
