var mongoose = require('mongoose');
var CardGame = require('../models/cardGame');

mongoose.connect('mongodb://localhost/mongoCardGamer');

var games = [
  {
    name: 'Magic: The Gathering',
    minPlayers: 2,
    maxPlayers: 4
  },
  {
    name: 'Dominion',
    minPlayers: 3,
    maxPlayers: 5
  },
  {
    name: 'Iota',
    minPlayers: 2,
    maxPlayers: 4
  },
  {
    name: 'Star Realms',
    minPlayers: 3,
    maxPlayers: 6
  },
  {
    name: 'Fluxx',
    minPlayers: 2,
    maxPlayers: 6
  },
];

games.forEach(game => {
  // console.log("adding a game...")
  CardGame.create(
    {
      name: game.name,
      minPlayers: game.minPlayers,
      maxPlayers: game.maxPlayers
    }, (err, cardGame) => {
      if (err) {
        return console.log(err);
      } else {
        return console.log(cardGame);
      }
    }
  )
});
