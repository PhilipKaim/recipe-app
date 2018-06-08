import React, { Component } from 'react';
import Modal from './Modal';

class NewRecipeButton extends Component {
    constructor(props) {
        super(props);
    }

    handlePassState = (state) => {
        this.props.addRecipe(state);
    }

    render() {
        return (
            <div>
                <button onClick={ this.props.openModal }>+ New Recipe</button>
                { this.props.modal
                    &&
                    <Modal
                        passState={ this.handlePassState }
                        closeModal={ this.props.closeModal }
                        id={ this.props.id }
                        // edit={this.props.edit}
                    /> }
            </div>
        );
    }
}

export default NewRecipeButton;