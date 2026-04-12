function searchWorks() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const items = document.querySelectorAll(".work-item");
    // ----------------------
// DARK MODE TOGGLE
// ----------------------

const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (toggleBtn) toggleBtn.textContent = "☀️ Light Mode";
}

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            toggleBtn.textContent = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });
}

    items.forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(query)
            ? "block"
            : "none";
    });
}
