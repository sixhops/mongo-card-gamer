import React from 'react';
import './AddGameForm.css';

const AddGameForm = props => {
  return (
    <div className="AddGameForm">
      <input onChange=props.onNameChange id="name" name="name" placeholder="Enter game name..." />
      <input onChange=props.onMinChange id="min" name="min" placeholder="Enter minimum players..." />
      <input onChange=props.onMaxChange id="max" name="max" placeholder="Enter maximum players..." />
      <button type="submit" onClick=props.onSubmit>Submit</button>
    </div>
  )
}

export default AddGameForm;
