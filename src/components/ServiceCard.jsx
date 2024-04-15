import React from "react";

const ServiceCard = () => {
  return (
    <div className="w-[100%] h-[30vh] border flex flex-col gap-2 items-center p-3 justify-center shadow ">
      <div className="flex items-center justify-center w-[7vh] h-[7vh] bg-black rounded-full"></div>
      <div className="text-lg font-bold">UI/UX Design</div>
      <div className="text-center">
        Create Landing page Mobile app ,Dashbord ,Prototyping , Wireframing
      </div>
    </div>
  );
};

export default ServiceCard;
