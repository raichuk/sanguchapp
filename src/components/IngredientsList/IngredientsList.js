import React from 'react';
import { allIngredients, randomIngredient } from '../../lib/ingredients';

import AddIngredientButton from '../AddIngredientButton/AddIngredientButton';
import RemoveIngredientButton from '../RemoveIngredientButton/RemoveIngredientButton';

function Ingredient(props) {
  return (
    <li>
      <div className='ingredient-item'>
        <span>{props.ingredient.name}</span>
        <RemoveIngredientButton handleRemove={() => props.handleRemove(props.ingredient.position)}/>
      </div>
    </li>
  );
}

class IngredientsList extends React.Component {
  state = {
    ingredients: []
  }

  componentDidMount() {
    const newState = {
      ingredients: []
    };

    this.setState(newState);
  }
  
  addIngredient = () => {
    const newIngredient = randomIngredient();

    const newState = {
      ingredients: this.state.ingredients.concat(newIngredient)
    };

    this.setState(newState);
  }

  removeIngredient = (ingredientPos) => {
    const newState = {
      ingredients: this.state.ingredients.filter(i => i.position !== ingredientPos)
    };

    this.setState(newState);
  }

  render() {
    return (
      <div className='ingredients-container'>
        <ul className='ingredients-list'>
          {
            this.state.ingredients.length > 0 ?
            this.state.ingredients.map((ing, i) => 
              <Ingredient key={i} ingredient={ing} handleRemove={this.removeIngredient} />
            ) :
            null
          }
        </ul>
        <AddIngredientButton handleAdd={this.addIngredient}/>
      </div>
    );
  }
}

export default IngredientsList;
