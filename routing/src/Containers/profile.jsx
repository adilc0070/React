import React from 'react'
import { useNavigate } from 'react-router-dom'
import One from '../components/one'

function Profile({prop}) {
  let navi=useNavigate()
  let neavigate=(route)=>{
    navi('/'+route)
  }
  return (
    <div style={{backgroundColor:"blue",color :"white"}}>    
      <h3 onClick={()=>{neavigate("pto")}}>profile page</h3>
      
      <h1 onClick={()=>{neavigate("pro")}}>profile page</h1>
      <h3 onClick={()=>{neavigate("about")}}>profile page</h3>
      <One lt={prop} />
    </div>
  )
}

export default Profile
