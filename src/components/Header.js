import { Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const [toggle,setToggle]=useState(false);

    return <header className="flex justify-between px-5 py-3 bg-primary ">
        <a href="#" className="font-bold text-black playwrite-de-grund-ak" >Akash A</a>
        <nav className="hidden md:block">
        <ul className="flex text-white ">
            <li className='hover:text-black'><a href="/">Home</a></li>
            <li className='hover:text-black'><a href="#About">About</a></li>
            <li className='hover:text-black'><a href="#Projects">Project</a></li>
            <li className='hover:text-black'><a href="#Resume">Resume</a></li>
            <li ><a href="#Contact" className='hover:text-black'>Contact</a></li>
        </ul>
        </nav>
        {toggle && <nav className="block md:hidden ">
        <ul onClick={()=>setToggle(!toggle)} className="flex flex-col text-white mobile-nav">
            <li className='hover:text-black'><a href="/">Home</a></li>
            <li className='hover:text-black'><a href="#About">About</a></li>
            <li className='hover:text-black'><a href="#Projects">Project</a></li>
            <li className='hover:text-black'><a href="#Resume">Resume</a></li>
            <li className='hover:text-black'><a href="#Contacts">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=>setToggle(!toggle)}className='block md:hidden'> <Bars3Icon className='text-white h-5'/></button>
        
    </header>
}