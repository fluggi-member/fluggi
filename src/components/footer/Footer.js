import React from 'react'
import './Footer.css'
import { FaTelegram, FaInstagram, FaFacebook, FaYoutube, FaPhoneAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Footer() {
  return (
    <div className='footer'>
        <div className="contact">
            <div className="icons-itfy">
                <FaInstagram />
                <FaTelegram />
                <FaFacebook />
                <FaYoutube />
            </div>
            <div className="phone">
                <FaPhoneAlt />
                <p>55 500 60 05</p>
            </div>
            <div className="email">
                <HiOutlineMail />
                <p>hello@fluggi.uz</p>
            </div>
        </div>
        <div className="about">
            <p>About Us</p>
            <p>News</p>
        </div>
        <div className="about">
            <p>Contacts</p>
            <p>Documents</p>
        </div>
        <div className="about">
            <p>Career with Fluggi</p>
        </div>
    </div>
  )
}

export default Footer