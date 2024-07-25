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
    window.open('https://wa.me/+6281268892290', '_blank');
}

// Fungsi untuk membuka link Gmail
function openGmail() {
    window.open('https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=veryfach@gmail.com', '_blank');
}

// Fungsi untuk membuka Google Form
function openGoogleForm() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfd7vVLBs9ORQ3CHPS2e4pHj5p7Y_U1Lw1fHf5a_vKIblL1Lw/viewform?usp=sf_link', '_blank');
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

document.getElementById('youtubeVideoContainer').addEventListener('click', function() {
    window.open('https://youtu.be/fI0PyrzRoTQ', '_blank');
});

document.querySelectorAll('.profile').forEach(function(profile) {
    profile.addEventListener('mouseover', function() {
        this.querySelector('.tooltip').style.display = 'block';
    });
    profile.addEventListener('mouseout', function() {
        this.querySelector('.tooltip').style.display = 'none';
    });
});

// Image penjelasan pada UMKM
document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const contactSeller = document.getElementById('contactSeller');
    const whatsappLink = document.getElementById('whatsappLink');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });

    contactSeller.addEventListener('click', function() {
        window.open(whatsappLink.href, '_blank');
    });
});

// Berita
function redirectToDetail(articleId) {
    window.location.href = `?id=${articleId}`;
}

// whatsapp UMKM
function contactSeller() {
    const phoneNumber = "+6281268892290"; // Ganti dengan nomor WhatsApp yang sesuai
    const message = "Halo, saya tertarik dengan produk yang di tawarkan di website .......(Nama barang yang ingin di beli).";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// whatsapp UMKM 2
function contactSeller2() {
    const phoneNumber = "+6281268892290"; // Ganti dengan nomor WhatsApp yang sesuai
    const message = "Halo, saya tertarik dengan produk yang di tawarkan di website .......(Nama barang yang ingin di beli).";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// whatsapp UMKM 3
function contactSeller3() {
    const phoneNumber = "+6281268892290"; // Ganti dengan nomor WhatsApp yang sesuai
    const message = "Halo, saya tertarik dengan produk yang di tawarkan di website .......(Nama barang yang ingin di beli).";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// whatsapp UMKM 5
function contactSeller4() {
    const phoneNumber = "+6281268892290"; // Ganti dengan nomor WhatsApp yang sesuai
    const message = "Halo, saya tertarik dengan produk yang di tawarkan di website .......(Nama barang yang ingin di beli).";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// whatsapp UMKM 10
function contactSeller5() {
    const phoneNumber = "+6281268892290"; // Ganti dengan nomor WhatsApp yang sesuai
    const message = "Halo, saya tertarik dengan produk yang di tawarkan di website .......(Nama barang yang ingin di beli).";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// whatsapp UMKM 11
function contactSeller6() {
    const phoneNumber = "+6281268892290"; // Ganti dengan nomor WhatsApp yang sesuai
    const message = "Halo, saya tertarik dengan produk yang di tawarkan di website .......(Nama barang yang ingin di beli).";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
    const dataList = document.getElementById("dataList");
    let dataPenduduk = [];

    // Fungsi untuk menyimpan data ke LocalStorage
    const saveData = () => {
        localStorage.setItem("dataPenduduk", JSON.stringify(dataPenduduk));
    };

    // Fungsi untuk memuat data dari LocalStorage
    const loadData = () => {
        const storedData = localStorage.getItem("dataPenduduk");
        if (storedData) {
            dataPenduduk = JSON.parse(storedData);
        }
    };

    // Fungsi untuk menampilkan data ke dalam daftar
    const displayData = () => {
        dataList.innerHTML = '';
        dataPenduduk.forEach(data => {
            const li = document.createElement("li");
            li.textContent = `Jenis Kelamin : ${data.nama}, Jumlah Penduduk : ${data.jumlah}`;
            dataList.appendChild(li);
        });
    };

    // Memuat data saat halaman dimuat
    loadData();
    displayData();

    // Hanya menjalankan kode ini jika halaman admin
    if (document.getElementById("dataForm")) {
        const form = document.getElementById("dataForm");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const nama = document.getElementById("nama").value;
            const jumlah = document.getElementById("jumlah").value;

            if (nama && jumlah) {
                dataPenduduk.push({ nama: nama, jumlah: jumlah });
                saveData();
                displayData();

                form.reset();
            }
        });
    }
});


