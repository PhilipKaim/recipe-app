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
        id: '',
        url: '',
        ingredients: [],
        instructions: '',
        title: ''
    }  
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        
    }
}