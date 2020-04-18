const INGREDIENT_TYPE = {
  ANIMAL: 'ANIMAL',
  VEGETAL: 'VEGETAL'
};

const allIngredients = [
  {
    id: 0,
    name: 'Jamón',
    type: INGREDIENT_TYPE.ANIMAL
  },
  {
    id: 1,
    name: 'Queso',
    type: INGREDIENT_TYPE.ANIMAL
  }
];

function randomIngredient() {
  const index = Math.floor(Math.random() * allIngredients.length);
  const ingredient = Object.assign({}, allIngredients[index])

  ingredient.position = Date.now();

  return ingredient;
}

export {
  allIngredients,
  randomIngredient
};
