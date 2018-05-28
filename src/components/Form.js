import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            img: '',
            ingredients: [],
            instructions: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const {title, img, ingredients, instructions} = this.state;

        return(
            <div className='form-container'>
                <form className='form' onSubmit={this.props.submit}>

                    <span className='form__close' onClick={this.props.close}>X</span>

                    <label htmlFor='url'>Picture URL:</label>
                    <input
                        id='url'
                        onChange={this.handleChange}
                        name={img}
                    />

                    <label htmlFor='ingrendients'>Ingredients:</label>
                    <input
                        id='ingredients'
                        onChange={this.handleChange}
                        name={ingredients}
                    />

                    <button type='button'>+</button>

                    <label htmlFor='instructions'>Instructions:</label>
                    <textarea
                        id='instructions'
                        onChange={this.handleChange}
                        name={instructions}
                    ></textarea>

                    <button type='submit'>ADD +</button>
                </form>
            </div>
        )
    }
}

export default Form;