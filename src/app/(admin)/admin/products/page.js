'use client'
import Listproducts from '@/app/components/admin/listProducts';
//import {fetchArticles} from "@/services/ArticleService"

const ProductPage = async() =>{
return (
<div className="container">
<Listproducts/>
</div>
)
}
export default ProductPage
/*
'use client';
import React, { useState, useEffect } from 'react';
import ListProducts from '@/app/components/admin/listproducts';

const Page = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/pizzas');
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="container">
      <ListProducts pizzas={pizzas} />
    </div>
  );
};

export default Page;
*/
