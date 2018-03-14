import React from 'react';
import './AddGameForm.css';

const AddGameForm = props => {
  return (
    <div className="AddGameForm">
      <input onChange=props.onNameChange value={props.name} id="name" name="name" placeholder="Enter game name..." />
      <input onChange=props.onMinChange value={props.min} id="min" name="min" placeholder="Enter minimum players..." />
      <input onChange=props.onMaxChange value={props.max} id="max" name="max" placeholder="Enter maximum players..." />
      <button type="submit" onClick=props.onSubmit>Submit</button>
    </div>
  )
}

export default AddGameForm;
