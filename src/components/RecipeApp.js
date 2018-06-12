import React, { Component } from 'react';
import NewRecipeButton from './NewRecipeButton';
import RecipeCard from './RecipeCard';
import Modal from './Modal';

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
      edit: {
        id: '',
        url: '',
        ingredients: [],
        instructions: '',
        title: ''
      }
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

  handleUpdate = (recipeInfo) => {
    this.setState(() => {
      return {
        edit: recipeInfo
      }
    });
  }

  render() {
    const recipeCards = this.state.recipes.map((el, i) => {
      return <RecipeCard
                recipe={el} 
                key={i}
                delete={ this.handleDelete  }
                update={ this.handleUpdate }
                openModal={ this.handleModalOpen }
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
        { this.state.modal
                    &&
                    <Modal
                        addRecipe={ this.handleAddRecipe }
                        closeModal={ this.handleModalClose }
                        id={ this.state.id }
                        edit={ this.state.edit }
                    /> }
        <div className='grid'>
          {recipeCards}
        </div>
      </div>
    );
  }
}

export default RecipeApp;
