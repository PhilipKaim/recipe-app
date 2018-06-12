import React, { Component } from 'react';

class NewRecipeButton extends Component {

    render() {
        return (
            <div>
                <button onClick={ this.props.openModal }>+ New Recipe</button>
            </div>
        );
    }
}

export default NewRecipeButton;