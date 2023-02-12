const { model, Schema } = require('mongoose');
const wasteSchema = Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,

    },
    address: {
        type: String,
        required: true,

    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,

    },

    type: {
        type: String,
        required: true,
    },
    pickUpDate: {
        type: Date,
        required: true,
    },
    pickUpTime: {
        type: String,
        required: true,
    },
    
    status: {
        type: String,
        default: "Pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    pickup_Info: {
        type: String,
    },
    user: {
        type:   Schema.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = model('Waste', wasteSchema);


