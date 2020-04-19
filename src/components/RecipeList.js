import React from 'react'
import Recipe from './Recipe'

export default function RecipeList(props) {
    const  {
        recipes,
        handleRecipeAdd,
        handleRecipeDelete

    } = props
    return (
        <div className="recipe-list">
        <div>
        {recipes.map(recipe => {
            return <Recipe
            handleRecipeDelete= {handleRecipeDelete}
             key={recipe.id}
              {...recipe}
              />

        })}
        <div className = "recipe-list__add-recipe-btn-container">
            <button
             className ="btn btn--primary"
             onClick= {handleRecipeAdd}
            > 
            
            Add Recipe</button>
        </div>
        
        </div>
       </div> 
    )
}
