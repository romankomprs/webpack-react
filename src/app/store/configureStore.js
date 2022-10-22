import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'app/store/rootReducer'
import rootSaga  from 'app/store/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
  )
)
sagaMiddleware.run(rootSaga)


export default store
