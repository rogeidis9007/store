import Axios from "./Axios";

  export const getAllProductsApi = async () => {
      try {
        const response =  await Axios.get(
          `/products`
        );            
        return response?.data;
      } catch (error) {
        console.error(error)
      }
    };

    export const getAllCategoryProductsApi = async () => {
      try {
        const response =  await Axios.get(
          `/products/categories`
        );            
        return response?.data;
      } catch (error) {
        console.error(error)
      }
    };