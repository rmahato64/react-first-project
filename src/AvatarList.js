import React from 'react'

const AvatarList = (props)=>{
    return <div className = "avaratstyle" >
    <img src="https://joeschmoe.io/api/v1/rakesh" alt="avatar" />
    <h1>{props.name}</h1>
    <p>{props.work}</p>
 </div> 
}

export default AvatarList