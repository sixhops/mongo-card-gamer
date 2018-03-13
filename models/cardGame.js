var mongoose = require('mongoose');

// create a schema
var cardGameSchema = new mongoose.Schema({
  name: String,
  minPlayers: Number,
  maxPlayers: Number
});

var CardGame = mongoose.model('CardGame', cardGameSchema);

// make this available to our other files
module.exports = CardGame;
