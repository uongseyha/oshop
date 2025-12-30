export interface User {
  id: number;
  username: string;
  password: string;
  isAdmin: boolean;
}

export interface UserCreate {
  username: string;
  password: string;
  isAdmin: boolean;
}