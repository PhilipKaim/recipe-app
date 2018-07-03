import rootReducer from '../../reducers/rootReducer';

test('should set initial state', () => {
    const state = rootReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
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
    });
});

test('should open add new recipe modal', () => {
    const state = rootReducer(undefined, { type: 'OPEN_MODAL' });

    expect(state).toEqual({
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
        modal: true,
        edit: {
            id: undefined,
            url: '',
            alt: '',
            ingredients: [],
            instructions: '',
            title: ''
        },
        editing: false
    });
});

test('should close add new recipe modal', () => {
    const state = rootReducer(undefined, { type: 'CLOSE_MODAL' });

    expect(state).toEqual({
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
    });
});

// test('should add a new recipe', () => {

//     const currState = {
//         recipes: [
//             {
//                 id: 0,
//                 url: './images/spagettii.jpeg',
//                 alt: 'spagettii',
//                 ingredients: ['Pasta', 'Tomato Sauce', 'Meat Balls'],
//                 instructions: 'Boil water. Add pasta. Cook pasta till tender. Heat meatballs and tomato sace in large pot. Mix pasta and meat sacue together. Enjoy!',
//                 title: 'Spaghetti'
//             }
//         ],
//         nextId: 1,
//         modal: false,
//         edit: {
//             id: undefined,
//             url: '',
//             alt: '',
//             ingredients: [],
//             instructions: '',
//             title: ''
//         },
//         editing: false
//     }

//     const newRecipe = {
//         url: 'new recipe url',
//         title: 'new recipe title',
//         ingredient: 'single ingredient',
//         ingredients: ['one', 'two', 'three'],
//         instructions: 'recipe instructions',
//         id: 1,
//         editing: false
//     }

//     const state = rootReducer(currState, { type: 'ADD_RECIPE' });

//     expect(state.recipes).toEqual([{ ...newRecipe }]);
        
// });