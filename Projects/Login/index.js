function changeDiv() {
    let login = document.querySelector('.login');
    let signup = document.querySelector('.register');

    if (login.classList.contains("hidden")) {
      login.classList.remove("hidden");
      signup.classList.add("hidden");
    } else {
      login.classList.add("hidden");
      signup.classList.remove("hidden");
    }
}
let username = document.getElementById('#username').value;
let password = document.getElementById('#password').value;

console.log(password + "DKDJDJJDJD");
    
/*
If password includes Capital Letter, numbers, special characters and is longer than 8 characters
then allow the password, if one case doesnt work then password not allowed
*/
function isPasswordValid(pass) {
    const isUpperCase = /[A-Z]/.test(pass);
    const isNumber = /\d/.test(pass);
    const isSpecial = /[!@#$%^&*()_+-={}\[\]:;'"\\|<>,./?~`]/.test(pass);
    const isLong = password.length >= 8;

    return isUpperCase && isNumber && isSpecial && isLong;
}

isPasswordValid(password);