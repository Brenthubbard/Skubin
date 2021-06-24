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
  character: { speed: 2, health: 3, patches: 10, sixers: 0, skiWax: 10, hotToddies: 0 },
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
  initialMap[1][0] = CHARACTER
  initialMap[3][3] = OBSTACLE
  initialMap[1][3] = GOODIES
  updateState({ map: initialMap })
  renderMap()
}

// game loop while character has not hit an obstacle
while (state.character.health > 0) {
  setupGame()
  // taking turns
    // enable left/right buttons
    // move left/right
    // disable left/right buttons
    // move all objects up and re-render
    // check for collision
      // if goodie, add to character's goodies
      // if obstacle, reduce health by 1
    // show updated scoreboard
  renderUpdatedScoreboard()

  console.log("LEAVING GAME LOOP")
  break; // TODO remove once we not longer have an infinite loop
  // end of the game? caught by avalanche, air runs out and you sink
}

console.log(state)

// different maps/levels
// double black diamond
// class 5 rapid

// obstacles
// trees, rocks, drops/waterfall/cliff
// ski - tree well, avalanche
// tube - whirlpool/eddy
