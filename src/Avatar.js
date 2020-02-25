import React from 'react';
import AvatarList from './AvatarList'
import './Avatar.css'

const Avatar = (props)=>{
    return <div>
        <h1>Welcome to Avatar world</h1>
        <AvatarList id ="1" name="Rakesh" work="Junior Front-end" />
        <AvatarList id ="2" name="Mahato" work="Junior Back-end" />
        <AvatarList id ="3" name="Saroj" work="Java Developer" />
        <AvatarList id ="4" name="Bibek" work="RestFul" />
         <button>Suscribe</button>
         </div>
}

export default Avatar
 