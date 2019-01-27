import { combineReducers, createStore, applyMiddleware } from 'redux';
import synonyms from './synonyms';
import words from './words';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export default createStore(
    combineReducers({
        synonyms,
        words
    }),
    composeWithDevTools(
      applyMiddleware(
        thunk,
        loggerMiddleware
      )
    )
  );