import React, {useContext} from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import {RecipeContext} from "./App"

export default function RecipeEdit({recipe}) {
    const {handleRecipeChange} = useContext(RecipeContext)

    function handleChange(changes){
        handleRecipeChange(recipe.id,{...recipe, ...changes})
    }

    function handleIngredientChange(id, ingredient) {
        const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(i => i.id === id)
    newIngredients[index] = ingredient
    handleChange({ingredients: newIngredients})

    }
    return (
        <div className="recipe-edit">
            <div className = "recipe-edit__remove-button-container">
                <button className= "btn recipe-edit__remove-button">&times;</button>
            </div>

            <div className = "recipe-edit__details-grid">
                <label htmlFor = "name"
                className = "recipe-edit__label">
                    Name
                </label>
                <input
                 type = "text"
                 name="name"
                 id="name"
                 className= "recipe-edit__input"
                 value={recipe.name}
                 onInput = {e=> handleChange({name: e.target.value})}
                 />

                <label htmlFor = "cookTime"
                className= "recipe-edit__label">
                    Cook Time
                    </label>
                <input
                 type = "text"
                 name="cookTime"
                 id="cookTime"
                 className="recipe-edit__input"
                 value= {recipe.cookTime}
                 onInput = {e=> handleChange({cookTime: e.target.value})}
                 />
                <label htmlFor= "servings"
                className ="recipe-edit__label">
                    Servings
                    </label>
                <input type = "number"
                 min="1"
                name="servings"
                id="servings"
                className="recipe-edit__input"
                value={recipe.servings}
                onInput = {e=> handleChange({servings: parseInt(e.target.value) || ""})}
                 />
                <label htmlFor = "instructions"
                className="recipe-edit__label"
                >Introductions
                </label>
                    <textarea
                    name = "instructions" 
                    id="instructions"
                    className ="recipe-edit__input"
                    value={recipe.instructions}
                    onInput = {e=> handleChange({instructions: e.target.value})}
                    />

            </div>
            <br/>
            <label className = "recipe-edit__label">Ingredients</label>
            <div className ="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(ingredient =>( 
                        <RecipeIngredientEdit
                                 key={ingredient.id}
                                 handleIngredientChange={handleIngredientChange}
                                 ingredient={ingredient}/>
                
                ))}
            </div>
            <div className = "recipe-edit__add-ingredient-btn-container">
                <button className= "btn btn--primary">Add Ingredient</button>
            </div>
        </div>
    )
}
