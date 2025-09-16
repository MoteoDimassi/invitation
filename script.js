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

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  } else {
    // Wedding has passed
    document.getElementById('days').innerText = '0';
    document.getElementById('hours').innerText = '0';
    document.getElementById('minutes').innerText = '0';
    document.getElementById('seconds').innerText = '0';
  }
}

// Update every second
setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();