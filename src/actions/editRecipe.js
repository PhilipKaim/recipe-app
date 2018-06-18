export const EDIT_RECIPE = 'EDIT_RECIPE';

export function editRecipe(recipe, editing = false) {
    return {
        type: EDIT_RECIPE,
        recipe,
        editing
    }
}