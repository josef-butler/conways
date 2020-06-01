function isOutOfBounds(index, array) {
  if (array[index] == undefined) {
    return true
  } else {
    return false
  }
}

module.exports = isOutOfBounds