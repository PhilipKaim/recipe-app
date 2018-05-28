import React, { Component } from 'react';

class Form extends Component {

    render() {
        return(
            <div className='form-container'>
                <form className='form' onSubmit={this.props.submit}>
                    <label htmlFor='url'>Picture URL:</label>
                    <input id='url' />
                    <label htmlFor='ingrendients'>Ingredients:</label>
                    <input id='ingredients' />
                    <button>+</button>
                    <label htmlFor='description'>Description:</label>
                    <textarea id='description'></textarea>
                    <button type='submit'>ADD+</button>
                </form>
            </div>
        )
    }
}

export default Form;