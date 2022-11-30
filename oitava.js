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
    createGame("netherlands", "-" , "12:00", "-", "united states") +
    createGame("aconfirmar", "-", "16:00", "-", "australia")
) +
createCard("04/12", "domingo",
    createGame("france", "-", "12:00", "-", "aconfirmar") +
    createGame("england", "-", "16:00", "-", "senegal")
) +
createCard("05/11", "segunda",
    createGame("spain", "-", "12:00", "-", "aconfirmar") +
    createGame("brazil", "-", "16:00", "-", "aconfirmar")
) +
createCard("06/12", "terça",
    createGame("aconfirmar", "-", "12:00", "-", "aconfirmar") +
    createGame("portugal", "-", "16:00", "-", "aconfirmar")
)