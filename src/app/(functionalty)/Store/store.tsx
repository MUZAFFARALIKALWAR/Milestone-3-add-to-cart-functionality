import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  ProductSlice from './features/product'
import  cartSlice  from './features/cart'
import storage  from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/lib/persistReducer';

const persistconfiq = {
  key:"root",
  version:1,
  storage,
}
const reducer = combineReducers({
  product:ProductSlice,
  cart:cartSlice
})
const persistedReducer = persistReducer(persistconfiq,reducer)

export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}),
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store