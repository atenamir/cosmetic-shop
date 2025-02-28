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
//=====================carousel======================
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    loop: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ====================scroll button=====================
const slideBar = document.getElementById("swipper-bar");
const previewBtn = document.getElementById("right-btn");
const nextBtn = document.getElementById("left-btn");

previewBtn.addEventListener("click", () => {
  slideBar.scrollLeft += 200;
});
nextBtn.addEventListener("click", () => {
  slideBar.scrollLeft -= 200;
});
// ====================dynamic newest product =============
// === elements ===
const newest_container = document.querySelector(".swipper-bar");
let product = null;

fetch("product.json")
  .then((res) => res.json())
  .then((items) => {
    product = items;
    add_product_to_newestBar(product);
  });

const add_product_to_newestBar = (item) => {
  item.forEach((product) => {
    if (product.id < 10) {
      let new_element = document.createElement("a");
      new_element.href =
        "http://127.0.0.1:5500/cosmetic%20shop/productDetail.html?id="+product.id;

      new_element.classList.add("text-decoration-none");
      new_element.innerHTML = `<div
          class=" text-black product-box border d-flex align-items-center justify-content-center shadow flex-wrap rounded-3 bg-light"
        >
          <img src=${product.image} class="w-100"/>
          <div class="card-details">
            <h5 class="text-center">${product.name}</h5>
            <div  class="product-details " >
              <p style="font-size: 12px" class="mt-3 text-center">${product.price.toLocaleString()} تومان</p>
              <button class="font-7 basket-btn">مشاهده محصول</button>
            </div>
          </div>
        </div>`;
      newest_container.appendChild(new_element);
    }
  });
};
// ====================dynamic off product =============
// ===elements ===
const off_swiper_bar = document.getElementById('off-swipper-bar')

fetch("product.json")
  .then((res) => res.json())
  .then((items) => {
    product = items;
    add_product_to_offBar(product);
  });

const add_product_to_offBar = (item) => {
  item.forEach((product) => {
    if (product.id < 10) {
      let new_element = document.createElement("a");
      new_element.href =
        "http://127.0.0.1:5500/cosmetic%20shop/productDetail.html?id="+product.id;

      new_element.classList.add("text-decoration-none");
      new_element.innerHTML = `<div
          class=" text-black product-box border d-flex align-items-center justify-content-center shadow flex-wrap rounded-3 bg-light"
        >
          <img src=${product.image} class="w-100"/>
          <div class="card-details">
            <h5 class="text-center">${product.name}</h5>
            <div  class="product-details " >
              <p style="font-size: 12px" class="mt-3 text-center">${product.price.toLocaleString()} تومان</p>
              <button class="font-7 basket-btn">مشاهده محصول</button>
            </div>
          </div>
        </div>`;
      off_swiper_bar.appendChild(new_element);
    }
  });
};

// ==========off product scroll button======
const slideBarr = document.getElementById("off-swipper-bar");
const previewBtnn = document.getElementById("right-btn-p");
const nextBtnn = document.getElementById("left-btn-p");

previewBtnn.addEventListener("click", () => {
  slideBarr.scrollLeft += 200;
});
nextBtnn.addEventListener("click", () => {
  slideBarr.scrollLeft -= 200;
});
// ===============timer for off bar ========================
const sec = document.querySelector(".box1");
const min = document.querySelector(".box2");
const hour = document.querySelector(".box3");

let targetTime = new Date("March 3 , 2025 00:00:00").getTime();

setInterval(function () {
  let currontTime = new Date().getTime();
  let distance = targetTime - currontTime;

  let h = Math.floor(distance / 1000 / 60 / 60);
  let m = Math.floor(distance / 1000 / 60) % 60;
  let s = Math.floor(distance / 1000) % 60;

  sec.innerHTML = s;
  min.innerHTML = m;
  hour.innerHTML = h;
  if (s < 10) {
    sec.innerHTML = "0" + s;
  }
  if (m < 10) min.innerHTML = "0" + m;

  if (h < 10) hour.innerHTML = "0" + h;
}, 1000);

// ============accordian ==================
//elements
const accordianQuestions = document.querySelectorAll(".accordian-question");
const accordianAnswers = document.querySelectorAll(".accordian-answer");

//===foreach loop for get each item which user already selected it
accordianQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    const accordianItem = item.parentElement;
    const accordianAnswer = accordianItem.querySelector(".accordian-answer");

    if (accordianAnswer.classList.contains("active-answer")) {
      accordianAnswer.classList.remove("active-answer");
    } else {
      accordianAnswer.classList.add("active-answer");
    }

    accordianAnswers.forEach((content) => {
      if (content !== accordianAnswer) {
        content.classList.remove("active-answer");
      }
    });
  });
});

// ===================================login and log out button in header ================================
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
