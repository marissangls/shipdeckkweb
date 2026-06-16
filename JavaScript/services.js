document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.querySelector('.close-modal');
    const contactForm = document.getElementById('contactForm');

    if (contactBtn && contactModal && closeModal) {
        contactBtn.addEventListener('click', function (e) {
            e.preventDefault();
            contactModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        closeModal.addEventListener('click', function () {
            contactModal.style.display = 'none';
            document.body.style.overflow = '';
        });

        window.addEventListener('click', function (e) {
            if (e.target === contactModal) {
                contactModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    if (contactForm) {
        contactForm.setAttribute('novalidate', 'true');
        
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectSelect = document.getElementById('subject');
            const messageTextarea = document.getElementById('message');

            if (!nameInput.value.trim()) {
                alert("Please enter your name.");
                return;
            }

            if (nameInput.value.trim().length < 2) {
                alert("Name must be at least 2 characters.");
                return;
            }

            if (!emailInput.value.trim()) {
                alert("Please enter your email.");
                return;
            }

            if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
                alert("Please enter a valid email address.");
                return;
            }

            if (!subjectSelect.value) {
                alert("Please select a subject.");
                return;
            }

            if (!messageTextarea.value.trim()) {
                alert("Please enter your message.");
                return;
            }

            if (messageTextarea.value.trim().length < 10) {
                alert("Message must be at least 10 characters long.");
                return;
            }

            alert('Thank you for your message! We will get back to you soon.');
            contactModal.style.display = 'none';
            document.body.style.overflow = '';
            contactForm.reset();
        });
    }
});