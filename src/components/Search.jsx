import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchform">
        <input type='text' placeholder='Find a user'/>
      </div>
      <div className="userchat">
        <img src='https://tse4.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gAAAA&pid=Api&P=0&h=180'></img>
        <div className="userinfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search