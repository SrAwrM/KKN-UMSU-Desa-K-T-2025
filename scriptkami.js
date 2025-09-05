// Tambahkan kelas 'fade-in' ke semua elemen .member
document.querySelectorAll('.member').forEach((el) => {
  el.classList.add('fade-in');
});

// Fungsi untuk memunculkan elemen saat terlihat di viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
});

// Observasi setiap elemen .fade-in
document.querySelectorAll('.fade-in').forEach((el) => {
  observer.observe(el);
});
