document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const emailInput = document.getElementById('email');
  const errorMsg = document.getElementById('email-error');
  const submitButton = form.querySelector('.form__button');

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  function showError(message) {
    emailInput.classList.add('error');
    emailInput.classList.add('shake'); 
    errorMsg.textContent = message;
    errorMsg.classList.add('show');

    setTimeout(() => {
      emailInput.classList.remove('shake');
    }, 500);
  }

  function hideError() {
    emailInput.classList.remove('error', 'shake');
    errorMsg.classList.remove('show');
  }

  function handleSuccess() {
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Thanks!';
    submitButton.classList.add('success');

    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.classList.remove('success');
      form.reset();
    }, 2000);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
      showError('Email address is required');
      return;
    }

    if (!isValidEmail(email)) {
      showError('Please enter a valid email address');
      return;
    }

    hideError();
    handleSuccess();
  });

  emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim();
    if (email === '' || isValidEmail(email)) {
      hideError();
    }
  });
});
