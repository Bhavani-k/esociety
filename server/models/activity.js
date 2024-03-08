// activity.model.js
const mongoose = require("mongoose");
const { Types } = mongoose;

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  cost: {
    type: Number,
  },
  costCategory: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  families: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Family",
    },
  ],
  society: {
    type: mongoose.Schema.ObjectId,
    ref: "Society",
    required: true,
  },
});

module.exports = mongoose.model("Activity", activitySchema);