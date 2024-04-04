document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todoInput");
    const addButton = document.getElementById("addButton");
    const todoList = document.getElementById("todoList");
    const taskCount = document.getElementById("taskCount");
  
    let taskId = 0;
  
    addButton.addEventListener("click", function () {
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <input type="checkbox" id="task-${taskId}">
          <label for="task-${taskId}">${todoText}</label>
          <span class="delete-btn">❌</span>
        `;
        taskId++;
        todoList.appendChild(listItem);
        updateTaskCount();
        todoInput.value = "";
  
        const deleteBtn = listItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function () {
          listItem.remove();
          updateTaskCount();
        });
  
        const checkbox = listItem.querySelector("input[type='checkbox']");
        checkbox.addEventListener("change", function () {
          if (checkbox.checked) {
            listItem.classList.add("task-completed");
          } else {
            listItem.classList.remove("task-completed");
          }
        });
      }
    });
  
    function updateTaskCount() {
      const tasks = document.querySelectorAll("li").length;
      taskCount.textContent = `Total tasks: ${tasks}`;
    }
  });
  