document.addEventListener('DOMContentLoaded', function() {
    let timeElement = document.getElementById('current-time');
    let dayElement = document.getElementById('current-day');
    
    // Check if the elements exist
    if (!timeElement) {
        console.error("Element with ID 'current-time' not found");
        return;
    }
    if (!dayElement) {
        console.error("Element with ID 'current-day' not found");
        return;
    }

    // Set the current day once
    let d = new Date();
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDay = daysOfWeek[d.getDay()];
    dayElement.innerHTML = currentDay;

    // Function to update the time
    function updateTime() {
        let now = new Date();
        timeElement.innerHTML = now.toLocaleTimeString();
    }
    
    // Update the time immediately and then every second
    updateTime();
    setInterval(updateTime, 1000);
});

function showSideBar(){
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display='flex'
}
function hideSideBar(){
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display='none'
}
