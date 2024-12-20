
const payment = (params:any) => {
  return {success:true,data:params}
}
export const paymentApi = async (params: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(payment(params));
    }, 3000);
  });
};