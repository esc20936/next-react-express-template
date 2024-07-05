"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const { createTableInteractor, getTableInteractor } = require('@interactors/table/index.ts');
router.get('/', (req, res) => {
    res.status(200).json(getTableInteractor());
});
router.post('/create', createTableInteractor);
module.exports = router;
