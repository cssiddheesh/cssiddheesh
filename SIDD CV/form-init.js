// Form submission handling - Using Cloudflare Worker endpoint
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("https://forms.cssiddheesh-work.workers.dev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        showSuccessPopup();
        form.reset();
      } else {
        document.getElementById("status").innerText = "Error sending message.";
      }
    } catch (error) {
      document.getElementById("status").innerText = "Error sending message.";
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
