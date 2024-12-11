import mongoose from "mongoose";

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
        require: 'Enter your Phone number'
    },
    email:{
        type: String
    },
    company:{
        type: String
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});