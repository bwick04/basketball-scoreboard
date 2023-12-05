let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')

function addOne(btnEl) {
    console.log(btnEl)
    if (btnEl.id === 'add-home') {
        let result = parseInt(homeScoreEl.textContent)
        homeScoreEl.textContent = result + 1
    } else {
        let result = parseInt(guestScoreEl.textContent)
        guestScoreEl.textContent = result + 1
    }
}

function addTwo(btnEl) {
    if (btnEl.id === 'add-home') {
        let result = parseInt(homeScoreEl.textContent)
        homeScoreEl.textContent = result + 2
    } else {
        let result = parseInt(guestScoreEl.textContent)
        guestScoreEl.textContent = result + 2
    }
}

function addThree(btnEl) {
    if (btnEl.id === 'add-home') {
        let result = parseInt(homeScoreEl.textContent)
        homeScoreEl.textContent = result + 3
    } else {
        let result = parseInt(guestScoreEl.textContent)
        guestScoreEl.textContent = result + 3
    }
}

function resetScore(btnEl) {
    if (btnEl.id === 'reset-home') {
        homeScoreEl.textContent = 0
    } else {
        guestScoreEl.textContent = 0
    }
}