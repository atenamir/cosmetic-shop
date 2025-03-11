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
//  =====================does user login or not in header ================
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
  loginContainer.innerHTML = `<a href="/login.html" class="text-decoration-none link-dark">
                ورود
              </a>`;
  //  === in DESKTOP mode ===
  desktopLoginContainer.innerHTML = `<a href="/login.html" class="text-decoration-none link-light">
                ورود
              </a>`;
}

//  ==============filter toggle===========
const filterBtn = document.getElementById("fiter-title");
const filter = document.querySelector(".filter-list");
const closeFilter = document.getElementById("close-filter");
const body = document.querySelector("main");

filterBtn.addEventListener("click", () => {
  filter.classList.add("active-filter");
  body.classList.add("body-filter");
});

closeFilter.addEventListener("click", () => {
  filter.classList.remove("active-filter");
  body.classList.remove("body-filter");
});

// ===========create product ============================================================
const productBoxes = document.querySelector(".product-boxes");
let products = null;

fetch("./product.json")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    console.log(products)
    createProduct();
  });

const createProduct = () => {
  products.forEach((item) => {
    let newBox = document.createElement("a");
    newBox.href ="http://127.0.0.1:5500/productDetail.html?id=" + item.id;
  newBox.classList.add('product-card');
  newBox.classList.add('col-6');
  newBox.classList.add('border');
  newBox.classList.add('col-lg-4');
  newBox.classList.add('col-xl-2');

    newBox.innerHTML = `
    <img src="${item.image}" alt="" width="140px">
            <div class="details">
                <p class="mt-5 fw-bolder">${item.name}</p>
                <p>${item.price.toLocaleString()}تومان</p>
                <button class="btn-buy-now">مشاهده محصول</button>
            </div>
    `;
    productBoxes.appendChild(newBox);
  });
};
