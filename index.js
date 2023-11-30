let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')

function addHomeOne() {
    let result = parseInt(homeScoreEl.textContent)
    homeScoreEl.textContent = result + 1
}

function addHomeTwo() {
    let result = parseInt(homeScoreEl.textContent)
    homeScoreEl.textContent = result + 2
}

function addHomeThree() {
    let result = parseInt(homeScoreEl.textContent)
    homeScoreEl.textContent = result + 3
}

function resetHome() {
    homeScoreEl.textContent = 0
}

function addGuestOne() {
    let result = parseInt(guestScoreEl.textContent)
    guestScoreEl.textContent = result + 1
}

function addGuestTwo() {
    let result = parseInt(guestScoreEl.textContent)
    guestScoreEl.textContent = result + 2
}

function addGuestThree() {
    let result = parseInt(guestScoreEl.textContent)
    guestScoreEl.textContent = result + 3
}

function resetGuest() {
    guestScoreEl.textContent = 0

}