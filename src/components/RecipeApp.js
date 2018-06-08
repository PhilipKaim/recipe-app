import React, { Component } from 'react';
import NewRecipeButton from './NewRecipeButton';
import RecipeCard from './RecipeCard';

class RecipeApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: [
        {
            id: 0,
            url: './images/spagettii.jpeg',
            alt: 'spagettii',
            ingredients: ['Pasta', 'Tomato Sauce', 'Meat Balls'],
            instructions: 'Boil water. Add pasta. Cook pasta till tender. Heat meatballs and tomato sace in large pot. Mix pasta and meat sacue together. Enjoy!',
            title: 'Spaghetti'
        }
      ],
      nextId: 1,
      modal: false,
    }
  }

  componentWillMount = () => {
    localStorage.getItem('state') && this.setState(() => {
      return {
        recipes: JSON.parse(localStorage.getItem('state'))
      }
    });
  }


  handleModalOpen = () => {
    this.setState(() => {
      return {
        modal: true
      }
    });
  }

  handleModalClose = () => {
    this.setState(() => {
      return {
        modal: false
      }
    });
  }

  handleAddRecipe = (state) => {
    const recipes = this.state.recipes.concat(state);

    this.setState((prevState) => {
      return {
        recipes,
        nextId: prevState.nextId + 1
      }
    });

    setTimeout(() => {
      localStorage.setItem('state', JSON.stringify(this.state.recipes));
    }, 1000);
  }

  handleDelete = (id) => {
    const copy = this.state.recipes;
    const recipes = copy.filter(el => el.id !== id);
    this.setState(() => {
      return {
        recipes
      }
    });

    setTimeout(() => {
      localStorage.setItem('state', JSON.stringify(this.state.recipes));
    }, 300);
  }

  // handleUpdate = (recipe) => {
  //   this.handleModalOpen();
    

  //   // for (let i = 0; i < copy.length; i++) {
  //   //   if (copy[i].id === id) {
  //   //     copy.splice(i, 1, updatedRecipe);
  //   //     break;
  //   //   }
  //   // }
  // }

  render() {
    const recipeCards = this.state.recipes.map((el, i) => {
      return <RecipeCard
                recipe={el} 
                key={i}
                delete={ this.handleDelete  }
                update={ this.handleUpdate }
              />
    });

    return (
      <div>
        <NewRecipeButton
          addRecipe={ this.handleAddRecipe }
          modal={this.state.modal}
          openModal={ this.handleModalOpen }
          closeModal={ this.handleModalClose }
          id={ this.state.nextId }
          edit={ this.state.edit }
        />
        {recipeCards}
      </div>
    );
  }
}

export default RecipeApp;
