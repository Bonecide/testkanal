import s from './CardList.module.scss'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../../Module/Card/Card';
export default function CardList() {

    const [data,setData] = useState()
    const [trueInfo,setTrueInfo] = useState()
    const fetchData = () => {
       axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res =>{
      setData(res.data)
    })}
    useEffect(() => {
        fetchData()
    },[])
    useEffect(() => {
        const timly = []
        if(data) {
           for (let i = 0; i < data.length; i++) {
           if (i === 0) {
            timly.push(data[i])
            setTrueInfo(timly)
           }
           
           else if (data[i].userId === data[i - 1].userId) {
                continue
            }
            else {
                timly.push(data[i])
                setTrueInfo(timly)
            }
           
        }}
        
    },[data])
    return(
        <div className={s.container}>
            {trueInfo && trueInfo.map((info,idx) => (

                <Card 
                title={info.title}
                body={info.body}
                userID={info.userId}
                key={`CardN${idx}`}/>
            ))}
        </div>
    )
}