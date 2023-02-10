var express = require('express');
var router = express.Router();

const { Homepage, signup, login } = require('../controllers/indexController.js');
/* GET home page. */
router.get('/',Homepage);

/**@api POST / signup */
router.post("/signup", signup)

/**@api POST / login */
router.post("/login", login)

module.exports = router;
