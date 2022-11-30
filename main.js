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
createCard("20/11", "domingo",
    createGame("qatar", "0", "13:00", "2", "ecuador")
) +
createCard("21/11", "segunda",
    createGame("england", "6", "10:00", "2", "iran") +
    createGame("senegal", "0", "13:00", "2", "netherlands") +
    createGame("united states", "1", "16:00", "1", "wales")
) +
createCard("22/11", "terça",
    createGame("argentina", "1", "07:00", "2", "saudi arabia") +
    createGame("denmark", "0", "10:00", "0", "tunisia") +
    createGame("mexico", "0", "13:00", "0", "poland") +
    createGame("france", "4", "16:00", "1", "australia")
) +
createCard("23/11", "quarta",
    createGame("morocco", "0", "07:00", "0", "croatia") +
    createGame("germany", "1", "10:00", "2", "japan") +
    createGame("spain", "7", "13:00", "0", "costa rica") +
    createGame("belgium", "1", "16:00", "0", "canada")
) +
createCard("24/11", "quinta",
    createGame("switzerland", "1", "07:00", "0", "cameroon") +
    createGame("uruguay", "0", "10:00", "0", "south korea") +
    createGame("portugal", "3", "13:00", "2", "ghana") +
    createGame("brazil", "2", "16:00", "0", "serbia")
)