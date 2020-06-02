const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

function getNeighbours(cellRow, cellColumn, board) {
  let arr = []

  for (let i = -1; i <= 1; i++) {
    let cell = []

    for (let j = -1; j <= 1; j++) {
      // Go around the cell and push any neighbours to an array
      if(indicesAreOutOfBounds(i, cellColumn + j, board) === false) {
        // console.log('it is something')
        cell.push(board[i][cellColumn + j])
      }
    }
    arr.push(cell)
  }
  
  return arr
}

module.exports = getNeighbours