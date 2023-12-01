import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import ProfileInfo from "../ProfileInfo/ProfileInfo";






 const MyPosts = (props)=>{
    let postElements = props.posts?.map(p=><Post id = {p.id} message={p.message} likes = {p.likes} />)
    let newPostElement = React.createRef ()

    

    let addPost = () => {
        
         let text =  newPostElement.current?.value 
        // props.addPost(text)
        // props.updateNewPostText('')

        props.dispatch ({type: "ADD-POST"})
    }

    let onPostChange = () => {
         let text =  newPostElement.current?.value 
        // props.updateNewPostText(text)
        props.dispatch({type: "UPDATE-NEW-POST-TEXT" , newText : text})
    }
   
    return (
        <div className={classes.content}>
            
            <ProfileInfo/>
            <div>My Posts
                <textarea ref = {newPostElement} onChange={onPostChange} value = {props.newPostText}/><br/>
                <button className={classes.btn} onClick={addPost} >Add post</button>
                <div className={classes.posts}>{postElements}</div>
            </div>
        </div>
        
    )
}
export default MyPosts;