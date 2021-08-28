'use strict';

const tableName = 'items',
    database = require('../../middleware/database')

module.exports = {
    selectItems,
    insertItem
}

function selectItems(query) {
    let itemsArr = database.select(tableName);
    if (query.priceIsGreater) {
        itemsArr = itemsArr.filter(item => item.price >= query.priceIsGreater)
    }
    if (query.priceIsLower) {
        itemsArr = itemsArr.filter(item => item.price < query.priceIsLower)
    }
    return itemsArr;
}

function insertItem(item) {
    return database.insert(tableName, item)
}