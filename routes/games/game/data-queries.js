'use strict';

const tableName = 'tableGames',
    database = require('../../../middleware/database')

module.exports = {
    selectGame,
    removeGame,
    updateGame,
    patchGame
}

function selectGame(gameId) {
    return database.select(tableName, gameId)
}

function removeGame(id) {
    return database.remove(tableName, id)
        .then(game => {
            console.log("game", game)
            return game
        })
}

function updateGame(id, updatedGame) {
    return database.update(tableName, id, updatedGame)
}

function patchGame(id, fieldsToUpdate) {
    return database.patch(tableName, id, fieldsToUpdate)
}
