// Form initialization
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
formbutton("create", {action: "https://formspree.io/f/mpqroneo"})

// Form submission handling
const form = document.querySelector('form[action="https://formspree.io/f/mpqroneo"]');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        showSuccessPopup();
        form.reset();
      } else {
        alert('Form submission failed.');
      }
    } catch (error) {
      alert('An error occurred.');
    }
  });
}

// Success popup functions
function showSuccessPopup() {
  const popup = document.getElementById('successPopup');
  popup.style.display = 'flex';
}

function hideSuccessPopup() {
  const popup = document.getElementById('successPopup');
  popup.style.display = 'none';
}

// Close popup when OK button is clicked
document.querySelector('.popup-close').addEventListener('click', hideSuccessPopup);

// Close popup when clicking outside the content
document.getElementById('successPopup').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    hideSuccessPopup();
  }
});
