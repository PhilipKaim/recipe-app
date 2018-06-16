import { ADD_RECIPE } from '../actions/addRecipe';
import { EDIT_RECIPE } from '../actions/editRecipe';
import { DELETE_RECIPE } from '../actions/deleteRecipe';

const initialState = {
    recipes: [
        {
            id: 0,
            url: './images/spagettii.jpeg',
            alt: 'spagettii',
            ingredients: ['Pasta', 'Tomato Sauce', 'Meat Balls'],
            instructions: 'Boil water. Add pasta. Cook pasta till tender. Heat meatballs and tomato sace in large pot. Mix pasta and meat sacue together. Enjoy!',
            title: 'Spaghetti'
        }
    ],
    nextId: 1,
    modal: false,
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_RECIPE:
            const newState = { ...state };
            newState.recipes.push(action.recipe);
            newState.nextId++;

            return {
                ...newState
            };

            // setTimeout(() => {
            // localStorage.setItem('state', JSON.stringify(state.recipes));
            // }, 1000);
        case EDIT_RECIPE:
        case DELETE_RECIPE:
        default: 
            return state;
    }
}