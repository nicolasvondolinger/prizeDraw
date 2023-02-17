function printPlayers(players){
  let phrase = ''
  for (let i = 0; i < players.length; i++) {
    phrase += `\n - ${players[i]}`
  }
  return phrase
}

function randomizePlayers(players){
  let currentIndex = players.length, randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    [players[currentIndex], players[randomIndex]] = [players[randomIndex], players[currentIndex]]
  } 
  return players
}

function printKeys(players){
  let ul = document.getElementById("ul")
  for (let i = 0; i < players.length; i = i + 2) {
    let li = document.createElement("li")
    li.innerHTML = `${players[i]} vs ${players[i + 1]}\n`
    ul.appendChild(li)
  }
}

let choice = ''
let players = []

while(choice != 0 || choice == null || choice == ''){
  choice = prompt(`Digite o nome do participante\n
0 - Finalizar\n\nJogadores Cadastrados:${printPlayers(players)}\n`)
  if(choice == 0){
    break
  } else if (choice == null || choice == '' || typeof choice == 'null' || typeof choice == null) {
    alert("Opção Inválida!")
  } else if (typeof choice === 'string'){
    players[players.length] = choice
  } 
}

randomizePlayers(players)
printKeys(players)
