// import { combineReducers, applyMiddleware } from 'redux'
// import { createStore, configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const initialState = {}

// const reducer = {}

// const middleware = [thunk]

// const store = configureStore({
//   reducer,
//   middleware,
//   devTools: process.env.NODE_ENV !== 'production',
//   preloadedState: initialState,
// })

// export default store

import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productRedusers'
import { cartReduser } from './reducers/cartRedusers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
//createStore

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const middleware = [thunk]

const store = configureStore({
  reducer: {
    productsReducer: productListReducer,
    productDeatil: productDetailsReducer,
    cart: cartReduser,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
  },
  preloadedState: {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage },
  },
  middleware,
})

export default store
