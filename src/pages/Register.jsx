import React, { useState } from 'react'
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth,storage,db} from '../firebase'
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
 const [err,setErr]=useState(false)
 const [loading, setLoading] = useState(false);
 const navigate=useNavigate()

  const submithandler= async(e)=>{
    setLoading(true);
    e.preventDefault()
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const file=e.target[3].files[0];
    try{
      const res =await createUserWithEmailAndPassword(auth, email, password)
      const date = new Date().getTime();
const storageRef = ref(storage, `${displayName + date}`);

await uploadBytesResumable(storageRef, file).then(() => {
  getDownloadURL(storageRef).then(async (downloadURL) => {
    try {
      //Update profile
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
      });
      //create user on firestore
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });
      //create empty user chats on firestore
      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate('/')
    } catch (err) {
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  });
});
} catch (err) {
setErr(true);
setLoading(false);
}
};
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>MINU CHAT</span>
        <span className='title'>Register</span>
        <form onSubmit={submithandler}>
          <input type='text' placeholder='display name'/>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='password'/>
          <input type='file' id='file' style={{display:'none'}}/>
          <label htmlFor="file">
            <img src={Add} alt=''/>
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {err && <span>something went wrong</span>}
        </form>
        <p>you do have account ? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  )
}

export default Register