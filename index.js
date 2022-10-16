let home = document.getElementById("home");

let away = document.getElementById("away");

let homeScore = 0;

let awayScore = 0;

// home-score

function addOnePointHome() {
    homeScore = homeScore + 1;
    home.textContent = homeScore;
}

function addTwoPointsHome() {
    homeScore = homeScore + 2;
    home.textContent = homeScore;
}

function addThreePointsHome() {
    homeScore = homeScore + 3;
    home.textContent = homeScore;
}


// away-score

function addOnePointAway() {
    awayScore = awayScore + 1;
    away.textContent = awayScore;
}

function addTwoPointsAway() {
    awayScore = awayScore + 2;
    away.textContent = awayScore;
}

function addThreePointsAway() {
    awayScore = awayScore + 3;
    away.textContent = awayScore;
}

function newGame() {
    awayScore = 0;
    homeScore = 0;
    away.textContent = 0;
    home.textContent = 0;
}