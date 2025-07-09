// DOM: Lấy các phần tử
const viewSolarSystemBtn = document.getElementById("viewSolarSystem");
const solarModal = document.getElementById("solarModal");
const closeModalBtn = document.querySelector(".close-modal");
const planets = document.querySelectorAll(".planet");
const infoBox = document.getElementById("infoBox");
const infoTitle = document.getElementById("infoTitle");
const infoContent = document.getElementById("infoContent");
const closeBtn = document.getElementById("closeBtn");
const solarSystem = document.getElementById("solarSystem");
const sun = document.getElementById("sun");
const title = document.querySelector("#solarModal .title");
const subtitle = document.querySelector("#solarModal .subtitle");
const welcomeMessage = document.getElementById("welcomeMessage");
const clock = document.getElementById("clock");
// lấy nav
const navbar = document.getElementById("navbar");
const techProgress = document.getElementById("techProgress");
const jsProgress = document.getElementById("jsProgress");
const pythonProgress = document.getElementById("pythonProgress");
const sqlProgress = document.getElementById("sqlProgress");

// Hàm hiển thị thời gian thực
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("vi-VN", { hour12: false });
  const dateString = now.toLocaleDateString("vi-VN");
  clock.textContent = `${dateString} ${timeString}`;
}
updateClock();
setInterval(updateClock, 1000);

// Hàm hiển thị thông báo chào mừng
function showWelcomeMessage() {
  const lastPlanet = localStorage.getItem("lastViewedPlanet");
  welcomeMessage.textContent = lastPlanet
    ? `Chào mừng quay lại! Lần trước bạn đã xem "${lastPlanet}".`
    : "Chào mừng đến với Hệ Mặt Trời Cá Nhân!";
  welcomeMessage.style.display = "block";
  setTimeout(() => {
    welcomeMessage.style.display = "none";
  }, 5000);
}

// Mở modal Hệ Mặt Trời
viewSolarSystemBtn.addEventListener("click", () => {
  solarModal.style.display = "block";
  showWelcomeMessage();
  updateSolarSystemPosition();
});

// Đóng modal
closeModalBtn.addEventListener("click", () => {
  solarModal.style.display = "none";
  resetSolarSystemView();
});

// Sự kiện window.resize để căn chỉnh hệ mặt trời
function updateSolarSystemPosition() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  solarSystem.style.width = `${vw}px`;
  solarSystem.style.height = `${vh}px`;
}
window.addEventListener("resize", updateSolarSystemPosition);

// Sự kiện click cho hành tinh
planets.forEach((planet) => {
  planet.addEventListener("click", () => {
    localStorage.setItem("lastViewedPlanet", planet.dataset.title);
    planets.forEach((p) => {
      if (p !== planet) p.classList.add("hidden");
    });
    solarSystem.style.pointerEvents = "none";
    sun.style.pointerEvents = "none";
    title.style.display = "none";
    subtitle.style.display = "none";
    planet.classList.add("planet-expanded");
    infoTitle.textContent = planet.dataset.title;
    infoContent.textContent = planet.dataset.info;
    infoBox.style.display = "block";
  });
});

// Sự kiện đóng hộp thông tin
closeBtn.addEventListener("click", () => {
  planets.forEach((p) => p.classList.remove("hidden", "planet-expanded"));
  solarSystem.style.pointerEvents = "auto";
  sun.style.pointerEvents = "auto";
  title.style.display = "block";
  subtitle.style.display = "block";
  infoBox.style.display = "none";
});

// Smooth scrolling cho navigation
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
// JS cho progress ở phần skill
// NEW: Hàm animateProgress được điều chỉnh để chạy lại mỗi khi cuộn đến phần skills
function animateProgress() {
  const skillsSection = document.getElementById("skills");
  const rect = skillsSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Reset tất cả các thanh tiến trình về 0
  techProgress.style.width = "0";
  jsProgress.style.width = "0";
  pythonProgress.style.width = "0";
  sqlProgress.style.width = "0";

  // Kiểm tra nếu phần skills nằm trong viewport
  if (rect.top >= 0 && rect.top < windowHeight) {
    // Chờ một chút để đảm bảo reset hoàn tất trước khi animate
    setTimeout(() => {
      techProgress.style.width = "90%";
      jsProgress.style.width = "75%";
      pythonProgress.style.width = "65%";
      sqlProgress.style.width = "50%";
    }, 50);
  }
}
// bắt đầu chạy khi tải trang
window.onload = animateProgress;
// NEW: Hàm xử lý hiệu ứng mờ cho navbar khi cuộn
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    // Khi cuộn xuống 50px
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
});
// NEW: Gọi animateProgress khi cuộn trang
window.addEventListener("scroll", animateProgress);

// NEW: Gọi animateProgress khi tải trang để kiểm tra ban đầu
window.addEventListener("load", animateProgress);

// hàm hire me
// get modal
var modal = document.getElementById("contactModal");
// get button that open the modal
var btn = document.getElementById("Contact_me");
//  get the span element that closes the modal
var span = document.getElementsByClassName("close")[0];
// when the users click button , open the modal
var form = document.getElementById("contactForm");
btn.onclick = function () {
  modal.style.display = "block";
  form.reset();
};
//  when the users click on <span> element (x) , close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// when user click anywhere outside of the modal , closes it
window.onclick = function (event) {
  if (event.target === modal && !modalContent.contains(event.target)) {
    modal.style.display = "none";
  }
};
// handle form submission
document.getElementById("contactForm").onsubmit = function (event) {
  event.preventDefault();
  document.getElementById("contactForm").style.display = "none";
  document.getElementById("thankYou").style.display = "block";
  setTimeout(function () {
    modal.style.display = "none";
    document.getElementById("contactForm").style.display = "block";
    document.getElementById("thankYou").style.display = "none";
    form.reset();
  }, 2000);
};
// code project
new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  centeredSlides: false,
  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamiBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 3,
    },
  },
});
