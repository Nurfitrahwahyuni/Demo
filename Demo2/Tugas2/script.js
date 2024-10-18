const todoList = document.getElementById('todo-list');
const completedList = document.getElementById('completed-list');

function addItem() {
    const newItemText = document.getElementById('new-item').value;
    if (newItemText) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${newItemText}
            <div class="icons">
                <button onclick="completeItem(this)"><i class="fa-solid fa-square-check"></i></button>
                <button onclick="editItem(this)"><i class="fas fa-pencil-alt"></i></button>
                <button onclick="removeItem(this)"><i class="fas fa-trash"></i></button>
            </div>
        `;
        todoList.appendChild(li);
        document.getElementById('new-item').value = '';
    }
}

function completeItem(button) {
    const li = button.parentElement.parentElement;
    completedList.appendChild(li);
    button.parentElement.innerHTML = `
        <button onclick="removeItem(this)"><i class="fas fa-trash"></i></button>
    `;
}

function editItem(button) {
    const li = button.parentElement.parentElement;
    const currentText = li.childNodes[0].nodeValue.trim();
    const newText = prompt("Edit task:", currentText);
    if (newText) {
        li.childNodes[0].nodeValue = newText;
    }
}

function removeItem(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}
