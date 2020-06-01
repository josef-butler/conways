function createBoard (size) {
    let board = []
    for (i = 0; i < size; i++) {
        let row = []
        for (j = 0; j < size; j++) {
            row.push(j)
        }
        board.push(row);
    }
    return board
}

module.exports = createBoard