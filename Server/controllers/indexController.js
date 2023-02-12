const { sendToken } = require("../utils/auth");
const formidable = require("formidable");
const cloudinary = require("cloudinary");
const { cloudinaryConfig } = require("../configs/cloudinary");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler.js");
const AsyncError = require("../middleware/asyncErrors");
const { SendSMS } = require("../utils/SendSMS");
const SendEmail = require("../utils/Nodemailer");

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
      contact,
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

exports.sendOTP = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user._id });
    const OTP = String(Math.floor(1000 + Math.random() * 9000));
    const Text = `OTP for verifying the request is  ${OTP}`;
    console.log("The otp is  : " + OTP);
    user.SMSOTP = OTP;
    const expiry = new Date(Date.now() + 10 * 60 * 1000);
    console.log(expiry);
    user.SMSOTPExpires = expiry;
    await user.save();
    const resp = await SendSMS(Text, req.body.contact);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.verifyOTP = async (req, res, next) => {
  const { OTP } = req.body;
  const user = await User.findOne({ _id: req.user._id });

  if (user.SMSOTPExpires >= Date.now()) {
    console.log(typeof OTP);
    console.log(typeof user.SMSOTP);
    if (OTP === user.SMSOTP) {
      user.verifiedSMS = true;
      if (user.verifiedSMS === true && user.verifiedEmail === true) {
        user.verified = true;
      }
      user.SMSOTP = null;
      user.SMSOTPExpires = null;
      await user.save();

      res
        .status(200)
        .json({ success: true, message: "OTP verified successfully" });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Invalid OTP, verification failed" });
    }
  } else {
    res.status(400).json({ success: false, message: "OTP expired" });
  }
};

exports.sendOTPEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user._id });
    const OTP = String(Math.floor(1000 + Math.random() * 9000));
    const Text = OTP;
    console.log("The otp is  : " + OTP);
    user.EmailOTP = OTP;
    const expiry = new Date(Date.now() + 10 * 60 * 1000);
    console.log(expiry);
    user.EmailOTPExpires = expiry;
    await user.save();
    const resp = await SendEmail(req.body.email, Text, req.body.subject);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.verifyOTPEmail = async (req, res, next) => {
  const { OTP } = req.body;
  const user = await User.findOne({ _id: req.user._id });

  if (user.EmailOTPExpires >= Date.now()) {
    console.log(typeof OTP);
    console.log(typeof user.EmailOTP);
    if (OTP === user.EmailOTP) {
      user.verifiedEmail = true;
      if (user.verifiedSMS === true && user.verifiedEmail === true) {
        user.verified = true;
      }
      user.EmailOTP = null;
      user.EmailOTPExpires = null;
      await user.save();

      res
        .status(200)
        .json({ success: true, message: "OTP verified successfully" });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Invalid OTP, verification failed" });
    }
  } else {
    res.status(400).json({ success: false, message: "OTP expired" });
  }
};

exports.createCall = async (req, res) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  client.calls
    .create({
      twiml:
        "<Response><Say>Hi! Welcome to Quick Clean , Schedule a quick garbage pickup on the call</Say></Response>",
      to: `+91${req.body.number}`,
      from: process.env.TWILIO_PHONE_NUMBER,
    })
    .then((call) => {
      // Use the Twilio Node.js SDK to build an XML response
      res.json(201).json({ message: "call successfull " });
    });
};

exports.voice = async (request, response) => {


    // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();
    twiml.say({ voice: 'alice' }, 'hello world!');
  
    // Render the response as XML in reply to the webhook request
    response.type('text/xml');
    response.send(twiml.toString());
  }