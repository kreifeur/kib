import React from "react";

const ProductCard = () => {
  return (
    <div className="w-full  flex flex-col gap-1 p-4  border">
      <img
        className="border w-full"
        src="/assets/project2.png"
        alt=""
        srcset=""
      />
      <div className="text-sm font-bold">Clothes E-commerce website</div>
      <p className="text-gray-500 text-xs">
        A modern ecommerce website for clothes with admin panel to add products
      </p>
      <div className="text-xs flex items-center gap-4 justify-end py-2">
        <button className="px-4 py-2 bg-black text-white rounded-full ">
          Live Demo
        </button>
        <button className="px-4 py-2 border rounded-full ">
          Github reposotory
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
