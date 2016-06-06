var express = require('express');
var router = express.Router();
var profiles = require('../public/javascripts/profile.js')
    /* GET home page. */
router.get('/:profile', function(req, res, next) {
    let profile = profiles[req.params.profile];
    res.render('index', {
        name: profile.name,
        description: profile.description,
        image: profile.image,
        next: `/${profile.next}`
    });
});

module.exports = router;
