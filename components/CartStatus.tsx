"use client";
import { useCart } from '../context/CartContext';
import { Box, Typography } from '@mui/material';

export default function CartStatus() {
  const { cartItems, totalCost } = useCart();
  const count = cartItems.length;

  if (count === 0) return null;
  
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 1,
        p: 2,
        boxShadow: 3,
        zIndex: 1000,
      }}
    >
      <Typography variant="subtitle1">Товаров: {count}</Typography>
      <Typography variant="subtitle1">Общая сумма: ${totalCost.toFixed(2)}</Typography>
    </Box>
  );
}
