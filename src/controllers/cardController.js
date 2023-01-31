const express = require('express');
const router = express.Router();

const validationMiddleware = require('../validate/validationMiddleware');
const validationSchema = require('../validate/validationSchema');

const { cardService } = require('../services/cardService');

router.get('/', async (req, res) => {
    try {
        const data = await cardService.getAll();

        return res.status(200).json(data);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

router.post('/', validationMiddleware(validationSchema), async (req, res) => {
    try {
        const body = req.body;
        const postData = await cardService.create(body);
        res.json(postData);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

// router.put('/:id', validationMiddleware(validationSchema), async (req, res) => {
//     try {
//       const body = req.body;
//       const id = req.params.id;
//       await cardService.updateById(id, body);

//       return res.sendStatus(200);
//     } catch (e) {
//       console.error(e);
//       res.sendStatus(500);
//     }
//   });

//   router.get('/:id', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const data = await cardService.getOne({ id });

//       return res.status(200).json(data);
//     } catch (e) {
//       console.error(e);
//       res.sendStatus(500);
//     }
//   });

// router.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const data = await cardService.deleteById({ id });

//         return res.status(200).json(data);
//     } catch (e) {
//         console.error(e);
//         res.sendStatus(500);
//     }
// });

module.exports = router;
