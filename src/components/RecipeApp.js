import React, { Component } from 'react';
import NewRecipe from './NewRecipe';
import Form from './Form';
import Recipes from './Recipes';

class RecipeApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newRecipeModal: false
    }
  }

  handelModal = () => {
      this.setState({ newRecipeModal: true });
  }

  handelSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <NewRecipe modal={this.handelModal} />
        {this.state.newRecipeModal && <Form  submit={this.handelSubmit} /> }
        <Recipes />
      </div>
    );
  }
}

export default RecipeApp;
