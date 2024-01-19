import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/Auth.Context';

const Search =  () => {
  const [username,setusername]=useState('')
  const [user,setuser]=useState(null)
  const [err,seterr]=useState(false)
  const {currentUser}=useContext(AuthContext)

  const handleSearch = async ()=>{
    const q= query(collection(db,'users'),where('displayName','==',username));
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      setuser(doc.data())
    });
    }
    catch(err){
      seterr(true)
    }
  }

  const handleKey=(e)=>{
    e.code==='Enter' && handleSearch()
  }

  const handleSelect= async ()=>{
    const combinedId=currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid +currentUser.uid;
    try{
      const res=await getDocs(db,'chats',combinedId);
      if(!res.exists()){
        await setDoc(doc,(db,'chats',combinedId),{messages:[]})
        userChats:{
          
        }
      }
    }
    catch(err){

    }
    

  }
  return (
    <div className='search'>
      <div className="searchform">
        <input type='text' placeholder='Find a user' onKeyDown={handleKey} onChange={e=>setusername(e.target.value)}/>
      </div>
      {err && <span>something wnet wrong</span> }
      {user &&<div className="userchat" onClick={handleSelect}>
        <img src={user.photoURL}></img>
        <div className="userinfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search