import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoryReducer } from './Reducer/CategoryReducer';
import { productReducer, productdetailsReducer } from './Reducer/ProductReducer';


const reducer = combineReducers({
    cat: categoryReducer,
    p: productReducer,
    pdetail: productdetailsReducer

})
let initializeState = {}

// const middleware = [thunk]

//createStore
const store = createStore(reducer, initializeState, composeWithDevTools(applyMiddleware(thunk)))
export default store;