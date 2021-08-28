'use strict';

const router = require("express-promise-router")({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/', (req, res) => {
    const result = logic.getSizes(Number(req.params.itemId));
    res.status(200).json({result});
})

router.use('/:sizeType', require('./size'))

module.exports = router;