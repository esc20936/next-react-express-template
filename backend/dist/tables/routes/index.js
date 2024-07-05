"use strict";
const express = require('express');
const router = express.Router();
const { createTableInteractor, getTableInteractor } = require('../Interactors');
router.get('/:productID', getTableInteractor);
router.post('/create', createTableInteractor);
module.exports = router;
