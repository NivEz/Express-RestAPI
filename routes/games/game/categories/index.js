'use strict';

const router = require("express-promise-router")({
        mergeParams: true
    }),
    logic = require('./logic'),
    res = {success: true}

router.get('/', (req, res) => {
    const result = logic.getCategory(Number(req.query));
    res.status(200).json({result});
})

//TODO
// router.post('/', (req, res) => {
//     const result = logic.createItem(req.body.item);
//     res.status(200).json({result});
// })



module.exports = router;