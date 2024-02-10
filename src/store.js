import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

import { save, load } from 'redux-sessionstorage-simple'

const createStoreWithMiddleware = applyMiddleware(save())(createStore)

const store = createStoreWithMiddleware(rootReducer, load())
//const store = createStore(rootReducer);

export default store
