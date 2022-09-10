// import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
// import {
//   productListReducer,
//   productDetailsReducer,
// } from './reducers/productRedusers'
// import { cartReduser } from './reducers/cartRedusers'
// import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
// //createStore

// const cartItemsFromStorage = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems'))
//   : []

// const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   : null

// const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
//   ? JSON.parse(localStorage.getItem('shippingAddress'))
//   : {}

// const middleware = [thunk]

// const store = configureStore({
//   reducer: {
//     productList: productListReducer,
//     productDeatil: productDetailsReducer,
//     cart: cartReduser,
//     userLogin: userLoginReducer,
//     userRegister: userRegisterReducer,
//   },
//   preloadedState: {
//     cart: { cartItems: cartItemsFromStorage },
//     userLogin: { userInfo: userInfoFromStorage },
//   },
//   middleware,
// })

// export default store
//////////////////////////////////////////////////
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productRedusers'
import { cartReduser } from './reducers/cartRedusers'
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userDetailsReducer,
} from './reducers/userReducers'
import {
  orderCreateReducer,
  orderDetailsReducer,
} from './reducers/orderReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReduser,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : []

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
