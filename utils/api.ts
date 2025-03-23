import { Product } from '../context/CartContext';

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Ошибка загрузки товаров');
  }
  return response.json();
}