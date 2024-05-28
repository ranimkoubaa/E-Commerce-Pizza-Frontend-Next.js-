"use client"

import { useState, useEffect, useContext } from "react"
// next image
import Image from "next/image"
// components
import SizeSelection from "./SizeSelection"
import CrustSelection from "./CrustSelection"
import Topping from "./Topping"
// context
import { CartContext } from "../context/CartContext"

const PizzaDetails = ({ pizza, setModal }) => {
  // pizza size state
  const [size, setSize] = useState("small")
  // pizza crust state
  const [crust, setCrust] = useState("traditional")
  // pizza topping state
  const [additionalTopping, setAdditionalTopping] = useState([])
  // pizza topping price
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0)
  // pizza state
  const [price, setPrice] = useState(0)

  const { addToCart } = useContext(CartContext)

  // set the price based on the pizza size
  useEffect(() => {
    size === "small"
      ? setPrice(parseFloat(pizza.priceSm + additionalToppingPrice).toFixed(2))
      : size === "medium"
      ? setPrice(parseFloat(pizza.priceMd + additionalToppingPrice).toFixed(2))
      : size === "large"
      ? setPrice(parseFloat(pizza.priceLg + additionalToppingPrice).toFixed(2))
      : null
  })

  // set additional topping price
  useEffect(() => {
    if (additionalTopping.length > 0) {
      const toppingPrice = additionalTopping.reduce((a, c) => {
        return a + c.price
      }, 0)
      setAdditionalToppingPrice(toppingPrice)
    } else {
      setAdditionalToppingPrice(0)
    }
  }, [additionalTopping])

  return (
    <div className="flex flex-col sm:flex-row sm:gap-x-8 h-full sm:p-8">
      {/* top */}
      <div className="sm:flex-1 flex justify-center items-center">
        {/* pizza image */}
        <div className="max-w-[300px] sm:max-w-none mt-6 sm:mt-0">
          <Image
            src={pizza.image}
            width={450}
            height={450}
            alt={pizza.name}
            priority={1}
            className="mx-auto relative"
          />
        </div>
      </div>
      {/* details */}
      <div className=" flex flex-col flex-1">
        <div className="flex-1 p-2 text-center sm:text-left">
          <div className="flex-1 bg-white overflow-y-scroll h-[80vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white pr-2">
            {/* name */}
            <div className="font-semibold">
              <h2 className="capitalize text-3xl mb-1">{pizza.name}</h2>
              {/* size & crust text */}
              <div className=" mb-6 text-lg font-medium">
                <span>
                  {size === "small"
                    ? "25 cm"
                    : size === "medium"
                    ? "30 cm"
                    : size === "large"
                    ? "35 cm"
                    : null}
                </span>
                <span>, {crust} crust</span>
              </div>
            </div>
            {/* size selection */}
            <SizeSelection pizza={pizza} size={size} setSize={setSize} />
            {/* crust selection */}
            <CrustSelection crust={crust} setCrust={setCrust} />
            {/* toppings */}
            <div className="mb-4 text-xl font-semibold">Choose topping</div>
            <div className="flex flex-1 flex-wrap gap-2 py-1 justify-center sm:justify-start"> {/* Adjusted styling */}
  {pizza.toppings?.map((topping, index) => {
    return (
      <Topping
        key={index}
        topping={topping}
        additionalTopping={additionalTopping}
        setAdditionalTopping={setAdditionalTopping}
      />
    );
  })}
</div>
{/* add to cart btn */}
<div className="h-full  items-center px-2 sm:items-end mt-2"> {/* Adjusted margin-bottom */}
  <button
    onClick={() => {
      addToCart(
        pizza.id,
        pizza.image,
        pizza.name,
        price,
        additionalTopping,
        size,
        crust
      );
      setModal(false);
    }}
    className="btn btn-lg gradient w-full flex justify-center gap-x-2"
  >
    <div>Add to cart for</div>
    <div>$ {price}</div>
  </button>
</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PizzaDetails