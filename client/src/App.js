import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AddGameForm from './AddGameForm';
import GameList from './GameList';
import GameDetail from './GameDetail';

//import CardGame from '../models/cardGame.js';

var bodyParser = require('body-parser')
var CardGame = require('../models/cardGame')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      games: [],
      current: {},
      nameVal: '',
      minVal: '',
      maxVal: ''
    }
    this.handleGameClick = this.handleGameClick.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleMinChange = this.handleMinChange.bind(this)
    this.handleMaxChange = this.handleMaxChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Function to handle clicking on a game (shows game details)
  handleGameClick(e) {
    e.stopPropagation()
    this.setState({
      current: this.state.games[parseInt(e.target.id)]
    })
  }

  handleNameChange(e) {
    this.setState({
      nameVal: e.target.value
    })
  }
  handleMinChange(e) {
    this.setState({
      minVal: e.target.value
    })
  }
  handleMaxChange(e) {
    this.setState({
      maxVal: e.target.value
    })
  }
  handleSubmit(e) {
  // Add your code here to handle adding a new game to the database
  // Add your code here to handle adding a new game to the database
  // HERE: sending the data to the server on this mongoose route here
  // only sending the new info from the form input fields

  //1. pull info and set it as a new game
  let newGame = {
    name: this.state.nameVal,
    minPlayers: this.state.minVal,
    maxPlayers: this.state.maxVal
  }

  //2. run the axios function .... why????
    axios.post('/api/cardgames/', newGame)

    //3. push into games array NEXT
    let newGamesArray = Array.from(this.state.games)
    newGamesArray.push(newGame)
    this.setState({
      games: newGamesArray,
      nameVal: '',
      minVal: '',
      maxVal: ''
    })
   }
 
  

  // API call goes here so that data is available after component mounts
  componentDidMount() {
    axios.get('/api/cardgames').then(result => {
      this.setState({
        games: result.data
      })
    })
  }

  render() {
    return (
      <div>
        <GameList onGameClick={this.handleGameClick} games={this.state.games} />
        <GameDetail game={this.state.current} />
        <AddGameForm
          onNameChange=this.handleNameChange
          onMinChange=this.handleMinChange
          onMaxChange=this.handleMaxChange
          onSubmit={this.handleSubmit}
          name={this.state.nameVal}
          min={this.state.minVal}
          max={this.state.maxVal}

          />
      </div>
    );
  }
}

export default App;
