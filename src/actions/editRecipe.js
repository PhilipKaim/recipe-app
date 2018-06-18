export const EDIT_RECIPE = 'EDIT_RECIPE';

export function editRecipe(recipe) {
    return {
        type: EDIT_RECIPE,
        recipe
    }
}