// components/PizzaCategories.js
"use client"
/*import React, { useState, useEffect } from 'react';
import Pizza from './Pizza';

const PizzaCategories = () => {
  const [pizzas, setPizzas] = useState([]);
  const [searchIngredients, setSearchIngredients] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    async function fetchPizzas() {
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
    fetchPizzas();
  }, []);

  const filteredPizzas = pizzas.filter(pizza => {
    // Filter by ingredients
    const byIngredients = searchIngredients.length === 0 || searchByIngredients(pizza, searchIngredients);
    // Filter by price range
    const byPriceRange = minPrice === 0 && maxPrice === 0 || searchByPriceRange(pizza, minPrice, maxPrice);
    
    return byIngredients && byPriceRange;
  });

  const handleIngredientChange = (e) => {
    setSearchIngredients(e.target.value.split(',').map(ingredient => ingredient.trim()));
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(parseFloat(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseFloat(e.target.value));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pizzas</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by ingredients (comma-separated)"
          value={searchIngredients.join(',')}
          onChange={handleIngredientChange}
          className="mr-2"
        />
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="mr-2"
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export default PizzaCategories;*/
/*********************************************** */
/*import React, { useState, useEffect } from 'react';
import Pizza from './Pizza';

const PizzaCategories = () => {
  const [pizzas, setPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  useEffect(() => {
    async function fetchPizzas() {
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

    fetchPizzas();
  }, []);

  // Define categories and priceRanges arrays
  const categories = ["Category1", "Category2", "Category3"]; // Replace with your actual categories
  const priceRanges = [5, 10, 15, 20]; // Replace with your actual price ranges

  // Function to filter pizzas based on category and price
  const filterPizzas = () => {
    let filtered = [...pizzas]; // Make a copy of the original pizzas array

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(pizza => pizza.category === selectedCategory);
    }

    // Filter by price
    if (selectedPrice) {
      filtered = filtered.filter(pizza => pizza.priceSm >= selectedPrice);
    }

    setFilteredPizzas(filtered);
  };

  useEffect(() => {
    filterPizzas();
  }, [selectedCategory, selectedPrice, pizzas]);

  return (
    <div>
      
      <div>
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

     
      <div>
        <label htmlFor="price">Filter by Price:</label>
        <select
          id="price"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(Number(e.target.value))}
        >
          <option value="">All</option>
          
          {priceRanges.map((price) => (
            <option key={price} value={price}>{`$${price}`}</option>
          ))}
        </select>
      </div>

      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPizzas.map((pizza) => (
          <li key={pizza.id}>
            <Pizza pizza={pizza} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaCategories;*/
/* ****************************************************************************** */
/*import React, { useEffect, useState } from 'react';

import PizzasPage from './Pizza';

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizzas] = useState([]);

  useEffect(() => {
    async function fetchPizzasData() {
      try {
        const response = await fetch('http://localhost:3001/api/pizzas');
        if (response.ok) {
          const data = await response.json();
          setPizzas(data);
          setFilteredPizzas(data); // Initially set filtered pizzas to all pizzas
        } else {
          console.error('Failed to fetch pizzas:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    }
    fetchPizzasData();
  }, []);

  // Function to filter pizzas based on category
  const filterPizzasByCategory = (category) => {
    if (category === '') {
      setFilteredPizzas(pizzas); // If no category selected, show all pizzas
    } else {
      const filtered = pizzas.filter(pizza => pizza.category === category);
      setFilteredPizzas(filtered);
    }
  };

  return (
    <section>
      <div className="container mx-auto">
        <div>
          
          <label htmlFor="category">Filter by Category:</label>
          <select
            id="category"
            onChange={(e) => filterPizzasByCategory(e.target.value)}
          >
            <option value="">All</option>
            
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
        <PizzasPage pizzas={filteredPizzas} /> 
      </div>
    </section>
  );
}*/
/********************************************************* */
/*import React, { useEffect, useState } from 'react';
import PizzasPage from './Pizza';

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');

  useEffect(() => {
    async function fetchPizzasData() {
      try {
        const response = await fetch('http://localhost:3001/api/pizzas');
        if (response.ok) {
          const data = await response.json();
          setPizzas(data);
          setFilteredPizzas(data); // Initially set filtered pizzas to all pizzas
        } else {
          console.error('Failed to fetch pizzas:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    }
    fetchPizzasData();
  }, []);

  // Function to filter pizzas based on price
  const filterPizzasByPrice = (price) => {
    setSelectedPrice(price); // Update selected price state
    if (price === '') {
      setFilteredPizzas(pizzas); // If no price selected, show all pizzas
    } else {
      const filtered = pizzas.filter(pizza => pizza.priceSm >= price);
      setFilteredPizzas(filtered);
    }
  };

  return (
    <section>
      <div className="container mx-auto">
       
        <div>
          <label htmlFor="price">Filter by Price:</label>
          <select
            id="price"
            value={selectedPrice}
            onChange={(e) => filterPizzasByPrice(e.target.value)}
          >
            <option value="">All</option>
           
            <option value="5">$5</option>
            <option value="10">$10</option>
            <option value="15">$15</option>
            <option value="20">$20</option>
          </select>
        </div>

        
        <PizzasPage pizzas={filteredPizzas} />
      </div>
    </section>
  );
}*/
/*
import React, { useEffect, useState } from 'react';
import PizzasPage from './Pizza';

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');

  useEffect(() => {
    async function fetchPizzasData() {
      try {
        const response = await fetch('http://localhost:3001/api/pizzas');
        if (response.ok) {
          const data = await response.json();
          setPizzas(data);
          setFilteredPizzas(data); // Initially set filtered pizzas to all pizzas
        } else {
          console.error('Failed to fetch pizzas:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    }
    fetchPizzasData();
  }, []);

  // Function to filter pizzas based on price
  const filterPizzasByPrice = (price) => {
    setSelectedPrice(price); // Update selected price state
    if (price === '') {
      setFilteredPizzas(pizzas); // If no price selected, show all pizzas
    } else {
      const filtered = pizzas.filter(pizza => pizza.priceSm === parseInt(price));
      setFilteredPizzas(filtered);
    }
  };

  return (
    <section>
      <div className="container mx-auto">
       
        <div>
          <label htmlFor="price">Filter by Price:</label>
          <select
            id="price"
            value={selectedPrice}
            onChange={(e) => filterPizzasByPrice(e.target.value)}
          >
            <option value="">All</option>
           
            <option value="5">$5</option>
            <option value="10">$10</option>
            <option value="15">$15</option>
            <option value="20">$20</option>
          </select>
        </div>
        <PizzasPage pizzas={filteredPizzas} />
      </div>
    </section>
  );
}

*/

/*
import React, { useState, useEffect } from 'react';

const PizzasPage = () => {
  const [pizzas, setPizzas] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [prixMax, setPrixMax] = useState('');

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/pizzas/fff/paginationFilter?page=${page}&limit=${limit}&searchTerm=${searchTerm}&prixMax=${prixMax}`
        );
        const data = await response.json();
        setPizzas(data.pizzas);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    fetchPizzas();
  }, [page, limit, searchTerm, prixMax]);

  return (
    <div>
      <h1>Pizzas</h1>
      <div>
        <label htmlFor="searchTerm">Search:</label>
        <input
          type="text"
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="prixMax">Max Price:</label>
        <input
          type="number"
          id="prixMax"
          value={prixMax}
          onChange={(e) => setPrixMax(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="limit">Items per page:</label>
        <input
          type="number"
          id="limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
      </div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous Page
      </button>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza._id}>
            {pizza.name} - ${pizza.priceSm}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzasPage;

*/
/*
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import PizzaDetails from './PizzaDetails';
import { IoCloseOutline } from 'react-icons/io5';

// Modal styles
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '600px',
    padding: '2rem',
    borderRadius: '0.5rem',
    backgroundColor: 'white',
  },
};

const Pizza = ({ pizza }) => {
  const [modal, setModal] = useState(false);

  // Open modal
  const openModal = () => {
    setModal(true);
  };

  // Close modal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl border shadow-sm">
      <Image
        onClick={openModal}
        className="sm:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        src={pizza.image}
        width={270}
        height={270}
        alt={pizza.name}
        priority={1}
      />
      <div onClick={openModal}>
        <div className="font-robotoCondensed text-xl mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      <div className="font-quicksand text-sm font-medium min-h-[60px] mb-6 ">
        {pizza.description}
      </div>
      <div className="mb-6 flex items-center justify-between">
        <div className="font-quicksand hidden md:flex text-xl font-semibold">
          starts at ${pizza.priceSm}
        </div>
        <button onClick={openModal} className="hidden md:flex gradient text-white rounded-lg btn-sm font-semibold text-sm">
          Choose
        </button>
        <button onClick={openModal} className="btn btn-sm gradient md:hidden text-sm px-3">
          starts at {pizza.priceSm}
        </button>
      </div>
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Pizza Modal"
        >
          <div
            onClick={closeModal}
            className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
          >
            <IoCloseOutline className="text-4xl text-orange" />
          </div>
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

const PizzasPage = () => {
  const [pizzas, setPizzas] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [prixMax, setPrixMax] = useState('');

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/pizzas/fff/paginationFilter?page=${page}&limit=${limit}&searchTerm=${searchTerm}&prixMax=${prixMax}`
        );
        const data = await response.json();
        setPizzas(data.pizzas);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    fetchPizzas();
  }, [page, limit, searchTerm, prixMax]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pizzas</h1>
      <div className="mb-4">
        <label htmlFor="searchTerm" className="block mb-2">Search:</label>
        <input
          type="text"
          id="searchTerm"
          className="w-full border rounded p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="prixMax" className="block mb-2">Max Price:</label>
        <input
          type="number"
          id="prixMax"
          className="w-full border rounded p-2"
          value={prixMax}
          onChange={(e) => setPrixMax(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="limit" className="block mb-2">Items per page:</label>
        <input
          type="number"
          id="limit"
          className="w-full border rounded p-2"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
      </div>
      <div className="flex justify-between mb-4">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">
          Previous Page
        </button>
        <button onClick={() => setPage(page + 1)} className="px-4 py-2 bg-blue-500 text-white rounded">
          Next Page
        </button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pizzas.map((pizza) => (
          <li key={pizza._id}>
            <Pizza pizza={pizza} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzasPage;
*/
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import PizzaDetails from './PizzaDetails';
import { IoCloseOutline } from 'react-icons/io5';

// Modal styles
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '600px',
    padding: '2rem',
    borderRadius: '0.5rem',
    backgroundColor: 'white',
  },
};

const Pizza = ({ pizza }) => {
  const [modal, setModal] = useState(false);

  // Open modal
  const openModal = () => {
    setModal(true);
  };

  // Close modal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl border shadow-sm" >
      <Image
        onClick={openModal}
        className="sm:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        src={pizza.image}
        width={270}
        height={270}
        alt={pizza.name}
        priority={1}
      />
      <div onClick={openModal}>
        <div className="font-robotoCondensed text-xl mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      <div className="font-quicksand text-sm font-medium min-h-[60px] mb-6 ">
        {pizza.description}
      </div>
      <div className="mb-6 flex items-center justify-between">
        <div className="font-quicksand hidden md:flex text-xl font-semibold">
          starts at ${pizza.priceSm}
        </div>
        <button onClick={openModal} className="hidden md:flex gradient text-white rounded-lg btn-sm font-semibold text-sm">
          Choose
        </button>
        <button onClick={openModal} className="btn btn-sm gradient md:hidden text-sm px-3">
          starts at {pizza.priceSm}
        </button>
      </div>
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Pizza Modal"
        >
          <div
            onClick={closeModal}
            className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
          >
            <IoCloseOutline className="text-4xl text-orange" />
          </div>
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

const PizzasPage = () => {
  const [pizzas, setPizzas] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [prixMax, setPrixMax] = useState('');

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/pizzas/fff/paginationFilter?page=${page}&limit=${limit}&searchTerm=${searchTerm}&prixMax=${prixMax}`
        );
        const data = await response.json();
        setPizzas(data.pizzas);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    fetchPizzas();
  }, [page, limit, searchTerm, prixMax]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pizzas</h1>
      <div className="mb-4" style={{ marginTop: '170px' }}>
        <label htmlFor="searchTerm" className="block mb-2">Search:</label>
        <input
          type="text"
          id="searchTerm"
          className="w-full border rounded p-2"
          value={searchTerm}
          placeholder="Type pizza name..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="prixMax" className="block mb-2">Max Price:</label>
        <input
          type="number"
          id="prixMax"
          className="w-full border rounded p-2"
          value={prixMax}
          placeholder="Enter max price..."
          onChange={(e) => setPrixMax(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="limit" className="block mb-2">Items per page:</label>
        <input
          type="number"
          id="limit"
          className="w-full border rounded p-2"
          value={limit}
          placeholder="Enter number of items..."
          onChange={(e) => setLimit(e.target.value)}
        />
      </div>
      {/*<div className="flex justify-between mb-4">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">
          Previous Page
        </button>
        <button onClick={() => setPage(page + 1)} className="px-4 py-2 bg-blue-500 text-white rounded">
          Next Page
        </button>
  </div>*/}
  <div className="flex justify-between mb-4" >
  <button
    onClick={() => setPage(page - 1)}
    disabled={page === 1}
    className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50 disabled:bg-gray-400"
  >
    Previous Page
  </button>
  <button
    onClick={() => setPage(page + 1)}
    className="px-4 py-2 bg-red-500 text-white rounded"
  >
    Next Page
  </button>
</div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pizzas.map((pizza) => (
          <li key={pizza._id}>
            <Pizza pizza={pizza} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzasPage;
