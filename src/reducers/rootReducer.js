import { ADD_RECIPE } from '../actions/addRecipe';
import { EDIT_RECIPE } from '../actions/editRecipe';
import { DELETE_RECIPE } from '../actions/deleteRecipe';
import { OPEN_MODAL } from '../actions/openModal';
import { CLOSE_MODAL } from '../actions/closeModal';

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
        case OPEN_MODAL:
            var newState = { ...state };
            newState.modal = true;

            return {
                ...newState
            };

        case CLOSE_MODAL:
            var newState = { ...state };
            newState.modal = false;

            return {
                ...newState
            };

        case ADD_RECIPE:
            var newState = { ...state };
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