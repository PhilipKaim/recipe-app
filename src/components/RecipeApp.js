import React, { Component } from 'react';
import Navbar from './NewRecipe';
import Recipes from './Recipes';

class RecipeApp extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Recipes />
      </div>
    );
  }
}

export default RecipeApp;
