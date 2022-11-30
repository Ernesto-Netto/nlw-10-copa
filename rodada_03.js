function createGame(player1, result1, hour, result2, player2){
    return `
        <li>
        <img src="./assets/icon=${player1}.svg" alt="Bandeira do Brasil">
        <strong class="res">${result1}</strong>
        <strong>${hour}</strong>        
        <strong class="res">${result2}</strong>
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
createCard("29/11", "terça",
    createGame("ecuador", "1", "12:00", "2", "senegal") +
    createGame("netherlands", "2", "12:00", "0", "qatar") +
    createGame("iran", "0", "16:00", "1", "united states") +
    createGame("wales", "0", "16:00", "0", "england")
) +
createCard("30/11", "quarta",
    createGame("tunisia", "1", "12:00", "0", "france") +
    createGame("australia", "1", "12:00", "0", "denmark") +
    createGame("poland", "0", "16:00", "2", "argentina") +
    createGame("saudi arabia", "1", "16:00", "2", "mexico")
) +
createCard("01/12", "quinta",
    createGame("croatia", "-", "12:00", "-", "belgium") +
    createGame("canada", "-", "12:00", "-", "morocco") +
    createGame("japan", "-", "16:00", "-", "spain") +
    createGame("costa rica", "-", "16:00", "-", "germany")
) +
createCard("02/12", "Sexta",
    createGame("south korea", "-", "12:00", "-", "portugal") +
    createGame("ghana", "-", "12:00", "-", "uruguay") +
    createGame("serbia", "-", "16:00", "-", "switzerland") +
    createGame("cameroon", "-", "16:00", "-", "brazil")
)