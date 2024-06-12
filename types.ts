export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    billboardId: string;
}

export interface Product {
    id: string;
    category: Category;
    name: string;
    quantity: number;
    price: number;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: string[];
}

export interface Size {
    id: string;
    name: string;
    value: string;
}

export interface Color {
    id: string;
    name: string;
    value: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}