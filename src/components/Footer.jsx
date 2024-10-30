import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook, FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => (
  <div className="bg-gray-300">
    <footer>
      <div className="w-full max-w-screen px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 mb-8 border-b border-gray-500">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Get started Section */}
            <div>
              <h4 className="text-[15px] font-bold uppercase text-center text-blue-900">Get Started</h4>
              <ul className="mt-4 space-y-2 text-center">
                <li><a href="/register" className="text-sm text-blue-900 hover:text-gray-800">Landlord Sign Up</a></li>
                <li><a href="/register" className="text-sm text-blue-900 hover:text-gray-800">Tenant Sign Up</a></li>
        
              </ul>
            </div>

            {/* Features Section */}
            <div>
              <h4 className="text-sm font-bold uppercase text-center text-blue-900">Features</h4>
              <ul className="mt-4 space-y-2 text-center">
                <li><a href="/contact" className="text-sm text-blue-900 hover:text-gray-800">Rental Listings</a></li>
                <li><a href="/" className="text-sm text-blue-900 hover:text-gray-800">Rental Applications</a></li>
                <li><a href="/" className="text-sm text-blue-900 hover:text-gray-800">Tenant Screening</a></li>
                <li><a href="/register" className="text-sm text-blue-900 hover:text-gray-800">Credit, Criminal, Eviction Reports</a></li>
                <li><a href="/about" className="text-sm text-blue-900 hover:text-gray-800">Digital Leases</a></li>
                <li><a href="/contact" className="text-sm text-blue-900 hover:text-gray-800">Online Rent Collection</a></li>
                <li><a href="/" className="text-sm text-blue-900 hover:text-gray-800">FastPay</a></li>
                <li><a href="/" className="text-sm text-blue-900 hover:text-gray-800">Maintenance Tracking</a></li>
                <li><a href="/register" className="text-sm text-blue-900 hover:text-gray-800">Rent Price Analysis</a></li>
                <li><a href="/about" className="text-sm text-blue-900 hover:text-gray-800">Property Accounting</a></li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h4 className="text-sm font-bold uppercase text-center text-blue-900">Resources</h4>
              <ul className="mt-4 space-y-2 text-center">
                <li><a href="/privacy" className="text-sm text-blue-900 hover:text-gray-800">Landlord Resources</a></li>
                <li><a href="/privacy" className="text-sm text-blue-900 hover:text-gray-800">Guides</a></li>
                <li><a href="/about" className="text-sm   text-blue-900 hover:text-gray-800">Articles</a></li>
                <li><a href="/contact" className="text-sm text-blue-900 hover:text-gray-800">Renatls. Community Forum</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="hidden md:block">
              <h4 className="text-sm font-bold uppercase text-center text-blue-900">Company</h4>
              <ul className="mt-4 space-y-2 text-center">
                <li><a href="/contact" className="text-sm text-blue-900 hover:text-gray-800">About Us</a></li>
                <li><a href="/" className="text-sm text-blue-900 hover:text-gray-800">Rentals. News</a></li>
                <li><a href="/" className="text-sm text-blue-900 hover:text-gray-800">House Rules</a></li>
                <li><a href="/register" className="text-sm text-blue-900 hover:text-gray-800">Testimonials</a></li>
                <li><a href="/about" className="text-sm text-blue-900 hover:text-gray-800">Jobs</a></li>
                <li><a href="/about" className="text-sm text-blue-900 hover:text-gray-800">Press</a></li>
              </ul>
            </div>

            {/* Contact Us Section */}
            {/* <div>
              <h4 className="text-sm font-bold uppercase text-center text-gray-700">Contact Us</h4>
              <form className="mt-4 flex flex-col items-center">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-10/12 md:w-9/12 px-5 py-3 text-gray-800 bg-white rounded-md placeholder-gray-500 focus:outline-none"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="w-10/12 md:w-9/12 mt-4 px-5 py-3 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
            </div> */}

            {/* Get support page */}

            <div>
              <h4 className="text-sm font-bold uppercase text-center text-blue-900">Get Support </h4>
              <ul className="mt-4 space-y-2 text-center">
                <li><a href="/privacy" className="text-sm text-blue-900 hover:text-gray-800">Contact Us</a></li>
                <li><a href="/privacy" className="text-sm text-blue-900 hover:text-gray-800">Help Center </a></li>
                <li><a href="/about" className="text-sm   text-blue-900 hover:text-gray-800">Articles</a></li>
                <li><a href="/" className="text-sm text-blue-900 hover:text-gray-800">(312) 292-9347</a></li>
                <li><a href="/" className="text-sm   text-blue-900 hover:text-gray-800">1 S Wacker Dr</a></li>
                <li><a href="/" className="text-sm   text-blue-900 hover:text-gray-800">Fl 26, Ste 2640</a></li>
                <li><a href="" className="text-sm   text-blue-900 hover:text-gray-800">Chicago, IL 60606</a></li>
              </ul>
            </div>


          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="flex justify-center md:justify-start md:gap-[100px] gap-8">
            <a href="/"><FaLinkedin size={25} className="text-blue-900 hover:text-gray-700"/></a>
            <a href="/"><FaInstagram size={25} className="text-blue-900 hover:text-gray-700"/></a>
            <a href="/"><FaFacebook size={25} className="text-blue-900 hover:text-gray-700"/></a>
            <a href="/"><FaTwitter size={25} className="text-blue-900 hover:text-gray-700"/></a>
            <a href="/"><FaGoogle size={25} className="text-blue-900 hover:text-gray-700"/></a>
          </div>
          <div className="text-center md:text-right mt-6 md:mt-0">
            <p className="text-[15px] md:text-[15px] text-blue-900">© Cloud Data Networks Private Limited 2024. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
