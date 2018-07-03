import { addRecipe, deleteRecipe, editRecipe } from '../../actions/edit';

test('should add a recipe', () => {
    const recipeData = {
        url: 'recipe url',
        title: 'recipe title',
        ingredient: 'single ingredient',
        ingredients: ['one', 'two', 'three'],
        instructions: 'recipe instructions',
        id: 1,
        editing: false
    };

    const action = addRecipe(recipeData);

    expect(action).toEqual({
        type: 'ADD_RECIPE',
        recipe: {
            ...recipeData,
        }
    });
});

test('should edit a recipe', () => {
    const recipeData = {
        url: 'recipe url',
        title: 'recipe title',
        ingredient: 'single ingredient',
        ingredients: ['one', 'two', 'three'],
        instructions: 'recipe instructions',
        id: 1,
        editing: false
    };

    const action = editRecipe(recipeData, true);

    expect(action).toEqual({
        type: 'EDIT_RECIPE',
        recipe: {
            ...recipeData,
        },
        editing: true
    });
});

test('should delete a recipe', () => {

    const action = deleteRecipe(1234);

    expect(action).toEqual({
        type: 'DELETE_RECIPE',
        id: 1234
    });
});