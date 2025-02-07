$(document).ready(function () {
    loadTasks();

    // เพิ่ม Task เมื่อกดปุ่ม
    $("#newTask").click(function () {
        let taskText = prompt("Enter your new task:");
        if (taskText) {
            addTask(taskText);
            saveTasks();
        }
    });

    // ฟังก์ชันเพิ่ม Task
    function addTask(taskText) {
        let taskDiv = $("<div>").addClass("task");
        let span = $("<span>").text(taskText);
        let deleteBtn = $("<button>").addClass("delete-btn").text("❌");

        // คลิกปุ่มลบ
        deleteBtn.click(function () {
            if (confirm("Do you want to remove this task?")) {
                taskDiv.remove();
                saveTasks();
            }
        });

        taskDiv.append(span, deleteBtn);
        $("#ft_list").prepend(taskDiv);
    }

    // ฟังก์ชันบันทึก Tasks ลง localStorage
    function saveTasks() {
        let tasks = [];
        $("#ft_list .task span").each(function () {
            tasks.push($(this).text());
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // ฟังก์ชันโหลด Tasks จาก localStorage
    function getCookie(name) {
        let nameEQ = name + "=";
        let cookiesArray = document.cookie.split("; ");
        for (let i = 0; i < cookiesArray.length; i++) {
            let cookie = cookiesArray[i];
            if (cookie.indexOf(nameEQ) === 0) {
                return decodeURIComponent(cookie.substring(nameEQ.length));
            }
        }
        return null;
    }
});
