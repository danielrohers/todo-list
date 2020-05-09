const express = require('express');

const router = express.Router();

/**
* @api {get} /healthcheck Healthcheck
* @apiGroup Healthcheck
*
* @apiSuccess {Boolean=true} success
* @apiSuccess {String="OK"} data
*/
router.get('/', (req, res) => res.status(200).json({ success: true, data: 'OK' }));

module.exports = router;
