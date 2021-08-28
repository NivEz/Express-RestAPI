'use strict';

const tableName = 'games',
    database = require('../../../middleware/database')

module.exports = {
    selectGame,
    // insertItem
}

function selectGame(gameId) {
    return database.select(tableName, gameId);
}

// function insertItem(item) {
//     return database.insert(tableName, item)
// }