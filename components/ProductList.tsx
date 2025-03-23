'use client';

import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';
import { Product } from '../context/CartContext';
import ProductCard from './ProductCard';
import { Grid, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>('all');

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (category !== 'all') {
      filtered = filtered.filter((product) => product.category === category);
    }
    setFilteredProducts(filtered);
  }, [searchTerm, category, products]);
  
  const categories = Array.from(new Set(products.map((p) => p.category))).filter(Boolean);

  return (
    <div>
      <TextField
        label="Поиск"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Категория</InputLabel>
        <Select
          value={category}
          label="Категория"
          onChange={(e) => setCategory(e.target.value as string)}
        >
          <MenuItem value="all">Все</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}