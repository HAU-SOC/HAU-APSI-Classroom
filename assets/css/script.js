// script.js

// 1. Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                maroon: '#6B1D2E',
                'maroon-dark': '#4a1320',
                gold: '#D4952A',
                'gold-light': '#F5C45A',
            }
        }
    }
};

// 2. Initialize Lucide Icons
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});
