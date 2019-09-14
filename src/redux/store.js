import { creatorStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'refux-thunk';
import pokemonReducer from './reducers/pokemonReducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION ? 
window.__REDUX_DEVTOOLS_EXTENSION : null;

const rootReducers = combineReducers({
    pokemon:pokemonReducer,
})

export const configStore = createStore({

})