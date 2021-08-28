'use strict';

const dataQueries = require('./data-queries')

module.exports = {
    getSizes,
}

function getSizes(id) {
    return dataQueries.selectSizes(id);
}


