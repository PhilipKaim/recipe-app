import React, { Component } from 'react';
import { connect } from "react-redux";
import { editRecipe } from '../actions/editRecipe';

class NewRecipeButton extends Component {
    constructor(props) {
        super(props);
    }

    handleNewRecipe = () => {
        this.props.openModal();

        this.props.editRecipe(null , false);
    }

    render() {
        return (
            <div>
                <button onClick={ this.handleNewRecipe }>+ New Recipe</button>
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
      editing: reduxState.editing
    };
}

export default connect(mapStateToProps, { editRecipe })(NewRecipeButton);