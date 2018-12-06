const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Create Post


// Get Posts
router.get('/', (req, res) => {
    res.send('am live');
})

// Delete Post


// Update Post

module.exports = router;