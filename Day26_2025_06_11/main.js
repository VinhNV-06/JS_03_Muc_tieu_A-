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
  planets.forEach((p) => p.classList.remove("hidden", "planet-expanded"));
  infoBox.style.display = "none";
  solarSystem.style.pointerEvents = "auto";
  sun.style.pointerEvents = "auto";
  title.style.display = "block";
  subtitle.style.display = "block";
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
