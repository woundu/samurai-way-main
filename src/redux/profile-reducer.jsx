const ADD_POST = "ADD-POST";
const UDNEWPOSTTEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action)=> {

    if (action.type === 'ADD-POST'){
        let newPost = {
            id: 4,
            message: state.newPostText,
            likes: 123
        }
        state.posts.push(newPost)
        
    }
    else if (action.type === "UPDATE-NEW-POST-TEXT") {
        state.newPostText = action.newText;
    }
   

    return state;
}

export const addPostActionCreator = ()=> {
    
    return {
        type:ADD_POST,
       
    }
}

export const updateNewPostTextActionCreator = (text) => {
    
    return {
        type: UDNEWPOSTTEXT,
        newText: text,
    }
}

export default profileReducer;