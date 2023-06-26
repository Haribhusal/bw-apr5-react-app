import React from "react";

const ImageBanner = () => {
  return (
    <section className="flex flex-col md:flex-row text-center md:text-left items-center p-10">
      <div className="image flex-1 flex justify-center items-center">
        <img src="/banner.svg" className="" alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-5xl font-bold text-green-700">
          Start Developing your layout with Tailwindcss
        </h3>
        <p className="my-4 text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          exercitationem consequuntur praesentium excepturi incidunt quos iusto
          sunt illo debitis veniam maiores, possimus facilis ex ratione odio
          quas fugiat commodi provident?
        </p>
        <button className="bg-regal-blue text-white px-5 py-3 rounded">
          Go To Documentation
        </button>
      </div>
    </section>
  );
};

export default ImageBanner;
