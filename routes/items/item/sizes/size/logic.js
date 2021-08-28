'use strict';

const sizesDataQueries = require('../data-queries')

module.exports = {
    getSize,
}

function getSize(id, sizeType) {
    const sizes = sizesDataQueries.selectSizes(id);
    return {[sizeType]: sizes[sizeType]}

}


