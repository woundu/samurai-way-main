const ADD_POST = "ADD-POST";
const UDNEWPOSTTEXT = "UPDATE-NEW-POST-TEXT";
const UDNEWMESSAGETEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "zdarova skuf", likes: 65 },
                { id: 2, message: "zdarova chuvaki", likes: 165 },
                { id: 3, message: "yoyoyoyooy", likes: 265 },
            ],

            newPostText: 'it-camasutra',


        },
        messagePage: {
            messages: [{ id: 1, message: "yo" },
            { id: 2, message: "yoyoyo" }, { id: 3, message: "yoyoyoyoyoyo" }
            ],
            dialogs: [
                { id: 1, user: "DIMYCH" },
                { id: 1, user: "ANDREY" },
                { id: 3, user: "VALELYA" }
            ],
        },
        newMessageText : ""

    },
    _callSubscriber () {

    },
    getState () {
        return this._state;
    },
    renderEntireTree() {

    },

    dispatch (action) {
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likes: 123
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state)
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)

        }
        else if (action.type === "UPDATE-NEW-MESSAGE-TEXT"){
            this._state.messagePage.newMessageText = action.newText;
            this._callSubscriber(this._state)
        }
        else if (action.type ==="SEND-MESSAGE") {
            let body = this._state.messagePage.newMessageText;
           
            this._state.messagePage.messages.push({ id: 4, message:body })
            this._state.messagePage.newMessageText = ""
            this._callSubscriber(this._state)
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }

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

export const sendMessageActionCreator = ()=> {
    
    return {
        type:SEND_MESSAGE,
       
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    
    return {
        type: UDNEWMESSAGETEXT,
        newText: text,
    }
}


export default store;
window.store = store;