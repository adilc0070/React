import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  let navi=useNavigate()
  let neavigate=(route)=>{
    navi('/'+route)
  }
  return (
    <div>    
      <h3 onClick={()=>{neavigate("pto")}}>profile page</h3>
      <h1 onClick={()=>{neavigate("pro")}}>profile page</h1>
      <h3 onClick={()=>{neavigate("about")}}>profile page</h3>
      <h3>profile page</h3>
      <h3>profile page</h3>
      <h3>profile page</h3>
      <h3>profile page</h3>
      <h3>profile page</h3>
      <h3>profile page</h3>
      <h3>profile page</h3>
      <h3>profile page</h3>
    </div>
  )
}

export default Profile
