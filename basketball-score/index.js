let homeScore = document.querySelector(".home-score")
let guestScore = document.querySelector(".guest-score")
let homeCount = 0
let guestCount = 0

function incrementHome1() {
  homeCount += 1
  homeScore.textContent = homeCount 
  
  
}

function incrementHome2() {
  homeCount += 2
  homeScore.textContent = homeCount 
  
  
}

function incrementHome3() {
  homeCount += 3
  homeScore.textContent = homeCount 
 
  
}


function incrementGuest1() {
  guestCount += 1
  guestScore.textContent = guestCount
  
}

function incrementGuest2() {
  guestCount += 2
  guestScore.textContent = guestCount
  
}

function incrementGuest3() {
  guestCount += 3
  guestScore.textContent = guestCount
  
  
}