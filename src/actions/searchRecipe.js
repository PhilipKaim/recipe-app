export const SEARCH_RECIPE = 'SEARCH_MODAL';

export function searchRecipe(recipeTitles) {
    return {
        type: SEARCH_RECIPE,
        recipeTitles
    }
}