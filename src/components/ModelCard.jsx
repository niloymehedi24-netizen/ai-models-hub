import React, { useState } from "react";

const ModelCard = ({ model, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscription = () => {
    setIsSubscribed(true);
    setCarts([...carts, model]);
  };

  return (
    <div className="shadow-lg rounded-lg border overflow-hidden border-zinc-300">
      <div className="flex justify-center items-center h-60">
        <img
          className="h-40 w-40 object-contain bg-zinc-200"
          src={model.image}
          alt=""
        />
      </div>
      <div className="p-6 space-y-2">
        <h2 className="text-2xl font-bold">{model.title}</h2>
        <p>{model.description}</p>
        <div className="text-2xl font-bold">${model.price}/month</div>
        <button
          onClick={handleSubscription}
          className="btn w-full bg-red-500 rounded-md mt-5 text-white"
        >
          {isSubscribed ? "Subscribed" : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
