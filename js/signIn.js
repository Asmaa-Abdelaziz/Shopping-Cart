let email = document.getElementById("email");
let password = document.getElementById("password");
let signin = document.getElementById("signin");
let error = document.getElementById("error");

let storedData = JSON.parse(localStorage.getItem("storedData"));

signin.addEventListener("click", handleSignIn);

function handleSignIn(e) {
  e.preventDefault();
  //1- There is no accounts
  if (!storedData) {
    if (window.confirm("You have no account, Please sign up first!!!")) {
      setTimeout(() => {
        window.location = "signUp.html";
      }, 300);
    }
    //2- User doesn't type email or password.
  } else if (!email.value || !password.value) {
    error.innerHTML = "Please fill your full data";
  }
  //3- check user data from stored data.
  else if (storedData) {
    let found = false;
    for (let i = 0; i < storedData.length; i++) {
      if (
        email.value == storedData[i].email &&
        password.value == storedData[i].password
      ) {
        localStorage.setItem("isLogIn", true);
        localStorage.setItem("userLoggedIn", storedData[i].username);
        setTimeout(() => {
          window.location = "index.html";
        }, 300);
        found = true;
        break;
      }
    }

    if (!found) {
      error.innerHTML = "Please type your correct data.";
    }
  }
}
