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
    window.open('mailto:veryfach@gmail.com', '_blank');
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

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.detail-button');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.Selengkapnya-button');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua link menu dengan class 'menu'
    var menuLinks = document.querySelectorAll('.menu a');

    // Tambahkan event listener untuk setiap link menu
    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah default action dari link
            
            var targetId = this.getAttribute('href'); // Ambil nilai href dari link
            var targetElement = document.querySelector(targetId); // Temukan elemen target berdasarkan ID
            
            if (targetElement) {
                // Gulir halus ke elemen target
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Gulir halus
                });
            }
        });
    });
});