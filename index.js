const createBoard = require('./createBoard')
const nextBoard = require('./nextBoard')
const displayBoard = require('./displayBoard')
const clear = require('clear')

const size = 10
const refreshInterval = 100

let board = createBoard(size)

function refreshBoard() {
  setTimeout(() => {
    clear();
    displayBoard(board)
    board = nextBoard(board)
    refreshBoard();
  }, refreshInterval)
}

refreshBoard()