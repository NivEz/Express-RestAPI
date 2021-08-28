'use strict';

const router = require("express-promise-router")({
        mergeParams: true
    }),
    logic = require('./logic'),
    validate = require('express-jsonschema').validate

router.get('/',
    async (req, res) => {
        const result = await logic.getGames()
        res.status(200).json({
            result,
            total: result.length
        });
    })


router.post('/',
    validate({
        body: {
            type: 'object',
            additionalProperties: true,
            properties: {
                productName: {type: "string", minLength: 1, maxLength: 50, required: true},
                quantity: {type: ["number", "string"], required: true},
                price: {type: ["number", "string"], required: true}
            }
        }
    }),
    async (req, res) => {
        const result = await logic.createGame(req.body)
        res.status(200).json({result});
    })


router.use('/:gameId',
    validate({
        params: {
            type: 'object',
            additionalProperties: true,
            properties: {
                itemId: {type: ['number', 'string'], format: 'numeric', required: false}
            }
        }
    }),
    require('./game'))


module.exports = router;