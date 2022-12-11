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
createCard("09/12", "sexta",
    createGame("brazil", "1 (2)", "12:00", "1 (4)", "croatia") +
    createGame("netherlands",  "2 (3)", "16:00",  "2 (4)", "argentina")
) +
createCard("10/12", "sábado",
    createGame("morocco",  "1", "12:00",  "0", "portugal") +
    createGame("england",  "1", "16:00",  "2", "france")
) 