const mongoose = require('mongoose');

const { Schema } = mongoose;

const FooSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports.FooModel = mongoose.model('Foo', FooSchema);
