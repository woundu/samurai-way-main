import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

 const MyPosts = ()=>{
    return (
        <div className={classes.content}>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
            <div>My Posts
                <textarea ></textarea>
                <button>Add post</button>
                <Post message="Hello" likes={3}/>
                <Post message="Oleg" likes= {12} />
            </div>
        </div>
        
    )
}
export default MyPosts;