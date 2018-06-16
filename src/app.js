import React from 'react';
import ReactDOM from 'react-dom';
import RecipeApp from './components/RecipeApp';
import 'normalize.css/normalize.css';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <RecipeApp />
    </Provider>
, document.getElementById('root'));
