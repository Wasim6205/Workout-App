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
]

const Navbar = () => {
  return (
    <nav className='p-4'>
        <ul className='flex justify-center items-center gap-8'>
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