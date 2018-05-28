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
        const { picSrc, description, alt } = this.props;
        const ingredients = this.props.ingredients.map((item, i) => {
            return <li key={i}>{ item }</li>
        })

        console.log(ingredients);

        return(
            <div className='card'>
                <img src={picSrc} alt={alt} className='card__img' />
                <ol className='card__ingredientList'>
                    {ingredients}
                </ol>
                <p className='card__description'>{description}</p>
            </div>
        );
    }
}

export default Recipe;