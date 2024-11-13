document.addEventListener("DOMContentLoaded", () => {
    const bookAbbreviations = document.querySelectorAll(".book-abbreviation");

    bookAbbreviations.forEach(abbreviation => {
        abbreviation.addEventListener("mouseenter", (event) => {
            const tooltip = document.createElement("div");
            tooltip.className = "fullname-tooltip";
            tooltip.textContent = event.target.getAttribute("data-fullname");
            document.body.appendChild(tooltip);

            const rect = event.target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
            tooltip.style.display = "block";
        });

        abbreviation.addEventListener("mouseleave", () => {
            const tooltip = document.querySelector(".fullname-tooltip");
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});
