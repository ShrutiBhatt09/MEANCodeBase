const mongoose = require('mongoose');

const PaymentMethodSchema = new mongoose.Schema(
    {
        
        type:{
            enum: ['creditCard', 'debitCard', 'upi', 'wallet', 'foodCard'],
            required: [true, 'Please provide the payment type']
        },
        details:{
           
        }
        
    }
)


const PaymentMethod = mongoose.model('User', PaymentMethodSchema);

module.exports = PaymentMethod;