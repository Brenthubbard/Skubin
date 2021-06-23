import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'

$("section").text("TEST TEXT INPUT")

// global constants
const ROWS = 4;
const COLS = 4;
// const CHARACTER = "C"
// const OBSTACLE = "O"
// const GOODIES = "G"
const EMPTY = "E"

// state of the scoreboard, character, and map
const storeState = () => {
  let gameState = {}
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(gameState)
    gameState = { ...newState }
    return newState
  }
}

// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }
//let plant = { soil: 0, light: 0, water: 0 }
//const feed = changeState("soil");
//feed(5)(plant)
//const blueFood = changeState("soil")(5)
//blueFood(plant)
//const fedPlant = stateControl(blueFood);
//> { soil: 5 }
//const fedPlant = stateControl(blueFood());<--- Not supposed to do this

// closure to protect our state
const stateClosure = storeState()
const gameStateClosure = storeState("gameState")

// set up initial state
const initialState = { scoreBoard: 0, character: 0, map: createMap(ROWS, COLS) }
gameStateClosure(initialState)

// helper function to create an array with x,y coordinates
function createMap(rowCount, columnCount) {
  const map = [];
  for (let x = 0; x < rowCount; x++) {
    map[x] = []; //set up inner array
    for (let y = 0; y < columnCount; y++) {
      addToCell(map, x, y, EMPTY);
    }
  }
  return map;
}

// helper function to add an element to the map at x,y coords
function addToCell(map, x, y, element) {
  map[x][y] = element; //create a new object on the x and y
}

// draw the map on the screen/in the browser
// function renderMap() {
//   for (let x = 0; x < ROWS; x += 1) {
//     for (let y = 0; y < COLS; y += 1) {
//       // console.log(map[x][y])
//       $(`#${y + 1}${x + 1}`).text(map[x][y])
//     }
//   }
// }

console.dir(stateClosure.gameState)
console.dir(storeState)
console.dir(storeState.gameState)
// start the game with the player in the upper left corner
// map[1][0] = CHARACTER
// // start the game with an obstacle
// map[3][3] = OBSTACLE
// // start the game with a goodie
// map[1][3] = GOODIES
// renderMap()

// TESTING the plane
// map[0][3] = "03"
// renderMap()
// map[3][0] = "30"
// renderMap()
// map[1][0] = "10"
// renderMap()
// map[3][3] = "33"
// renderMap()



// we need turns
// we need to be able move things from one square to another
// we need things: characters, obstacles, enemies

// scoreboard
// how much health they have left,
// how many points/toddies/patch kits/six packs
// movement speed - need patch kit and ski wax to keep moving

// end of the game? caught by avalanche, air runs out and you sink

// what does a character have?
// ski - pick up hot toddies, ski wax
// tube - six packs, patch kit
// what does a character do
// levelling, what goes up?
// movement, square to square

// different maps/levels
// double black diamond
// class 5 rapid

// obstacles
// trees, rocks, drops/waterfall/cliff
// ski - tree well, avalanche
// tube - whirlpool/eddy

