let counter = 0; // เราสร้างตัวแปรด้วย let ชื่อว่า counter และกำหนดค่าเริ่มต้นเป็น 0

const visitFigma = () => {
    counter++; // ทุกครั้งที่ Function นี้ถูกเรียกใช้ ค่าของ counter จะเพิ่มขึ้น 1
    const topic = document.getElementById("blog-topic");
    const content = document.getElementById("blog-content");

    topic.innerHTML = "This is a SomTam guide! 📝";
    // content.innerHTML = "หยิบช้อน"
    content.innerHTML = "หยิบช้อน" + "<br/>" + "อ้าปาก" + "<br/>" + "เอาเข้าปาก" + "<br/>" + "enjoy ครับผม" + "<br/>" + "<br/>" + "Today we're going to eat SomTam. <br/>กินส้มตำไปแล้ว " + counter 

    // content.innerHTML = "หยิบช้อน"
    // content.innerHTML = "อ้าปาก"
    // content.innerHTML = "เอาเข้าปาก"
    // content.innerHTML = "Enjoy ครับผม"

    topic.style.color = "black"
}