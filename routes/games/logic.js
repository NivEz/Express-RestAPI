'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getGames,
    createGame
}

async function getGames() {
    const games = await dataQueries.selectGames()
    //return Object.assign(games, {total: games.length})
    return games
}

function createGame(newGame) {
    return dataQueries.insertGame(newGame)
}


