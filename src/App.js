import React from 'react';
import './App.css';

import Title from './components/Title/Title';
import IngredientsList from './components/IngredientsList/IngredientsList';

function App() {
  return (
    <div>
      <Title title='React a los bifes'/>
      <IngredientsList />
    </div>
  );
}

export default App;
