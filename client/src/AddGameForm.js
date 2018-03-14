import React from 'react';
import './AddGameForm.css';

const GameDetail = props => {
  return (
    <div className="AddGameForm">
      <input onChange={(e) => props.onNameChange(e)} id="name" name="name" value={props.name} placeholder="Enter game name..." />
      <input onChange={(e) => props.onMinChange(e)} id="min" name="min" value={props.min} placeholder="Enter minimum players..." />
      <input onChange={(e) => props.onMaxChange(e)} id="max" name="max" value={props.max} placeholder="Enter maximum players..." />
      <button type="submit" onClick={(e) => props.onSubmit(e)}>Submit</button>
    </div>
  )
}

export default GameDetail;
