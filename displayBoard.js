function displayBoard (board) {
  // eslint-disable-next-line no-console

  for (n = 0; n < board.length; n++) {
    console.log(board[n].join(" "))
  }
}

module.exports = displayBoard
