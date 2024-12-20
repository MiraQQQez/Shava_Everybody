document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.querySelector('.menu-container');
    if (menuContainer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });
        
        observer.observe(menuContainer);
    }
}); 