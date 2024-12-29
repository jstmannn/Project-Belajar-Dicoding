// File: assets/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Toggle Bio Functionality
    const toggleBioBtn = document.getElementById('toggle-bio');
    const bioText = document.getElementById('bio');

    if (toggleBioBtn && bioText) {
        toggleBioBtn.addEventListener('click', () => {
            if (bioText.style.display === 'none') {
                bioText.style.display = 'block';
                toggleBioBtn.textContent = 'Show Less';
            } else {
                bioText.style.display = 'none';
                toggleBioBtn.textContent = 'Show More';
            }
        });
    }

    // 2. Mobile Responsive Navigation Dropdown
    const navMenu = document.querySelector('.nav-menu');
    const hamburgerMenu = document.createElement('div');
    hamburgerMenu.classList.add('hamburger-menu');
    hamburgerMenu.innerHTML = '☰';

    // Tambahkan hamburger menu hanya di layar mobile
    function createMobileMenu() {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.hamburger-menu')) {
                navMenu.parentNode.insertBefore(hamburgerMenu, navMenu);
                navMenu.classList.add('mobile-menu');
            }
        } else {
            if (document.querySelector('.hamburger-menu')) {
                hamburgerMenu.remove();
                navMenu.classList.remove('mobile-menu');
            }
        }
    }

    // Inisialisasi dan event listener untuk responsive menu
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // 3. Simple Article Slider
    const articles = document.querySelectorAll('#articles .card');
    let currentArticleIndex = 0;

    function showArticle(index) {
        // Sembunyikan semua artikel
        articles.forEach(article => {
            article.style.display = 'none';
        });

        // Tampilkan artikel yang dipilih
        articles[index].style.display = 'block';
    }

    function nextArticle() {
        currentArticleIndex = (currentArticleIndex + 1) % articles.length;
        showArticle(currentArticleIndex);
    }

    function prevArticle() {
        currentArticleIndex = (currentArticleIndex - 1 + articles.length) % articles.length;
        showArticle(currentArticleIndex);
    }

    // Cek apakah ada artikel untuk di-slider
    if (articles.length > 0) {
        // Sembunyikan artikel kecuali artikel pertama
        showArticle(0);

        // Tambahkan tombol navigasi slider
        const sliderContainer = document.getElementById('articles');
        const prevButton = document.createElement('button');
        prevButton.textContent = '◀';
        prevButton.classList.add('slider-btn', 'prev-btn');
        prevButton.addEventListener('click', prevArticle);

        const nextButton = document.createElement('button');
        nextButton.textContent = '▶';
        nextButton.classList.add('slider-btn', 'next-btn');
        nextButton.addEventListener('click', nextArticle);

        sliderContainer.appendChild(prevButton);
        sliderContainer.appendChild(nextButton);
    }

    // 4. Form Validation (Opsional)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Validasi sederhana
            if (nameInput.value.trim() === '') {
                alert('Nama tidak boleh kosong');
                return;
            }

            if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
                alert('Email tidak valid');
                return;
            }

            if (messageInput.value.trim() === '') {
                alert('Pesan tidak boleh kosong');
                return;
            }

            // Kirim form atau lakukan sesuatu
            alert('Pesan berhasil dikirim!');
            contactForm.reset();
        });
    }
});