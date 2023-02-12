var express = require("express");
var router = express.Router();

const {
  Homepage,
  signup,
  login,
  logout,
  update,
  getSingleUser,
  getAllUsers,
  getLoggedInUser,
  getMyGeneratedWaste,
  sendOTP,
  verifyOTP,
  sendOTPEmail,
  verifyOTPEmail,
  createCall,
  voice,
} = require("../controllers/indexController.js");
const { isAdmin } = require("../utils/isAdmin.js");
const { isLoggedIn } = require("../utils/isLoggedIn.js");
/* GET home page. */
router.get("/", Homepage);

/**@api POST / signup */
router.post("/signup", signup);

/**@api POST / login */
router.post("/login", login);

/**@api GET / logout */
router.get("/logout", logout);

/**@api POST / update */
router.post("/update", isLoggedIn, update);
router.post("/update/:id", isLoggedIn, isAdmin, update);

router.get("/getUser/:id", isLoggedIn, getSingleUser);

/**@api GETT / get all users, only accessible by admin */
router.get("/getAllUsers", isLoggedIn, isAdmin, getAllUsers);

router.get("/getLoggedInUser", isLoggedIn, getLoggedInUser);

router.get("/getMyGeneratedWaste", isLoggedIn, getMyGeneratedWaste);

/**@api POST / send otp to phone number */
router.post("/sendOtp", isLoggedIn, sendOTP);
router.post("/verifyOTP", isLoggedIn, verifyOTP);

/**@api POST / send otp to verify Email */
router.post("/sendOtpEmail", isLoggedIn, sendOTPEmail);
router.post("/verifyOTPEmail", isLoggedIn, verifyOTPEmail);
router.post("/call", createCall);
router.post("/voice", voice);
module.exports = router;
