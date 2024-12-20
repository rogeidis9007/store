export interface contactParams {
  name?: string;
  email: string;
  message: string;
}

const contactApi = (params:contactParams) => {
  return {success:true,data:params}
}
export const contactUsApi = async (params: contactParams) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(contactApi(params));
    }, 3000);
  });
};