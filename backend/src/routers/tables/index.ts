const express = require('express')
import Express from 'express';
const router = express.Router()

const {createTableInteractor, getTableInteractor} = require('@interactors/table/index.ts')


router.get('/',(req: Express.Request, res:Express.Response) => {
    res.status(200).json(getTableInteractor());
})

router.post('/create', createTableInteractor) 


module.exports = router