import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

export function Popup({ onClose }) {
  const [isOrderDone, setIsOrderDone] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    setIsOrderDone(true);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-900 dark:text-white px-12 py-6 rounded-md w-[290px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">{isOrderDone ? "Success" : "Order Now"}</h2>
          <RxCrossCircled onClick={onClose} className="text-2xl cursor-pointer" />
        </div>

        {isOrderDone ? (
          <p className="text-center text-green-600">Your order is done!</p>
        ) : (
          <form onSubmit={handleOrder}>
            <input className="block w-full py-2 border rounded-md outline-none mt-2 dark:text-black" type="text" placeholder="Name" required />
            <input className="block w-full py-2 border rounded-md outline-none mt-2 dark:text-black" type="email" placeholder="Email" required />
            <input className="block w-full py-2 border rounded-md outline-none mt-2 dark:text-black" type="text" placeholder="Address" required />

            <button type="submit" className="bg-green-700 py-2 px-4 rounded-md mt-3 w-full">Order Now</button>
          </form>
        )}
      </div>
    </div>
  );
}
