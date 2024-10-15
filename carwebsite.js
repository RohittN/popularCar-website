document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const submitButton = document.querySelector('input[type="submit"]');

    function showError(input, message) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message') || document.createElement('small');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        if (!formControl.querySelector('.error-message')) {
            formControl.appendChild(errorElement);
        }
        input.classList.add('error');
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message');
        if (errorElement) {
            formControl.removeChild(errorElement);
        }
        input.classList.remove('error');
        input.classList.add('success');
    }
    
    function validateEmail(input) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (re.test(input.value.trim())) {
            showSuccess(input);
            return true;
        } else {
            showError(input, 'Invalid email format');
            return false;
        }
    }

    function validatePhone(input) {
        const re = /^[0-9]{10}$/;
        if (re.test(input.value.trim())) {
            showSuccess(input);
            return true;
        } else {
            showError(input, 'Invalid phone number format');
            return false;
        }
    }

    function validatePassword(input) {
        if (input.value.length >= 6) {
            showSuccess(input);
            return true;
        } else {
            showError(input, 'Password must be at least 6 characters');
            return false;
        }
    }

    function validateUsername(input) {
        if (validateEmail(input) || validatePhone(input)) {
            return true;
        }
        showError(input, 'Please enter a valid email or phone number');
        return false;
    }

    usernameInput.addEventListener('blur', function() {
        validateUsername(this);
    });

    passwordInput.addEventListener('blur', function() {
        validatePassword(this);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;
        isValid = validateUsername(usernameInput) && isValid;
        isValid = validatePassword(passwordInput) && isValid;

        if (isValid) {
            // Simulate login process
            submitButton.value = 'Logging in...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Login successful!');
                window.location.href = 'Carswebsite.html';
                form.submit(); 
            }, 1500);
        }
    });
});