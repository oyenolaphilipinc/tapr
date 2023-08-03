// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import support from '../../assets/support.svg'

const Navbar = () => {
  return (
    <div className="mt-6 flex justify-between mb-16">
        <div className="ml-6 md:ml-12 lg:ml-16 xl:ml-20">
          <a href="/">
            <img src={logo} width={100} alt={"Tap ready logo"}/>
          </a>
        </div>
        <div className="mr-6 md:mr-12 lg:mr-16 xl:mr-20">
          <a href="/support">
            <img src={support} width={150} alt={"Support logo"}/>
          </a>
        </div>
    </div>
  )
}

export default Navbar