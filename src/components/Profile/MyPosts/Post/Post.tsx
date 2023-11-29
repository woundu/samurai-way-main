import React from "react";
import classes from "./Post.module.css"

type PostType = {
    message: string;
    likes: number;
}

 const Post = (props:PostType)=>{
    return (
        <div className={classes.item}>
            
                <div>{props.message}</div>
                <div>
                <span>{props.likes} Likes </span>
                </div>
        </div>
        
    )
}
export default Post;