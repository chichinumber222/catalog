"use client";
import dynamic from 'next/dynamic';
import { CircularProgress } from '@mui/material';
import CartStatus from '../components/CartStatus';

const ProductList = dynamic(() => import('../components/ProductList'), {
  loading: () => <CircularProgress />,
});

export default function CatalogPage() {
  return (
    <>
      <ProductList />
      <CartStatus />
    </>
  );
}