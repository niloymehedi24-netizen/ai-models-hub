import React from "react";

const Cart = ({ carts }) => {
  console.log(carts);
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl text-center">Your Cart</h2>
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
            <div className="text-2xl font-bold pr-5">${item.price}/month</div>
          </div>
        ))}

        <div className="flex justify-between bg-black text-white text-2xl font-bold p-5 mt-5 rounded-lg">
          <div>Total</div>
          <div>0</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
