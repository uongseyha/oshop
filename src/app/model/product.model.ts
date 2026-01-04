export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  categoryId: number;
  isProtected?: boolean;
}

// export interface ProductCreate {
//   title: string;
//   price: number;
//   imageUrl: string;
//   categoryId: number;
//   isProtected?: boolean;
// }