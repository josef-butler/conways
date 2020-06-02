const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds (rowIndex, columnIndex, array) {

  if (isOutOfBounds(rowIndex, array) || isOutOfBounds(columnIndex, array)) {
    return true
  } else {
    return false
  }
}

module.exports = indicesAreOutOfBounds