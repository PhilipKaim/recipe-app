export const DELETE_RECIPE = 'DELETE_RECIPE';

export function deleteRecipe(id) {
    return {
        type: DELETE_RECIPE,
        id
    }
}