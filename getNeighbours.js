const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

function getNeighbours(cellRow, cellColumn, board) {
  let arr = []

  for (i = -1; i <= 1; i++) {
    for (j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        continue
      } else {
        if (indicesAreOutOfBounds(cellRow + i, cellColumn + j, board) == false) {
          arr.push(board[cellRow + i][cellColumn + j])
        }
      }
    }
  }
  return arr
}

module.exports = getNeighbours