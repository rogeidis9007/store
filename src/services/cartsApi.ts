import Axios from "./Axios";

  export const getCartsByUserIdApi = async () => {
      try {
        const response =  await Axios.get(
          `/carts?userId=1`
        );            
        return response?.data;
      } catch (error) {
        console.error(error)
      }
    };
