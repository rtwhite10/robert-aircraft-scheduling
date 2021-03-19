import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk]

export default function storeConfig() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )

  return {store}
}  