import React, { Component } from 'react';

class NewRecipe extends Component {

    render() {
        return(
            <div>
                <div className='newRecipe'>
                    <button onClick={this.props.modal}>+ New Recipe</button>
                </div>
            </div>
        )
    }
}

export default NewRecipe;