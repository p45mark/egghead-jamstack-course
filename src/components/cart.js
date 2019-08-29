import React, { useContext } from "react";
import StoreContext from "../context/store-context";
const Cart = ({ open, toggleCart }) => {
  const { checkout } = useContext(StoreContext);
  return (
    <div
      style={{
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "all .3s ease",
      }}
      className="shadow bg-white fixed h-full inset-y-0 right-0 w-1/3 min-w-36 p-4 z-20"
    >
      <button
        onClick={() => {
          toggleCart();
        }}
        className="text-xl px-4 py-2 bg-blue-dark absolute top-0 right-0 text-white"
      >
        &times;
      </button>
      <h2 className="px-2 bg-blue-dark text-white text-3xl -mx-4">Your Cart</h2>
      <ul className="my-5">
        {checkout.lineItems.map(item => (
          <li
            key={item.id}
            className="flex items-center px-4 bg-gray-200 -mx-4"
          >
            <img
              className="w-16 h-16"
              src={item.variant.image.src}
              alt={item.title}
            />
            <h4 className="px-2 text-sm">{item.title}</h4>
            <span className="inline-block text-white rounded-full bg-blue-dark px-2">
              {item.quantity}
            </span>
          </li>
        ))}
      </ul>
      <form
        onSubmit={event => {
          event.preventDefault();
          console.log("checkout");
        }}
      >
        <button
          className="focus:outline-none focus:bg-blue sm:text-lg w-full sm:w-auto bg-blue-dark hover:bg-blue rounded sm:rounded-l-none uppercase text-white font-bold tracking-wide py-3 px-6 sm:py-4"
          type="submit"
        >
          Checkout
        </button>
      </form>
    </div>
  );
};

export default Cart;
