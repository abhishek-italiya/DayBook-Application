// const mongoose = require("mongoose");

// const entrySchema = new mongoose.Schema(
//   {
//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: "User",
//     },
//     date: { type: Date, required: true },
//     title: String,
//     mood: {
//       type: String,
//       enum: ["🙂", "😔", "😡"],
//     },
//     content: String,
//   },
//   { timestamps: true }
// );

// const entryModel = mongoose.model("Entry", entrySchema);

// module.exports = entryModel;

const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    date: { type: Date, required: true },
    title: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      enum: [
        "🙂", // Happy
        "😔", // Sad
        "😡", // Angry
        "😍", // In Love
        "😎", // Confident
        "😴", // Tired
        "🤒", // Sick
        "😇", // Grateful
        "🤔", // Thoughtful
        "😤", // Frustrated
        "🥳", // Excited
        "😢", // Emotional
        "😌", // Relaxed
        "🤯", // Stressed
        "😐", // Neutral
        "🤗", // Hopeful
      ],
      required: true,
      default: "🙂",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const entryModel = mongoose.model("Entry", entrySchema);

module.exports = entryModel;
