import React, { Component } from 'react';
import NewRecipeButton from './NewRecipeButton';
import RecipeCard from './RecipeCard';
import Modal from './Modal';
import Search from './Search';
import { connect } from "react-redux";
import { addRecipe, editRecipe } from '../actions/edit';
import { closeModal, openModal } from '../actions/modal';


class RecipeApp extends Component {
  constructor(props) {
    super(props);
  }

  handleModalOpen = () => {
    this.props.openModal();
  }

  handleModalClose = () => {
    this.props.closeModal();
  }

  handleAddRecipe = (state) => {
    this.props.addRecipe(state);
  }

  handleEdit = (recipeInfo, editing) => {
    this.props.editRecipe(recipeInfo, editing);
  }

  render() {
    const recipeCards = this.props.recipes.map((el, i) => {
      return <RecipeCard
                recipe={el} 
                key={i}
                delete={ this.handleDelete  }
                edit={ this.handleEdit }
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
        <Search />            
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
    modal: reduxState.modal,
  };
}

export default connect(mapStateToProps, { addRecipe, editRecipe ,openModal, closeModal })(RecipeApp);
