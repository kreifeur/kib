import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="w-full  flex flex-col gap-2 p-4  border shadow bg-white">
      <div className="text-sm font-bold">Clothes Ecommerce website</div>
      <p className="text-gray-500 text-xs">
        A modern ecommerce website for clothes with admin panel to add products
      </p>
      <Image
        src="/assets/project2.png"
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-auto h-auto border "
      />

      <div className="text-xs flex items-center gap-4 justify-end ">
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
