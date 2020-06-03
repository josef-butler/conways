const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState(cellState, neighbourCount) {

  if (cellState == 1) {
    if (neighbourCount === 2 || neighbourCount === 3) {
      return 1
    } else {
      return 0
    }
  }

  if (cellState == 0) {
    if (neighbourCount === 3) {
      return 1
    } else {
      return 0
    }
  }
}

module.exports = nextCellState