import React from 'react'
import { Link } from 'react-router-dom'
import { BsTelephoneFill, BsEnvelopeFill, BsGeoAltFill, BsFacebook, BsTwitterX, BsLinkedin, BsInstagram } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="max-padd-container">
      <div className='max-padd-container bg-black text-white py-10 rounded-3xl'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo */}
          <Link to={"/"} className="bold-24">
            <div className='bold-24 mb-4'>
              {/* //Bulfighter----------------------------- */}
               <span className='text-secondary'>Estates</span>
            </div>
            <p className='text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, maxime!</p>
            <p className='mt-4 text-white/70'>Copyright 2024 Bulfighter Estate. All rights reserved.</p>
          </Link>

          {/* Quick Links */}
          <div>
            <h4 className='h4 mb-4'>Quick Links</h4>
            <ul className='space-y-2 regular-15'>
              <li className='text-gray-10'>
                <a href="/about">About Us</a>
              </li>
              <li className='text-gray-10'>
                <a href="/about">Properties</a>
              </li>
              <li className='text-gray-10'>
                <a href="/about">Services</a>
              </li>
              <li className='text-gray-10'>
                <a href="/about">Contact</a>
              </li>
              <li className='text-gray-10'>
                <a href="/about">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='h4 mb-4'>Contact Us</h4>
            <p className='text-gray-10 mb-2'>
              <BsTelephoneFill className="inline-block mr-2" /> +44 123-456-7890
            </p>
            <p className='text-gray-10 mb-2'>
              <BsEnvelopeFill className="inline-block mr-2" />{" "}
              support@gmail.com
            </p>
            <p className='text-gray-10 mb-2'>
              <BsGeoAltFill className="inline-block mr-2" /> 123 Bulfighter Estates Avenue, M1 2AB, Manchester, United Kingdom, UK
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className='h4 mb-4'>Follow Us</h4>
            <div className='flex space-x-4 text-gray-10'>
              <a href="#" className='hover:text-blue-500'>
                <BsFacebook />
              </a>
              <a href="#" className='hover:text-blue-400'>
                <BsTwitterX />
              </a>
              <a href="#" className='hover:text-red-500'>
                <BsInstagram />
              </a>
              <a href="#" className='hover:text-blue-600'>
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className='mt-10 text-center text-gray-100'>
          <p>
            Powered by <a href="#"> Estates</a>
            {/* //Bulfighter----------------------------- */}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
