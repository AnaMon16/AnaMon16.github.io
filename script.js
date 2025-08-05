document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value;
  const attendance = this.attendance.value;

  const message = attendance === "Yes"
    ? `Thanks, ${name}! We can't wait to celebrate with you. 🎉`
    : `Thanks, ${name}. We'll miss you! 💜`;

  document.getElementById("responseMsg").textContent = message;
  this.reset();

  const weddingDate = new Date("June 27, 2026 14:00:00").getTime();

const countdownFunc = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    clearInterval(countdownFunc);
    document.getElementById("countdown").innerHTML = "<p>It's Wedding Time! 💍</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);

});