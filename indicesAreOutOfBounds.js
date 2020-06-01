const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds (rowIndex, columnIndex, array) {
 if (isOutOfBounds(columnIndex, array) == true || isOutOfBounds(rowIndex, array) == true) {
   return true
 } else {
   return false
 }
}

module.exports = indicesAreOutOfBounds