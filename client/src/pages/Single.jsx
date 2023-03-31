import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './single.scss'
import axios from 'axios';

function Single() {
const [post, setPost] = useState({});
const location = useLocation();

const postId = location.pathname.split("/")[2]

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8800/api/posts/${postId}`)
        setPost(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData();//can't call directly async functions in useEffect hook thats why making another function and call in here
    
  },[postId])


  return (
    <div className="single">
      <div className="article-container">
        <div className='article-image-container'>
          <img src= {post?.img} alt="" className='article-image'/>
        </div>
        <div className='article-content'>
        <h1>{post?.title}</h1>
        {post?.desc}
        </div>     
      </div>
    </div>
  )
}

export default Single