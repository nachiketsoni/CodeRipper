const { sendToken } = require("../utils/auth");
const formidable = require("formidable");
const cloudinary = require("cloudinary");
const { cloudinaryConfig } = require("../configs/cloudinary");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler.js");
const AsyncError = require("../middleware/asyncErrors");

exports.Homepage = (req, res) => {
  res.status(200).json("Success!");
};

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
exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    // res.json(req.body)
    const defaultIMG =
      "https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?w=740&t=st=1665479565~exp=1665480165~hmac=a506127a19be062f341ab4d2e9767e3a1593d6e20efd3762ebfcb19cc39e49d1  ";
    if (!email || !password || !name) {
      return next(
        new ErrorHandler("Please Enter Name , Email & Password", 400)
      );
    }
    try {
      var { public_id, secure_url } = await cloudinary.v2.uploader.upload(
        defaultIMG,
        {
          folder: `Hackathon/${email}`,
          fetch_format: "webp",
          quality: "50",
        }
      );
    } catch (err) {
      console.log(err);
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
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**@api GET / logout */
exports.logout = AsyncError((req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({ message: "user logged out" });
});

/**@api POST / update */
exports.update = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    await user.save();
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @api GET / profile of user
 */
exports.getSingleUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({ success: true, user });
};

/**
 * @api GET / get all users
 */
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getLoggedInUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getMyGeneratedWaste = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).populate("request");
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/** @api POST / send otp to phone number */

exports.sendOTP = AsyncError(async (req, res, next) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);
  
  const OTP = Math.floor(1000 + Math.random() * 9000);

  client.messages
    .create({
      body: `OTP for verifying the request is ${OTP}`,
      to: `+91${req.body.number}`, // Text this number
      from: process.env.TWILIO_PHONE_NUMBER, // From a valid Twilio number
    })
    .then((message) => res.json(201).json({ message: "OTP sent successfully" }))
    .catch((err) => {
      res.status(500).json(err);
    });
});
