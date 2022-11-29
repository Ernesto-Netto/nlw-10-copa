function createGame(player1, hour, player2) {
    return `
        <li>
        <img src="./assets/icon=${player1}.svg" alt="Bandeira do País">
        <strong>${hour}</strong>
        <img src="./assets/icon=${player2}.svg" alt="Bandeira do País">
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
createCard("29/11", "terça",
    createGame("ecuador", "12:00", "senegal") +
    createGame("netherlands", "12:00", "qatar") +
    createGame("iran", "16:00", "united states") +
    createGame("wales", "16:00", "england")
) +
createCard("30/11", "quarta",
    createGame("tunisia", "12:00", "france") +
    createGame("australia", "12:00", "denmark") +
    createGame("poland", "16:00", "argentina") +
    createGame("saudi arabia", "16:00", "mexico")
) +
createCard("01/12", "quinta",
    createGame("croatia", "12:00", "belgium") +
    createGame("canada", "12:00", "morocco") +
    createGame("japan", "16:00", "spain") +
    createGame("costa rica", "16:00", "germany")
) +
createCard("02/12", "Sexta",
    createGame("south korea", "12:00", "portugal") +
    createGame("ghana", "12:00", "uruguay") +
    createGame("serbia", "16:00", "switzerland") +
    createGame("cameroon", "16:00", "brazil")
)