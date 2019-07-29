const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    tags: {
        type: [String]
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

Product.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {   delete ret._id  }
});

module.exports = mongoose.model('Product', Product);
