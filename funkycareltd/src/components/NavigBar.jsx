
'use client'
//import { useState } from 'react';
//import {FaEnvelopeOpenText,FaMobileScreenButton} from 'react-icons/fa6';
import {Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavbarLink, Dropdown} from "flowbite-react";
import { Link } from "react-router-dom";
import logo from '../assets/vite.svg';
//import {IconContext} from "react-icons";
//import {  useEffect } from 'react';
export default function NavigBar() {


  /* const [colorChange, setColorchange] = useState(false); */
    /* const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    }; */
   /* useEffect(() => {
  window.addEventListener("scroll", changeNavbarColor);

  return () => {
    window.removeEventListener("scroll", changeNavbarColor);
  };
}, []); */
  return (
<div className=' bg-inherit fixed w-full z-20 top-0 inset-s-0'>
 {/* <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap grid grid-cols-2 sm:h-8 md:h-16  justify-between items-center  max-w-(--breakpoint-2xl) ">
            <div class=" md:flex bg-navcolour h-full items-center space-x-3 rtl:space-x-reverse  ">

                <IconContext.Provider value={{ color: 'white', size: '20px', padding:'2px 2px' }}>
                   <a href="mailto:admin@waterfieldshealthcare.com" class=" font-normal mx-auto text-white dark:text-white hover:underline">
                    <div class="flex  sm:items-center sm:justify-center text-xs md:text-base my-auto">
                    <FaEnvelopeOpenText class="sm:items-center sm:justify-center mx-auto  "/>Email: admin@waterfieldshealthcare.com
                    </div></a>
                </IconContext.Provider>

                <IconContext.Provider value={{ color: 'white', size: '20px', padding:'3px 2px' }}>
                <a href="tel:5541251234" class=" font-normal mx-auto  text-white dark:text-white hover:underline">
                    <div class="flex  sm:items-center text-xs md:text-base sm:justify-center mr-2 my-auto">
                    <FaMobileScreenButton class="sm:items-center sm:justify-center  mr-2 "/>(+44) 7451 998 627
                    </div></a>
                </IconContext.Provider>
    
            </div>
            <div class="flex items-center h-full space-x-6 rtl:space-x-reverse bg-green-400">

                <h1 className="text-lg font-bold mx-auto  text-yellowtheme1 dark:text-white">Love and Care for all</h1>
                
            </div>
        </div>
    </nav> */}

    {/* <Navbar
      fluid
      className="bg-inherit text-lime-400 py-2"
    >
      <NavbarBrand className="flex items-center gap-3">
        <NavbarLink as={Link} to="/"> <img alt="Flowbite React Logo" className=" logo mr-3 md:h-20 sm:h-24" src={logo} style={{width:'80px',height:'80px'}} /></NavbarLink>
        <span className={
        colorChange
            
            ? "navbar colorChange text-lime-400 self-center whitespace-nowrap  text-2xl font-extrabold"
            : " md:bg-inherit text-lime-800 self-center whitespace-nowrap  text-2xl font-extrabold"
    }>
          Step-by-Step Support 
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 text-lime-800">
        
        <NavbarToggle />
      </div>
      <NavbarCollapse className="md:flex md:items-center md:gap-6">
  <NavbarLink as={Link} to="/"className='px-3 font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
    Home
  </NavbarLink>

  <NavbarLink as={Link} to="/about" className='pr-6 font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
    About
  </NavbarLink>

  <NavbarLink as={Link} to="/activities"className='px-3 font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
    Activities
  </NavbarLink>

  <NavbarLink as={Link} to="/services" className='px-3 font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
    Services
  </NavbarLink>

  <NavbarLink as={Link} to="/careers" className='px-3 font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
    Careers
  </NavbarLink>

  <NavbarLink as={Link} to="/contact" className='px-3 font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
    Contact
  </NavbarLink>
</NavbarCollapse>
    </Navbar> */}
    <Navbar
  fluid
  className="bg-inherit py-2 px-6 max-w-full"
>
  <NavbarBrand className="flex items-center gap-3">
    <NavbarLink as={Link} to="/">
      <img
        alt="Logo"
        src={logo}
        className="h-16 w-16"
      />
    </NavbarLink>

    <span className="text-2xl font-extrabold text-lime-800 whitespace-nowrap">
      Funky Care Limited
    </span>
  </NavbarBrand>

  <NavbarToggle />

  <NavbarCollapse className="md:flex md:items-center md:space-x-8 ml-auto mr-5">
    <NavbarLink
      as={Link}
      to="/"
      className=" text-lg"
    >
      Home
    </NavbarLink>

    <NavbarLink
      as={Link}
      to="/about"
      className=" text-lg"
    >
      About
    </NavbarLink>

    <NavbarLink
      as={Link}
      to="/activities"
      className="text-lg"
    >
      Activities
    </NavbarLink>

    <NavbarLink
       as={Link}
      to="/services"
      className=" text-lg" 
    >
      Services 
          
    </NavbarLink> 

    <NavbarLink
      as={Link}
      to="/careers"
      className=" text-lg"
    >
      Careers
    </NavbarLink>

    <NavbarLink
      as={Link}
      to="/contact"
      className=" text-lg"
    >
      Contact
    </NavbarLink>
  </NavbarCollapse>
</Navbar>
    </div>
  )
}
