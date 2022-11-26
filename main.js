function createGame(player1,hour,player2){
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
createCard("20/11", "domingo",
    createGame("Qatar", "13:00", "Ecuador")
) +
createCard("21/11", "segunda",
    createGame("England", "10:00", "Iran") +
    createGame("Senegal", "13:00", "Netherlands") +
    createGame("United States", "16:00", "Wales")
) +
createCard("22/11", "terça",
    createGame("argentina", "07:00", "Saudi Arabia") +
    createGame("Denmark", "10:00", "Tunisia") +
    createGame("Mexico", "13:00", "Poland") +
    createGame("france", "16:00", "australia")
) +
createCard("23/11", "quarta",
    createGame("Morocco", "07:00", "Croatia") +
    createGame("germany", "10:00", "japan") +
    createGame("Spain", "13:00", "Costa Rica") +
    createGame("Belgium", "16:00", "Canada")
) +
createCard("24/11", "quinta",
    createGame("Switzerland", "07:00", "Cameroon") +
    createGame("Uruguay", "10:00", "South Korea") +
    createGame("portugal", "13:00", "ghana") +
    createGame("brazil", "16:00", "serbia")
)
//+
// createCard("25/11", "sexta",
//     createGame("Wales", "07:00", "iran") +
//     createGame("Qatar", "10:00", "Senegal") +
//     createGame("Netherlands", "13:00", "Ecuador") +
//     createGame("England", "16:00", "United States")
// )