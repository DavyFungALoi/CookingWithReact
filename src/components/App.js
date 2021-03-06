import React, {useState, useEffect} from 'react';
import Recipelist from './RecipeList'
import RecipeEdit from './RecipeEdit'
import '../css/app.css'
import uuidv4 from 'uuid/v4'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes"

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(SampleRecipes)
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])


  const RecipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  }
  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
         {id: uuidv4(),
         name: '',
         amount: ''} 
      ] 
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }
  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId ==id) {
      selectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id ))
  }
  return (
    <RecipeContext.Provider value = {RecipeContextValue}>
       <Recipelist recipes = {recipes}/>
       {selectedRecipe &&<RecipeEdit recipe = {selectedRecipe}/>}
      </RecipeContext.Provider>

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
