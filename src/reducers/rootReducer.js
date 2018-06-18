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
    edit: {
        id: undefined,
        url: '',
        alt: '',
        ingredients: [],
        instructions: '',
        title: ''
    },
    editing: false
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
        
            if (newState.recipes.some(el => el.id === action.recipe.id)) {
                const index = newState.recipes.findIndex((el) => el.id === action.recipe.id);
                newState.recipes.splice(index, 1, action.recipe);
                console.log('Edit');
            } else {
                newState.recipes.push(action.recipe);
                newState.nextId++;
                console.log('NO Edit');
            }

            return {
                ...newState
            };

            // setTimeout(() => {
            // localStorage.setItem('state', JSON.stringify(state.recipes));
            // }, 1000);
        case EDIT_RECIPE:
            var newState = { ...state };
            newState.edit = action.recipe;

            return {
                ...newState,
                editing: action.editing ? true : false
            };

        case DELETE_RECIPE:
            var newState = { ...state };
            const recipes = newState.recipes.filter(el => el.id !== action.id);
            newState.recipes = recipes;

            return {
                ...newState
            }

        default: 
            return state;
    }
}