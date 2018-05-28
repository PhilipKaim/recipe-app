import React, { Component } from 'react';
import Recipe from './Recipe';

class Recipes extends Component {
    static defaultProps = {
        recipes: [
            {
                picSrc: './images/spagettii.jpeg',
                alt: 'spagettii',
                ingredients: ['Pasta', 'Tomato Sauce', 'Meat Balls'],
                description: 'Boil water. Add pasta. Cook pasta till tender. Heat meatballs and tomato sace in large pot. Mix pasta and meat sacue together. Enjoy!'
            }

        ]
    }

    render() {
        const recipes = this.props.recipes.map((r, i) => <Recipe key={i} {...r} /> );

        return (
            <div>
                {recipes}
            </div>
        )
    }
}

export default Recipes;