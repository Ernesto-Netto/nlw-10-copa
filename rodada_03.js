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
    createGame("Ecuador", "12:00", "Senegal") +
    createGame("Netherlands", "12:00", "Qatar") +
    createGame("Iran", "16:00", "United States") +
    createGame("Wales", "16:00", "England")
) +
createCard("30/11", "quarta",
    createGame("Tunisia", "12:00", "france") +
    createGame("australia", "12:00", "Denmark") +
    createGame("Poland", "16:00", "argentina") +
    createGame("Saudi Arabia", "16:00", "Mexico")
) +
createCard("01/12", "quinta",
    createGame("Croatia", "12:00", "Belgium") +
    createGame("Canada", "12:00", "Morocco") +
    createGame("japan", "16:00", "Spain") +
    createGame("Costa Rica", "16:00", "germany")
) +
createCard("02/12", "Sexta",
    createGame("South Korea", "12:00", "portugal") +
    createGame("ghana", "12:00", "Uruguay") +
    createGame("serbia", "16:00", "Switzerland") +
    createGame("Cameroon", "16:00", "brazil")
)