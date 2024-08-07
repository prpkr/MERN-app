import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Store,combineReducers,applyMiddleware,createStore,AnyAction} from 'redux';
import loginReducer from './reducers/loginReducer';
import shoppingReducer from './reducers/shoppingReducer';
import {AppState,RootReducer} from './types/states';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers<RootReducer>({
	login:loginReducer,
	shopping:shoppingReducer
})

const store:Store<AppState,AnyAction> = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  </React.StrictMode>,
)
