import React, {useState} from 'react';
import Recipelist from './RecipeList'
import '../css/app.css'
import uuidv4 from 'uuid/v4'

function App() {
  const [recipes, setRecipes] = useState(SampleRecipes)

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "new",
      servings: 1,
      cookTime: '1:00',
      instructions: 'instr.',
      ingredients: [
         {id: uuidv4(),
         name: 'Name',
         amount: '1 Tbs'} 
      ] 
    }
    setRecipes([...recipes, newRecipe])
  }
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id ))
  }
  return (
    <Recipelist recipes = {recipes}
    handleRecipeAdd={handleRecipeAdd}
    handleRecipeDelete={handleRecipeDelete}
    />
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
