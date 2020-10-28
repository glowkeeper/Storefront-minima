import { combineReducers, Reducer, Store, createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import { ApplicationState, ActionProps } from './types'

import { reducer as infoReducer } from './app/reducers/info/reducer'
import { reducer as serverReducer } from './app/reducers/server/reducer'
import { reducer as txReducer } from './app/reducers/tx/reducer'
import { reducer as dataReducer } from './app/reducers/get/reducer'

export const rootReducer: Reducer<ApplicationState, ActionProps> = combineReducers<ApplicationState, ActionProps>({
  info: infoReducer,
  fileServer: serverReducer,
  tx: txReducer,
  data: dataReducer
})

export function configureStore(
  initialState: ApplicationState
): Store<ApplicationState, ActionProps> {

  // create the redux-saga middleware
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(ReduxThunk)
  )

  return store
}
