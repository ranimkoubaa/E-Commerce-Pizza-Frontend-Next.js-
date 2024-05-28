/*"use client"
import { useState, useEffect } from "react";
import OrderItem from "./OrderItem";

const OrderComponents = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // Fetch orders from backend API
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/orders");
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          throw new Error("Failed to fetch orders");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="flex-1 h-full sm:max-w-[40%] flex flex-col justify-between pt-3 px-8 sm:p-0">
      <div className="border rounded-lg flex flex-col mb-4 p-4">
        <h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4">
          Your Orders
        </h3>
        {orders.map((order, index) => (
          <OrderItem key={index} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderComponents;
*/
"use client"
import { useState, useEffect } from "react";
import OrderItem from "./OrderItem";

const OrderComponents = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // Fetch orders from backend API
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/orders");
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          throw new Error("Failed to fetch orders");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full sm:max-w-[40%]">
        <div className="border rounded-lg p-6 bg-gray-100 shadow-lg">
          <h3 className="text-lg font-bold uppercase mb-4 border-b pb-2 text-gray-800">
            Your Orders
          </h3>
          {orders.map((order, index) => (
            <OrderItem key={index} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderComponents;
