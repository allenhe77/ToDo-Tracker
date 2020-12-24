import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },

    nickName:{
        type:String,
        maxLength:50
    },

    // src: https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
    email:{
        type: String,
        required: 'Email address is required',
        trim: true,
        lowercase: true,
        validate: [validator.isEmail, 'invalid email']
    },

    password: {
        type: String,
        required: 'Password is required',
        minLength: 5,
        maxLength: 1024
    },

    group: {
        type: String,
        // TO-DO later
    }
});

const User = mongoose.model("User",userSchema)

export {User, userSchema};