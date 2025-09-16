// Cache DOM elements to reduce lookups
const countdownElements = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};

// Function to update countdown
function updateCountdown() {
  const weddingDate = new Date(2026, 3, 17, 12, 30, 0).getTime();
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Batch DOM updates to reduce reflows
    requestAnimationFrame(() => {
      countdownElements.days.textContent = days;
      countdownElements.hours.textContent = hours;
      countdownElements.minutes.textContent = minutes;
      countdownElements.seconds.textContent = seconds;
    });
  } else {
    // Wedding has passed
    requestAnimationFrame(() => {
      countdownElements.days.textContent = '0';
      countdownElements.hours.textContent = '0';
      countdownElements.minutes.textContent = '0';
      countdownElements.seconds.textContent = '0';
    });
  }
}

// Use requestAnimationFrame for smoother updates
let countdownInterval;

function startCountdown() {
  updateCountdown();
  countdownInterval = setInterval(() => {
    requestAnimationFrame(updateCountdown);
  }, 1000);
}

function stopCountdown() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
}

// Start countdown when page loads
document.addEventListener('DOMContentLoaded', startCountdown);

// Stop countdown when page is not visible to save resources
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    stopCountdown();
  } else {
    startCountdown();
  }
});

// Handle map button click
document.addEventListener('DOMContentLoaded', () => {
  const openMapBtn = document.getElementById('open-map-btn');
  if (openMapBtn) {
    openMapBtn.addEventListener('click', () => {
      window.open('https://yandex.ru/maps/?ll=39.198000%2C51.659000&z=17&mode=search&text=%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6+%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0+11&lang=ru_RU', '_blank');
    });
  }
});