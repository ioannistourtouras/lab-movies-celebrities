//  Add your code here
const mongoose = require("mongoose");

const celebritySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  catchPhrase: {
    type: String,
    required: true,
  },
  moves: [
    { type: mongoose.Schema.Types.ObjectId, ref: "pokeMove", required: true },
  ],
});

const Celebrity = mongoose.model("celebrity", celebritySchema);

module.exports = Celebrity;
