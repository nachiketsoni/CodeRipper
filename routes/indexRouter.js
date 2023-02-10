var express = require('express');
var router = express.Router();

const { Homepage } = require('../controllers/indexController.js');
/* GET home page. */
router.get('/',Homepage);

module.exports = router;
