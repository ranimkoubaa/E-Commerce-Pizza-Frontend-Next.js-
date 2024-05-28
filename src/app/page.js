// import components
/*import Pizza from "./components/Pizza"
import Banner from "./components/Banner"
import { pizzas } from "../../data/data"

export default function Home() {
  return (
    <section>
      <Banner />
      <div className="container mx-auto">
        {/* pizza grid 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[15px] py-12">
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />
          })}
        </div>
      </div>
    </section>
  )
}*/
// pages/index.js (Home component)
/*"use client"
import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import PizzasPage from './components/Pizza';
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
        <PizzasPage pizzas={pizzas} /> 
      </div>
    </section>
  );
}*/
"use client"
import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import PizzasPage from './components/Pizza';


import Nav from './components/Nav'
import Nav2 from './components/NavBar'
import Footer from "./components/Footer"
import CartMobileIcon from "./components/CartMobileIcon"
import CartMobile from "./components/CartMobile"
import CartDesktop from "./components/CartDesktop"
import PizzaCategories from "./components/PizzaCategories";
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
    <>
    <Nav />
    <CartMobileIcon />
    <CartMobile />
    <section>
      <Banner />
      <div className="container mx-auto">
        <PizzasPage pizzas={pizzas} /> 
      </div>
    </section>
    <CartDesktop />
      {/*<PizzaCategories />*/}
      <Footer /> 
    </>
  );
}