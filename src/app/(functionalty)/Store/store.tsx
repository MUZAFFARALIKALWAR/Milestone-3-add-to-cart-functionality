import { configureStore } from '@reduxjs/toolkit'
import  ProductSlice from './features/product'
import  cartSlice  from './features/cart'
// ...

export const store = configureStore({
  reducer: {
      product:ProductSlice,
      cart:cartSlice
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store