import React from 'react'

import { CiFacebook } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
        <div className="container footer">
            <div className="top">
                <a href="">About Us</a>
                <a href="">Exhibits</a>
                <a href="">Events</a>
                <a href="">Visit</a>
                <a href="">Membership</a>
            </div>
            <div className="down">
                <FaInstagram />
                <RiTwitterXLine />
                <CiFacebook />
            </div>
        </div>
    </section>
  )
}

export default Footer