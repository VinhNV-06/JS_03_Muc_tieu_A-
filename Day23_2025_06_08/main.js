// lấy dữ liệu trong các hành tinh từ data-info 
const planets = document.querySelectorAll('.planet');
const infoBox = document.getElementById('infoBox');
const infoTitle = document.getElementById('infoTitle');
const infoContent = document.getElementById('infoContent');
const closeBtn = document.getElementById('closeBtn');
const solarSystem = document.getElementById('solarSystem');
const sun = document.getElementById('sun');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');

planets.forEach(planet => {
    planet.addEventListener('click', () => {
        // ẩn các phần khác 
        planets.forEach(p => {
            if(p !== planet) p.classList.add('hidden');
        });
        solarSystem.style.pointerEvents = 'none';
        sun.style.pointerEvents = 'none';
        title.style.display = 'none';
        subtitle.style.display = 'none';
        // phóng to hành tinh 
        planet.classList.add('planet-expanded');

        // Hiện hộp info 
        infoTitle.textContent = planet.dataset.title ; 
        infoContent.textContent = planet.dataset.info ;
        infoBox.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    // hiện lại tất cả hành tinh khi nhấn button quay lại 
    planets.forEach(p => p.classList.remove('hidden','planet-expanded'));
    solarSystem.style.pointerEvents  = 'auto';
    sun.style.pointerEvents = 'auto' ;
    title.style.display = 'block';


    // ẩn hộp chi tiết 
    infoBox.style.display = 'none';
});