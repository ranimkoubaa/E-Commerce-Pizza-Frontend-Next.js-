/*import { useState, useEffect, useContext } from "react"
// next image
import Image from "next/image"
// context
import { CartContext } from "../context/CartContext"

const CheckoutDetails = ({ setModal }) => {
  const { cart, setCart, cartTotal } = useContext(CartContext)
  const [successMsg, setSuccessMsg] = useState(false)
  const [count, setCount] = useState(5)

  // counter
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1)
        }
      }, 1000)
      // clear timer
      return () => clearTimeout(timer)
    }
  })

  // close modal after 5 sec
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(false)
        // clear cart
        setCart([])
        // close modal
        setModal(false)
      }, 5000)

      // clear timer
      return () => clearTimeout(timer)
    }
  }, [successMsg])

  return (
    <div>
      {successMsg ? (
        <div className="flex flex-col justify-center items-center h-[100vh] sm:h-[600px]">
          <h2 className="text-2xl font-semibold text-center">
            Thank you! The order has been placed!
          </h2>
          <Image
            src={"/success-1.gif"}
            width={150}
            height={150}
            alt=""
            priority
          />
          <div>
            This window will close in <span>{count}</span> seconds
          </div>
        </div>
      ) : (
        <div className="sm:gap-x-8 h-full sm:px-12 sm:py-8">
          
          <h2 className="mb-6 text-[20px] uppercase font-extrabold text-center sm:text-left pt-6 sm:pt-0">
            Shipping & Checkout
          </h2>
          <div className="h-[86vh] sm:h-[47.5vh] flex flex-col sm:flex-row sm:gap-x-4">
            
            <div className="flex-1 h-full overflow-y-auto sm:overflow-visible py-4 px-8 sm:py-0 sm:px-0">
              
              <div className="flex flex-col gap-4 h-full">
                
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 sm:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Last Name"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 sm:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Email Address"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 sm:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Street Name"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Street No"
                  />
                </div>
                
                <div className="flex justify-between gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Block"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Floor"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Apt. No."
                  />
                </div>

                
                <div className="flex-1 h-full">
                  <textarea
                    className="textarea w-full h-full"
                    placeholder="Mentions (optional)"
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div className=" flex-1 h-full sm:max-w-[40%] flex flex-col justify-between pt-3 px-8 sm:p-0">
              <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
                <h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4">
                  Your Order
                </h3>
                
                <div className="overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white-500 font-semibold flex flex-col gap-y-4 h-[240px] py-2">
                  {cart.map((pizza, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between text-[15px]"
                      >
                        <div className="flex gap-x-2">
                          <div className="capitalize">{pizza.name}</div>
                          <div>{pizza.amount > 1 && `x ${pizza.amount}`}</div>
                        </div>
                        <div>
                          $ {parseFloat(pizza.price * pizza.amount).toFixed(2)}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              
              <button
                onClick={() => setSuccessMsg(true)}
                className="btn btn-lg gradient w-full"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckoutDetails*/


/************************************************ */
/*
import { useState, useEffect, useContext } from "react"
// next image
import Image from "next/image"
// context
import { CartContext } from "../context/CartContext"
import jsPDF from 'jspdf';

const CheckoutDetails = ({ setModal }) => {
  const { cart, setCart, cartTotal } = useContext(CartContext);
  const [successMsg, setSuccessMsg] = useState(false);
  const [count, setCount] = useState(5);

  const generatePDF = (cart) => {
    const doc = new jsPDF();
    
    doc.text('Order Details', 20, 20);
    doc.text('------------------------------', 20, 30);
    
    let yPosition = 40;
    cart.forEach((pizza, index) => {
      doc.text(`${pizza.name} / ${pizza.additionalTopping} x${pizza.amount} - $${(pizza.price * pizza.amount).toFixed(2)}`, 20, yPosition);
      yPosition += 10;
    });

    doc.save('order-details.pdf');
  };

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count, successMsg]);

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(false);
        setCart([]);
        setModal(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMsg, setCart, setModal]);

  return (
    <div>
      {successMsg ? (
        <div className="flex flex-col justify-center items-center h-[100vh] sm:h-[600px]">
          <h2 className="text-2xl font-semibold text-center">
            Thank you! The order has been placed!
          </h2>
          <Image
            src={"/success-1.gif"}
            width={150}
            height={150}
            alt=""
            priority
          />
          <div>
            This window will close in <span>{count}</span> seconds
          </div>
        </div>
      ) : (
        <div className="sm:gap-x-8 h-full sm:px-12 sm:py-8">
          <h2 className="mb-6 text-[20px] uppercase font-extrabold text-center sm:text-left pt-6 sm:pt-0">
            Shipping & Checkout
          </h2>
          <div className="h-[86vh] sm:h-[47.5vh] flex flex-col sm:flex-row sm:gap-x-4">
            <div className="flex-1 h-full overflow-y-auto sm:overflow-visible py-4 px-8 sm:py-0 sm:px-0">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 sm:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 sm:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 sm:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Street Name"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Street No"
                  />
                </div>
                <div className="flex justify-between gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Block"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Floor"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Apt. No."
                  />
                </div>
                <div className="flex-1 h-full">
                  <textarea
                    className="textarea w-full h-full"
                    placeholder="Mentions (optional)"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className=" flex-1 h-full sm:max-w-[40%] flex flex-col justify-between pt-3 px-8 sm:p-0">
              <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
                <h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4">
                  Your Order
                </h3>
                <div className="overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white-500 font-semibold flex flex-col gap-y-4 h-[240px] py-2">
                  {cart.map((pizza, index) => (
                    <div key={index} className="flex justify-between text-[15px]">
                      <div className="flex gap-x-2">
                        <div className="capitalize">{pizza.name}</div>
                        <div>{pizza.amount > 1 && `x ${pizza.amount}`}</div>
                      </div>
                      <div>
                        $ {parseFloat(pizza.price * pizza.amount).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSuccessMsg(true)}
                className="btn btn-lg gradient w-full"
              >
                Place order
              </button>
              <button
                onClick={() => generatePDF(cart)}
                className="btn btn-lg gradient w-full mt-2"
              >
                Download Order as PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutDetails;
*/
import { useState, useEffect, useContext } from "react"
import { useSession } from 'next-auth/react';
// next image
import Image from "next/image"
// context
import { CartContext } from "../context/CartContext"
import jsPDF from 'jspdf';

