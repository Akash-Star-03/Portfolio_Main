import Heros from '../Assets/new.png';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
export default function Hero(){
 const config={
    subtitle:'Junior Frontend web Developer',
    social:{
        linkedin:'https://www.linkedin.com/in/akash-a-429711304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram:'https://www.instagram.com/__shadow__star__003?igsh=MTV4b2RtZGVwbXAzcg==',
        github:'https://github.com/Akash-Star-03sssss'
    }
 }

    return <section className="flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center" id='Hero'>
        <div className='md:w-1/2 flex-col' >
        <h1 className=" text-white text-7xl font-hero-font " >Hii! <br/> Im<span className='text-black'> Akash.A</span>
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
            <a href={config.social.linkedin} className='pr-5 hover:text-white'><FaLinkedin size={40}/></a>
            <a href={config.social.instagram} className='pr-5  hover:text-white'><FaSquareInstagram size={40}/></a>
            <a href={config.social.github} className=' hover:text-white'><FaGithub size={40}/></a>
        </div>
        </div>
        <img className='md:w-1/3' styles='transparent' src={Heros} alt='Web developer'/>
        
        
    </section>
}
