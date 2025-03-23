'use client';

import { useCart } from '../../context/CartContext';
import { Typography, List, Divider } from '@mui/material';
import CartItem from '../../components/CartItem';

export default function CartPage() {
  const { cartItems, totalCost } = useCart();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Корзина
      </Typography>
      <List>
        {cartItems.map((item) => (
          <div key={item.id}>
            <CartItem product={item} />
            <Divider />
          </div>
        ))}
      </List>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Общая стоимость: {totalCost.toFixed(2)} $
      </Typography>
    </div>
  );
}