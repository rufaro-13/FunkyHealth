
'use client'
//import { useState } from 'react';
//import {FaEnvelopeOpenText,FaMobileScreenButton} from 'react-icons/fa6';
import {Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavbarLink, Dropdown} from "flowbite-react";
import { Link } from "react-router-dom";
import logo from '../images/Funkey Care LTD.png';
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
<div className='bg-secondary-blue!  fixed w-full z-20 top-0 inset-s-0'>

    <Navbar
  fluid
  className="bg-white! py-1 px-2 max-w-full"
>
  <NavbarBrand className="flex items-center border-b-0! gap-3">
    <NavbarLink as={Link} to="/">
      <img
        alt="Logo"
        src={logo}
        className="md:h-20 md:w-20 border-b-0!  h-16 w-16 rounded-lg"
      />
    </NavbarLink>

    <span className="text-xl font-extrabold text-darkblue whitespace-nowrap">
      Funkey Care Limited
    </span>
  </NavbarBrand>

  <NavbarToggle className="text-darkblue! bg-transparent! hover:bg-blue-100!" />

  <NavbarCollapse className="md:flex border-0! text-indigo-950! md:items-center md:space-x-8 ml-auto mr-5">
    <NavbarLink
      as={Link}
      to="/"
      className=" text-base text-darkblue! border-b-0!"
    >
      Home
    </NavbarLink>

    <NavbarLink
      as={Link}
      to="/about"
      className=" text-base text-darkblue! border-b-0!"
    >
      About
    </NavbarLink>

    <NavbarLink
      as={Link}
      to="/activities"
      className="text-base text-darkblue! border-b-0!"
    >
      Activities
    </NavbarLink>

    <NavbarLink
       as={Link}
      to="/services"
      className=" text-base text-darkblue! border-b-0!" 
    >
      Services 
          
    </NavbarLink> 

    <NavbarLink
      as={Link}
      to="/careers"
      className=" text-base text-darkblue! border-b-0!"
    >
      Careers
    </NavbarLink> 

    <NavbarLink
      as={Link}
      to="/contact"
      className=" text-base text-darkblue! border-b-0!"
    >
      Contact
    </NavbarLink>
  </NavbarCollapse>
</Navbar>
    </div>
  )
}
