import React from 'react'
import './navbarCSS.scss'
import logo from "../assets/bob_logo 1.svg"
import poweredBy from "../assets/powered by plutos ONE.svg"
import profile from "../assets/Component 82.svg"
import coin from "../assets/coins.svg"


export const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='block1'>
            <img src={logo} alt="" />
        </div>
        <div className='block2'>
            <ul>
                <li>Home</li>
                <li>Polls</li>
                <li>Pay Bills</li>
                <li>Vouchers</li>
            </ul>
        </div>
        <div className='block3'>
            <div className="inner1">
                <div className='coin'>
                    <img src={coin} alt="" />
                    <span className='points'>
                        500 Coins
                    </span>
                </div>
            </div>
            <div className="inner2">
                <span className="username">
                    Hi, Rajjat
                </span>
                <span className="userProfile">
                    <img src={profile} alt="" />
                </span>
            </div>
            <div className="inner3">
                <img src={poweredBy} alt="" />
            </div>
        </div>
    </div>
  )
}
