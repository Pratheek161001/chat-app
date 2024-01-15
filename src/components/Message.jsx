import React from 'react'

const Message = () => {
  return (
    <div className='message'>
      <div className="messageinfo">
        <img src='https://tse4.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gAAAA&pid=Api&P=0&h=180' alt='' />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        {/* <img src='https://tse4.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gAAAA&pid=Api&P=0&h=180' alt=''/> */}
      </div>
    </div>
  )
}

export default Message