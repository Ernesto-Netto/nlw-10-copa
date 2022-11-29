function createGame(player1, hour, player2) {
    return `
        <li>
        <img src="./assets/icon=${player1}.svg" alt="Bandeira do Brasil">
        <strong>${hour}</strong>
        <img src="./assets/icon=${player2}.svg" alt="Bandeira da Servia">
        </li>
`
}
let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
        <ul>
        ${games}
        </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML =    
createCard("18/12", "DOMINGO",
    createGame("aconfirmar", "12:00", "aconfirmar")
)

//EU
let atraso = -0.4;
function createCard2(date, day, games) {
    atraso = atraso + 0.4;
    return `
    <div class="card2" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
        <ul>
        ${games}
        </ul>
    </div>
    `
}


document.querySelector("#cards2").innerHTML =    
createCard2("18/12", "DOMINGO",
    createGame("aconfirmar", "10:00", "aconfirmar")
)


//


