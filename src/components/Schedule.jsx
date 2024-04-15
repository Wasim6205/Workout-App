import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { RiHome4Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { CiCamera } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdAddchart } from "react-icons/md";

const Schedule = () => {
  return (
    <section className='p-4 relative h-[100vh] w-[100vw] overflow-x-hidden'>
        <div className=' bg-pink-400 rounded-full p-4 absolute bottom-32 right-8'>
            <FaPlus color='white' />
        </div>
        <div className='flex gap-16 items-center'>
            <div className='bg-gray-300 p-1'><IoIosArrowBack /></div>
            <h2 className='font-medium text-2xl'>Workout Schedule</h2>
        </div>

        <div className='flex gap-4 justify-center items-center my-4'>
            <IoIosArrowBack />
            <p className='font-medium'>Feb 2024</p>
            <IoIosArrowForward />
        </div>

        <div className='flex flex-wrap justify-center items-center gap-16'>
            <div className='flex flex-col items-center justify-center'>
                <p>Sun</p>
                <h3 className='text-3xl font-semibold'>5</h3>
            </div>
            <div className='bg-[#7B91FF] rounded-md py-2 px-4 flex flex-col items-center justify-center'>
                <p>Mon</p>
                <h3 className='text-3xl font-semibold'>6</h3>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p>Tue</p>
                <h3 className='text-3xl font-semibold'>7</h3>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p>Wed</p>
                <h3 className='text-3xl font-semibold'>8</h3>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p>Thu</p>
                <h3 className='text-3xl font-semibold'>9</h3>
            </div>
        </div>

        <div className='mt-8 flex flex-col gap-4 max-h-[330px] overflow-scroll'>
            <div className='flex flex-col gap-2'><p className='font-medium'>06:00 AM</p> <hr className='border-gray-400' /></div>
            <div className='flex flex-col gap-2'><p className='font-medium'>07:00 AM</p> <hr className='border-gray-400' /></div>
            <div className='flex flex-col gap-2'><p className='font-medium'>08:00 AM</p> <hr className='border-gray-400' /></div>
            <div className='flex flex-col gap-2'><p className='font-medium'>09:00 AM</p> <hr className='border-gray-400' /></div>
            <div className='flex flex-col gap-2'><p className='font-medium'>10:00 AM</p> <hr className='border-gray-400' /></div>
            <div className='flex flex-col gap-2'><p className='font-medium'>11:00 AM</p> <hr className='border-gray-400' /></div>
            <div className='flex flex-col gap-2'><p className='font-medium'>12:00 AM</p> <hr className='border-gray-400' /></div>
            <div className='flex flex-col gap-2'><p className='font-medium'>01:00 AM</p> <hr className='border-gray-400' /></div>
            <div className='flex flex-col gap-2'><p className='font-medium'>02:00 AM</p> <hr className='border-gray-400' /></div>
            <div className='flex flex-col gap-2'><p className='font-medium'>03:00 AM</p> <hr className='border-gray-400' /></div>
            <div className='flex flex-col gap-2'><p className='font-medium'>04:00 AM</p> <hr className='border-gray-400' /></div>
            <div className='flex flex-col gap-2'><p className='font-medium'>05:00 AM</p> <hr className='border-gray-400' /></div>
        </div>

        <div className='absolute z-10 bg-white bottom-12 p-4 flex justify-center items-center'>
            <div className=' flex gap-12 justify-center items-center'>
                <div><RiHome4Line fontSize={30} /></div>
                <div><MdAddchart fontSize={30} color='#7B91FF' /></div>
                <div className='bg-[#7B91FF] rounded-full p-4 mb-8'><RiSearch2Line color='white' fontSize={30} /></div>
                <div><CiCamera fontSize={30} /></div>
                <div><IoPersonOutline fontSize={30} /></div>
            </div>
        </div>
    </section>
  )
}

export default Schedule