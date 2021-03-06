import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteRecipe } from '../actions/edit';

class RecipeCard extends Component {

    handleRemove = () => {
        this.props.deleteRecipe(this.props.recipe.id);
    }

    handleEdit = () => {
        this.props.openModal();
        const recipeInfo = this.props.recipe;
        this.props.edit(recipeInfo, true);
    }

    render() {
        const { url, title, ingredients, instructions } = this.props.recipe;

        const ingredientList = ingredients.map((el, i) => {
            return <li key={i}>{el}</li>
        });

        return (
            <div className='card'>
                <img src={ url } className='card__img' />

                <h1 className='card__title'>{ title }</h1>

                <h3 className='card__label'>Ingredients:</h3>
                <ul className='card__list'>
                    { ingredientList }
                </ul>

                <h3 className='card__label'>Instructions:</h3>
                <p className='card__instructions'>{ instructions }</p>

                <button
                    onClick={ this.handleEdit }
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

function mapStateToProps(reduxState) {
    return {
      recipes: reduxState.recipes
    };
}
  
  export default connect(mapStateToProps, { deleteRecipe })(RecipeCard);