'use strict';

const tableName = 'tableGames',
    database = require('../../middleware/database')

module.exports = {
    selectGames,
    insertGame
}

function selectGames() {
    return database.select(tableName)

}

function insertGame(newGame) {
    return database.insert(tableName, newGame)
}