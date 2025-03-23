"use client";
import '../styles/globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';
import { CssBaseline, Container } from '@mui/material';
import Header from '../components/Header';
import { CartProvider } from '../context/CartContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <Head>
        <title>Каталог товаров</title>
      </Head>
      <body>
        <CssBaseline />
        <CartProvider>
          <Header />
          <Container maxWidth="lg" sx={{ mt: 4 }}>
            {children}
          </Container>
        </CartProvider>
      </body>
    </html>
  );
}