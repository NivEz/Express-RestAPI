'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getGame,
    removeGame,
    updateGame,
    patchGame

}

function getGame(gameId) {
    return dataQueries.selectGame(gameId)
}

function removeGame(id) {
    return dataQueries.removeGame(id)
}

function updateGame(id, updatedGame) {
    return dataQueries.updateGame(id, updatedGame)
}

function patchGame(id, fieldsToUpdate) {
    return dataQueries.patchGame(id, fieldsToUpdate)
}

