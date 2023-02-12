const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please Enter Correct Email Address"],
  },
  password: {
    type: String,
    required: true,

    minLength: [8, "Password Should be more the 8 Character"],
    select: false,
  },
  contact: {
    type: Number,
    // unique:true,
    // validate: [validator.isMobilePhone,"Please Enter Correct Mobile Number"]
  },
  address: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  zipcode: {
    type: String,
  },
  avatar: {
    public_id: {
      type: String,
      // required: true,
    },
    url: {
      type: String,
      // required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  request: [
    {
      type: Schema.Types.ObjectId,
      ref: "Waste",
    },
  ],
  pickup_frequency_mode: {
    type: String,
    default: "saturday",
  },
  pickup_frequency: [
    {
      type: String,
      default: "saturday",
    },
  ],
  subscription: {
    type: String,
  },
  total_pickup: {
    type: Number,
    default: 0,
  },
  credits: {
    type: Number,
    default: 0,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  SMSOTP: {
    type: String,
    maxLength: 4,
  },
  SMSOTPExpires: Date,

  verifiedSMS : {
        type: Boolean,
        default: false,
  },
  EmailOTP: {
    type: String,
    maxLength: 4,
  },
  EmailOTPExpires: Date,
  verifiedEmail : {
        type: Boolean,
        default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

module.exports = model("Users", userSchema);
