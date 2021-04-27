import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'

function Post() {
    return (
        <div className ='post'>
            <div className="header">
                <Avatar src='https://pbs.twimg.com/profile_images/1384988246216695808/W0thyibh_400x400.jpg'></Avatar>
                <h3> Moe Zalzale</h3>
                <p>@zalzale7</p>
            </div>
        <div className='body'>
            <div className='text'>
            <p>eeeeeeeddddddddd</p>
            </div>
            <div className="media">
            <img className='pic' src="https://media2.giphy.com/media/Z9WQLSrsQKH3uBbiXq/giphy.gif"></img>
            </div>
            
            </div>
        </div>
    )
}

export default Post
