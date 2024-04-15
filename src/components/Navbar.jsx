import React from 'react'
import { Link } from 'react-router-dom'
// import { RxHamburgerMenu } from "react-icons/rx";

const menu = [
    {
        name:'Home',
        link:'/'
    },
    {
        name:'Goals',
        link:'goals'
    },
    {
        name:'Schedule',
        link:'schedule'
    },
    {
        name:'Sign up',
        link:'/signup'
    },
    {
        name:'Log in',
        link:'/login'
    },
    {
        name:'Workout',
        link:'/workout'
    },
]

const Navbar = () => {
  return (
    <nav className='p-2'>
        <ul className='flex flex-wrap justify-center items-center gap-5'>
            {
                menu.map((item,index) => (
                    <Link to={item.link} key={index}>{item.name}</Link>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar