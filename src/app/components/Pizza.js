"use client"

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
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
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
      {/*<div className="font-quicksand text-sm font-medium min-h-[60px] mb-6 ">
        {pizza.description}
  </div>*/}
  <div className="font-quicksand text-sm font-medium min-h-[60px] mb-6 text-justify">
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
          className="bg-white w-full h-full sm:max-w-[900px] sm:max-h-[600px] sm:rounded-[30px] sm:fixed sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] outline-none"
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

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <Pizza pizza={pizza} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzasPage;
