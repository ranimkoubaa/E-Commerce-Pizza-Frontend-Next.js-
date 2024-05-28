/*import Image from "next/image";

const OrderItem = ({ order }) => {
  return (
    <div className="border rounded-lg flex flex-col mb-4 p-4">
      <h2 className="text-base font-extrabold uppercase mb-4 border-b pb-4">Customer Name : {order.customerName}</h2>
      
      <h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4">
        Order Details
      </h3>
      <div className="overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white-500 font-semibold flex flex-col gap-y-4 h-[240px] py-2">
        
        {order.items.map((item, index) => (
          <div key={index} className="flex justify-between text-[15px]">
            <div className="flex gap-x-2 items-center">
              <div className="capitalize">{item.name}</div>
            
              
              <div>{item.quantity > 1 && `x ${item.quantity}`}</div>
            </div>
            <div>
              $ {parseFloat(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <div>Total:</div>
        <div>${order.totalAmount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default OrderItem;
*/
import Image from "next/image";

const OrderItem = ({ order }) => {
  return (
    <div className="border rounded-lg flex flex-col mb-4 p-4">
      <h2 className="text-base font-extrabold uppercase mb-4 border-b pb-4">
        Customer Name : {order.customerName}
      </h2>

      <h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4">
        Order Details
      </h3>
      <div className="overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white-500 font-semibold flex flex-col gap-y-4 h-[240px] py-2">

        {order.items.map((item, index) => (
          <div key={index} className="flex justify-between text-[15px]">
            <div className="flex gap-x-2 items-center">
              <div className="capitalize">{item.name}</div>
              <Image
                src={item.image}
                alt={item.name}
                width={30}
                height={30}
              />
              <div>{item.quantity > 1 && `x ${item.quantity}`}</div>
            </div>
            <div>
              $ {parseFloat(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <div>Total:</div>
        <div>${order.totalAmount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default OrderItem;
