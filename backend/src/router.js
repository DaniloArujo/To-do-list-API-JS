const express = require('express')

const router = express.Router()

router.get('/teste', (req,res) => res.status(200).send('Hello world!'))

module.exports = router