const express = require('express');
const router = express.Router();

const { cardService } = require('../services/cardService');

router.get('/', async (req, res) => {
    try {
        // const { offset, limit } = req.query;
        const data = await cardService.getAll();

        console.log('data', data);

        return res.status(200).json(data);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

module.exports = router;
