export interface Cart {
  id: number;
  userId: number;
  items: CartItem[];
}

export interface CartItem {
  id: number;
  productId: number;
  productTitle: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}
