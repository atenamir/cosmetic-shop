// ==================menu bar============
const productBtn = document.getElementById("product-btn");
const productBox = document.getElementById("product-box");

productBtn.addEventListener("click", () => {
  productBox.classList.toggle("activeProduct");
  productBtn.classList.toggle("close");
});

//activating  menu bar
const menuBtn = document.getElementById("menu-btn-header");
const closeMenuBtn = document.getElementById("close-menu");
const menu = document.getElementById("navigation");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active-bar");
});

closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("active-bar");
});
//  ========================does user login or not in header =========================
//  === in MOBILE mode ===
// == elements ==
const navigation = document.querySelector("#navigation");
const loginContainer = document.querySelector("#loginBtnContainer");
const exitBtnContainer = document.querySelector("#exitBtnContainer");
const desktopLoginContainer = document.querySelector(
  "#desktop-login-container"
);
const desktopLogOutContainer = document.querySelector(
  "#desktop-logout-container"
);
//  === check does user logged in or not ===
let doesUserLoggedIn = JSON.parse(localStorage.getItem("logged-in"))?.username;

if (doesUserLoggedIn) {
  loginContainer.innerHTML = ` <p class="exit" onclick="userExit()">خروج</p> `;

  desktopLogOutContainer.innerHTML = `<p class="exit-desktop" onclick="userExit()">خروج</p>`;
} else {
  loginContainer.innerHTML = `<a href="http://127.0.0.1:5500/cosmetic%20shop/login.html" class="text-decoration-none link-dark">
                ورود
              </a>`;
  //  === in DESKTOP mode ===
  desktopLoginContainer.innerHTML = `<a href="http://127.0.0.1:5500/cosmetic%20shop/login.html" class="text-decoration-none link-light">
                ورود
              </a>`;
}

// =================== Get datas ===========================
let products = null;
const priceContainer = document.querySelector(".price");
//  === get products from JSON ===
fetch("product.json")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    showDetails();
  });
  //  === function for matching product item in product details page ===
const showDetails = () => {
  const container = document.querySelector(".productDetail");

  const productId = new URLSearchParams(window.location.search).get("id");
  const thisProduct = products.filter((value) => {
    return value.id == productId;
  })[0];

  // ===add product details in html tags ===
  const pic = container.querySelector("img").src = thisProduct.image;
  const title = container.querySelector(".title-product").innerHTML =
    thisProduct.name;
  const brand = container.querySelector(".brand").innerHTML =
    thisProduct.brand;
  const description = document.querySelector(".description").innerHTML =
    thisProduct.details;
  const head = document.querySelector("title").innerHTML = thisProduct.name;

  priceContainer.innerHTML = `     <p class="mr text-start main-color fs-5"> قیمت: <span class="cost">${thisProduct.price.toLocaleString()}</span></p>
        <button class="backet-btn" onclick="addToBasket( ${thisProduct.id} ,'${thisProduct.image}' , '${thisProduct.name}' ,${thisProduct.price})">
          افزودن به سبد خرید 
          <i class="bi bi-cart3 fw-bold"></i></button>`;
};
