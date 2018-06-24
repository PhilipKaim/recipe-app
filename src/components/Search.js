import React, { Component } from 'react';
import { connect } from "react-redux";
import { searchRecipe } from '../actions/searchRecipe';

class Search extends Component {

    handleSearch = (e) => {
        let searchValue = Array.from(e.target.value);
        let titles_and_ids = this.props.recipes.map(el => {
           return {
            title: el.title,
            id: el.id
           };
        });
        
        for (let i = 0; i < titles_and_ids.length; i++) {
            let titleCharacters = titles_and_ids[i].title.split('');
            for (let j = 0; j < searchValue.length; j++) {
                
                let included = titleCharacters.some((el) => el === searchValue[j]);
                
                if (included) {
                    titles_and_ids.splice(i, 1);
                }
            }
        }

        this.props.searchRecipe(titles_and_ids);
        
    }

    render() {
        return (
            <div>
                <label htmlFor='search'>Search Recipe: </label>
                <input type='text' id='search' onChange={ this.handleSearch } />
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
      recipes: reduxState.recipes
    };
  }
  
export default connect(mapStateToProps, { searchRecipe })(Search);