function createBoard (size) {
    let board = []
    for (i = 0; i < size; i++) {
        let row = []
        for (j = 0; j < size; j++) {
            let randomNumber = Math.random()
            if (randomNumber < 0.3) {
                row.push(1)
            } else {
                row.push(0)
            }
        }
        board.push(row)
    }
    return board
}

module.exports = createBoard