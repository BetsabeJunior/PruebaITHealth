export interface UserCreate {
  id: number;
  username?: string;
  name?: string;
  email?: string;
  address?: {
    street?: string;
    city?: string;
  };
  phone?: string;
  company?: {
    name?: string;
  };
}