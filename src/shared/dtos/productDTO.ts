export interface ProductDTO {
  id: number;
  title: string;
  price:number;
  description:string;
  category: string;
  categoryId:number;
  image: string;
  rating: RatingDTO;
}

export interface RatingDTO {
  rate: number;
  count: number;
}

export interface CategoryDTO {
  id: number;
  name: string;
}
