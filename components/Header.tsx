'use client';

import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Мой магазин
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Каталог
        </Button>
        <Button color="inherit" component={Link} href="/cart">
          Корзина
        </Button>
      </Toolbar>
    </AppBar>
  );
}