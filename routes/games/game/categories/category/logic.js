'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getGame,
    // createItem
}

function getGame(gameId) {
    return dataQueries.selectGame(gameId);
}

// function createItem(item) {
//     return dataQueries.insertItem(item)
// }

