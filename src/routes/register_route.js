'use strict';
/**
 * node module
 */
const router = require('express').Router();

/**
 * custom moduls
 */
const { renderRegister } = require('../controllers/register_controller');



// GET route: render the register
router.get('/', renderRegister);

module.exports = router;
