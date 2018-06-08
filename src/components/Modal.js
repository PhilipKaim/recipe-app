import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: undefined,
            title: undefined,
            ingredient: '',
            ingredients: [],
            id: undefined
        }

    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.passState(this.state);
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
        this.setState(() => {
            return {
                id: this.props.id
            }
        });
    }

    // REMOVING DELETE BUTTON WHEN DELETING FROM TOP DOWN!!!!
    handleRemoveIngredient = (e) => {

        const listItem = e.target.parentNode.childNodes[0].innerHTML;

        const ingredients = this.state.ingredients.filter(el => {
            return el !== listItem;
        });
        
        this.setState(() => {
            return {
                ingredients
            }
        })

        e.target.remove();
    }

    render() {
        const { edit } = this.props;

        const ingredientList = this.state.ingredients.map((el, i) => {
            return <div key={i}><li>{el}</li><span onClick={this.handleRemoveIngredient}>X</span></div>
        });

        // if (edit !== undefined) {

        //     var editIngredientList = edit.ingredients.map((el, i) => {
        //         return <div key={i}><li>{el}</li><span>X</span></div>
        //     });
        // }

        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    {/* image */}
                    <label htmlFor='url'>URL:</label>
                    <input
                        type='url'
                        onChange={ this.handleOnChange }
                        name='url'
                        id='url'
                        placeholder={this.state.url}
                    />

                    {/* title */}
                    <label htmlFor='title'>Title:</label>
                    <input
                        type='text'
                        onChange={ this.handleOnChange }
                        name='title'
                        id='title'
                    />

                    {/* ingredient */}
                    <label htmlFor='ingredients'>Ingredients:</label>
                    
                    {/* entered ingredients */}
                    <ul id='list'>
                        {edit !== undefined ? editIngredientList : ingredientList}
                    </ul>

                    <input
                        type='text'
                        onChange={ this.handleOnChange }
                        name='ingredient'
                        id='ingredient'
                    />

                    {/* add new ingredient input */}
                    <button
                        type='button'
                        onClick={this.handleAddIngredient}
                    >
                        +
                    </button>

                    {/* instructions to make recipe */}
                    <label htmlFor='instructions'>Instructions:</label>
                    <textarea
                        onChange={ this.handleOnChange }
                        name='instructions'
                        id='instructions'
                    >
                    </textarea>

                    {/* adds new recipe with above inputs */}
                    <button
                        type='submit'
                        onClick={ this.handleId }
                    >
                        Add Reacipe
                    </button>

                    {/* close modal */}
                    <span
                        onClick={ this.props.closeModal }
                    >
                        X
                    </span>
                </form>
               
            </div>
        );
    }
}

export default Modal;