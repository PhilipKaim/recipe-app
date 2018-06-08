import React, { Component } from 'react';

class RecipeCard extends Component {

    handleRemove = () => {
        this.props.delete(this.props.recipe.id);
    }

    handleUpdate = () => {
        this.props.update(this.props.recipe.id);
    }

    render() {
        const { url, title, ingredients, instructions } = this.props.recipe;

        const ingredientList = ingredients.map((el, i) => {
            return <li key={i}>{el}</li>
        });

        return (
            <div>
                <img src={ url } />

                <h1>{ title }</h1>

                <ul>
                    { ingredientList }
                </ul>

                <p>{ instructions }</p>

                <button
                    onClick={ this.handleUpdate }
                >
                    Edit
                </button>

                <button
                    onClick={ this.handleRemove }
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default RecipeCard;