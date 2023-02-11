var express = require('express');
var router = express.Router();

const { createWaste, updateWaste, deleteWaste, allWaste, searchWaste } = require('../controllers/wasteController')
const { isLoggedIn } = require('../utils/isLoggedIn.js');
/* POST createRequest. */
router.post('/createRequest', createWaste);
router.post('/updateRequest/:id', updateWaste);
router.get('/deleteRequest/:id', deleteWaste);
router.get('/allRequest', allWaste);
router.get('/searchRequest/:id', searchWaste);


module.exports = router;
