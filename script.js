document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.registration-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Member saved successfully!');
    });
  }
});
