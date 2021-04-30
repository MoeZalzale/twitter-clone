import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'

function Post({name,address,avatar,text,img}) {
    return (
        <div className ='post'>
            <div className="header">
                <Avatar src={avatar}></Avatar>
                <h3> {name}</h3>
                <p>{address}</p>
            </div>
        <div className='body'>
            <div className='text'>
            <p>{text}</p>
            </div>
            <div className="media" alt="">
            
            </div>
            
            </div>
        </div>
    )
}

export default Post
