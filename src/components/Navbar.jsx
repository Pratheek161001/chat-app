import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>MINU CHAT</span>
      <div className="user">
        <immg src='' alt=''/>
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar