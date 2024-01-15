import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>MINU CHAT</span>
      <div className="user">
        <img src='https://tse4.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gAAAA&pid=Api&P=0&h=180' alt=''/>
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar