'use strict';

const router = require("express-promise-router")({
        mergeParams: true
    }),
    logic = require('./logic')

router.get('/', async (req, res) => {
    const result = await logic.getGame(Number(req.params.gameId))
    res.status(200).json({result});
})

router.delete('/', (req, res) => {
    logic.removeGame(Number(req.params.gameId)).then(result => {
        res.status(200).json({result});
    })
})

router.put('/', async (req, res) => {
    const result = await logic.updateGame(Number(req.params.gameId), req.body);
    res.status(200).json({result})
})

router.patch('/', async (req, res) => {
    const result = await logic.patchGame(Number(req.params.gameId), req.query)
    res.status(200).json({result});
})

module.exports = router;