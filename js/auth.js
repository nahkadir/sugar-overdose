const ADMIN_EMAIL = "admin@sugaroverdose.com";
const ADMIN_PASSWORD = "admin123";

let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

function signup() {
  let signupName = document.getElementById("signupName");
  let signupEmail = document.getElementById("signupEmail");
  let signupPassword = document.getElementById("signupPassword");
  let signupPhone = document.getElementById("signupPhone");
  let errorMsg = document.getElementById("errorMsg");

  errorMsg.classList.add("hidden");

  if (
    signupName.value === "" ||
    signupEmail.value === "" ||
    signupPassword.value === ""
  ) {
    errorMsg.textContent = "Please fill in all required fields";
    errorMsg.classList.remove("hidden");
    return;
  }

  if (signupPassword.value.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
    errorMsg.classList.remove("hidden");
    return;
  }

  // Check Existing User

  let existingUser = users.find(function (user) {
    return user.email === signupEmail.value;
  });
  if (existingUser) {
    errorMsg.textContent = "Email already registered.";
    errorMsg.classList.remove("hidden");
    return;
  }

  // New User Creation
  let newUser = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
    phone: signupPhone.value,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  currentUser = newUser;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  window.location.href = "index.html";
}

function login() {
  let loginEmail = document.getElementById("loginEmail");
  let loginPassword = document.getElementById("loginPassword");
  let errorMsg = document.getElementById("errorMsg");

  errorMsg.classList.add("hidden");

  if (loginEmail.value === "" || loginPassword.value === "") {
    errorMsg.textContent = "Please fill in all required fields";
    errorMsg.classList.remove("hidden");
    return;
  }

  // Check if Admin

  if (
    loginEmail.value === ADMIN_EMAIL &&
    loginPassword.value === ADMIN_PASSWORD
  ) {
    window.location.href = "admin.html";
    return;
  }

  // Check Existing User

  let existingUser = users.find(function (user) {
    return (
      user.email === loginEmail.value && user.password === loginPassword.value
    );
  });
  if (existingUser) {
    currentUser = existingUser;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href = "index.html";
  } else {
    errorMsg.textContent = "Invalid email or password.";
    errorMsg.classList.remove("hidden");
    return;
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem("currentUser");
  updateNav();
  window.location.href = "index.html";
}

if (document.getElementById("signupBtn")) {
  document.getElementById("signupBtn").addEventListener("click", signup);
}

if (document.getElementById("loginBtn")) {
  document.getElementById("loginBtn").addEventListener("click", login);
}

if (document.getElementById("logoutNav")) {
  document.getElementById("logoutNav").addEventListener("click", logout);
}
