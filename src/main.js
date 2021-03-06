import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import { createMap } from './js/helpers'

// global constants
const ROWS = 4
const COLS = 4
const CHARACTER = "C"
const OBSTACLE = "O"
const GOODIES = "G"
const EMPTY = "E"

// state object
let state = {
  scoreBoard: 0,
  character: { speed: 2, health: 3, patches: 10, sixers: 0, skiWax: 10, hotToddies: 0, location: 0 },
  map: createMap(ROWS, COLS, EMPTY),
  mode: "tubin"
}

const updateState = newData => state = {...state, ...newData}

// draw the map on the screen/in the browser
const renderMap = () => {
  for (let x = 0; x < ROWS; x += 1) {
    for (let y = 0; y < COLS; y += 1) {
      // console.log(map[x][y])
      $(`#${y + 1}${x + 1}`).text(state.map[x][y])
    }
  }
}

// render the updated scoreboard
const renderUpdatedScoreboard = () => {
  $("#health").text(state.character.health)
  if (state.mode === "tubin") {
    $("#skiWax").parent().hide()
    $("#hotToddies").parent().hide()
    $("#patches").text(state.character.patches)
    $("#sixers").text(state.character.sixers)
  } else {
    $("#patches").parent().hide()
    $("#sixers").parent().hide()
    $("#skiWax").text(state.character.skiWax)
    $("#hotToddies").text(state.character.hotToddies)
  }
}

// initializing the game/map
const setupGame = () => {
  // show the initial scoreboard
  renderUpdatedScoreboard()
  // create the starting map w/character, goodies, and obstacle
  const initialMap = state.map
  initialMap[0][0] = CHARACTER
  initialMap[3][3] = OBSTACLE
  initialMap[1][3] = GOODIES
  updateState({ map: initialMap })
  renderMap()
}

setupGame()

const moveCharacter = (direction) => {
  if (direction === "left") {
    if (state.character.location === 0) return
    state.map[state.character.location][0] = EMPTY
    state.map[state.character.location - 1][0] = CHARACTER
    state.character.location = state.character.location - 1
  } else {
    if (state.character.location === 3) return
    state.map[state.character.location][0] = EMPTY
    state.map[state.character.location + 1][0] = CHARACTER
    state.character.location = state.character.location + 1
  }
}

const detectCollision = () => {
  // if the CHARACTER is 1 space up the y axis
  // decrement the character's health by 1
}

const moveObjectsUp = () => {
  // for each position on the map
  // for (i=0, )
    // if the object is not EMPTY or CHARACTER,
    // check for a collision
    detectCollision()
    // move it up the y axis 1
}

// move the character to the left or right
$(".directionButton").on("click", function(event) {
  moveCharacter(event.target.id)
  moveObjectsUp()
  renderMap()
  renderUpdatedScoreboard()
})
console.log(state)

// different maps/levels
// double black diamond
// class 5 rapid

// obstacles
// trees, rocks, drops/waterfall/cliff
// ski - tree well, avalanche
// tube - whirlpool/eddy
