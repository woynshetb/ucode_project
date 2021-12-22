import React from 'react';
import ReactDOM from 'react-dom';

// to initialize redux we need to import provider from redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers';
import mySaga from './sagas'

import App from './App'
import './index.css'

const sagaMiddleware = createSagaMiddleware()
// Mount it on the Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

// Then run the saga
sagaMiddleware.run(mySaga)
ReactDOM.render(
<Provider store={store} ><App /></Provider>
, document.getElementById('root'));