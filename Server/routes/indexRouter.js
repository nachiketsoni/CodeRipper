var express = require('express');
var router = express.Router();

const { Homepage, signup, login, logout, update } = require('../controllers/indexController.js');
const { isLoggedIn } = require('../utils/isLoggedIn.js');
/* GET home page. */
router.get('/',Homepage);

/**@api POST / signup */
router.post("/signup", signup)

/**@api POST / login */
router.post("/login", login)

/**@api GET / logout */
router.get("/logout", logout)

/**@api POST / update */
router.post("/update",isLoggedIn, update)

module.exports = router;
