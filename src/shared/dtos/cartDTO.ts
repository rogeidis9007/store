export interface CartDTO {
id?:number;
userId?:number;
date?:Date;
products?:	ProductCartDTO[];
__v?:number;
}

export interface ProductCartDTO {
  productId: number;
  quantity: number;
  description?:string;
}
