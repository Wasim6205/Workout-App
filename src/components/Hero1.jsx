import React from 'react'
import HeroImg2 from "../assets/img2.png";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Hero1 = () => {
    const navigate = useNavigate()
    const handleSlide = () => {
        navigate('/')
    }
  return (
    <div className="flex h-[100vh] justify-center flex-col gap-10 p-4 py-8">
      <div className="text-right">
        <p className="underline cursor-pointer text-[#7B91FF]">Skip</p>
      </div>
      <div className="flex justify-center items-center">
        <img src={HeroImg2} width={300} />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Get Burn</h2>
        <p className="">
          Don't worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals
        </p>
      </div>
      <div className="flex justify-end">
        <div onClick={handleSlide} className="cursor-pointer bg-[#7B91FF] rounded-full mb-4 p-3 mr-4">
          <IoIosArrowBack color="white" fontSize={20} />
        </div>
      </div>
    </div>
  )
}

export default Hero1