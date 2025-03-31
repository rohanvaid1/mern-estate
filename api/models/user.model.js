// import { String } from "i/lib/util";
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     username: {
//        type : String,
//        required: true, 
//        unique: true,
//     },
//     email: {
//         type : String,
//         required: true, 
//         unique: true,
//      },
//      password: {
//         type : String,
//         required: true, 
//      }
// }, {timestamps : true});

// const User = mongoose.model('User' ,userSchema) 

// export default User;
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
       type : String,  // This will work with Mongoose natively
       required: true, 
       unique: true,
    },
    email: {
        type : String,  // Again, this works without importing anything
        required: true, 
        unique: true,
     },
     password: {
        type : String,  // Same here, no need for an import
        required: true, 
     }
}, {timestamps : true});

const User = mongoose.model('User' ,userSchema);

export default User;
