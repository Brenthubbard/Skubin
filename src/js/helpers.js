// helper to create an array with x,y coordinates
export function createMap(ROWS, COLS, EMPTY = "E") {
  const map = [];
  for (let x = 0; x < ROWS; x++) {
    map[x] = []; //set up inner array
    for (let y = 0; y < COLS; y++) {
      addToCell(map, x, y, EMPTY);
    }
  }
  return map;
}

// helper to add an element to the map at x,y coords
export const addToCell = (map, x, y, element) => {
  map[x][y] = element; //create a new object on the x and y
}

