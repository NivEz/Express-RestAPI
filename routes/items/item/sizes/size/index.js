'use strict';

const router = require("express-promise-router")({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/', (req, res) => {
    const result = logic.getSize(Number(req.params.itemId), req.params.sizeType);
    res.status(200).json({result});
})


module.exports = router;