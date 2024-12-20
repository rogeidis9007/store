import { createSlice } from "@reduxjs/toolkit";
import { CartDTO } from "../../shared/dtos/cartDTO";
import { getCartsByUserIdApi } from "../../services/cartsApi";

export interface CartState {
  data: CartDTO;
  loading: boolean;
  openAddCart:number,
}

const initialState: CartState = {
  data: {},
  loading: false,
  openAddCart:0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    reset: (state) => {
      state.data = {};
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setOpenAddCart: (state,action) => { 
      state.openAddCart = action.payload
    },
    setAddCart: (state,action) => { 
      const aux = state.data.products;
      aux?.push(action.payload);
      state.data.products = aux;
    },
    deleteCart: (state,action) => {
      console.log("Update pax cart :",action.payload);
      const aux = state.data.products?.filter(item => item.productId != action.payload);
      state.data.products = aux;
    },
    updatePaxCart: (state,action) => { 
      const aux = state.data.products;
      console.log("Update pax cart :",action.payload);
      state.data.products = aux?.map(item => 
        item.productId === action.payload.id 
          ? { ...item, quantity: action.payload.pax } 
          : item
      );;
    },
  },
});

export const {
  setData,
  setLoading,
  reset,
  setOpenAddCart,
  setAddCart,
  deleteCart,
  updatePaxCart,
} = cartSlice.actions;
export const selectCarts = (state: any) => state?.cart?.data;

export const loadCartsData =
  () => async (dispatch: any, getState: any) => {    
    if (Object.keys(selectCarts(getState())).length === 0 && !getState().products.loading) {
      dispatch(
        setLoading(true)
      );
      const response = await getCartsByUserIdApi();
      
            response && dispatch(
              setData(response[0])
            );
            dispatch(
              setLoading(false)
            );
    }
  };



export default cartSlice.reducer;
