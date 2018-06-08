import React, { Component } from 'react';

class RecipeCard extends Component {

    handleRemove = () => {
        this.props.delete(this.props.recipe.id);
    }

    // handleUpdate = () => {
    //     this.props.update(this.props.recipe);
    // }

    render() {
        const { url, title, ingredients, instructions } = this.props.recipe;

        const ingredientList = ingredients.map((el, i) => {
            return <li key={i}>{el}</li>
        });

        return (
            <div className='card'>
                <img src={ url } className='card__img' />

                <h1 className='card__title'>{ title }</h1>

                <h3>Ingredients:</h3>
                <ul className='card__list'>
                    { ingredientList }
                </ul>

                <h3>Instructions:</h3>
                <p className='card__instructions'>{ instructions }</p>

                <button
                    onClick={ this.handleUpdate }
                    className='card__edit'
                >
                    Edit
                </button>

                <button
                    onClick={ this.handleRemove }
                    className='card__delete'
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default RecipeCard;