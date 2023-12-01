const ADD_POST = "ADD-POST";
const UDNEWPOSTTEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: "zdarova skuf", likes: 65 },
        { id: 2, message: "zdarova chuvaki", likes: 165 },
        { id: 3, message: "yoyoyoyooy", likes: 265 },
    ],

    newPostText: 'it-camasutra',

}

const profileReducer = (state = initialState, action)=> {

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