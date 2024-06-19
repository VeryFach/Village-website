const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");
const navBar = document.querySelector(".navbar");
const whatsappBtn = document.getElementById('whatsappBtn');
const gmailBtn = document.getElementById('gmailBtn');
const googleFormBtn = document.getElementById('googleFormBtn');


menuBar.addEventListener("click", () => {
    menuNav.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", windowPosition);
    menuNav.classList.remove("menu-active");
});

// Fungsi untuk membuka link WhatsApp
function openWhatsapp() {
    window.open('https://wa.me/qr/OL52W2G5J6AHL1', '_blank');
}

// Fungsi untuk membuka link Gmail
function openGmail() {
    window.open('veryfach@gmail.com', '_blank');
}

// Fungsi untuk membuka Google Form
function openGoogleForm() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeXu0sG0vb2JpI19UQw9nD3ZR5KmSbDvH3Gj-FJy6DzT2g8jA/viewform', '_blank');
}

// Event listener untuk tombol WhatsApp
whatsappBtn.addEventListener('click', openWhatsapp);

// Event listener untuk tombol Gmail
gmailBtn.addEventListener('click', openGmail);

// Event listener untuk tombol Google Form
googleFormBtn.addEventListener('click', openGoogleForm);


// Initialize Leaflet map
document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([-7.895, 112.568], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([-7.895, 112.568]).addTo(map)
        .bindPopup('Desa Dadaprejo')
        .openPopup();
});