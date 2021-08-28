'use strict';

const router = require("express-promise-router")({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/', (req, res) => {
    const result = logic.getItem(Number(req.params.itemId));
    res.status(200).json({result});
})

router.put('/', (req, res) => {
    const result = logic.updateItem(Number(req.params.itemId), req.body.item);
    res.status(200).json({result});
})

router.delete('/', (req, res) => {
    const result = logic.removeItem(Number(req.params.itemId));
    res.status(200).json({result});
})

router.patch('/', (req, res) => {
    const result = logic.patchItem(Number(req.params.itemId), req.body);
    res.status(200).json({result});
})


router.use('/sizes', require('./sizes'))

module.exports = router;