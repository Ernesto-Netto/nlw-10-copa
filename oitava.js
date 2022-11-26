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
createCard("25/11", "sexta",
    createGame("Wales", "07:00", "Iran") +
    createGame("Qatar", "10:00", "Senegal") +
    createGame("Netherlands", "13:00", "Ecuador") +
    createGame("England", "16:00", "United States")
) +
createCard("26/11", "sábado",
    createGame("Tunisia", "07:00", "australia") +
    createGame("Poland", "10:00", "Saudi Arabia") +
    createGame("france", "13:00", "Denmark") +
    createGame("argentina", "16:00", "Mexico")
) +
createCard("27/11", "domingo",
    createGame("japan", "07:00", "Costa Rica") +
    createGame("Belgium", "10:00", "Morocco") +
    createGame("Croatia", "13:00", "Canada") +
    createGame("Spain", "16:00", "germany")
) +
createCard("28/11", "segunda",
    createGame("Cameroon", "07:00", "serbia") +
    createGame("South Korea", "10:00", "ghana") +
    createGame("brazil", "13:00", "Switzerland") +
    createGame("portugal", "16:00", "Uruguay")
)