const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard (currentBoard) {
    let newBoard = []
    for (k = 0; k < currentBoard.length; k++) {
        let newRow = []
        for (m = 0; m < currentBoard[k].length; m++) {
            const currentCell = currentBoard[k][m]

            aliveNeighbours = countAliveNeighbours(k, m, currentBoard)
            let newCell = nextCellState(currentCell, aliveNeighbours)

            newRow.push(newCell)
        }
        newBoard.push(newRow)
    }
    return newBoard
}

module.exports = nextBoard