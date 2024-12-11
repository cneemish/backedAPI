import mongoose, { Schema } from "mongoose";

const schema = mongoose.schema;

export const ContactSchema = new Schema({
    firstName:{
        type: String,
        required:'Enter first name'
    },
    lastName:{
        type: String,
        required: 'Enter last name'
    },
    phoneNumber:{
        type: Number,
        message: 'Enter your Phone number'
    },
    email:{
        type: String,
        message: 'Enter your email'
    },
    company:{
        type: String
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});


//const { randomUUID } = require('crypto');

export const DetailsSchema = new Schema({
    EmployeeID:{
        type: String
    },

    TotalNumberOfExprence:{
        type: Number,
        default: "0"
    },

    Designation:{
        type: String,
        message: 'Please enter your designation'
    }
});