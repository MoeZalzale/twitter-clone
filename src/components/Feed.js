import { Avatar,Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './Feed.css'
import Post from './Post'
import db from './firebase'
function Feed() {
    const [posts,setPosts]=useState([])

    useEffect(() =>
    db.collection('posts').onSnapshot(snapshot => (setPosts(snapshot.docs.map(doc => doc.data()))) )
    
    ,[])

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
                {posts.map(post =>(
                    <Post 
                    name = {post.text}
                    address = {post.address}
                    avatar={post.avatar}
                    text={post.tweet} />
                    ))}
            </div>
            
            </form>

        </div>
    )
}

export default Feed
