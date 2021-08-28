'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getItems,
    createItem
}

function getItems(query) {
    return dataQueries.selectItems(query);
}

function createItem(item) {
    return dataQueries.insertItem(item)
}

