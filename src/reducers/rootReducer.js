import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from '../actions/edit';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal';
import { SEARCH_RECIPE } from '../actions/searchRecipe';

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
        
            newState.recipes.push(action.recipe);
            newState.nextId++;

            return {
                ...newState
            };
            
        case EDIT_RECIPE:
            var newState = { ...state };
            newState.edit = action.recipe;
            let index;

            if (state.editing === true) {
                index = newState.recipes.findIndex((el) => el.id === action.recipe.id);
                newState.recipes.splice(index, 1, action.recipe);
            }

            return {
                ...newState,
                editing: action.editing ? true : false
            };

        case DELETE_RECIPE:
            var newState = { ...state };
            let recipes = newState.recipes.filter(el => el.id !== action.id);
            newState.recipes = recipes;

            return {
                ...newState
            };

        case SEARCH_RECIPE:
            var newState = { ...state };
            const recipes_to_remove = action.recipeTitles;
            // var b;

            // if (recipes_to_remove.length > 0) {
            //     for (let prop in recipes_to_remove) {
            //         let id = recipes_to_remove[prop].id;
    
            //         b = newState.recipes.filter(el => el.id !== id);
            //     }
            // } else {
            //     return;
            // }

            // console.log(b);
            
            // newState.recipes = b;

            // return {
            //     ...newState
            // };
            
        default: 
            return state;
    }
}