const calendar = document.getElementById("calendar");
const monthTitle = document.getElementById("monthTitle");
const hiddenDate = document.getElementById("selectedDate");

const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");

let currentYear = 2026;
let currentMonth = 0; // January

const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
];

function renderCalendar() {
    calendar.innerHTML = "";
    monthTitle.innerText = `${monthNames[currentMonth]} ${currentYear}`;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        empty.className = "day empty";
        calendar.appendChild(empty);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
        const div = document.createElement("div");
        div.className = "day";
        div.innerText = day;

        div.onclick = () => {
            document.querySelectorAll(".day").forEach(d => d.classList.remove("active"));
            div.classList.add("active");

            const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            hiddenDate.value = formattedDate;
        };

        calendar.appendChild(div);
    }
}

// Navigation
//
nextBtn.onclick = () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    renderCalendar();
};

prevBtn.onclick = () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    renderCalendar();
};

// Initial load
renderCalendar();
