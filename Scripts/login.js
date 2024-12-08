$(document).ready(function () {
    function validateName() {
        var name = $('#name').val();
        if (name === '') {
            $('#name-error').fadeIn();
            return false;
        } else {
            $('#name-error').fadeOut();
            return true;
        }
    }

    function validateEmail() {
        var email = $('#email').val();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //regex pattern for email
        if (email === '' || !emailPattern.test(email)) {
            $('#email-error').fadeIn();
            return false;
        } else {
            $('#email-error').fadeOut();
            return true;
        }
    }

    function validatePhone() {
        var phone = $('#phone').val();
        var phonePattern = /^\d{8,}$/; //regex pattern for phone number (8 digits or more)
        if (phone === '' || !phonePattern.test(phone)) {
            $('#phone-error').fadeIn();
            return false;
        } else {
            $('#phone-error').fadeOut();
            return true;
        }
    }

    $('#name').on('input', validateName);
    $('#email').on('input', validateEmail);
    $('#phone').on('input', validatePhone);

    $('#form').submit(function (event) {
        event.preventDefault();
        var valid = true;

        if (!validateName()) {
            $('#name').addClass('shake');
            valid = false;
        } else {
            $('#name').removeClass('shake');
        }

        if (!validateEmail()) {
            $('#email').addClass('shake');
            valid = false;
        } else {
            $('#email').removeClass('shake');
        }

        if (!validatePhone()) {
            $('#phone').addClass('shake');
            valid = false;
        } else {
            $('#phone').removeClass('shake');
        }

        if (valid) {
            alert('Form submitted successfully!');
            this.submit();
        } else {
            setTimeout(function() {
                $('.shake').removeClass('shake');
            }, 500);
        }
    });
});

// function openLoginModal() {
//     document.getElementById('loginModal').style.display = 'flex';
// }

// function closeLoginModal() {
//     document.getElementById('loginModal').style.display = 'none';
// }

// window.onload = function () {
//     openLoginModal();
// };