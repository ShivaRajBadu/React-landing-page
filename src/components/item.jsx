import React from "react";

const Item = () => {
  return (
    <div className="flex justify-around w-5/6 m-auto py-9 shadow-lg bg-green-900 rounded-3xl">
      <div>
        <iframe
          className="rounded-xl"
          width="600"
          height="350"
          src="https://www.youtube.com/embed/I-QfPUz1es8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className=" flex flex-col justify-center items-center max-w-lg">
        <h3 className="text-4xl py-2 capitalize">
          is juicing healthier than eating whole fruits or vegetables?
        </h3>
        <p className="leading-9 text-lg">
          Find fruit juice bottle stack images in HD and millions of other
          royalty-free stock photos, illustrations and vectors in the
          shutterstack collection
        </p>
        <p className="leading-9 text-lg">
          juice packaging materials wrap using the materails like the plastic
          bottle, the glass bottle and the plastic box.
        </p>
        <button className="border-2 border-black py-3 px-6 rounded-2xl bg-black text-white mt-3 hover:text-gray-500">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Item;
