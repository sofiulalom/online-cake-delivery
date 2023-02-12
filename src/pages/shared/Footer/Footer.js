import React from 'react';
import { FaFacebook,  FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
const Footer = () => {

    return (
        <footer className="footer p-10 bg-base-300 mt-10 text-base-content">
        <div>
            <span className="footer-title">Services</span> 
            <a href='/' className="link link-hover">Branding</a> 
            <a  href='/' className="link link-hover">Design</a> 
            <a href='/' className="link link-hover">Marketing</a> 
            <a href='/' className="link link-hover">Advertisement</a>
        </div> 
        <div>
            <span className="footer-title">Company</span> 
            <a href='/' className="link link-hover">About us</a> 
            <a href='/' className="link link-hover">Contact</a> 
            <a href='/'className="link link-hover">Jobs</a> 
            <a href='/' className="link link-hover">Press kit</a>
        </div> 
        <div>
            <span className="footer-title">Social</span> 
            <div className="grid grid-flow-col gap-4">
            <FaTwitterSquare ></FaTwitterSquare>
            <FaYoutubeSquare></FaYoutubeSquare>
            <FaFacebook></FaFacebook>
            </div>
        </div>
      </footer>
    );
};

export default Footer;