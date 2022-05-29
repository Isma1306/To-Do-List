const Mongoose = require('mongoose');


const TaskSchema = new Mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },

    isDone: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);


module.exports = {
  TaskSchema
};


