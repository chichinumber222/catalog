"use client";
import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  image?: string;
  category?: string;
  quantity?: number;
}

interface CartContextProps {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  totalCost: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        if ((existing.quantity || 1) > 1) {
          return prev.map(item =>
            item.id === productId
              ? { ...item, quantity: (item.quantity || 1) - 1 }
              : item
          );
        } else {
          return prev.filter(item => item.id !== productId);
        }
      }
      return prev;
    });
  };

  const totalCost = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalCost }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart должен использоваться внутри CartProvider');
  }
  return context;
};
