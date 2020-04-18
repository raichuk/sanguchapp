import React from 'react';

function AddIngredientButton(props) {
  return (
    <button onClick={props.handleAdd}>Agregar</button>
  );
}

export default AddIngredientButton;
