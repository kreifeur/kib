import React from "react";

const Button = (props) => {
  return (
    <button className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm flex items-center justify-center;">
      {props.name}
    </button>
  );
};

export default Button;
