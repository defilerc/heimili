"use strict";
const express = require('express');
exports.router = express.Router();
/* GET home page. */
exports.router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});
//module.exports = router;
