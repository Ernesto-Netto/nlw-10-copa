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
createCard("03/12", "sábado",    
    createGame("Netherlands", "12:00", "aconfirmar") +
    createGame("aconfirmar", "16:00", "aconfirmar")
) +
createCard("04/12", "domingo",
    createGame("france", "12:00", "aconfirmar") +
    createGame("England", "16:00", "aconfirmar")
) +
createCard("05/11", "segunda",
    createGame("Spain", "12:00", "aconfirmar") +
    createGame("brazil", "16:00", "aconfirmar")
) +
createCard("06/12", "terça",
    createGame("aconfirmar", "12:00", "aconfirmar") +
    createGame("portugal", "16:00", "aconfirmar")
)