// src/types/restaurant.ts
export interface MenuItem {
  id: number;
  name: string;
  price: number;
}

export interface Restaurant {
  id: number;
  name: string;
  cuisine?: string[];
  rating?: number;
  deliveryTime?: number;
  costForTwo?: number;
  image?: string;
  address?: string;
  website?: string;
  phone?: string;
  description?: string;
  menu?: MenuItem[];
}
