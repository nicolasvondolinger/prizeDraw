function addPlayer(){
  players[players.length] = document.getElementById('input').value
  printPlayers(players)
  document.getElementById('input').value = ''
}

function printPlayers(players){
  let player = document.createElement('li')
  player.innerHTML = `\n - ${players[players.length - 1]}`
  document.getElementById('players').appendChild(player)
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
  let ul = document.getElementById("keys")
  for (let i = 0; i < players.length; i = i + 2) {
    let li = document.createElement("li")
    li.innerHTML = `${players[i]} vs ${players[i + 1]}\n`
    ul.appendChild(li)
  }
}


function prizeDraw(){
  clearKeys()
  randomizePlayers(players)
  printKeys(players)
  clearPlayers()
  players = []
}

function clearPlayers() {
  const ul = document.getElementById("players")
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
}

function clearKeys(){
  const ul = document.getElementById("keys")
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
}

let choice = ''
var players = []
