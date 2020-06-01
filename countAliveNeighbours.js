const getNeighbours = require('./getNeighbours')

function countAliveNeighbours(cellRow, cellColumn, board) {
  let count = 0

  // for (let i = -1; i <= 1; i++) {
  //   for (let j = -1; j <= 1; j++) {
  //     if (board[cellRow + 1][cellColumn + 1] != undefined) {
  //       console.log("HIYA")
  //     }
  //   }
  // return count
}

module.exports = countAliveNeighbours
