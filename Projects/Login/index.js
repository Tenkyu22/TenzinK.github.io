let login = document.querySelector('.login');
let signup = document.querySelector('.register');
function changeDiv() {
    if (login.classList.contains("hidden")) {
      login.classList.remove("hidden");
      signup.classList.add("hidden");
    } else {
      login.classList.add("hidden");
      signup.classList.remove("hidden");
    }
}
    
/*
If password includes Capital Letter, numbers, special characters and is longer than 8 characters
then allow the password, if one case doesnt work then password not allowed
*/
function isPasswordValid(pass) {
    const isUpperCase = /[A-Z]/.test(pass);
    const isNumber = /[0-9]/.test(pass);
    const isSpecial = /[!@#$%^&*()_+-={}\[\]:;'"\\|<>,./?~`]/.test(pass);
    const isLong = pass.length >= 8;
    return isUpperCase && isNumber && isSpecial && isLong;
}

function isUsernameNew(user) {

}


let profiles = [[["John2", "JohnDoe@gmail.com"], "Hello89)"], [["Nat22", "Natlia@gmail.com"], "News89))"]];



const signUp = document.getElementById('btn-signup');
signUp.addEventListener('click', () => {
  const passBox = document.getElementById('newPassword');
  const passValid = document.getElementById('pass-valid');
  const passInvalid = document.getElementById('pass-invalid');
  let mailSignUp = document.getElementById('newEmail').value;
  let userSignUp = document.getElementById('newUsername').value;
  let passSignUp = document.getElementById('newPassword').value;
  if(isPasswordValid(passSignUp) && mailSignUp !== "" && userSignUp !== "") {
    profiles.push([[userSignUp, mailSignUp], passSignUp]);
    passValid.style.display = 'none';
    login.classList.remove("hidden");
    signup.classList.add("hidden");
    console.log(profiles, "JSDJKDJSKJDKSJD");
  } else if (isPasswordValid(passSignUp)) {
    passBox.style.cssText = 'border-color:green; border-width:2px;';
    passValid.style.display = 'block';
    passInvalid.style.display = 'none';
  } else {
    passInvalid.style.display = 'block';
    passValid.style.display = 'none';
    passBox.style.cssText = 'border-color:maroon;';
  }
  isPasswordValid(passSignUp);
  
  console.log(isPasswordValid(passSignUp));
  console.log(passSignUp + "DKDJDJJDJD");
})

const logIn = document.getElementById('btn-login');
const uLogin = document.getElementById('username');
const noUser = document.getElementById('no-user');
const pLogin = document.getElementById('password');
const noPass = document.getElementById('no-pass');
const success = document.getElementById('success');
const greetings = document.getElementById('greetings');
console.log(profiles.length);
logIn.addEventListener('click', () => {
  const userLogin = document.getElementById('username').value;
  const passLogin = document.getElementById('password').value;
  let userExists = false;
  let passTrue = false;
  let userProfile;
  for (let i = 0; i < profiles.length && !userExists;i++) {
    for (let j = 0; j < profiles[i].length && !userExists;j++) {
      for (let k = 0; k < profiles[j].length;k++) {
        if(userLogin === profiles[i][j][k]) {
          userExists = true;
          userProfile = i;
          break;
        }
      }
    }
  }
  if (userExists) {
    uLogin.style.cssText = "border-color: white;";
    noUser.style.cssText = "display: none; color: maroon; margin:0;";
    console.log("User exist");
    if (profiles[userProfile][1] === passLogin) {
      success.style.display = "flex";
      login.style.display = "none";
      greetings.innerHTML = "Hello, " + userLogin + ". <br>What do you think of this?";
      passTrue = true;
    } else {
      pLogin.style.cssText = "border-color: maroon";
      noPass.style.cssText = "display: block; color: maroon; margin:0;";
      passTrue = false;
    }
  } else {
    uLogin.style.cssText = "border-color: maroon;";
    noUser.style.cssText = "display: block; color: maroon; margin:0;";
    console.log("User doesnt exist");
  }
})
