document.addEventListener('DOMContentLoaded', function () {
    const successModal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close-modal');
    const closeSuccessBtn = document.getElementById('closeSuccessBtn');
    
    const continueBtn = document.querySelector('#successModal button');
    if (continueBtn) {
        continueBtn.classList.add('continue-btn');
    }

    if (closeModal) {
        closeModal.addEventListener('click', function () {
            successModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', function () {
            successModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    window.addEventListener('click', function (e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    const subscribeForm = document.getElementById('subscribeForm');

    if (subscribeForm) {
        subscribeForm.setAttribute('novalidate', 'true');
        
        subscribeForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const ageInput = document.getElementById('age');
            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = document.getElementById('confirmPassword');
            const interestCheckboxes = document.querySelectorAll('input[name="interests"]');

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

            if (!ageInput.value.trim()) {
                alert("Please enter your age.");
                return;
            }

            const age = parseInt(ageInput.value);
            if (isNaN(age)) {
                alert("Please enter a valid number for age.");
                return;
            }

            if (age < 18) {
                alert("You must be at least 18 years old.");
                return;
            }

            if (age > 100) {
                alert("Please enter a valid age.");
                return;
            }

            if (!passwordInput.value) {
                alert("Please enter a password.");
                return;
            }

            if (passwordInput.value.length < 8) {
                alert("Password must be at least 8 characters.");
                return;
            }

            const hasNumber = /\d/.test(passwordInput.value);
            if (!hasNumber) {
                alert("Password must contain at least one number.");
                return;
            }

            if (!confirmPasswordInput.value) {
                alert("Please confirm your password.");
                return;
            }

            if (confirmPasswordInput.value !== passwordInput.value) {
                alert("Passwords do not match.");
                return;
            }

            let interestSelected = false;
            interestCheckboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    interestSelected = true;
                }
            });

            if (!interestSelected) {
                alert("Please select at least one interest.");
                return;
            }

            successModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            subscribeForm.reset();
        });
    }
});