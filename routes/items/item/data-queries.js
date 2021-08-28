'use strict';

const tableName = 'items',
    database = require('../../../middleware/database')

module.exports = {
    selectItem,
    updateItem,
    deleteItem,
    patchItem
}

function selectItem(id) {
    return database.select(tableName, id);
}

function updateItem(id, item) {
    return database.update(tableName, id, item)
}

function deleteItem(id) {
    return database.remove(tableName, id);
}

function patchItem(id, fieldToUpdate) {
    return database.patch(tableName, id, fieldToUpdate)
}