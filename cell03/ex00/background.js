// ฟังก์ชันสร้างสีแบบสุ่ม
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// ดึงปุ่มจากหน้า HTML
let button = document.getElementById("changeColorBtn");

// เพิ่ม event listener ให้ปุ่ม เมื่อคลิกให้เปลี่ยนสีพื้นหลัง
button.addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});
