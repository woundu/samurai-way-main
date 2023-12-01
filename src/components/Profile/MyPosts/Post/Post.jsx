import React from "react";
import classes from "./Post.module.css"




 const Post = (props)=>{
    return (
        <div className={classes.item}>
            
                    <div>{props.message}
                        <span>{props.likes}</span>
                    </div>       
        </div>
        
    )
}
export default Post;