import React from 'react';
import './AddGameForm.css';

const GameDetail = props => {
  return (
    <div className="AddGameForm">
      <input onChange={(e) => props.onNameChange(e)} id="name" name="name" placeholder="Enter game name..." value={props.nameVal} />
      <input onChange={(e) => props.onMinChange(e)} id="min" name="min" placeholder="Enter minimum players..." value={props.minVal} />
      <input onChange={(e) => props.onMaxChange(e)} id="max" name="max" placeholder="Enter maximum players..." value={props.maxVal} />
      <button type="submit" onClick={(e) => props.onSubmit(e)}>Submit</button>
    </div>
  )
}

export default GameDetail;
