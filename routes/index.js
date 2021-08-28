'use strict';

// the require("express-promise...") statement returns a function
// this function we run with an object contains mergeParams as parameter

const router = require("express-promise-router")({
    mergeParams: true
});

router.use('/items', require('./items'));
router.use('/tableGames', require('./games'))


module.exports = router;
