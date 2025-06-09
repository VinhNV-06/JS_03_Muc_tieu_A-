// lấy dữ liệu trong các hành tinh từ data-info
const planets = document.querySelectorAll(".planet");
const infoBox = document.getElementById("infoBox");
const infoTitle = document.getElementById("infoTitle");
const infoContent = document.getElementById("infoContent");
const closeBtn = document.getElementById("closeBtn");
const solarSystem = document.getElementById("solarSystem");
const sun = document.getElementById("sun");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const wellcomeMessage = document.getElementById("wellcomeMessage");
const clock = document.getElementById("clock");
// Hàm hiển thị thời gian thực
function updateClock() {
  const now = new Date(); // Lấy thời gian hiện tại
  const timeString = now.toLocaleTimeString("vi-VN", { hour12: false }); // Định dạng giờ theo chuẩn Việt Nam (24h)
  const dateString = now.toLocaleDateString("vi-VN"); // Định dạng ngày theo chuẩn Việt Nam
  clock.textContent = `${dateString} ${timeString}`; // Cập nhật nội dung div #clock
}
updateClock(); // Gọi lần đầu để hiển thị ngay
setInterval(updateClock, 1000); // Cập nhật mỗi giây

// Hàm hiển thị thông báo chào mừng
function showWelcomeMessage() {
  const lastPlanet = localStorage.getItem("lastViewedPlanet"); // Lấy hành tinh xem lần trước từ localStorage
  welcomeMessage.textContent = lastPlanet
    ? `Chào mừng quay lại! Lần trước bạn đã xem "${lastPlanet}".`
    : "Chào mừng đến với Hệ Mặt Trời Cá Nhân!"; // Hiển thị thông báo tùy thuộc vào localStorage
  welcomeMessage.style.display = "block"; // Hiện thông báo
  setTimeout(() => {
    welcomeMessage.style.display = "none"; // Ẩn sau 5 giây
  }, 5000);
}

planets.forEach((planet) => {
  planet.addEventListener("click", () => {
    // ẩn các phần khác
    planets.forEach((p) => {
      if (p !== planet) p.classList.add("hidden");
    });
    solarSystem.style.pointerEvents = "none";
    sun.style.pointerEvents = "none";
    title.style.display = "none";
    subtitle.style.display = "none";
    // phóng to hành tinh
    planet.classList.add("planet-expanded");

    // Hiện hộp info
    infoTitle.textContent = planet.dataset.title;
    infoContent.textContent = planet.dataset.info;
    infoBox.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  // hiện lại tất cả hành tinh khi nhấn button quay lại
  planets.forEach((p) => p.classList.remove("hidden", "planet-expanded"));
  solarSystem.style.pointerEvents = "auto";
  sun.style.pointerEvents = "auto";
  title.style.display = "block";
  // ẩn hộp chi tiết
  infoBox.style.display = "none";
});