const CheckoutDetails = ({ setModal }) => {
  const { data: session } = useSession();
  const { cart, setCart, cartTotal } = useContext(CartContext)
  const [successMsg, setSuccessMsg] = useState(false)
  const [count, setCount] = useState(5)

  const generatePDF = (cart) => {
    const doc = new jsPDF();
    
    doc.text('Order Details', 20, 20);
    doc.text('------------------------------', 20, 30);
    
    let yPosition = 40;
    cart.forEach((pizza, index) => {
      doc.text(`${pizza.name} / ${pizza.additionalTopping} x${pizza.amount} - $${(pizza.price * pizza.amount).toFixed(2)}`, 20, yPosition);
      yPosition += 10;
    });

    doc.save('order-details.pdf');
  };
  // counter
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1)
        }
      }, 1000)
      // clear timer
      return () => clearTimeout(timer)
    }
  })

  // close modal after 5 sec
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(false)
        // clear cart
        setCart([])
        // close modal
        setModal(false)
      }, 5000)

      // clear timer
      return () => clearTimeout(timer)
    }
  }, [successMsg])

  const order=async ()=>{
    var total=0
    const order={
      customerName:session.user.name,
      items:cart.map((pizza)=>{
        total+=pizza.price*pizza.amount
        return{
        name:pizza.name,
        image:pizza.image,
        quantity:pizza.amount,
        price:pizza.price*pizza.amount
      }}),
      totalAmount:total
    }
    console.log(order)
    await fetch(
      "http://localhost:3001/api/orders",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(order)
      }
    )
    setSuccessMsg(true)
  }

  return (
    <div>
      {successMsg ? (
        <div className="flex flex-col justify-center items-center h-[100vh] sm:h-[600px]">
          <h2 className="text-2xl font-semibold text-center">
            Thank you! The order has been placed!
          </h2>
          <Image
            src={"/success-1.gif"}
            width={150}
            height={150}
            alt=""
            priority
          />
          <div>
            This window will close in <span>{count}</span> seconds
          </div>
        </div>
      ) : (
        <div className="sm:gap-x-8 h-full sm:px-12 sm:py-8">
          
          <h2 className="mb-6 text-[20px] uppercase font-extrabold text-center sm:text-left pt-6 sm:pt-0">
            Shipping & Checkout
          </h2>
          <div className="h-[86vh] sm:h-[47.5vh] flex flex-col sm:flex-row sm:gap-x-4">
            
            <div className="flex-1 h-full overflow-y-auto sm:overflow-visible py-4 px-8 sm:py-0 sm:px-0">
              
              <div className="flex flex-col gap-4 h-full">
                
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 sm:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Last Name"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 sm:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Email Address"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 sm:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Street Name"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Street No"
                  />
                </div>
                
                <div className="flex justify-between gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Block"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Floor"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Apt. No."
                  />
                </div>

                
                <div className="flex-1 h-full">
                  <textarea
                    className="textarea w-full h-full"
                    placeholder="Mentions (optional)"
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div className=" flex-1 h-full sm:max-w-[40%] flex flex-col justify-between pt-3 px-8 sm:p-0">
              <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
                <h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4">
                  Your Order
                </h3>
                
                <div className="overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white-500 font-semibold flex flex-col gap-y-4 h-[240px] py-2">
                  {cart.map((pizza, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between text-[15px]"
                      >
                        <div className="flex gap-x-2">
                          <div className="capitalize">{pizza.name}</div>
                          <div>{pizza.amount > 1 && `x ${pizza.amount}`}</div>
                        </div>
                        <div>
                          $ {parseFloat(pizza.price * pizza.amount).toFixed(2)}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              
              <button
                onClick={order}
                className="btn btn-lg gradient w-full"
              >
                Place order
              </button>
              <button
                onClick={() => generatePDF(cart)}
                className="btn btn-lg gradient w-full mt-2"
              >
                Download Order as PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckoutDetails

