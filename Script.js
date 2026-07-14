// تحديد العناصر من الـ HTML
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('mySidebar');

// دالة لفتح القائمة
menuBtn.addEventListener('click', () => {
    sidebar.style.width = "250px"; // عرض القائمة لما تفتح
});

// دالة لقفل القائمة
closeBtn.addEventListener('click', () => {
    sidebar.style.width = "0"; // إخفاء القائمة
});
