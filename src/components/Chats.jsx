import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/Auth.Context'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { ChatContext } from '../context/ChatContext';

const Chats = () => {
  const [chats,setchats]=useState([])
  const {currentUser}=useContext(AuthContext)
  const {dispatch}=useContext(ChatContext)

  useEffect(()=>{
    const getchats=()=>{
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setchats(doc.data());
    });
    return ()=>{
      unsub();
    };
    };
    currentUser.uid && getchats();
  },[currentUser.uid]);

  const handleSelect=(u)=>{
    dispatch({type:'CHANGE_USER',payload:u})
  }
  return (
    <div className='chats'>
       {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div className="userchat" key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
        <img src={chat[1].userInfo.photoURL} alt=''></img>
        <div className="userinfo">
          <span>{chat[1].userInfo.displayName}</span>
          <p>{chat[1].lastMessage?.text}</p>
        </div>
      </div>
      ))}
    </div>
  )
}
export default Chats