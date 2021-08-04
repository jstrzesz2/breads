const express = require('express');
const breads = express.Router();
const Bread = require('../models/breads');

// INDEX
breads.get('/', (req, res) => {
    res.send(Bread);
});

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    console.log(req.params.arrayIndex);
    res.send(Bread[req.params.arrayIndex])
});

module.exports = breads;