const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState (cellState, neighbourCount) {
    if (cellState == 1) {
        if (isOverPopulated(neighbourCount) || isUnderPopulated(neighbourCount)) {
            return 0
        } else {
            return 1
        }
    } 
    
    if (cellState == 0) {
        if (isRessurectable(neighbourCount)) {
            return 1
        } else {
            return 0
        }
    }
}

module.exports = nextCellState