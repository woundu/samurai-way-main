import React from "react";
import classes from "./Profile.module.css"

export const Profile = ()=>{
    return (
        <div className={classes.content}>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
            <div>My Posts
                <div>Post1</div>
                <div>Post2</div>
            </div>
        </div>
        
    )
}