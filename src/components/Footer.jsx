import React from 'react';
import instagram from './Assets/instagram.png'
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <img src={instagram} alt="logo" className='logo' />
            <a href="mailto:cooldrinks@gmail.com" className='mail-footer'>cooldrinks@gmail.com</a>
            <p className='text-footer'>06.71.71.71.71</p>
        </div>
    );
};

export default Footer;