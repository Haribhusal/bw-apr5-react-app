import React from "react";

const Card = ({ title }) => {
  return (
    <div className="bg-blue-400 p-20">
      <h3 className=" text-3xl font-bold underline">{title}</h3>
    </div>
  );
};

export default Card;
