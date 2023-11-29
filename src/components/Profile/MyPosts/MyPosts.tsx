import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

 const MyPosts = ()=>{
    return (
        <div className={classes.content}>
            
            <ProfileInfo/>
            <div>My Posts
                <textarea ></textarea><br/>
                <button className={classes.btn}>Add post</button>
                <Post message="Hello" likes={3}/>
                <Post message="Oleg" likes= {12} />
            </div>
        </div>
        
    )
}
export default MyPosts;