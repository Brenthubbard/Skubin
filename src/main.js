import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'

$("section").text("TEST TEXT INPUT")

const ROWS = 4;
const COLS = 4;
// const CHARACTER = "C"
// const OBSTACLE = "O"
// const GOODIES = "G"
const EMPTY = "E"

// scoreboard state
// character state

// map state
//create an array that takes an X and Y index
function createMap(columnCount, rowCount) {
  const map = [];
  for (let x = 0; x < columnCount; x++) {
    map[x] = []; //set up inner array
    for (let y = 0; y < rowCount; y++) {
      addToCell(map, x, y, EMPTY);
    }
  }
  return map;
}

function addToCell(map, x, y, obj) {
  map[x][y] = obj; //create a new object on the x and y
}

// we need a map 12x12
const map = createMap(COLS, ROWS);
// we need to draw the map on the screen

console.dir(map)

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

