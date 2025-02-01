let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signup = document.getElementById("signup");
let error = document.getElementById("error");

let storedData = JSON.parse(localStorage.getItem("storedData")) || [];

signup.addEventListener("click", handleSignUp);

function handleSignUp(e) {
  e.preventDefault();

  //1- User doesn't type any data.
  if (!username.value || !email.value || !password.value) {
    error.innerHTML = "Please fill your full data";
    return;
  }

  //2- User already has an account.
  let userExists = storedData.some(
    (user) => user.email === email.value || user.username === username.value
  );
  if (userExists) {
    error.innerHTML = "This user or email had been already used";
    return;
  }

  //3- User doesn't have any accounts.
  let userData = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  storedData.push(userData);
  localStorage.setItem("storedData", JSON.stringify(storedData));
  setTimeout(() => {
    window.location = "signIn.html";
  }, 300);
}
