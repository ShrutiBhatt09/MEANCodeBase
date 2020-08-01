const mongoose = require('mongoose')

const UserAddressSchema = new mongoose.Schema({
    addressTag:{
        type: String,
        required: [true, 'Please enter address tag']
    },
    houseNo:{
        type: Number,
        required: [true, 'Please enter the house no.']
    },
    addressLine1: {
        type: String,
        required: [true, 'Please enter the address line 1']
    },
    addressLine2: {
        type: String
    },
    area: {
        type: String,
        required: [true, 'Please enter the street']
    },
    city: {
        type: String,
        required: [true, 'Please enter the city']
    },
    state: {
        type: String,
        required: [true, 'Please enter the state']
    },
    landmark:{
        type: String,
        required: false
    },
    zipcode: {
        type: Number,
        required: [true, 'Please enter the zipcode']
    }
})

const UserAddress = mongoose.model('UserAddress', UserAddressSchema);

module.exports = UserAddress;