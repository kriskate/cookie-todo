import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import './index.css'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistedReducer = persistReducer(
  {key: 'todos', storage},
  reducer
)
const store = createStore(persistedReducer)
// eslint-disable-next-line
const persistor = persistStore(store)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
