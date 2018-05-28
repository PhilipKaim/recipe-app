import React, { Component } from 'react';
import NewRecipe from './NewRecipe';
import Form from './Form';
import Recipes from './Recipes';

class RecipeApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: [
        {
            id: 1,
            picSrc: './images/spagettii.jpeg',
            alt: 'spagettii',
            ingredients: ['Pasta', 'Tomato Sauce', 'Meat Balls'],
            instructions: 'Boil water. Add pasta. Cook pasta till tender. Heat meatballs and tomato sace in large pot. Mix pasta and meat sacue together. Enjoy!',
            title: 'Spaghetti'
        }
      ],
      nextId: 1,
      newRecipeModal: false
    }
  }

  handelModal = () => {
    this.setState({ newRecipeModal: true });
  }

  handelFormClose = () => {
    this.setState({ newRecipeModal: false });
  }

  render() {
    return (
      <div>
        <NewRecipe modal={this.handelModal} />
        {this.state.newRecipeModal && <Form  submit={this.handelSubmit} close={this.handelFormClose} /> }
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
