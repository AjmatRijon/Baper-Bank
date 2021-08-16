document.getElementById('login-submit').addEventListener('click', function () {
    const emailfield = document.getElementById('user-email');
    const userEmail = emailfield.value;
    // console.log(userEmail);
    const passwordfield = document.getElementById('user-password');
    const userPassword = passwordfield.value;
    // console.log(userPassword);
    // get user password 
    // const passwordfield = document.getElementById('user-password');
    // const userPassword = passwordfield.Value;
    // console.log(userPassword);
    if (userEmail == 'abcd' && userPassword == 'abcd') {
        // console.log('valid');
        window.location.href = 'banking.html'
    }
    else{
        alert('wrong email and password')
    }
});
// document.getElementById('login-submit').addEventListener('click', function () {
//     const emailField = document.getElementById('user-email');
//     const userEmail = emailField.value;
//     console.log(userEmail);
// })

