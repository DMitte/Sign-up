$(document).ready(function () {
    $('#signup').validate({
        rules: {
            firstname: {
                required: true,
                digits: false,
                rangelength: [2, 10]
            },
            lastname: {
                required: true,
                digits: false,
                rangelength: [2, 10]
            },
            email: {
                required: true,
                email: true,
                digits: false,
            },
            password: {
                required: true,
                digits: false,
                rangelength: [2, 10]
            }
        },
        messages :{
            firstname:{
                required: 'First Name cannot be empty'
            },
            lastname:{
                required: 'Last Name cannot be empty'
            },
            email:{
                required: 'Looks like this is not an email'
            },
            password:{
                required: 'Password cannot be empty'
            }
        }

    });


});