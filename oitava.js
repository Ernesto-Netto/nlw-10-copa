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
createCard("03/12", "sábado",    
    createGame("netherlands", "3" , "12:00", "1", "united states") +
    createGame("argentina", "2", "16:00", "1", "australia")
) +
createCard("04/12", "domingo",
    createGame("france", "3", "12:00", "1", "poland") +
    createGame("england", "3", "16:00", "0", "senegal")
) +
createCard("05/11", "segunda",
    createGame("japan", "1 (1)", "12:00", "1 (3)", "croatia") +
    createGame("brazil", "4", "16:00", "1", "south korea")
) +
createCard("06/12", "terça",
    createGame("morocco", "0 (3)", "12:00", "0 (0)", "spain") +
    createGame("portugal", "6", "16:00", "1", "switzerland")
)