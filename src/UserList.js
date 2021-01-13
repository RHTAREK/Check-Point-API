import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link, link} from 'react-router-dom'

const UserList = ({listOfUSer,setListOfUSer}) => {
    
    useEffect(() => {
        function fetchData(){        
       axios.get("https://jsonplaceholder.typicode.com/users")
       .then(res=>setListOfUSer(res.data))
       .catch((err)=>console.log(err))
    }
    fetchData()
}, []);
console.log(listOfUSer)
    return (
        <div className=''><ul>
            {listOfUSer.map((el,i)=><Link to ={`/user/${el.id}`} ><li key={i}>{el.name}</li></Link>)}
            </ul>
        </div>
    )
}

export default UserList
