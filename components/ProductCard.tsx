'use client';

import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image || '/placeholder.png'}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description?.slice(0, 100)}...
        </Typography>
        <Typography variant="subtitle1" color="text.primary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addToCart(product)}>
          Добавить в корзину
        </Button>
      </CardActions>
    </Card>
  );
}