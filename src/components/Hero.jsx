import React from "react";
import HeroImg1 from "../assets/img1.png";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Hero = () => {
const navigate = useNavigate()
  const handleSlide = () => {
    navigate('/hero');
  }
  
  return (
    <div className="flex h-[100vh] w-[100vw] justify-center flex-col gap-10 p-4 py-8">
      <div className="text-right mr-8">
        <p className="underline cursor-pointer text-[#7B91FF]">Skip</p>
      </div>
      <div className="flex justify-center items-center">
        <img src={HeroImg1} width={300} />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Track Your Goal</h2>
        <p>
          Don't worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals
        </p>
      </div>
      <div className="flex justify-end">
        <div onClick={handleSlide} className="cursor-pointer bg-[#7B91FF] rounded-full mb-4 p-3 mr-8">
          <IoIosArrowForward color="white" fontSize={20} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
