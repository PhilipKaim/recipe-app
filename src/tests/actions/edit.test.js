// import { addRecipe, editRecipe, deleteRecipe } from '../../actions/edit';

// test('should edit cards image, title, ingredients, instructions and id', () => {
//     const action = editRecipe({
//         recipe: {
//             id: 0,
//             url: './images/spagettii.jpeg',
//             ingredients: ['Pasta', 'Tomato Sauce', 'Meat Balls'],
//             instructions: 'Boil water. Add pasta. Cook pasta till tender. Heat meatballs and tomato sace in large pot. Mix pasta and meat sacue together. Enjoy!',
//             title: 'Spaghetti'
//         },
//         editing: false
//     });
//     expect(action).toEqual({
//       type: 'EDIT_RECIPE',
//       recipe: {
//         id: 0,
//         url: './images/spagettii.jpeg',
//         alt: 'spagettii',
//         ingredients: ['Pasta', 'Tomato Sauce', 'Meat Balls'],
//         instructions: 'Boil water. Add pasta. Cook pasta till tender. Heat meatballs and tomato sace in large pot. Mix pasta and meat sacue together. Enjoy!',
//         title: 'Spaghetti'
//       },
//       editing: false
//     });
// });