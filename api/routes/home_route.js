'use strict';


/**
 * node modules
 */
const router = require('express').Router();


/**
 * custom modules
 */
const renderHome = require('../controllers/home_controller');


// GET route: Render the home page.
router.get(['/', '/page/:pageNumber'], renderHome);

module.exports = (req, res) => {
  res.render('home', { title: 'Home Page' }); // Adjust as needed
};
module.exports = router;