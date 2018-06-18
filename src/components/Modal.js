import React, { Component } from 'react';
import { connect } from "react-redux";
import { editRecipe } from '../actions/editRecipe';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            title: '',
            ingredient: '',
            ingredients: [],
            id: undefined,
            instructions: ''
        }

    }

    componentDidMount = () => {
        const edit = this.props.edit;

        this.setState(() => {
            return {
                ...edit
            }
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addRecipe(this.state);
        this.props.closeModal();

        // Clears form and ingredients list in form
        e.target.reset();
        this.setState(() => {
            return {
                url: '',
                title: '',
                ingredient: '',
                ingredients: [],
                id: undefined,
                instructions: ''
            }
        });
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => {
            return {
                [e.target.name]: e.target.value,
            }
        });
    }

    handleAddIngredient = () => {
        const ingredientInput = document.querySelector('#ingredientInput');
        ingredientInput.value = '';

        const copy = [...this.state.ingredients];
        const ingredients = copy.concat(this.state.ingredient);
        this.setState(() => {
            return {
                ingredients,
                ingredient: ''
            }
        });
    }

    handleId = () => {
        console.log(this.props.id);
        
        this.setState(() => {
            return {
                id: this.props.id
            }
        });
    }

    // // REMOVING DELETE BUTTON WHEN DELETING FROM TOP DOWN!!!!
    // handleRemoveIngredient = (e) => {

    //     const listItem = e.target.parentNode.childNodes[0].innerHTML;

    //     const ingredients = this.state.ingredients.filter(el => {
    //         return el !== listItem;
    //     });
        
    //     this.setState(() => {
    //         return {
    //             ingredients
    //         }
    //     })

    //     e.target.remove();
    // }

    render() {

        const ingredientList = this.state.ingredients.map((el, i) => {
            return <div key={i} className='form__listItems'><li>{el}</li><button onClick={this.handleRemoveIngredient}>X</button></div>
        });

        return (
            <div className='form-center'>
                <form onSubmit={this.handleOnSubmit} className='form'>
                    {/* image */}
                    <label htmlFor='url' className='label'>URL:</label>
                    <input
                        type='url'
                        onChange={ this.handleOnChange }
                        name='url'
                        id='url'
                        className='form__url'
                        autoComplete="off"
                        value={this.state.url}
                    />

                    {/* title */}
                    <label htmlFor='title' className='label'>Title:</label>
                    <input
                        type='text'
                        onChange={ this.handleOnChange }
                        name='title'
                        id='title'
                        className='form__title'
                        autoComplete="off"
                        value={this.state.title}
                    />

                    {/* ingredient */}
                    <label htmlFor='ingredients' className='label'>Ingredients:</label>
                    
                    {/* entered ingredients */}
                    <ul id='list'  className='form__list'>
                        { ingredientList }
                    </ul>

                    <div className='form__listActions'>
                        <input
                            type='text'
                            onChange={ this.handleOnChange }
                            name='ingredient'
                            id='ingredient'
                            className='form__listInput'
                            autoComplete="off"
                            id='ingredientInput'
                        />

                        {/* add new ingredient input */}
                        <button
                            type='button'
                            onClick={this.handleAddIngredient}
                            className='form__addListItem'
                        >
                            +
                        </button>
                    </div>

                    {/* instructions to make recipe */}
                    <label htmlFor='instructions' className='label'>Instructions:</label>
                    <textarea
                        onChange={ this.handleOnChange }
                        name='instructions'
                        id='instructions'
                        className='form__instructions'
                        autoComplete="off"
                        value={this.state.instructions}
                    >
                    </textarea>

                    {/* adds new recipe with above inputs */}
                    <button
                        type='submit'
                        onClick={ this.handleId }
                        className='form__addRecipe'
                    >
                        Add Reacipe
                    </button>

                    {/* close modal */}
                    <button
                        onClick={ this.props.closeModal }
                        className='form__close'
                    >
                        Close
                    </button>
                </form>
               
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
      id: reduxState.nextId,
      edit: reduxState.edit
    };
  }
  
export default connect(mapStateToProps, editRecipe)(Modal);
