document.addEventListener("DOMContentLoaded", function () {
    let taskList = document.getElementById("ft_list");
    let newTaskButton = document.getElementById("newTask");

    loadTasks(); // โหลดรายการที่เคยบันทึกไว้

    // กดปุ่มเพื่อเพิ่ม Task
    newTaskButton.addEventListener("click", function () {
        let taskText = prompt("Enter your new task:");
        if (taskText) {
            addTask(taskText);
            saveTasks();
        }
    });

    function addTask(taskText) {
        let taskDiv = document.createElement("div");
        taskDiv.className = "task";
        
        let span = document.createElement("span");
        span.textContent = taskText;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.className = "delete-btn";
        
        // คลิกเพื่อลบ
        deleteBtn.addEventListener("click", function () {
            if (confirm("Do you want to remove this task?")) {
                taskDiv.remove();
                saveTasks();
            }
        });

        taskDiv.appendChild(span);
        taskDiv.appendChild(deleteBtn);
        taskList.prepend(taskDiv); // เพิ่มรายการใหม่ที่ด้านบน
    }

    function saveTasks() {
        let tasks = [];
        document.querySelectorAll("#ft_list .task span").forEach(task => {
            tasks.push(task.textContent);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks)); // บันทึกลง localStorage
    }

    function loadTasks() {
        let savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            JSON.parse(savedTasks).forEach(taskText => addTask(taskText));
        }
    }
});
