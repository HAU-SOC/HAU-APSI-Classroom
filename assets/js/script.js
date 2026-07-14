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

// 2. Interactive Logic
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Icons
    lucide.createIcons();

    // Select the elements
    const mod1Trigger = document.getElementById('module-1-trigger');
    const mod1Content = document.getElementById('module-1-content');
    const closeMod1Btn = document.getElementById('close-module-1');

    // Make sure the elements exist on the page before adding listeners
    if (mod1Trigger && mod1Content && closeMod1Btn) {
        
        // Open Lesson Event
        mod1Trigger.addEventListener('click', () => {
            // Remove the 'hidden' class to reveal the content
            mod1Content.classList.remove('hidden');
            
            // Smooth scroll to the newly opened lesson
            mod1Content.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        // Close Lesson Event
        closeMod1Btn.addEventListener('click', () => {
            // Add the 'hidden' class back to hide the content
            mod1Content.classList.add('hidden');
            
            // Optional: Smooth scroll back up to the modules grid
            document.getElementById('modules').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});
