export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  categoryId: number;
}

export interface ProductCreate {
  title: string;
  price: number;
  imageUrl: string;
  categoryId: number;
}