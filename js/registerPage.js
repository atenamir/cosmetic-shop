// ===========================================switch login =========================================
const link = document.querySelector("#login");
const singupLink = document.querySelector("#signup");
const loginForm = document.querySelector(".signin-box");
const signUpForm = document.querySelector(".singup-card");

link.addEventListener("click", () => {
  signUpForm.style.display = "none";
  loginForm.style.display = "block";
});

singupLink.addEventListener("click", () => {
  signUpForm.style.display = "block";
  loginForm.style.display = "none";
});
// ================================= show password button=================================
const togglePass = (e) => {
  const eye = e.target;
  const input = eye.parentElement.querySelector("input");

  if (input.type === "password") {
    eye.classList.remove("bi-eye");
    eye.classList.add("bi-eye-slash");
    input.setAttribute("type", "text");
  } 
  else {
    eye.classList.add("bi-eye");
    eye.classList.remove("bi-eye-slash");
    input.setAttribute("type", "password");
  }
};

// =====================================exit button ==========================================

let doesLoggedIn = JSON.parse(localStorage.getItem('logged-in'))?.username;

console.log(doesLoggedIn)
