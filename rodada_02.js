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
createCard("25/11", "sexta",
    createGame("wales", "0", "07:00", "2", "iran") +
    createGame("qatar", "1", "10:00", "3", "senegal") +
    createGame("netherlands", "1", "13:00", "1", "ecuador") +
    createGame("england", "0", "16:00", "0", "united states")
) +
createCard("26/11", "sábado",
    createGame("tunisia", "0", "07:00", "1", "australia") +
    createGame("poland", "2", "10:00", "0", "saudi arabia") +
    createGame("france", "2", "13:00", "1", "denmark") +
    createGame("argentina", "2", "16:00", "0", "mexico")
) +
createCard("27/11", "domingo",
    createGame("japan", "0", "07:00", "1", "costa rica") +
    createGame("belgium", "0", "10:00", "2", "morocco") +
    createGame("croatia", "4", "13:00", "1", "canada") +
    createGame("spain", "1", "16:00", "1", "germany")
) +
createCard("28/11", "segunda",
    createGame("cameroon", "3", "07:00", "3", "serbia") +
    createGame("south korea", "2", "10:00", "3", "ghana") +
    createGame("brazil", "1", "13:00", "0", "switzerland") +
    createGame("portugal", "2", "16:00", "0", "uruguay")
)