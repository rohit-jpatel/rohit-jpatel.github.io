document.addEventListener("DOMContentLoaded", () => {
    const listContainers = document.querySelectorAll(".job");

    listContainers.forEach((container) => {
        const listItems = container.querySelectorAll(".list li");
        const readMoreButton = container.querySelector(".read-more-btn");

        const itemsToShow = 3; // Number of items to show initially
        let isExpanded = false;

        // Initially hide all items beyond the first 3
        listItems.forEach((item, index) => {
            if (index >= itemsToShow) {
                item.style.display = "none";
            }
        });

        readMoreButton.addEventListener("click", () => {
            if (isExpanded) {
                // Hide additional items
                listItems.forEach((item, index) => {
                    if (index >= itemsToShow) {
                        item.style.display = "none";
                    }
                });
                readMoreButton.textContent = "Read More";
            } else {
                // Show all items
                listItems.forEach((item) => {
                    item.style.display = "list-item";
                });
                readMoreButton.textContent = "Read Less";
            }
            isExpanded = !isExpanded; // Toggle the state
        });
    });
});
