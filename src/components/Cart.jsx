import { Trash } from "lucide-react";
import React from "react";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayments = () => {
    setCarts([]);
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((cart) => cart.id !== item.id);
    setCarts(filteredArray);
  };

  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl text-center">Your Cart</h2>

      {carts.length === 0 ? (
        <p className="text-center text-2xl p-10">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-5 mt-5">
            {carts.map((item) => (
              <div
                className="flex items-center justify-between border rounded-lg"
                key={item.id}
              >
                <div className="flex items-center gap-5">
                  <div>
                    <img
                      className="h-20 w-20 object-contain pl-5"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold"> {item.title} </h2>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="text-2xl font-bold pr-5">
                    ${item.price}/month
                  </div>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn bg-red-500 text-white"
                  >
                    <Trash></Trash>
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between bg-black text-white text-2xl font-bold p-5 mt-5 rounded-lg">
              <div>Total</div>
              <div>${totalPrice}/month</div>
            </div>
            <button
              onClick={handlePayments}
              className="btn w-full text-2xl bg-red-500 text-white rounded-md"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
