document.addEventListener('DOMContentLoaded', function() {
    const testimonialContainer = document.querySelector('.testimonial-cards');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonialContainer && prevBtn && nextBtn) {
        const cardWidth = 300; 
        
        prevBtn.addEventListener('click', function() {
            testimonialContainer.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            testimonialContainer.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        });
    }
});