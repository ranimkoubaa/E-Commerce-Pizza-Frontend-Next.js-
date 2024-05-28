"use client"
import React, { useEffect, useState } from 'react';
import Banner from '@/app/components/Banner';
import PizzasPage from '@/app/components/Pizza';

export default function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function fetchPizzasData() {
      try {
        const response = await fetch('http://localhost:3001/api/pizzas');
        if (response.ok) {
          const data = await response.json();
          setPizzas(data);
        } else {
          console.error('Failed to fetch pizzas:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    }
    fetchPizzasData();
  }, []);

  return (
    <section>
      <Banner />
      <div className="container mx-auto">
        <PizzasPage pizzas={pizzas} /> {/* Pass pizzas data as props */}
      </div>
    </section>
  );
}