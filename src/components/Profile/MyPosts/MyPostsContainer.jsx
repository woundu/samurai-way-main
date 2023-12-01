import React from "react";

import Post from "./Post/Post";
import MyPosts from "./MyPosts";


import { addPostActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";



 const MyPostsContainer = (props)=>{

    let state = props.store.getState()
    
    

    function addPost  ()  
    {       
        props.store.dispatch (addPostActionCreator())
    }

    function onPostChange  (text)  
    {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
   
    return (
        <MyPosts  posts = {state.posts} onPostChange = {onPostChange} addPost = {addPost}/>
        
    )
}
export default MyPostsContainer;