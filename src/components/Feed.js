import { Avatar,Button } from '@material-ui/core'
import React from 'react'
import './Feed.css'
import Post from './Post'

function Feed() {
    return (
        <div className='feed'>
            <div className='header'>
                <h2>Home</h2>
            </div>

            <form>
            <div className="tweetBox">

                <div className="input">
                <Avatar className="avatar" src="https://pbs.twimg.com/profile_images/1384988246216695808/W0thyibh_400x400.jpg"></Avatar>
                <input type ="text" placeholder="whats happening?"></input>
                </div>
                <Button variant='outlined' className="button"> Tweet</Button>
            </div>

            <div className="posts">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            
            </form>

        </div>
    )
}

export default Feed
