import React, { Component } from 'react';
import Recipe from './Recipe';

class Recipes extends Component {
    render() {
        const recipes = this.props.recipes.map((r, i) => <Recipe key={r.id} {...r} /> );

        return (
            <div>
                {recipes}
            </div>
        )
    }
}

export default Recipes;