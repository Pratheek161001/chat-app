import React,{useContext,useState} from 'react'
import Attach from '../img/attach.png'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/Auth.Context'
import {arrayUnion, updateDoc,doc,serverTimestamp, Timestamp} from "firebase/firestore";
import { db,storage } from '../firebase'
import { v4 as uuid } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";


const Input = () => {
  const [text,settext]=useState('')
  const [img,setimg]=useState(null)

  const {currentUser}=useContext(AuthContext)
  const {data}=useContext(ChatContext);

  const handleSend= async ()=>{
    if(img){
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
         console.log('something is wrong')
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );

    }
    else{
      await updateDoc(doc(db,'chats',data.chatId),{
        messages:arrayUnion({
          id:uuid(),
          text,
          senderId:currentUser.uid,
          Date:Timestamp.now(),
        })
      })

    }
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    settext("");
    setimg(null);

  }

  return (
    <div className='input'>
      <input type='text' placeholder='type something...' onChange={e=>settext(e.target.value)} value={text}/>
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