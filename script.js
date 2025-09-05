// Pesan sambutan
window.onload = () => {
  console.log("Website Desa Karang Tengah siap digunakan!");
  animatePopulasi();
  initPopup(); // panggil popup
  initSlider(); // panggil slider
};

// Animasi angka populasi
function animatePopulasi() {
  const target = 1930;
  const element = document.querySelector(".angka-populasi");
  let current = 0;
  const increment = Math.ceil(target / 100);

  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(counter);
    }
    element.textContent = current;
  }, 30);
}

// Fungsi popup
function initPopup() {
  const openPopup = document.getElementById("openPopup");
  const closePopup = document.getElementById("closePopup");
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");

  if (openPopup && closePopup && popup && overlay) {
    openPopup.addEventListener("click", (e) => {
      e.preventDefault();
      popup.classList.add("active");
      overlay.classList.add("active");
    });

    closePopup.addEventListener("click", () => {
      popup.classList.remove("active");
      overlay.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
      popup.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
}

// Fungsi slider aparatur
function initSlider() {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slider img");
  const totalSlides = slides.length;
  const slider = document.querySelector(".slider");

  if (!slider || totalSlides === 0) return; // kalau ga ada slider, stop

  function showSlide(index) {
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  // Tombol navigasi
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      showSlide(currentIndex + 1);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      showSlide(currentIndex - 1);
    });
  }

  // Auto slide setiap 3 detik
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 3000);

  // Tampilkan slide pertama saat load
  showSlide(currentIndex);
}
