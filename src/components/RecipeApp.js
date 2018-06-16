import React, { Component } from 'react';
import NewRecipeButton from './NewRecipeButton';
import RecipeCard from './RecipeCard';
import Modal from './Modal';
import { connect } from "react-redux";
import { addRecipe } from '../actions/addRecipe';
import { openModal } from '../actions/openModal';
import { closeModal } from '../actions/closeModal';


class RecipeApp extends Component {
  constructor(props) {
    super(props)
  }

  // componentWillMount = () => {
  //   localStorage.getItem('state') && this.setState(() => {
  //     return {
  //       recipes: JSON.parse(localStorage.getItem('state'))
  //     }
  //   });
  // }


  handleModalOpen = () => {
    this.props.openModal();
  }

  handleModalClose = () => {
    this.props.closeModal();
  }

  handleAddRecipe = (state) => {
    this.props.addRecipe(state);
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
    const recipeCards = this.props.recipes.map((el, i) => {
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
          openModal={ this.handleModalOpen }
        />
        { this.props.modal
                    &&
                    <Modal
                        addRecipe={ this.handleAddRecipe }
                        closeModal={ this.handleModalClose }
                    /> }
        <div className='grid'>
          {recipeCards}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    recipes: reduxState.recipes,
    modal: reduxState.modal
  };
}

export default connect(mapStateToProps, { addRecipe, openModal, closeModal })(RecipeApp);
