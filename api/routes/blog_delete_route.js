'use strict';

const router = require('express').Router();

const deleteBlog = require('../controllers/blog_delete_controller');


// DELETE route: Delete blog
router.delete('/:blogId/delete', deleteBlog);


module.exports = router;
