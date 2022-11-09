'use strict';

const router = require("express-promise-router")({
        mergeParams: true
    }),
    logic = require('./logic')

router.post('/', (req, res) => {
    const result = logic.getItems(req.query);
    res.status(200).json({result});
})

router.post('/', (req, res) => {
    const result = logic.createItem(req.body.item);
    res.status(200).json({result});
})

router.use('/:itemId', require('./item'))

module.exports = router;