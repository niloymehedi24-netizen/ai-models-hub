import React, { use } from "react";

const Models = ({ modelPromise }) => {
  const models = use(modelPromise);
  console.log(models);

  return (
    <div className="py-20 max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Choose Your Ai Model</h2>
        <p>One subscription gives you access to all frontier AI models.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {models.map((model) => (
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
              <button className="btn w-full bg-red-500 rounded-md mt-5">
                Subscribe Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
