document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form.input');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            // If the form is valid, you can submit it here
            console.log('Form is valid. Submitting...');
            // Uncomment the next line to actually submit the form
            // form.submit();
        }
    });

    function validateForm() {
        let isValid = true;
        
        // Validate Name
        const name = document.getElementById('exampleName');
        if (name.value.trim() === '') {
            setError(name, 'Name is required');
            isValid = false;
        } else {
            setSuccess(name);
        }
        
        // Validate Email
        const email = document.getElementById('exampleEmail');
        if (email.value.trim() === '') {
            setError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            setError(email, 'Provide a valid email address');
            isValid = false;
        } else {
            setSuccess(email);
        }
        
        // Validate Subject
        const subject = document.getElementById('exampleSubject');
        if (subject.value.trim() === '') {
            setError(subject, 'Subject is required');
            isValid = false;
        } else {
            setSuccess(subject);
        }
        
        // Validate Message
        const message = document.getElementById('exampleMessage');
        if (message.value.trim() === '') {
            setError(message, 'Message is required');
            isValid = false;
        } else {
            setSuccess(message);
        }
        
        return isValid;
    }

    function setError(element, message) {
        const inputControl = element.parentElement;
        const errorDisplay = document.createElement('div');
        
        // Remove any existing error message
        const existingError = inputControl.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        errorDisplay.classList.add('error-message');
        errorDisplay.innerText = message;
        inputControl.appendChild(errorDisplay);
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
    }

    function setSuccess(element) {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error-message');
        
        if (errorDisplay) {
            errorDisplay.remove();
        }
        
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
    }

    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});