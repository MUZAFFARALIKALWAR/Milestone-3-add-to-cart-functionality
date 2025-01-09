import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../../utils/type"
import { products } from "../../utils/mock"

// Define the initial state using that type
const initialState: Product[] = products;

export const ProductSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

  }
})

export const {  } = ProductSlice.actions

export default ProductSlice.reducer