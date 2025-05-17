// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Form submitted! (Backend integration coming soon)');
    });
  }
});
