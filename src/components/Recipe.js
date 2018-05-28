import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Recipe extends Component {

    static PropTypes = {
        picSrc: PropTypes.string.isRequred,
        description: PropTypes.string.isRequred,
        alt: PropTypes.string.isRequred,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequred
    }
    
    render() {
        const { picSrc, instructions, alt, title } = this.props;
        const ingredients = this.props.ingredients.map((item, i) => {
            return <li key={i}>{ item }</li>
        })
        return(
            <div className='card'>
                <img src={picSrc} alt={alt} className='card__img' />
                <h2 className='card__title'>{title}</h2>
                <h4><u>Ingredients</u></h4>
                <ul className='card__ingredientList'>
                    {ingredients}
                </ul>
                <h4><u>Instructions</u></h4>
                <p className='card__description'>{instructions}</p>
            </div>
        );
    }
}

export default Recipe;