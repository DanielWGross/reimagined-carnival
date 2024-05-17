const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, saltRounds);

  this.password = hashedPassword;

  next();
});

const User = model('User', userSchema);

module.exports = User;
