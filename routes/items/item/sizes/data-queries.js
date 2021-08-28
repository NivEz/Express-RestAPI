'use strict';

const tableName = 'items',
    database = require('../../../../middleware/database')

module.exports = {
    selectSizes
}

function selectSizes(id) {
    const itemArr = database.select(tableName, id)
    return itemArr[0].size;
}
