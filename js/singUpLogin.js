// =============================registring ==============================
//=== elements ===
const singUpPage = document.querySelector(".singup-card");
//  ===get the pass and username ===
singUpPage.addEventListener("submit", (e) => {
  const signUpPass = document.querySelector("#signupPass").value;
  const confirmPass = document.querySelector(".confirm-pass").value;
  e.preventDefault();

  // ===check pass and confirm pass ===
  if (signUpPass !== confirmPass) {
    alert("رمز تکرار شده اشتباه است!");
  }

  //   ===sign up user section===
  const element = e.target.elements;
  const [username, password] = [
    element.namedItem("username").value || "",
    element.namedItem("password").value || "",
  ];
  //   ===add user in localStorage ===
  const user = JSON.parse(localStorage.getItem(username));
  if (!user) {
    //=== create user object in local storage ===
    localStorage.setItem(
      username,
      JSON.stringify({ username: username, password: password, cart: [] })
    );
    alert("ثبت نام با موفقیت انجام شد. لطفا وارد حساب کاربری خود شوید ");
  }
  user = { username: username, password: password, cart: [] };
});
// =============================loggin ==============================
//===elements===
const loginPage = document.querySelector(".signin-box");

loginPage.addEventListener("submit", (e) => {
  e.preventDefault();
  const element = e.target.elements;
  const [username, password] = [
    element.namedItem("username").value || "",
    element.namedItem("password").value || "",
  ];

  if (username) {
    var checkUser = JSON.parse(localStorage.getItem(username));
    if (checkUser.password === password) {
      //  === add user to users who logged in ===
      localStorage.setItem("logged-in", JSON.stringify({ username: username }));
      //  === switch to home page ===
      location.replace("/index.html");
    } else {
      alert("رمز عبور یا نام کاربری اشتباه است");
    }
  } else {
    alert("ثبت نام کن ");
  }
});
