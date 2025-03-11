// product btn
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
//  ====================does user login or not in header ===============================
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

// ===============getting product details from local storage =============================
//  === elements ===
const productContainer = document.querySelector(".cart-box-container");
const sectionContainer =  document.querySelector(".cart-container");
const plus =document.querySelector('.increase')
const mines = document.querySelector('.decrease')
const number=document.querySelector('.number')
// === get user and cart from local storage ===
const user = JSON.parse(localStorage.getItem("logged-in"))?.username;
const cart = JSON.parse(localStorage.getItem(user))?.cart;


document.addEventListener("DOMContentLoaded", () => {
  if(user){
    cart.length >0 ?
    cart.map(({id,image,name,price})=>{
      productContainer.insertAdjacentHTML('beforeend' , 
        `
        <div class="cart-box d-flex alin-items-center justify-content-between">
             <img src="${image}" width="50px">
             <p class="cart-title font-7 mt-3">${name}</p>
             <p class="cart-price font-7 mt-3">${price.toLocaleString()} تومان</p>
              <button class="remove d-flex align-items-center justify-content-center" onclick="deleteProduct(${id})">X</button>
        `)
    })
    // === if basket null ===
     : productContainer.insertAdjacentHTML('beforeend' , 
      `<div class="text-center">
          <p class="fs-3 style fw-bolder mt-5">محصولی در سبد خرید شما موجود نیست!</p>
          <img src="./images/Photoroom-20241211_121740.png" class="mt-3" width="220px" >
        </div>
      `)

//  === total section ===
let totalPrice =0
cart.map(({price}) => totalPrice+=price)

cart.length > 0 &&
    sectionContainer.insertAdjacentHTML('beforeend' , 
      `<div class="total-container">
             <p class="total-price">جمع کل خرید شما : <span class="total-cost">${totalPrice.toLocaleString()} تومان</span></p>
             <button class="final">رفتن به درگاه پرداخت</button>
     </div> `
     )
  }

  //  === if user dident login ===
 else
 {
   productContainer.innerHTML =  `  <div class="text-center m-3">
   <p class="mt-5 style fw-bolder fs-2 ">لطفا وارد حساب کاربری خود شوید</p>
   <img src="./images/loginUser.png" width="170px" class="mt-4"><br>
   <a href="./login.html" class="main-color text-decoration-none style">برای ورود کلیک کنید</a>
 </div>`
 } 
});
