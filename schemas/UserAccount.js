const mongoose = require('mongoose');

const UserAccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  }
}, { timestamps: true });

const UserAccount = mongoose.model('useraccounts', UserAccountSchema);

module.exports = UserAccount;

