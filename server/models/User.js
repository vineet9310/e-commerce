<<<<<<< HEAD
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
=======
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
>>>>>>> 03106f9cd9bb87793ab6e587301daa7ab9750bea
  },
  email: {
    type: String,
    required: true,
<<<<<<< HEAD
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
=======
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", UserSchema);
>>>>>>> 03106f9cd9bb87793ab6e587301daa7ab9750bea
module.exports = User;
