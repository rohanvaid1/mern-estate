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
     },
     avatar:{
      type: String,
      default: "https://imgs.search.brave.com/5OpbVvWf7_abM4u6uFeDSE7TwtZPkVoNfMAB1rh-0iY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zcHJvdXRzb2Np/YWwuY29tL3VwbG9h/ZHMvMjAyMi8wNi9w/cm9maWxlLXBpY3R1/cmUuanBlZw",
     },
}, {timestamps : true});

const User = mongoose.model('User' ,userSchema);

export default User;
