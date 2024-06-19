document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const aboutModal = document.getElementById('about-modal');
    const contactModal = document.getElementById('contact-modal');
    const closeAbout = document.getElementById('close-about');
    const closeContact = document.getElementById('close-contact');

    aboutLink.addEventListener('click', event => {
        event.preventDefault();
        aboutModal.style.display = 'block';
    });

    contactLink.addEventListener('click', event => {
        event.preventDefault();
        contactModal.style.display = 'block';
    });

    closeAbout.addEventListener('click', () => {
        aboutModal.style.display = 'none';
    });

    closeContact.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target == aboutModal) {
            aboutModal.style.display = 'none';
        } else if (event.target == contactModal) {
            contactModal.style.display = 'none';
        }
    });

    // Scroll to section
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            if (link.id !== 'about-link' && link.id !== 'contact-link') {
                event.preventDefault();
                const href = link.getAttribute('href');
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Initialize Leaflet map
    const map = L.map('map').setView([-7.895, 112.568], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([-7.895, 112.568]).addTo(map)
        .bindPopup('Desa Dadaprejo')
        .openPopup();

    // Create mouse-following icon
    const mouseIcon = document.createElement('img');
    mouseIcon.src = 'c:/Users/User/Documents/Website Profile/Asset/cursor.png'; // Replace with the path to your icon
    mouseIcon.id = 'mouse-icon';
    document.body.appendChild(mouseIcon);

    // Update icon position on mouse move
    document.addEventListener('mousemove', (e) => {
        mouseIcon.style.left = `${e.pageX}px`;
        mouseIcon.style.top = `${e.pageY}px`;
    });

    // Gallery functionality
    const gallery = document.querySelector('.gallery');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentIndex = 0;

    const updateGallery = () => {
        const offset = -currentIndex * 100;
        gallery.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : gallery.children.length - 1;
        updateGallery();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < gallery.children.length - 1) ? currentIndex + 1 : 0;
        updateGallery();
    });
});