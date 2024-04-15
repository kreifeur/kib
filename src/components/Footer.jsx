import React from "react";
import { LiaMountainSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="flex justify-center p-5  bg-gradient-to-r from-black via-gray-800 to-black text-white">
      <div className="flex  flex-col-reverse sm:w-[80%] w-full">
        <div className="flex-[1] flex flex-col justify-between">
          <div>
            <LiaMountainSolid className="text-6xl" />
            <div>CREATE HONESTLY</div>
          </div>
          <div>2023 ALL RIGHTS RESERVED</div>
        </div>

        <div className="flex-[3] flex flex-col gap-8">
          <div>
            <div className="font-bold">WE BELIEVE</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              atque.
            </div>
          </div>

          <div className="grid sm:grid-cols-4 grid-cols-2 gap-8">
            <ul>
              <li className="font-bold mb-2">ABOUT</li>
              <li>Start Here</li>
              <li>Our Blog</li>
              <li>Podcast</li>
              <li>Newsletter</li>
            </ul>

            <ul>
              <li className="font-bold mb-2">SERVICES</li>
              <li>Start Here</li>
              <li>Our Blog</li>
              <li>Podcast</li>
              <li>Newsletter</li>
            </ul>
            <ul>
              <li className="font-bold mb-2">RESOURCES</li>
              <li>Start Here</li>
              <li>Our Blog</li>
              <li>Podcast</li>
              <li>Newsletter</li>
            </ul>
            <ul>
              <li className="font-bold mb-2">CONNECT</li>
              <li>Start Here</li>
              <li>Our Blog</li>
              <li>Podcast</li>
              <li>Newsletter</li>
            </ul>

            <ul>
              <li className="font-bold mb-2">TERMS OF SERVICE</li>
            </ul>

            <ul>
              <li className="font-bold mb-2">PRIVACY POLICY</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
