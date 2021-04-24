import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'

function Post() {
    return (
        <div className ='post'>
            <div className="info">
                <Avatar src='https://pbs.twimg.com/profile_images/1384988246216695808/W0thyibh_400x400.jpg'></Avatar>
                <h3> Moe Zalzale</h3>
                <p>@zalzale7</p>
            </div>

            <span className='caption'>My first post lol</span>
            
        </div>
    )
}

export default Post
