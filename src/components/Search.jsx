import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';

const Search =  () => {
  const [username,setusername]=useState('')
  const [user,setuser]=useState(null)
  const [err,seterr]=useState(false)

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
  return (
    <div className='search'>
      <div className="searchform">
        <input type='text' placeholder='Find a user' onKeyDown={handleKey} onChange={e=>setusername(e.target.value)}/>
      </div>
      {err && <span>something wnet wrong</span> }
      {user &&<div className="userchat">
        <img src={user.photoURL}></img>
        <div className="userinfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search