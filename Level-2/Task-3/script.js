let pendingList = document.getElementById("pendingList");
let completedList = document.getElementById("completedList");

function addTask() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    if (title === "" || description === "") {
        alert("Please fill all fields");
        return;
    }

    let date = new Date().toLocaleString();

    let li = document.createElement("li");
    li.innerHTML = `
        <strong>${title}</strong>
        <p>${description}</p>
        <small>Added: ${date}</small>
        <div class="task-buttons">
            <button class="complete" onclick="completeTask(this)">Complete</button>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    pendingList.appendChild(li);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}

function completeTask(btn) {
    let li = btn.parentElement.parentElement;
    let completedDate = new Date().toLocaleString();

    li.querySelector(".complete").remove();
    li.innerHTML += `<small>Completed: ${completedDate}</small>`;
    completedList.appendChild(li);
}

function editTask(btn) {
    let li = btn.parentElement.parentElement;
    let title = li.querySelector("strong");
    let desc = li.querySelector("p");

    let newTitle = prompt("Edit Title", title.innerText);
    let newDesc = prompt("Edit Description", desc.innerText);

    if (newTitle && newDesc) {
        title.innerText = newTitle;
        desc.innerText = newDesc;
    }
}

function deleteTask(btn) {
    let li = btn.parentElement.parentElement;
    li.remove();
}
