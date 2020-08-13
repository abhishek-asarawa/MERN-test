import mongoose from 'mongoose';
import { text } from 'express';

// making schema
const userSchema = mongoose.Schema;

// defining schema
const user = new userSchema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    }
});


// creating model
const userModel = mongoose.model("user", user);


export default userModel;