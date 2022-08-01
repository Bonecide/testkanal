import s from './Card.module.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
export default function Card({title,body,userID}) {
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
   
    const [photo,setPhoto] = useState()
    const [user,setUser] = useState()
    const [albums,setAlbums] = useState()
    const [random,setRandom] = useState()
    const fetchUser = () => {
       axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then(res =>{
      setUser(res.data)
    })}
    const fetchPhoto = () => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/`)
        .then(res =>{
            setAlbums(res.data)
        })
    }
    useEffect(() => {
        fetchUser()
    },[])
    useEffect(() => {
        fetchPhoto()
       
        
        
    },[])
    useEffect(() => {
        const timly = []
    if(albums) {
        for (let i = 0 ; i < albums.length ; i++) {
            if (albums[i].albumId === userID) {
                timly.push(albums[i])
            }
            
        }
    }
       if (!random) {
        setRandom(getRandom(1,10))
       }
       else {
        setPhoto(timly[random])
       }
       
       
    },[albums])
        
    return (
        <div className={s.Card}>
            <div className={s.mainInfo}>
                <div >
                   <img src={photo ? photo.url : null} alt="" />
                   
                </div>
                <div className={s.about}>
                    <h2>Author : {user ? user.name : null}</h2>
                    <h3>Company : {user ? user.company.name : null}</h3>
                </div>
            </div>
           <div className={s.text}>
            <div>
                    <h4> Title:{title}</h4>
                </div>
                <div>
                    <p>{body}</p>
                </div>
           </div>
        </div>
    )
}