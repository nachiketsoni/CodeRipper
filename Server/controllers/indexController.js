const { sendToken } = require("../utils/auth");
const formidable = require("formidable");
const cloudinary = require("cloudinary");
const { cloudinaryConfig } = require("../configs/cloudinary");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler.js");
const AsyncError = require("../middleware/asyncErrors");

exports.Homepage = (req, res) => {
    res.status(200).json("Success!")
}


/**@api POST / login */
exports.login = AsyncError(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
      return next(new ErrorHandler("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
  
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
  
    sendToken(res, 200, user, next);
  });

  /**@api POST / signup */
exports.signup = AsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
    // res.json(req.body)
    const defaultIMG =
      "https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?w=740&t=st=1665479565~exp=1665480165~hmac=a506127a19be062f341ab4d2e9767e3a1593d6e20efd3762ebfcb19cc39e49d1  ";
    if (!email || !password || !name) {
      return next(new ErrorHandler("Please Enter Name , Email & Password", 400));
    }
    try{
      
      var { public_id, secure_url } = await cloudinary.v2.uploader.upload(
        defaultIMG,
        {
          folder: `Hackathon/${email}`,
          fetch_format: "webp",
          quality: "50",
        }
      );
    }catch(err){
      console.log(err)
    }

  
    const user = new User({
      name,
      email,
      password,
      avatar: {
        public_id,
        url: secure_url,
      },
    });
    const createdUser = await user.save();
    sendToken(res, 200, createdUser);
  });

  /**@api GET / logout */
exports.logout = AsyncError((req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({ message: "user logged out" });
});

/**@api POST / update */
exports.update = AsyncError(async (req, res, next) => {
  const data = req.body;
  const user = await User.findByIdAndUpdate(req.user._id , data, {
    new: true} )
  await user.save();
  res.status(200).json({ success: true, user });
});


