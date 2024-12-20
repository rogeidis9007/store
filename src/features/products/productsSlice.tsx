import { createSlice } from "@reduxjs/toolkit";
import { CategoryDTO, ProductDTO } from "../../shared/dtos/productDTO";
import { getAllCategoryProductsApi, getAllProductsApi } from "../../services/productsApi";

export interface ProductState {
  data: ProductDTO[];
  oferts:ProductDTO[];
  category: CategoryDTO[];
  loading: boolean;
}

const initialState: ProductState = {
  data: [],
  oferts:[],
  category: [],
  loading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.data = action.payload;
    },
    setOfertsData: (state, action) => {
      state.oferts = action.payload;
    },
    setCategoryData: (state, action) => {
      state.category = action.payload;
    },
    reset: (state) => {
      state.data = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setProductData,
  setCategoryData,
  setOfertsData,
  setLoading,
  reset,
} = productSlice.actions;
export const selectProducts = (state: any) => state.products.data;


export const selectProductById = (id: number) => async (_: any, getState: any) => {
  if (selectProducts(getState()).length === 0 && !getState().product.loading) {
    return selectProducts(getState()).find((p: ProductDTO) => id == p.id)
  }
};

export const loadProductosData =
  () => async (dispatch: any, getState: any) => {
    if (selectProducts(getState()).length === 0 && !getState().products.loading) {
      dispatch(
        setLoading(true)
      );

      const responseCat = await getAllCategoryProductsApi();

      responseCat && dispatch(
        setCategoryData(responseCat.map((c: string, i: number) => ({ id: i+1, name: c })))
      );
      const responseProd = await getAllProductsApi();
      responseProd && dispatch(
        setProductData(responseProd.map((prod:ProductDTO)=>({...prod,categoryId:responseCat.indexOf(prod.category)+1})))        
      );
      responseProd && dispatch(
        setOfertsData(responseProd.slice(0,6))        
      );
      
      dispatch(
        setLoading(false)
      );
    }
  };



export default productSlice.reducer;
