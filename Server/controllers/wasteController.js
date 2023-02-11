const User = require("../models/userModel");
const Waste = require("../models/wasteModel");
const ErrorHandler = require("../utils/errorHandler.js");
const AsyncError = require("../middleware/asyncErrors");

exports.createWaste = async (req, res, next) => {
    const { name, type, email ,contact , address , state , city , zipcode , pickUpDate , pickUpTime ,user  } = req.body;
    console.log(req.body)
    const waste = await Waste.create({
        name,
        type,
        email,
        contact,
        address,
        state,
        city,
        zipcode,
        pickUpDate,
        pickUpTime,
        user : req.user?._id,
    });
    // console.log(req.user._id + ": id is here");
    if (req.user){
        const user = await User.findById(req.user._id)
        console.log(user)
        user.request.push(waste._id)
        await user.save()
    }
    res.status(200).json({
        success: true,
        waste,
    });
} 
exports.updateWaste = async (req, res, next) => {
    console.log(req.body)
    const waste = await Waste.findByIdAndUpdate({_id :req.params.id},req.body,{
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        waste,
    });
} 
exports.deleteWaste = async (req, res, next) => {
    const waste = await Waste.findByIdAndDelete({_id :req.params.id});
    res.status(200).json({
        success: true,
        waste,
    });
} 
exports.allWaste = async (req, res, next) => {
    const waste = await Waste.find({});
    res.status(200).json({
        success: true,
        waste,
    });
} 
exports.searchWaste = async (req, res, next) => {
    const waste = await Waste.findOne({_id :req.params.id});
    res.status(200).json({
        success: true,
        waste,
    });
} 
