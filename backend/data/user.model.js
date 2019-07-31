const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    name: {
    type: String
    },
    lastname: {
      type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

User.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {   delete ret._id  }
});

module.exports = mongoose.model('User', User);
