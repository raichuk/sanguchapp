import React from 'react';

function RemoveIngredientButton(props) {
  return (
    <button onClick={props.handleRemove}>Remover</button>
  );
}

export default RemoveIngredientButton;
