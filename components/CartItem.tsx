"use client";
import { ListItem, ListItemAvatar, Avatar, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  product: Product;
}

export default function CartItem({ product }: CartItemProps) {
  const { removeFromCart } = useCart();
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(product.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar src={product.image} alt={product.title} />
      </ListItemAvatar>
      <ListItemText 
        primary={`${product.title} (x${product.quantity || 1})`}
        secondary={`$${(product.price * (product.quantity || 1)).toFixed(2)}`}
      />
    </ListItem>
  );
}