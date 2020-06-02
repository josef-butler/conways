const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard (currentBoard) {
    let newBoard = []
    for (k = 0; k < currentBoard.length; k++) {
        let newRow = []
        for (m = 0; m < currentBoard[k].length; m++) {
            aliveNeighbours = countAliveNeighbours(k, m, currentBoard)
            cellState = nextCellState(currentBoard[k][m], aliveNeighbours)
            newRow.push(cellState)
        }
        newBoard.push(newRow)
    }
    return newBoard
}
module.exports = nextBoard