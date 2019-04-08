import React from 'react';
import './GameList.css';

const GameList = props => {

  const { games } = props

  // This code sets up the list contents based on whether any games are found or not
  //if there is anyting in that object, render the thing
  // if there isn't don't render a damn thing
  // this is called conditional rendering
  
  let listContents
  if (games.length > 0) {
    listContents = games.map((game, index) => {
      return (<li id={index} onClick={(e) => props.onGameClick(e)} key={index}>{game.name}</li>)
    })
  } else {
    listContents = (<li>No games found!</li>)
  }

  return (
    <div className='GameList'>
      <ul>
        {listContents}
      </ul>
    </div>
  )
}

export default GameList;
