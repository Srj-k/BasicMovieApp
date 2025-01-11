import React from 'react'
import '../App.css'

function Header() {
  return (
    <div className='Header'>
        <h1 className="main-title">Movie Zone</h1>
        <div className='search-container'>
            <input type="text" placeholder='Search Movies'/>
            <button className='search'>
                <img src="icons8-search-50.png" alt="Search Icon"/>
            </button>
        </div>
    </div>
  )
}

export default Header