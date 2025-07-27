document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const menuCategoryButtons = document.querySelectorAll('.menu-category-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    // Hamburger Menu Toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked (for single-page navigation)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Menu Category Filtering
    if (menuCategoryButtons.length > 0 && menuItems.length > 0) {
        menuCategoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;

                // Remove active class from all buttons
                menuCategoryButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to the clicked button
                button.classList.add('active');

                // Hide all menu items
                menuItems.forEach(item => {
                    item.style.display = 'none';
                });

                // Show items belonging to the selected category
                document.querySelectorAll(`.menu-item.${category}`).forEach(item => {
                    item.style.display = 'block'; // Or 'grid-item' if using grid-specific display
                });
            });
        });

        // Initially show "Starters" when the page loads
        document.querySelector('.menu-category-btn[data-category="starters"]').click();
    }

    // Add more JavaScript here for search functionality,
    // scroll animations, image sliders, etc. if you plan to add them.
});