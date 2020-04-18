import React from 'react';
import Recipelist from './RecipeList'
import Ingredient from './Ingredient';
import '../css/app.css'

function App() {
  return (
    <Recipelist recipes = {SampleRecipes}/>
  )
}

const SampleRecipes = [{
  id: 1,
  name: 'Plain Chicken',
  servings: 3,
  cookTime: '1:45',
  instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
  ingredients: [{
    id: 1,
    name: "Chicken",
    amount: "2 pounds"

  },{
    id: 2,
    name: "Salt",
    amount: "1 tbs",
    }
  ]
},
{
  id: 2,
  name: 'Plain Pork',
  servings: 5,
  cookTime: '0:45',
  instructions: "1. Put parprika on pork\n2. Put pork in oven\n3. Eat pork",
  ingredients: [{
    id: 1,
    name: "Pork",
    amount: "3 Pounds"

  },{
    id: 2,
    name: "Paprika",
    amount: "2 tbs",
    }
  ]

}]

export default App;
