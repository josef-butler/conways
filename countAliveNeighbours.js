const getNeighbours = require('./getNeighbours')

function countAliveNeighbours(cellRow, cellColumn, board) {
  let count = 0
  let neighbours = getNeighbours(cellRow, cellColumn, board)

  for (i = 0; i < neighbours.length; i++) {
    if (neighbours[i] == true || neighbours[i] === 1) {
      count++
    }
  }

  return count
}

module.exports = countAliveNeighbours
