function searchWorks() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const items = document.querySelectorAll(".work-item");

    items.forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(query)
            ? "block"
            : "none";
    });
}

