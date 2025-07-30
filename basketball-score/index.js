let homeScore = document.querySelector('.home-score');
let guestScore = document.querySelector('.guest-score');

let homeCount = 0;
let guestCount = 0;

document.getElementById('home-1').addEventListener('click', () => {
  homeCount += 1;
  homeScore.textContent = homeCount;
});
document.getElementById('home-2').addEventListener('click', () => {
  homeCount += 2;
  homeScore.textContent = homeCount;
});
document.getElementById('home-3').addEventListener('click', () => {
  homeCount += 3;
  homeScore.textContent = homeCount;
});

document.getElementById('guest-1').addEventListener('click', () => {
  guestCount += 1;
  guestScore.textContent = guestCount;
});
document.getElementById('guest-2').addEventListener('click', () => {
  guestCount += 2;
  guestScore.textContent = guestCount;
});
document.getElementById('guest-3').addEventListener('click', () => {
  guestCount += 3;
  guestScore.textContent = guestCount;
});
