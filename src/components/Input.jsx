import React,{useContext,useState} from 'react'
import img from '../img/img.png'
import Attach from '../img/attach.png'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/Auth.Context'

const Input = () => {
  const [text,settext]=useState('')
  const [image,setimg]=useState(null)

  const {currentUser}=useContext(AuthContext)
  const {data}=useContext(ChatContext);
  const handleSend=()=>{
    if(img){

    }
    else{
      
    }

  }

  return (
    <div className='input'>
      <input type='text' placeholder='type something...' onChange={e=>settext(e.target.value)}/>
      <div className='send'>
        <img src={Attach} alt=''/>
        <input type='file' style={{display:'none'}} id='file' onChange={e=>setimg(e.target.files[0])}/>
        <label htmlFor="file"><img src={img} alt=''/></label>
        <button onClick={handleSend}>Send</button>
        </div> 

    </div>
  )
}

export default Input