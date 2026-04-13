const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const prioritySelect = document.getElementById('prioritySelect');
const livePreview = document.getElementById('livePreview');
const message = document.getElementById('message');
const taskInput = document.getElementById('taskInput');


// take data
taskInput.addEventListener('input', function () {
    const text = taskInput.value.trim();
    if (text) {
        livePreview.textContent = `Preview: ${text}`;
    } else {
        livePreview.textContent = '';
    }
});


// SUBMIT EVENT
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (!taskText || !priority) {
        message.innerText = "Please enter task and select priority";
        message.className = "text-red-500";
        return;
    }

addTask(taskText, priority);

message.innerText = "Task added successfully!";
message.className = "text-green-500";

taskForm.reset();
livePreview.textContent = '';
});


// DELETE EVENT 
taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});


// ADD TASK FUNCTION
function addTask(taskText, priority) {
    const div = document.createElement("div");

    div.className =
        "bg-gray-700 p-3 rounded flex justify-between items-center fade-in hover:scale-105 transition duration-300";

    div.innerHTML = `
      <div>
        <p class="font-semibold">${taskText}</p>
        <p class="text-sm text-gray-300">Priority: ${priority}</p>
      </div>
      <button class="delete-btn bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition">
        Delete
      </button>
    `;

    taskList.appendChild(div);
}