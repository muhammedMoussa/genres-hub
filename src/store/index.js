import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";

import rootReducer from './reducers/index';
import { forbiddenWordsMiddleware } from './middleware';
import apiSaga from "./sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const middleware = [forbiddenWordsMiddleware, thunk, initialiseSagaMiddleware];
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware),
));

initialiseSagaMiddleware.run(apiSaga);

export default store;