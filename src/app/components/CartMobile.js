"use client"

import { useContext } from "react"
// context
import { CartContext } from "../context/CartContext"
import CartBottom from "./CartBottom"
import CartItem from "./CartItem"
// components
import CartTop from "./CartTop"

const CartMobile = () => {
  const { cart, isOpen } = useContext(CartContext)

  return (
    <div
      className={`${
        isOpen ? "bottom-0" : "-bottom-full"
      } bg-white fixed w-full h-full left- z-20 transition-all duration-300 sm:hidden flex flex-col`}
    >
      {/* top */}
      <CartTop />
      {/* cart items */}
      <div
        className={`px-4 flex flex-col gap-y-4 py-2 mr-4 mt-8 h-[60vh]  overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary ${
          cart.length >= 3
            ? "scrollbar-track-white/10"
            : "scrollbar-track-transparent"
        }`}
      >
        {cart?.map((pizza, index) => {
          return <CartItem key={index} pizza={pizza} />
        })}
      </div>
      {/* cart bottom */}
      <CartBottom />
    </div>
  )
}

export default CartMobile