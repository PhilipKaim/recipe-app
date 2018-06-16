export const ADD_RECIPE = 'ADD_RECIPE';

export function addRecipe(recipe) {
    return {
        type: ADD_RECIPE,
        recipe
    }
}