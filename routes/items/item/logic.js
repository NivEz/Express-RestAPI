'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getItem,
    updateItem,
    removeItem,
    patchItem
}

function getItem(id) {
    return dataQueries.selectItem(id);
}

function updateItem(id, item) {
    return dataQueries.updateItem(id, item)
}

function removeItem(id) {
    return dataQueries.deleteItem(id)
}

function patchItem(id, fieldToUpdate) {
    return dataQueries.patchItem(id, fieldToUpdate)
}

